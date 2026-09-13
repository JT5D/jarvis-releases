import { copyFile, readFile, rename, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const target = process.argv[2];
if (!target) throw new Error('Usage: node voice-hotfix.mjs <installed app.js>');

const original = await readFile(target, 'utf8');
if (original.includes('conversation.item.input_audio_transcription.completed') && original.includes('remoteAudio.play()')) {
  console.log('Jarvis voice hotfix is already installed.');
  process.exit(0);
}

let source = original;
function replaceOnce(label, before, after) {
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`Could not apply ${label}: expected code was not found.`);
  if (source.indexOf(before, first + before.length) >= 0)
    throw new Error(`Could not apply ${label}: expected code was not unique.`);
  source = source.slice(0, first) + after + source.slice(first + before.length);
}

replaceOnce(
  'voice state',
  `let dataChannel;\nlet voiceSession; // { startedAt, turns, speechStoppedAt } while voice is live`,
  `let dataChannel;\nlet remoteAudio;\nlet voiceSession; // { startedAt, turns, speechStoppedAt } while voice is live\nconst renderedVoiceItems = new Set();`,
);

replaceOnce(
  'transcript renderer',
  `function appendMessage(role, label, text, pending = false) {\n  const article = document.createElement('article');\n  article.className = \`message \${role}-message\${pending ? ' pending' : ''}\`;\n  const avatar = document.createElement('span');\n  avatar.className = \`avatar \${role === 'assistant' ? 'jarvis-avatar' : 'user-avatar'}\`;\n  avatar.textContent =\n    role === 'assistant' ? '' : (status?.profile?.name?.[0] ?? 'Y').toUpperCase();\n  const body = document.createElement('div');\n  const strong = document.createElement('strong');\n  strong.textContent = label;\n  const paragraph = document.createElement('p');\n  paragraph.textContent = text;\n  body.append(strong, paragraph);\n  article.append(avatar, body);\n  elements.conversation.append(article);\n  elements.conversation.scrollTop = elements.conversation.scrollHeight;\n  return article;\n}\n`,
  `function appendMessage(role, label, text, pending = false) {\n  const article = document.createElement('article');\n  article.className = \`message \${role}-message\${pending ? ' pending' : ''}\`;\n  const avatar = document.createElement('span');\n  avatar.className = \`avatar \${role === 'assistant' ? 'jarvis-avatar' : 'user-avatar'}\`;\n  avatar.textContent =\n    role === 'assistant' ? '' : (status?.profile?.name?.[0] ?? 'Y').toUpperCase();\n  const body = document.createElement('div');\n  const strong = document.createElement('strong');\n  strong.textContent = label;\n  const paragraph = document.createElement('p');\n  paragraph.textContent = text;\n  body.append(strong, paragraph);\n  article.append(avatar, body);\n  elements.conversation.append(article);\n  elements.conversation.scrollTop = elements.conversation.scrollHeight;\n  return article;\n}\n\nfunction appendVoiceTranscript(role, id, transcript) {\n  const text = String(transcript || '').trim();\n  if (!text || !id || renderedVoiceItems.has(\`\${role}:\${id}\`)) return;\n  renderedVoiceItems.add(\`\${role}:\${id}\`);\n  appendMessage(role, role === 'assistant' ? 'Jarvis' : 'You', text);\n}\n`,
);

const voiceStart = source.indexOf('async function toggleVoice() {');
const voiceEnd = source.indexOf('\nfunction setVoiceState(mode) {', voiceStart);
if (voiceStart < 0 || voiceEnd < 0) throw new Error('Could not locate the installed voice client.');

const replacement = String.raw`function configureRealtimeSession() {
  if (dataChannel?.readyState !== 'open') return;
  dataChannel.send(
    JSON.stringify({
      type: 'session.update',
      session: {
        audio: {
          input: {
            transcription: { model: 'gpt-4o-mini-transcribe' },
            noise_reduction: { type: 'far_field' },
            turn_detection: {
              type: 'server_vad',
              threshold: 0.5,
              prefix_padding_ms: 300,
              silence_duration_ms: 700,
              create_response: true,
              interrupt_response: true,
            },
          },
        },
      },
    }),
  );
}

async function toggleVoice() {
  if (peerConnection) return stopVoice();
  setVoiceState('connecting');
  try {
    peerConnection = new RTCPeerConnection();
    remoteAudio = new Audio();
    remoteAudio.autoplay = true;
    remoteAudio.playsInline = true;
    peerConnection.ontrack = async (event) => {
      remoteAudio.srcObject = event.streams[0] || new MediaStream([event.track]);
      try {
        await remoteAudio.play();
      } catch {
        showToast('Jarvis audio was blocked by the browser. Click the page once, then start voice again.');
      }
    };
    microphoneStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    peerConnection.addTrack(microphoneStream.getAudioTracks()[0]);
    dataChannel = peerConnection.createDataChannel('oai-events');
    dataChannel.addEventListener('open', () => {
      voiceSession = {
        startedAt: performance.now(),
        turns: 0,
        speechStoppedAt: undefined,
        lastVoiceAt: performance.now(),
      };
      configureRealtimeSession();
      startVoiceGuard();
      usage({ event: 'voice_start' });
      setVoiceState('listening');
    });
    dataChannel.addEventListener('message', handleRealtimeEvent);
    dataChannel.addEventListener('close', () => {
      if (peerConnection) stopVoice();
    });
    dataChannel.addEventListener('error', () => {
      usage({ event: 'error', code: 'realtime_data' });
      showToast('The live voice connection had a problem. Press Start voice to reconnect.');
    });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    const answer = await fetch('/api/realtime', {
      method: 'POST',
      headers: { 'Content-Type': 'application/sdp' },
      body: offer.sdp,
    });
    if (!answer.ok) throw new Error((await answer.json()).error || 'Voice connection failed.');
    await peerConnection.setRemoteDescription({ type: 'answer', sdp: await answer.text() });
  } catch (error) {
    stopVoice();
    if (error.name === 'NotAllowedError') {
      usage({ event: 'mic_denied' });
      showToast(
        'Microphone blocked. Click the lock or camera icon in the address bar, allow the microphone for 127.0.0.1, then press Start voice again.',
      );
    } else {
      usage({ event: 'error', code: 'voice_connect' });
      showToast(error.message);
    }
  }
}

function handleRealtimeEvent(event) {
  try {
    const payload = JSON.parse(event.data);
    if (payload.type === 'input_audio_buffer.speech_started') {
      if (voiceSession) voiceSession.lastVoiceAt = performance.now();
      setVoiceState('listening');
      sendPerception();
    }
    if (payload.type === 'input_audio_buffer.speech_stopped' && voiceSession)
      voiceSession.speechStoppedAt = performance.now();
    if (payload.type === 'conversation.item.input_audio_transcription.completed')
      appendVoiceTranscript('user', payload.item_id, payload.transcript);
    if (payload.type === 'conversation.item.input_audio_transcription.failed') {
      usage({ event: 'error', code: 'voice_transcription' });
      showToast('Jarvis heard the turn, but its transcript could not be displayed. Voice can continue.');
    }
    if (payload.type === 'response.created') setVoiceState('speaking');
    if (payload.type === 'output_audio_buffer.started' && voiceSession) {
      recordVoiceTurn(true);
      remoteAudio?.play().catch(() => {
        showToast('Jarvis audio was blocked by the browser. Click the page once, then start voice again.');
      });
    }
    if (payload.type === 'response.output_audio_transcript.done')
      appendVoiceTranscript('assistant', payload.item_id || payload.response_id, payload.transcript);
    if (payload.type === 'response.done') {
      if (voiceSession?.speechStoppedAt !== undefined) recordVoiceTurn(false);
      setVoiceState('listening');
    }
    if (payload.type === 'error') {
      usage({ event: 'error', code: 'realtime' });
      showToast(payload.error?.message || 'Realtime voice error.');
    }
  } catch {
    // Ignore non-JSON WebRTC events.
  }
}

function recordVoiceTurn(withLatency) {
  if (!voiceSession) return;
  const stoppedAt = voiceSession.speechStoppedAt;
  voiceSession.speechStoppedAt = undefined;
  voiceSession.turns += 1;
  const turn = { event: 'turn', kind: 'voice' };
  if (withLatency && stoppedAt !== undefined) turn.latencyMs = performance.now() - stoppedAt;
  usage(turn);
}

function stopVoice() {
  if (voiceSession) {
    usage({
      event: 'voice_end',
      durationMs: performance.now() - voiceSession.startedAt,
      turns: voiceSession.turns,
    });
    if (voiceSession.turns > 0 && !ratingShown) showRating();
    voiceSession = undefined;
  }
  clearInterval(voiceGuardTimer);
  dataChannel?.close();
  peerConnection?.close();
  microphoneStream?.getTracks().forEach((track) => track.stop());
  if (remoteAudio) {
    remoteAudio.pause();
    remoteAudio.srcObject = null;
  }
  dataChannel = undefined;
  peerConnection = undefined;
  microphoneStream = undefined;
  remoteAudio = undefined;
  setVoiceState('idle');
}
`;

source = source.slice(0, voiceStart) + replacement + source.slice(voiceEnd);

const backup = `${target}.before-voice-hotfix`;
await copyFile(target, backup);
const temporary = `${target}.voice-hotfix.tmp`;
await writeFile(temporary, source, 'utf8');
try {
  execFileSync(process.execPath, ['--check', temporary], { stdio: 'pipe' });
  await rename(temporary, target);
} catch (error) {
  await copyFile(backup, target);
  throw new Error(`Voice hotfix failed validation and was rolled back: ${error.message}`);
}

console.log('Jarvis voice hotfix installed and syntax-checked.');
