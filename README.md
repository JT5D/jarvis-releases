## Executive Preview

Jarvis helps you turn the context you choose into clear **decisions, risks, and next actions** by text or voice.

### Install

If you already have Jarvis, **do not uninstall it first**.

1. **[Download Jarvis](https://raw.githubusercontent.com/JT5D/jarvis-releases/main/Jarvis-Tony-MVP.zip)**
2. Open **Downloads** and unzip it if needed.
3. Open `mvp-demo`.
4. Hold **Control**, click `Install Jarvis.command`, and choose **Open**.
5. The installer opens Terminal briefly. **You do not need to type commands.**
6. If asked `Keep the saved OpenAI API key? [Y/n]`, press **Return**.
7. Jarvis opens automatically. Confirm **OpenAI ready** and **Ready when you are.**

Jarvis opens in your browser, but this preview runs locally on your Mac. To reopen it later, press **Command + Space**, type **Jarvis Demo**, and press **Return**.

If macOS blocks the installer: **System Settings -> Privacy & Security -> Open Anyway**, then try again.

If Jarvis asks for an OpenAI API key, create one at https://platform.openai.com/account/api-keys/create, paste it into Terminal, and press **Return**. The key may remain invisible when pasted; that is normal. Never send or screenshot your API key.

### Your first 90 seconds

1. Enter your name and optional role if asked. Choose **Brief** or **Detailed** answers and a voice, then click **Continue**.
2. Click **Load included demo brief**.
3. Ask: **"Brief me as if I'm walking into the meeting: what matters, what's at risk, and what decision is mine?"**
4. Click **Start voice** or press **Space**, allow microphone access, and say: **"Challenge your recommendation. What might we be missing?"**
5. Follow with: **"What would you do next if you owned this?"**

That's the core Jarvis loop: **bring context -> understand it -> challenge it -> decide what to do next.**

### Bring your own work

Click **Choose local file** and select a small text-based document or data file. Then try:

- **"What are the three things I need to know before this meeting?"**
- **"Give me the CTO view: risks, dependencies, and next decisions."**
- **"Turn this into a five-point action plan with priorities and owners."**

### Trust and context

- Your OpenAI API key is stored in **macOS Keychain**.
- Your selected context is sent to OpenAI when you ask Jarvis a question or start voice.
- **Remember our conversations** can keep relevant prior answers locally on this Mac and reuse them when helpful.
- **See which app I am working in** reads only the frontmost app name and window title - **not screenshots or screen contents**.

### Current preview

This version supports **text chat, live voice, local-file context, optional local memory, and optional app/window-title awareness**.

It does **not** send email, take external actions, read full screen contents, or connect to Gmail or Calendar yet.

Future published Jarvis versions should update automatically while Jarvis is running and online.

### Need help?

**Do not uninstall Jarvis.** Send James the exact error message or a screenshot after confirming your API key is not visible.
