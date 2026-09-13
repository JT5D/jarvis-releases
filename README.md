# Jarvis - Executive Preview

Jarvis is a native Mac executive and technical chief of staff: text + voice, local context and memory, screen/app awareness with permission, controlled Mac actions, and signed automatic updates.

## Install Jarvis

**This is a one-time manual install. Future Jarvis updates install automatically.**

If you already have the earlier Jarvis preview, **do not uninstall it first**.

1. Open the **[Jarvis 0.3.0 native release](https://github.com/JT5D/jarvis-releases/releases/tag/native-v0.3.0)**.
2. Download **`Jarvis-0.3.0-ExecutivePreview.dmg`**.
3. Double-click the downloaded DMG.
4. Drag **Jarvis** into **Applications**.
5. Open **Applications -> Jarvis**.
6. If macOS asks whether to open Jarvis, click **Open**.

That is the full installation. You do **not** need Terminal, Homebrew, GitHub, Render, Supabase, Postgres, or any other developer setup.

If macOS blocks the first launch, open **System Settings -> Privacy & Security**, click **Open Anyway** for Jarvis, then open Jarvis again.

## First launch

Jarvis will guide you through the permissions needed for the capabilities you choose. You can change them later in **Controls / Settings**.

Recommended first-time setup:

1. Add your **OpenAI Platform API key** when Jarvis asks. The key is stored in **macOS Keychain**.
2. Allow **Microphone** for voice.
3. Allow **Accessibility** if you want Jarvis to control approved Mac apps.
4. Allow **Screen Recording** if you want full-screen understanding.
5. Leave any capability you do not want disabled. Permissions can be changed later.

If you need an OpenAI API key: https://platform.openai.com/account/api-keys/create

If the API says billing or credits are unavailable: https://platform.openai.com/settings/organization/billing/overview

ChatGPT billing and OpenAI API billing are separate. Never send or screenshot your API key.

## Your first two minutes

Try these in order:

- **"What can you do?"**
- **"Brief me on what I'm working on right now."**
- **"Challenge my current plan. What might I be missing?"**
- **"What should I do next?"**

For a client/demo session, you can also tell Jarvis what role or scenario to use and ask it to explain what it is doing as the workflow unfolds.

## Automatic updates

Jarvis checks the signed native update channel after launch and periodically while it is running.

Updates are accepted only after Jarvis verifies the signed release manifest, download checksum, app identity, Apple Developer Team identity, and macOS Gatekeeper approval. A newly installed update must also mark itself healthy or Jarvis rolls back to the previous app.

**James and Tony each need this one native 0.3.0 install because the earlier v39 preview used a different update key. After this install, future native releases use the new Jarvis signing key and update automatically.**

You can see the installed version and update status inside **Jarvis -> Controls -> Version & updates**.

## Reinstalling or upgrading manually

Normally you should not need to reinstall. If James sends you a newer DMG manually:

1. Quit Jarvis.
2. Open the new DMG.
3. Drag Jarvis into **Applications** and choose **Replace** if macOS asks.
4. Open Jarvis again.

Do **not** uninstall first. Your local Jarvis data and Keychain API key are separate from the app bundle.

## Need help?

Send James a screenshot of the exact message you see. Make sure your API key is not visible in the screenshot.

---

### Release integrity

Native releases are Developer ID signed, Apple-notarized, Gatekeeper-verified, SHA-256 hashed, and published with a signed native update manifest and SBOM. The current update manifest is published at `native/manifest.json` in this repository.