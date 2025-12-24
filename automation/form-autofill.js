(function () {
  // Lightweight manual autofill: user must first set values via prompt, stored in localStorage for this origin
  const key = '__via_autofill_v1';
  let stored = {};
  try { stored = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { stored = {}; }

  // If no saved values, offer to set them (only once)
  if (!stored._initialized) {
    if (confirm('Set quick-autofill values for this site? (Name, Email)')) {
      stored.name = prompt('Full name:', '') || '';
      stored.email = prompt('Email address:', '') || '';
      stored._initialized = true;
      localStorage.setItem(key, JSON.stringify(stored));
      alert('Values saved locally for this origin.');
    } else {
      stored._initialized = true;
      localStorage.setItem(key, JSON.stringify(stored));
    }
  }

  // Autofill common fields
  function autofill() {
    if (!stored.name && !stored.email) return;
    const nameFields = ['input[name*="name"]', 'input[id*="name"]', 'input[placeholder*="name"]', 'input[type="text"]'];
    const emailFields = ['input[type="email"]', 'input[name*="email"]', 'input[id*="email"]', 'input[placeholder*="email"]'];
    nameFields.forEach(sel => document.querySelectorAll(sel).forEach(el => { if (!el.value) el.value = stored.name || el.value; }));
    emailFields.forEach(sel => document.querySelectorAll(sel).forEach(el => { if (!el.value) el.value = stored.email || el.value; }));
  }

  // Trigger once on load and again on DOM changes
  autofill();
  const mo = new MutationObserver(autofill);
  mo.observe(document.body, { childList: true, subtree: true });

  // Small UI to clear saved data
  const clearBtn = document.createElement('div');
  clearBtn.textContent = '✖ autofill';
  Object.assign(clearBtn.style, { position:'fixed', bottom:'80px', right:'20px', background:'#b00020', color:'#fff', padding:'6px 8px', borderRadius:'6px', zIndex:10000, cursor:'pointer' });
  clearBtn.onclick = () => { localStorage.removeItem(key); alert('Autofill data cleared for this origin.'); clearBtn.remove(); };
  document.body.appendChild(clearBtn);
})();
