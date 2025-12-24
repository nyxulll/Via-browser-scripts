(function () {
  // Floating button that opens the current page in Google Translate (safe, no API keys)
  const btn = document.createElement('div');
  btn.textContent = '🌐';
  Object.assign(btn.style, {
    position: 'fixed', bottom: '20px', right: '20px', zIndex: 10000,
    width: '44px', height: '44px', borderRadius: '50%', display:'flex', alignItems:'center', justifyContent:'center',
    background:'#1976d2', color:'#fff', boxShadow:'0 6px 18px rgba(25,118,210,0.25)', cursor:'pointer'
  });
  btn.title = 'Translate page (open Google Translate)';
  btn.onclick = () => {
    const url = encodeURIComponent(location.href);
    const gt = `https://translate.google.com/translate?sl=auto&tl=en&u=${url}`;
    window.open(gt, '_blank');
  };
  document.body.appendChild(btn);
})();
