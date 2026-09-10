# Jarvis - Executive Preview

Jarvis is a voice-first thinking partner for working through briefs, plans, risks, and decisions on your Mac.

## Install

If you already have Jarvis, **do not uninstall it first**. Install this version over the existing copy.

1. **[Download Jarvis](https://raw.githubusercontent.com/JT5D/jarvis-releases/main/Jarvis-Tony-MVP.zip)**
2. Open **Downloads** and unzip `Jarvis-Tony-MVP.zip` if needed.
3. Open the `mvp-demo` folder.
4. Hold **Control**, click `Install Jarvis.command`, and choose **Open**.
5. Terminal opens automatically. **Do not type commands.**
6. If asked `Keep the saved OpenAI API key? [Y/n]`, press **Return**.
7. Jarvis opens automatically. Confirm **OpenAI ready** and **Ready when you are.**

If macOS blocks the installer: **System Settings -> Privacy & Security -> Open Anyway**, then try again.

If Jarvis asks for an OpenAI API key, create one at https://platform.openai.com/account/api-keys/create, paste it into Terminal, and press **Return**. The key may stay invisible when pasted; that is normal. Never send or screenshot your API key.

## Your first 2 minutes

1. Enter your name and optional role if asked. Choose **Brief** or **Detailed** answers and a voice, then click **Continue**.
2. Click **Load included demo brief**.
3. Ask: **"Give me the executive summary, the biggest risk, and the decision that needs attention first."**
4. Click **Start voice** or press **Space**, allow microphone access, and say: **"Challenge that recommendation. What might we be missing?"**
5. Ask a natural follow-up. Stop voice with **Stop voice** or **Space**.

That is the core Jarvis experience: bring context, ask naturally, refine the answer together.

## Use Jarvis with your own work

Click **Choose local file** and select a text, Markdown, CSV, JSON, XML, YAML, HTML, or log file. Then ask questions such as:

- **"What are the three things I need to know before this meeting?"**
- **"What assumptions here are weakest?"**
- **"Give me the CTO view: risks, dependencies, and next decisions."**
- **"Turn this into a concise action plan with owners and priorities."**

## Memory and context

- **Remember our conversations** can keep relevant prior answers locally on this Mac and reuse them when helpful.
- **See which app I am working in** reads only the frontmost app name and window title - never screenshots or screen contents.
- Your selected context is sent to OpenAI only when needed to answer or when you start voice.
- Your OpenAI API key is stored in macOS Keychain.

## Current preview scope

This version supports **text chat, live voice, local-file context, optional local memory, and optional app/window-title awareness**.

It does **not** send email, take external actions, read full screen contents, or connect to Gmail or Calendar yet.

Future published Jarvis versions should update automatically while Jarvis is running and online.

## If something goes wrong

**Do not uninstall Jarvis.** Send James the exact error message or a screenshot after confirming your API key is not visible.
