# Jarvis for Mac

**Testing release: 0.3.25 (3026), macOS 15 or later.**

[Download Jarvis 0.3.25](https://github.com/JT5D/jarvis-releases/releases/download/native-v0.3.25/Jarvis-0.3.25-ExecutivePreview.dmg)
· [Release notes and checksums](https://github.com/JT5D/jarvis-releases/releases/tag/native-v0.3.25)

## Install or update

1. Quit any running Jarvis app, including the older Jarvis demo.
2. Download and open the DMG above.
3. Drag **Jarvis** into **Applications**. If prompted, choose **Replace**.
4. Open **Jarvis from Applications**, then eject the DMG.
5. In **Controls → Version & updates**, confirm **0.3.25 (3026)**.

**Do not uninstall first.** Replacing the application preserves existing Jarvis data, settings and
Keychain credentials. Jarvis's **Uninstall** command removes its data and credentials and is only
for removing Jarvis completely. Do not delete Jarvis's Application Support folders to update.

Legacy demo users need this manual native-app install; do not wait for the demo to migrate itself.
Keep the old demo closed and disable its start-at-login option so both apps do not listen together.
The native app imports supported legacy data; retain existing data until you have checked it.

## First launch

Follow the setup screens. Each tester needs their own configured, funded model account or an
approved key supplied by their administrator. Keys from the release Mac are **not bundled**.
OpenAI is primary; configured Gemini is the fallback. Controls includes Gemini configuration.
A saved key alone does not prove available credits: complete the first-answer check.

Allow Microphone and Speech Recognition for voice. Accessibility enables permitted app reading
and control. Screen & System Audio Recording is needed for meeting capture and screen-image
context. Skipped permissions can be enabled later in System Settings.

## What to test

- Say **“Hey Jarvis”**, ask a short question, and check that the full question and reply appear.
- Open the full workspace and check your saved conversations, preferences and artifacts.
- Voice pauses while Zoom, Teams, FaceTime or Webex is open, or browser/calling-app audio is active.
  Quit dedicated meeting apps after the call to resume voice. Browser music/video also pauses voice.
  Jarvis's own meeting mode blocks conversational wake and replies; text remains available.
- Check **Controls → Version & updates** for the installed version.

This release fixes meeting interference paths and voice startup/fallback defects. Live voice
latency, interruption recovery and muted/listen-only calls in every browser still need acceptance.
It is a testing preview, not an unattended client-readiness claim. Email attachments, multiple Gmail
accounts and complete Gmail OAuth setup remain incomplete. Jarvis never sends email or messages
on your behalf.

## Privacy and updates

Configured OpenAI or Gemini receives voice/questions and context supplied for the task. Local
conversation data and credentials remain on your Mac; credentials are stored in Keychain.
Optional diagnostic reporting sends device/health information, not conversation text. Public GitHub
hosts the installer and signed update feed. Native Jarvis checks for signed updates after launch
and periodically, installs when idle and reopens itself.

## Help or removal

Use Controls/Settings diagnostics when reporting a problem; include the installed version and what
happened. Do not include API keys. To remove Jarvis completely, use **Uninstall Jarvis** in Settings;
this removes Jarvis data and credentials. Uninstall is never a prerequisite for an update.
