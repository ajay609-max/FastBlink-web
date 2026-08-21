# FastBlink Web

FastBlink ka web version — deep links, QR codes, aur APK download ke saath.

## Features

- **Deep Link Handler** — `fastblink.com/add?user=alice` web pe handle karta hai
- **QR Code Sharing** — Profile QR generate karke share karo
- **APK Download** — App nahi hai? Direct web se download karo
- **Responsive** — Mobile aur desktop dono pe chalega
- **Dark Theme** — FastBlink Android app jaisa look

## Project Structure

```
fastblink-web/
├── public/
│   ├── favicon.svg
│   └── fastblink-v2.4.1.apk    ← APK yahan daalna
├── src/
│   ├── components/
│   │   └── Layout.jsx            ← Navbar + wrapper
│   ├── pages/
│   │   ├── Home.jsx              ← Landing page
│   │   ├── AddFriend.jsx         ← Deep link handler
│   │   ├── DownloadApp.jsx       ← APK download page
│   │   └── NotFound.jsx          ← 404 page
│   ├── App.jsx                   ← Routes
│   ├── main.jsx                  ← Entry point
│   └── index.css                 ← Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Quick Start (Local)

```bash
# 1. Dependencies install karo
npm install

# 2. Dev server start karo
npm run dev

# 3. Browser mein kholo
# http://localhost:3000
```

## APK Upload Karna

1. Apna signed APK build karo (Android Studio se)
2. `public/fastblink-v2.4.1.apk` mein copy karo
3. `src/pages/DownloadApp.jsx` mein version update karo
4. Build aur deploy karo

## Deploy (Free)

### Vercel (Recommended)

```bash
# Vercel CLI install
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Netlify

```bash
# Build karo
npm run build

# Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## Deep Link Mapping

| Android | Web |
|---------|-----|
| `fastblink://add?user=alice` | `https://fastblink.com/add?user=alice` |
| `fastblink://add?user=alice&source=qr` | `https://fastblink.com/add?user=alice&source=qr` |

## QR Code Format

```
https://fastblink.com/add?user=USERNAME&source=qr
```

## Tech Stack

- React 18 + Vite
- React Router v6
- QRCode.js (QR generation)
- CSS-in-JS (inline styles)

## License

MIT — Apne project mein freely use karo!
