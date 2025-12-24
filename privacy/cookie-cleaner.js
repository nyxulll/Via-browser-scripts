(function () {
  // Clears document-accessible cookies, localStorage and sessionStorage for current origin.
  // Note: HttpOnly cookies cannot be removed via JS.
  function deleteAllCookies() {
    const cookies = document.cookie.split(';').map(c => c.trim()).filter(Boolean);
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      // Set cookie to past date for root path and current path
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
  }

  // Remove tracking params from URL (preserve history)
  function cleanUrlParams() {
    try {
      const url = new URL(location.href);
      const trackingParams = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','fbclid','gclid','mc_cid','mc_eid'];
      let changed = false;
      trackingParams.forEach(p => { if (url.searchParams.has(p)) { url.searchParams.delete(p); changed = true; }});
      if (changed) history.replaceState({}, document.title, url.toString());
    } catch (e) { /* ignore */ }
  }

  // Run actions
  deleteAllCookies();
  try { localStorage.clear(); sessionStorage.clear(); } catch (e) { /* ignore */ }
  cleanUrlParams();

  // Feedback
  const note = document.createElement('div');
  note.textContent = 'Cookies & storage cleared (document-accessible).';
  Object.assign(note.style, { position:'fixed', top:'14px', right:'14px', zIndex:99999, background:'#111', color:'#dcdcdc', padding:'8px 10px', borderRadius:'6px' });
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 4000);
})();
