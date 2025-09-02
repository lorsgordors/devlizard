// Typing effect for elements with [data-typing]
(function(){
  const el = document.querySelector('[data-typing]');
  if(!el) return;
  const full = el.textContent.trim();
  el.textContent = '';
  let i = 0;
  const speed = 35; // ms per char
  const type = () => {
    if(i <= full.length){
      el.textContent = full.slice(0, i++);
      requestAnimationFrame(() => setTimeout(type, speed));
    }
  };
  type();
})();

// Simple IntersectionObserver to reveal elements on scroll
(function(){
  const items = document.querySelectorAll('[data-animate]');
  if(!('IntersectionObserver' in window) || items.length === 0){
    items.forEach(i => i.classList.add('in-view'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    })
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  items.forEach(i => obs.observe(i));
})();
