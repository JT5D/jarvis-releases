# Jarvis - Executive Preview

Jarvis is a native Mac executive and technical chief of staff with text + voice, local context and memory, screen/app awareness with permission, controlled Mac actions, and signed automatic updates.

> **Important:** Native build **0.3.0 (3001) is superseded and should not be installed.** Its signed/notarized app is missing the embedded web workspace required at startup, so it cannot reach the automatic updater. A corrected **0.3.1 (3002)** build is being verified against the final packaged app and DMG before publication. Wait for 0.3.1 or newer.

## Install Jarvis

**Requirements:** macOS 15 or newer and an OpenAI Platform API key with API billing enabled.

**This is a one-time manual install. Future healthy Jarvis releases update automatically.**

If you already have an earlier Jarvis preview, **do not uninstall it first**. Install the corrected 0.3.1-or-newer DMG over the existing app when it is published.

### 1. Download

Open the releases page and use the newest verified release **newer than 0.3.0**:

https://github.com/JT5D/jarvis-releases/releases

Download the asset named like:

`Jarvis-<version>-ExecutivePreview.dmg`

You only need the `.dmg` file for a normal installation. The `.zip`, `.sha256`, manifest, and SBOM files on the release page are verification/update assets and are not required for manual installation.

### 2. Install

1. Double-click the corrected `Jarvis-<version>-ExecutivePreview.dmg`.
2. Drag **Jarvis** into **Applications**.
3. Choose **Replace** if macOS asks because an earlier preview is already installed.
4. Open **Applications -> Jarvis**.
5. If macOS asks whether to open Jarvis, click **Open**.

That is the full installation. You do **not** need Terminal, Homebrew, GitHub, Render, Supabase, Postgres, or other developer setup.

If macOS blocks the first launch, open **System Settings -> Privacy & Security**, click **Open Anyway** for Jarvis, then open Jarvis again.

## First launch

Jarvis guides you through the permissions needed for the capabilities you choose. You can change them later in **Controls / Settings**.

Recommended setup:

1. Add your **OpenAI Platform API key** when Jarvis asks. It is stored in **macOS Keychain**.
2. Allow **Microphone** for voice.
3. Allow **Accessibility** if you want Jarvis to control approved Mac apps.
4. Allow **Screen Recording** if you want full-screen understanding.
5. Leave any capability you do not want disabled.

Create an OpenAI API key: https://platform.openai.com/account/api-keys/create

Add/check API billing: https://platform.openai.com/settings/organization/billing/overview

ChatGPT billing and OpenAI API billing are separate. Never send or screenshot your API key.

## Confirm the install

Open **Jarvis -> Controls -> Version & updates** and confirm that **Installed** and **Latest seen** match the corrected release you installed and that update status is healthy.

## Your first two minutes

Try:

- **"What can you do?"**
- **"Brief me on what I'm working on right now."**
- **"Challenge my current plan. What might I be missing?"**
- **"What should I do next?"**

For a client/demo session, tell Jarvis what role or scenario to use and ask it to explain what it is doing as the workflow unfolds.

## Automatic updates

Jarvis checks the signed native update channel after launch and periodically while running.

Updates are accepted only after Jarvis verifies the signed release manifest, download checksum, app identity, Apple Developer Team identity, and macOS Gatekeeper approval. A newly installed update must also mark itself healthy or Jarvis rolls back to the previous app.

The broken 0.3.0 build cannot self-update because startup fails before its updater begins. James and Tony therefore need one manual install of **0.3.1 or newer**. After that healthy native install, future native releases use the new Jarvis signing key and update automatically.

## Reinstalling or upgrading manually

Normally you should not need to reinstall after the corrected native baseline is installed. If you receive a newer DMG manually:

1. Quit Jarvis.
2. Open the new DMG.
3. Drag Jarvis into **Applications** and choose **Replace** if macOS asks.
4. Open Jarvis again.

Do **not** uninstall first. Local Jarvis data and the Keychain API key are separate from the app bundle.

## Need help?

Send James a screenshot of the exact message you see, with any API key hidden.

---

### Release integrity

Native releases are Developer ID signed, Apple-notarized, Gatekeeper-verified, SHA-256 hashed, and published with a signed native update manifest and SBOM. Corrected releases also run browser and embedded-API acceptance tests against the exact notarized DMG before publication. The current update manifest and detached signature are in `native/manifest.json` and `native/manifest.json.sig` in this repository.
