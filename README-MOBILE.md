# TLEA Training Portal — Mobile App Setup Guide

Texas Law Enforcement Academy Cadet Training & Certification Portal
for iOS and Android.

---

## Table of Contents

1. [Overview](#overview)
2. [PWA — Install from Browser](#pwa--install-from-browser)
3. [Prerequisites](#prerequisites)
4. [Quick Start](#quick-start)
5. [Building for iOS (Xcode)](#building-for-ios-xcode)
6. [Building for Android (Android Studio)](#building-for-android-android-studio)
7. [App Icons & Splash Screens](#app-icons--splash-screens)
8. [Signing & Distribution](#signing--distribution)
9. [Native Feature Reference](#native-feature-reference)
10. [Troubleshooting](#troubleshooting)

---

## Overview

This portal ships as:

| Mode | Description |
|------|-------------|
| **PWA** | Install directly from a browser to the home screen (iOS Safari / Android Chrome) |
| **Capacitor iOS** | Native `.ipa` built with Xcode — App Store or TestFlight |
| **Capacitor Android** | Native `.apk`/`.aab` built with Android Studio — Play Store or sideload |

The same HTML/CSS/JS codebase powers all three modes. Capacitor wraps the web app in a native WebView and provides access to device APIs.

---

## PWA — Install from Browser

No build step needed. Just deploy the files to any HTTPS host and users can install the app.

**iOS Safari:**
1. Open the portal URL in Safari
2. Tap the Share button (box with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **Add**

**Android Chrome:**
1. Open the portal URL in Chrome
2. Tap the three-dot menu → **"Add to Home screen"** (or tap the install banner)
3. Tap **Install**

The app will work offline after the first visit (service worker caches all pages).

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 18+ | https://nodejs.org |
| npm | 9+ | bundled with Node |
| Xcode | 15+ | Mac App Store (iOS only) |
| Android Studio | Hedgehog+ | https://developer.android.com/studio |
| Capacitor CLI | 6.x | `npm install` (included in package.json) |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally (serves on http://localhost:3000)
npm run dev

# 3. Add native platforms (first time only)
npm run cap:add:ios        # macOS only
npm run cap:add:android

# 4. Sync web assets to native projects
npm run cap:sync

# 5. Open in native IDE
npm run cap:open:ios       # opens Xcode
npm run cap:open:android   # opens Android Studio
```

---

## Building for iOS (Xcode)

### Requirements
- macOS with Xcode 15 or later
- Apple Developer account (free for testing, paid for App Store)
- iOS Simulator or physical device

### Steps

```bash
# Add iOS platform (first time)
npm run cap:add:ios

# Sync latest web assets
npm run cap:sync

# Open in Xcode
npm run cap:open:ios
```

In Xcode:
1. Select your target device or simulator
2. Set **Signing & Capabilities** → Team to your Apple Developer account
3. Click **Run** (▶) to build and launch

### TestFlight / App Store
1. In Xcode: **Product → Archive**
2. In the Organizer: **Distribute App**
3. Choose **App Store Connect** or **TestFlight**
4. Follow the prompts

---

## Building for Android (Android Studio)

### Requirements
- Android Studio (any OS)
- Android SDK API 24+ (Android 7.0)
- A physical device or emulator with Google Play Services

### Steps

```bash
# Add Android platform (first time)
npm run cap:add:android

# Sync latest web assets
npm run cap:sync

# Open in Android Studio
npm run cap:open:android
```

In Android Studio:
1. Wait for Gradle sync to complete
2. Select a device/emulator from the toolbar
3. Click **Run** (▶) to build and launch

### Release APK / AAB
1. **Build → Generate Signed Bundle/APK**
2. Choose **Android App Bundle** (for Play Store) or **APK** (for sideloading)
3. Create or choose a keystore
4. Follow the signing wizard

---

## App Icons & Splash Screens

Icons are located in `icons/`. The placeholder PNGs included in this repo are minimal (dark background with a gold badge).

**To replace with production-quality icons:**

1. Create a 1024×1024 master PNG with your final logo
2. Use a tool such as:
   - [capacitor-assets](https://github.com/ionic-team/capacitor-assets): `npx capacitor-assets generate`
   - [Real Favicon Generator](https://realfavicongenerator.net)
   - [AppIcon.co](https://appicon.co)
3. Replace the files in `icons/` with the generated set

### Required sizes

| File | Size | Purpose |
|------|------|---------|
| `icon-72.png` | 72×72 | Android legacy |
| `icon-96.png` | 96×96 | Android / favicon |
| `icon-128.png` | 128×128 | Chrome Web Store |
| `icon-144.png` | 144×144 | Windows tile / Android |
| `icon-152.png` | 152×152 | iPad |
| `icon-192.png` | 192×192 | Android / PWA (maskable) |
| `icon-384.png` | 384×384 | PWA |
| `icon-512.png` | 512×512 | PWA / Play Store (maskable) |
| `splash-iphone.png` | 390×844 | iOS splash (iPhone 14) |
| `splash-ipad.png` | 768×1024 | iOS splash (iPad) |

For **native iOS**, Capacitor generates the full icon set in `ios/App/App/Assets.xcassets/` after `cap sync`.

For **native Android**, icons are generated in `android/app/src/main/res/`.

---

## Signing & Distribution

### iOS
- Requires a paid Apple Developer account ($99/year) for App Store submission
- Free account allows running on personal devices via Xcode
- Archive and upload via Xcode Organizer or `xcrun altool`

### Android
- Play Store requires a one-time $25 registration fee
- Generate a release keystore with `keytool`:
  ```bash
  keytool -genkey -v -keystore tlea-release.keystore \
    -alias tlea -keyalg RSA -keysize 2048 -validity 10000
  ```
- Sign the APK/AAB in Android Studio's **Generate Signed Bundle** wizard
- Store the keystore securely — it cannot be recovered if lost

---

## Native Feature Reference

The following Capacitor plugins are configured in `package.json`:

| Plugin | Purpose |
|--------|---------|
| `@capacitor/splash-screen` | Branded launch screen |
| `@capacitor/status-bar` | Dark status bar styling |
| `@capacitor/keyboard` | iOS keyboard resize handling |
| `@capacitor/haptics` | Haptic feedback on button taps |
| `@capacitor/network` | Online/offline detection |
| `@capacitor/camera` | Photo ID upload (future) |
| `@capacitor/geolocation` | Jurisdiction detection (future) |
| `@capacitor/push-notifications` | Training reminders (future) |
| `@capacitor/local-notifications` | Local alerts |

All plugins are installed via `npm install` and activated after `cap sync`.

---

## Troubleshooting

**"Capacitor not found" error**
```bash
npm install
```

**iOS build fails with signing error**
→ In Xcode: Signing & Capabilities → Enable **Automatically manage signing** and select your team.

**Android Gradle sync fails**
→ Ensure Android SDK is installed: Android Studio → SDK Manager → SDK Platforms → API 33+

**Service worker not updating**
```bash
# Hard-reload in Chrome DevTools: Application → Service Workers → Update
# Or bump CACHE_VERSION in sw.js
```

**Icons not showing after deploy**
→ Ensure `icons/` folder is in the web root and all filenames match `manifest.json` exactly.

**App appears blank on device**
→ Check browser console for JS errors. Ensure the server uses HTTPS (required for service workers and some APIs).

---

## App Info

| Property | Value |
|----------|-------|
| App ID | `com.tlea.trainingportal` |
| Display Name | TLEA Training Portal |
| Min iOS | 14.0 |
| Min Android | 7.0 (API 24) |
| Capacitor | 6.x |

---

*Texas Law Enforcement Academy © 2026. For authorized personnel only.*
