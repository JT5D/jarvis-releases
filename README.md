# Jarvis - Tony

You have an older Jarvis installed and need **one manual upgrade**.

**Do not uninstall Jarvis first.**

## Install

1. **[Download Jarvis](https://raw.githubusercontent.com/JT5D/jarvis-releases/main/Jarvis-Tony-MVP.zip)**
2. Open **Downloads**. If needed, double-click `Jarvis-Tony-MVP.zip` to unzip it.
3. Open the `mvp-demo` folder.
4. Hold **Control** and click `Install Jarvis.command`, then choose **Open**.
5. Terminal opens automatically. **Do not type commands.**
6. If asked `Keep the saved OpenAI API key? [Y/n]`, press **Return**.
7. Jarvis should open automatically. Confirm **OpenAI ready** and **Ready when you are.**

If macOS blocks the installer: **Apple menu -> System Settings -> Privacy & Security -> Open Anyway**, then try again.

If Jarvis asks for an OpenAI API key instead of finding your saved one, create one at https://platform.openai.com/account/api-keys/create, paste it into Terminal, and press **Return**. The key may remain invisible when pasted; that is normal. Never send or screenshot your API key.

## First use

1. If Jarvis asks, enter your **name** and optional role.
2. Choose **Brief** or **Detailed** answers and **Marin** or **Cedar** voice, then click **Continue**.
3. Click **Load included demo brief**.
4. Type: **“Summarize the launch plan and identify the biggest risk.”**
5. Click **Start voice** (or press **Space**), allow microphone access, and say: **“What should Tony do first?”**
6. Ask a natural follow-up. Click **Stop voice** or press **Space** when finished.

To use your own material, click **Choose local file** and select a text, Markdown, CSV, JSON, XML, YAML, HTML, or log file. Jarvis uses that file as context for your questions.

Optional: enable **See which app I am working in** from your profile. Jarvis then reads only the frontmost app name and window title — **not screenshots or screen contents**.

If **Remember our conversations** is enabled, relevant prior answers can be kept locally on this Mac and reused when helpful.

## What this version does

- text chat and live voice
- answers grounded in the demo brief or a local file
- optional local conversation memory
- optional awareness of the frontmost app name/window title

It **does not** send email, take external actions, read full screen contents, or connect to Gmail/Calendar yet.

Future published Jarvis updates should install automatically while Jarvis is running and online.

If something goes wrong, **do not uninstall Jarvis**. Send James the error message or a screenshot after making sure your API key is not visible.
