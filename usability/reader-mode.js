(function () {
  // Minimal article reader: remove likely clutter, enlarge text, center content
  const selectorsToHide = [
    'header', 'footer', 'nav', '.nav', '.sidebar', '.ads', '[id*="ad-"]',
    '.related', '.recommendations', '.promo', '.cookie-banner', '.subscription'
  ];
  selectorsToHide.forEach(s => document.querySelectorAll(s).forEach(el => el.remove()));

  // Find main content candidate
  const candidates = Array.from(document.querySelectorAll('article, main, [role="main"], .content, .post, .article'));
  let main = candidates.find(c => c.innerText && c.innerText.length > 300) || document.body;

  // Style reader
  const style = document.createElement('style');
  style.id = 'via-reader-mode-style';
  style.innerHTML = `
    html, body { background: #0f1113 !important; color: #e6eef3 !important; }
    body { display:flex; justify-content:center; }
    .via-reader-container { width: min(900px, 96%); line-height:1.7; font-size:18px; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; padding:32px; box-shadow: 0 8px 30px rgba(0,0,0,0.6); background: #0c0d0f; border-radius:8px; }
    .via-reader-container img { max-width:100%; height:auto; display:block; margin: 12px 0; filter: none; }
    a { color: #8be9fd !important; }
  `;
  document.head.appendChild(style);

  // Wrap content
  const wrapper = document.createElement('div');
  wrapper.className = 'via-reader-container';
  // Move main into wrapper if not body
  if (main !== document.body) {
    wrapper.appendChild(main.cloneNode(true));
    document.body.innerHTML = '';
    document.body.appendChild(wrapper);
  } else {
    // If body, just wrap large children
    const clone = document.createElement('div');
    clone.className = 'via-reader-container';
    clone.innerHTML = document.body.innerHTML;
    document.body.innerHTML = '';
    document.body.appendChild(clone);
  }

  // Small accessibility: increase images lazy load and add long-press copy
  document.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; img.draggable = false; });

  // Add dismiss button
  const btn = document.createElement('button');
  btn.textContent = 'Exit Reader';
  Object.assign(btn.style, { position: 'fixed', top: '14px', right: '14px', zIndex: 99999, padding: '8px 12px', borderRadius: '6px', border:'none', background:'#222', color:'#fff' });
  btn.onclick = () => location.reload();
  document.body.appendChild(btn);
})();
