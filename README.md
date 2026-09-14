# Jarvis for Mac

Say **"Hey Jarvis"**, ask about what you are working on, and hear the answer. Anything that would
change something waits for your approval.

## Install

- **Already using the Jarvis demo?** Nothing to do. Your Jarvis moves itself to the Mac app, with
  your key, settings and conversations, when your admin turns that on.
- **New install:** open the [latest release](https://github.com/JT5D/jarvis-releases/releases), download
  the file ending in `.dmg`, open it, drag **Jarvis** into **Applications**, and open Jarvis.
  Requires macOS 15 or later.

## First launch (a few minutes)

Jarvis walks you through it, one screen at a time: the OpenAI key your admin gave you, then each
permission with the reason it is needed, whether to start Jarvis when you log in, what Jarvis sends
your admin, and a quick "Hey Jarvis" test. You can skip a permission and turn it on later.

| Permission         | Why                                                                 |
| ------------------ | ------------------------------------------------------------------- |
| Microphone         | to hear you while you talk to Jarvis                                |
| Speech recognition | to notice "Hey Jarvis" — your Mac does this itself                  |
| Screen recording   | to read the window you ask about; the picture never leaves your Mac |
| Accessibility      | to read selected text and to act in apps you approve                |

If Jarvis needs a permission it does not have, it tells you which one and offers to open the right
place in System Settings.

## Using Jarvis

- Say **"Hey Jarvis"**, then ask — for example "what am I working on?" or "summarize this page".
- Or click the waveform icon in the menu bar, or press **⌘⇧J**, and type.
- A small panel shows one word for what Jarvis is doing: idle, listening, thinking, acting, speaking,
  permission needed, offline or error. **Acting** means Jarvis is waiting for you to approve or deny.
- 👍 / 👎 after an answer tells your admin what works.

Not yet: reading or sending email and calendar. Jarvis says so rather than guessing.

## What leaves your Mac

| Where                  | What                                                                                                                           | When                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| OpenAI                 | your voice and typed questions, and — only when you ask about your screen — the text read from it                              | while you talk to Jarvis |
| Your admin             | device health: Jarvis version, Mac model, macOS, permissions, speed — never what you say, see or type (switch off in Settings) | launch and once a day    |
| This page's repository | a check for updates                                                                                                            | every 6 hours            |

## Updates, help and uninstall

- **Updates** install themselves when Jarvis is idle, never mid-conversation, and Jarvis reopens
  in a few seconds; Settings › Updates shows your version.
- **Something wrong?** Settings › Send diagnostics sends your admin what they need to help (no
  conversations).
- **Uninstall:** Settings › Uninstall Jarvis. Jarvis's folders go to the Trash; your own files are
  never touched.
