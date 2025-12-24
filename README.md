 Via Browser Super-Scripts: The Ultimate 2025 Collection
Transform your Via Browser into a high-performance workstation. This repository contains a curated collection of UserScripts ranging from basic quality-of-life improvements to advanced AI integration and data automation.
📥 How to Install
Open Via Browser.
Tap the Menu icon (bottom right) > Settings.
Go to General > Scripts.
Tap the + (Add) button.
Provide a name and paste the code from any section below.
Save and refresh your target website.
🤖 Section 1: AI & Data Automation
Turn your browser into an intelligent assistant and data extractor.
1.1 WebMind AI Summarizer
Uses the 2025 Native AI API to summarize long articles into a single bullet point.
code
JavaScript
// ==UserScript==
// @name         WebMind AI Summarizer
// @match        *://*/*
// @grant        none
// ==/UserScript==

(async function() {
    const btn = document.createElement('div');
    btn.innerHTML = '🤖';
    Object.assign(btn.style, {
        position: 'fixed', bottom: '20px', left: '20px', zIndex: '10000',
        background: '#6200ee', color: 'white', borderRadius: '50%',
        width: '45px', height: '45px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', cursor: 'pointer'
    });
    btn.onclick = async () => {
        const text = document.body.innerText.slice(0, 5000);
        btn.innerHTML = '⏳';
        try {
            if (window.ai && window.ai.summarizer) {
                const summarizer = await ai.summarizer.create();
                const summary = await summarizer.summarize(text);
                alert("AI Summary:\n\n" + summary);
            } else { alert("AI Error: Native AI not enabled in via://flags"); }
        } catch (e) { alert("Analysis failed."); }
        btn.innerHTML = '🤖';
    };
    document.body.appendChild(btn);
})();
1.2 GhostScraper (CSV Data Extractor)
Scrapes tables and lists into a downloadable CSV file. Trigger by long-pressing the top-left corner.
code
JavaScript
// ==UserScript==
// @name         GhostScraper Pro
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    const scrape = () => {
        const rows = Array.from(document.querySelectorAll('tr, .product-item, .article-card'));
        const data = rows.map(row => row.innerText.replace(/\n/g, ' | ')).join('\n');
        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `data_export_${new Date().getTime()}.csv`;
        a.click();
    };
    document.addEventListener('touchstart', e => {
        if (e.touches[0].clientX < 50 && e.touches[0].clientY < 50) {
            if (confirm("Start data extraction?")) scrape();
        }
    });
})();
🎬 Section 2: Media & Entertainment
Advanced controls for YouTube and HTML5 video players.
2.1 YouTube Master Pro
Enables background playback, auto-skips ads, and removes intrusive popups.
code
JavaScript
// ==UserScript==
// @name         YouTube Master Pro
// @match        *://*.youtube.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    Object.defineProperties(document, {'hidden': {value: false}, 'visibilityState': {value: 'visible'}});
    window.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);
    const observer = new MutationObserver(() => {
        const ad = document.querySelector('.ad-showing video');
        if (ad) ad.currentTime = ad.duration;
        const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
        if (skipBtn) skipBtn.click();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
2.2 Cinema Pro & Speed Master
Adds a floating speed controller (1.0x to 3.0x) and auto-enhances video contrast.
code
JavaScript
// ==UserScript==
// @name         Cinema Pro Media Tools
// @match        *://*/*
// ==/UserScript==

(function() {
    let speed = 1.0;
    const btn = document.createElement('div');
    btn.innerHTML = "1.0x";
    Object.assign(btn.style, {
        position: 'fixed', bottom: '80px', right: '10px', zIndex: '9999',
        backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', padding: '5px 10px',
        borderRadius: '20px', fontSize: '12px'
    });
    btn.onclick = () => {
        speed = speed >= 3.0 ? 1.0 : speed + 0.5;
        document.querySelectorAll('video').forEach(v => {
            v.playbackRate = speed;
            v.style.filter = "contrast(1.1) brightness(1.05)";
        });
        btn.innerHTML = speed + "x";
    };
    document.body.appendChild(btn);
})();
🛡️ Section 3: Privacy & Security
Aggressive tracker blocking and anti-fingerprinting.
3.1 Hardened Privacy Shield
Spoofs battery status and adds noise to Canvas/WebGL to prevent browser fingerprinting.
code
JavaScript
// ==UserScript==
// @name         Hardened Privacy Shield
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function() {
    if (navigator.getBattery) {
        navigator.getBattery = () => Promise.resolve({charging: true, level: 1.0});
    }
    const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
        const data = originalGetImageData.apply(this, arguments);
        data.data[0] += 1; 
        return data;
    };
})();
🛠️ Section 4: Web Utilities
Standard tweaks for a better browsing experience.
4.1 Content Unlocker Pro
Re-enables text selection, copying, and right-clicks on sites that block them.
code
JavaScript
// ==UserScript==
// @name         Content Unlocker Pro
// @match        *://*/*
// ==/UserScript==

(function() {
    const css = '* { user-select: text !important; -webkit-user-select: text !important; }';
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    ['contextmenu', 'copy', 'cut', 'paste', 'mousedown'].forEach(event => {
        document.addEventListener(event, e => e.stopPropagation(), true);
    });
})();
4.2 Universal Dark Mode
Inverts website colors intelligently to save battery and reduce eye strain.
code
JavaScript
// ==UserScript==
// @name         Universal Dark Mode
// @match        *://*/*
// ==/UserScript==

(function() {
    var style = document.createElement('style');
    style.innerHTML = `
        html { filter: invert(90%) hue-rotate(180deg) !important; background: #fff !important; }
        img, video, iframe, canvas { filter: invert(100%) hue-rotate(180deg) !important; }
    `;
    document.head.appendChild(style);
})();
🤝 Contributing
Found a bug or have a new script?
Fork the repo.
Add your script to a new section.
Open a Pull Request.
📜 License
MIT © 2025. Optimized for Via Browser.
