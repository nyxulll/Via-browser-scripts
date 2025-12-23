# 📱 Via Browser User Scripts Collection

A clean, practical, and **mobile‑friendly JavaScript script pack** for **Via Browser (Android)**.

These scripts enhance privacy, readability, speed, and usability while browsing.

---

## 📦 Features Overview
- 🌙 Universal Dark Mode
- 🚫 Lightweight Ad & Popup Remover
- 🍪 Auto Accept Cookie Notices
- ✂️ Enable Text Selection on Restricted Sites
- 📜 Auto Scroll for Hands‑Free Reading
- ▶️ YouTube Distraction‑Free Mode
- ⚡ Page Speed & Data Saver

---

## 📂 Repository Structure
```
via-browser-scripts/
├── dark-mode/
│   └── universal-dark-mode.js
├── privacy/
│   ├── auto-accept-cookies.js
│   └── enable-text-selection.js
├── performance/
│   ├── ad-popup-remover.js
│   └── page-speed-booster.js
├── usability/
│   ├── auto-scroll.js
│   └── youtube-clean-mode.js
└── README.md
```

---

## ⚙️ How to Use in Via Browser
1. Open **Via Browser**
2. Menu ☰ → **Settings**
3. **Scripts** → **Add Script**
4. Paste script content
5. Choose **Run at start** or **Manual run**

---

# 🌙 Universal Dark Mode
**Path:** `dark-mode/universal-dark-mode.js`

```javascript
(function () {
  document.documentElement.style.backgroundColor = "#121212";
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "#e0e0e0";

  document.querySelectorAll("*").forEach(el => {
    let bg = getComputedStyle(el).backgroundColor;
    if (bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      el.style.backgroundColor = "#121212";
    }
    el.style.color = "#e0e0e0";
  });
})();
```

---

# 🚫 Ad & Popup Remover
**Path:** `performance/ad-popup-remover.js`

```javascript
(function () {
  const keywords = ["ad", "ads", "popup", "banner", "sponsor"];
  document.querySelectorAll("div, iframe").forEach(el => {
    let ref = (el.className + el.id).toLowerCase();
    if (keywords.some(k => ref.includes(k))) el.remove();
  });
})();
```

---

# 🍪 Auto Accept Cookies
**Path:** `privacy/auto-accept-cookies.js`

```javascript
(function () {
  document.querySelectorAll("button").forEach(btn => {
    let t = btn.innerText.toLowerCase();
    if (t.includes("accept") || t.includes("agree")) btn.click();
  });
})();
```

---

# ✂️ Enable Text Selection
**Path:** `privacy/enable-text-selection.js`

```javascript
(function () {
  document.body.style.userSelect = "text";
  document.body.onselectstart = null;
  document.body.oncontextmenu = null;

  document.querySelectorAll("*").forEach(el => {
    el.style.userSelect = "text";
  });
})();
```

---

# 📜 Auto Scroll
**Path:** `usability/auto-scroll.js`

```javascript
let speed = 1;
let scroll = setInterval(() => window.scrollBy(0, speed), 50);
```

_Stop by refreshing the page._

---

# ▶️ YouTube Clean Mode
**Path:** `usability/youtube-clean-mode.js`

```javascript
(function () {
  const clean = () => {
    ["#comments", "#related", "ytd-merch-shelf-renderer", "ytd-reel-shelf-renderer"]
      .forEach(s => document.querySelector(s)?.remove());
  };
  setInterval(clean, 2000);
})();
```

---

# ⚡ Page Speed Booster
**Path:** `performance/page-speed-booster.js`

```javascript
(function () {
  document.querySelectorAll("img").forEach(img => img.loading = "lazy");
})();
```

---

## 🔐 Security Notice
- Scripts run **locally only**
- ❌ Do NOT use on banking or login pages
- ❌ Do NOT inject password‑stealing scripts

---

## 📜 License
MIT License — Free to use, modify, and share.

---

## 🤖 AI Helper Scripts

### 🧠 AI Page Summarizer (Manual Run)
**Path:** `ai/page-summarizer.js`

```javascript
(function () {
  const text = document.body.innerText.slice(0, 6000);
  alert("Copy this text into your AI of choice (ChatGPT, Gemini, etc):

" + text);
})();
```

📌 Designed to work safely without API keys.

---

### ✨ Highlight Key Points (Headings + Important Text)
**Path:** `ai/highlight-key-points.js`

```javascript
(function () {
  document.querySelectorAll('h1, h2, h3, strong, b').forEach(el => {
    el.style.backgroundColor = '#ffeb3b';
    el.style.color = '#000';
    el.style.padding = '2px';
    el.style.borderRadius = '4px';
  });
})();
```

---

## 🎨 Branding & Repo Identity

### 🧩 Repository Name Ideas
- `via-browser-scripts`
- `via-enhancer`
- `via-power-scripts`

**Recommended:** `via-browser-scripts`

---

### 🖼️ Logo Concept (Simple & Minimal)
**Style:** Minimal, flat, dark-mode friendly

**Concept:**
- A **lightning bolt ⚡ inside a browser circle**
- Script brackets `{}` integrated into the icon
- Colors: `#121212`, `#00e5ff`, white accents

**Prompt you can use in an AI image generator:**
> "Minimal flat logo, Android browser icon, lightning bolt inside a circle, JavaScript brackets, dark background, cyan accents, modern open source style"

---

### 🏷️ GitHub Badges (README Ready)

```md
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Platform](https://img.shields.io/badge/Platform-Android-green)
![Browser](https://img.shields.io/badge/Browser-Via-blue)
![License](https://img.shields.io/badge/License-MIT-brightgreen)
![Status](https://img.shields.io/badge/Status-Active-success)
```

---

## ⭐ Stars‑Ready README Tricks

Add this near the top of your README:

```md
> ⚡ Lightweight power‑scripts for Via Browser on Android
> 
> 🌙 Dark Mode • 🚫 Ads • 🤖 AI Helpers • ⚡ Speed

If you find this useful, please ⭐ star the repo to support development.
```

---

## 📣 Promotion Tips
- Share on **Reddit** (Android / privacy subs)
- Post in **Telegram Via Browser groups**
- Add screenshots / GIF demos
- Pin repo on your GitHub profile

---

## ❤️ Made for the Via Browser Community
Clean • Fast • Minimal

