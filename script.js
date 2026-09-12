// =========================================================
//ศุวพิชชา จตุธรรมธาดา — Portfolio Interactions
// =========================================================

// ---------- 1) floating background particles ----------
(function initFloaties(){
  const layer = document.querySelector('.floaties');
  if(!layer) return;
  const icons = ['🌸','✨','🏸'];
  const count = window.innerWidth < 700 ? 5 : 9;

  for(let i = 0; i < count; i++){
    const el = document.createElement('span');
    el.className = 'floaty';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (1 + Math.random() * 1.4) + 'rem';
    const duration = 10 + Math.random() * 12;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = (Math.random() * duration) + 's';
    layer.appendChild(el);
  }
})();

// ---------- 2) click ripple + sparkle burst, everywhere ----------
(function initClickFx(){
  const colors = ['#e98aa6', '#a99be0'];
  const sparkleChars = ['✦', '✧', '❀'];

  document.addEventListener('click', (e) => {
    // ripple circle
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = 18 + Math.random() * 10;
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.background = colors[Math.floor(Math.random() * colors.length)];
    ripple.style.opacity = '0.55';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());

    // little sparkle burst
    const burstCount = 5;
    for(let i = 0; i < burstCount; i++){
      const s = document.createElement('span');
      s.className = 'sparkle-burst';
      s.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
      s.style.left = e.clientX + 'px';
      s.style.top = e.clientY + 'px';
      s.style.color = colors[Math.floor(Math.random() * colors.length)];
      const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.6;
      const dist = 30 + Math.random() * 30;
      s.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
      document.body.appendChild(s);
      s.addEventListener('animationend', () => s.remove());
    }
  });
})();

// ---------- 3) smooth fade transition between pages ----------
(function initPageTransitions(){
  const links = document.querySelectorAll('a[data-transition]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if(!href || href.startsWith('#') || link.target === '_blank') return;
      e.preventDefault();
      document.body.classList.add('page-leave');
      setTimeout(() => { window.location.href = href; }, 320);
    });
  });
})();
