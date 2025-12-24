(function () {
  // Prevent new media from autoplaying and pause existing ones
  function stopMedia(node) {
    try {
      if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
        node.autoplay = false;
        node.muted = node.muted || false;
        if (!node.paused) node.pause();
      }
    } catch (e) { /* ignore cross-origin */ }
  }

  // Pause any existing media
  document.querySelectorAll('video, audio').forEach(stopMedia);

  // Observe additions and stop them too
  const mo = new MutationObserver(muts => {
    muts.forEach(m => {
      m.addedNodes && m.addedNodes.forEach(n => {
        if (n.nodeType === 1) {
          if (n.matches && (n.matches('video, audio'))) stopMedia(n);
          n.querySelectorAll && n.querySelectorAll('video, audio').forEach(stopMedia);
        }
      });
    });
  });
  mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

  // Soft UI: add a small toggle to allow media only if user wants
  const toggle = document.createElement('div');
  toggle.innerHTML = '▶ allow media';
  Object.assign(toggle.style, { position:'fixed', bottom:'18px', right:'18px', zIndex:10000, background:'#1f1f1f', color:'#fff', padding:'6px 8px', borderRadius:'6px', cursor:'pointer' });
  toggle.onclick = () => {
    document.querySelectorAll('video, audio').forEach(v => v.autoplay = true);
    toggle.remove();
    mo.disconnect();
  };
  document.body.appendChild(toggle);
})();
