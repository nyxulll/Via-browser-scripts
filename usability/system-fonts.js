(function () {
  // Force system UI fonts to reduce layout jank and save rendering cost on heavy pages
  const s = document.createElement('style');
  s.id = 'via-system-fonts';
  s.innerHTML = `
    * { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial !important; text-rendering: optimizeLegibility !important; -webkit-font-smoothing: antialiased !important; }
    img, video, canvas { image-rendering: -webkit-optimize-contrast; }
  `;
  document.head.appendChild(s);

  // Optional small UI to remove override
  const btn = document.createElement('div');
  btn.textContent = 'Aa';
  Object.assign(btn.style, { position:'fixed', bottom:'20px', left:'20px', zIndex:10000, width:'40px', height:'40px', borderRadius:'6px', background:'#333', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' });
  btn.onclick = () => { s.remove(); btn.remove(); };
  document.body.appendChild(btn);
})();
