/* CLOVE BEACH · shared site JS (BB hotel template) */
const WA = "94701200962";
const BOOK_URL = "https://bookings.clovehotels.com/clovebeachhotel/booking/hotels/clove-beach-hotel-wadduwa";

/* header + progress + parallax (one rAF handler) */
const header = document.getElementById('header');
const progress = document.getElementById('progress');
const heroBg = document.getElementById('heroBg');
const paraEls = [...document.querySelectorAll('[data-para]')];
let ticking = false;
function onScroll(){
  const y = window.pageYOffset;
  if(header) header.classList.toggle('stick', y > 60);
  if(progress){
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h * 100) : 0) + '%';
  }
  if(heroBg && y < window.innerHeight) heroBg.style.transform = 'translateY(' + (y * 0.28) + 'px)';
  paraEls.forEach(el => {
    const r = el.parentElement.getBoundingClientRect();
    if(r.bottom > 0 && r.top < window.innerHeight){
      const off = (window.innerHeight - r.top) * 0.06;
      el.style.transform = 'translateY(' + (-off + 40) + 'px)';
    }
  });
  ticking = false;
}
window.addEventListener('scroll', () => { if(!ticking){ requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

/* gated reveal */
function reveal(){
  const els = [...document.querySelectorAll('[data-rv]')];
  if(!els.length) return;
  document.documentElement.classList.add('reveal-on');
  if(!('IntersectionObserver' in window)){ els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((ents) => {
    ents.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
  setTimeout(() => els.forEach(e => { if(e.getBoundingClientRect().top < window.innerHeight) e.classList.add('in'); }), 400);
}

/* mobile drawer */
function openMenu(){ document.getElementById('mmenu').classList.add('open'); document.getElementById('mscrim').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu(){ document.getElementById('mmenu').classList.remove('open'); document.getElementById('mscrim').classList.remove('open'); document.body.style.overflow = ''; }

/* WhatsApp helpers */
function wa(msg){ return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg); }
function enquire(topic){
  const msg = "Hello Clove Beach, I'd like to enquire about " + topic + ".\n\nMy preferred dates:\nGuests:\n\nCould you share availability and rates? Thank you.";
  window.open(wa(msg), '_blank');
}
function openMaps(){ window.open('https://www.google.com/maps/search/?api=1&query=Clove+Beach+Wadduwa+Sri+Lanka', '_blank'); }

/* lightbox (data-driven: pages define GAL array) */
let lbi = 0, lbList = [];
function openLb(i, list){
  lbList = list || (typeof GAL !== 'undefined' ? GAL : []);
  if(!lbList.length) return;
  lbi = i;
  document.getElementById('lbImg').src = lbList[i].src;
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb(){ document.getElementById('lb').classList.remove('open'); document.body.style.overflow = ''; }
function lbStep(d){ lbi = (lbi + d + lbList.length) % lbList.length; document.getElementById('lbImg').src = lbList[lbi].src; }
const lbEl = document.getElementById('lb');
if(lbEl){
  lbEl.addEventListener('click', e => { if(e.target.id === 'lb') closeLb(); });
  document.addEventListener('keydown', e => {
    if(!lbEl.classList.contains('open')) return;
    if(e.key === 'Escape') closeLb();
    if(e.key === 'ArrowRight') lbStep(1);
    if(e.key === 'ArrowLeft') lbStep(-1);
  });
}

/* contact form: validate, then open a prefilled email + offer WhatsApp */
function submitContact(ev){
  ev.preventDefault();
  const f = ev.target;
  let ok = true;
  ['cName','cEmail','cMsg'].forEach(id => {
    const el = document.getElementById(id);
    const field = el.closest('.field');
    const bad = !el.value.trim() || (id === 'cEmail' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
    field.classList.toggle('bad', bad);
    if(bad) ok = false;
  });
  if(!ok) return false;
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const phone = (document.getElementById('cPhone') || {}).value || '';
  const msg = document.getElementById('cMsg').value.trim();
  const body = 'Name: ' + name + '\nEmail: ' + email + (phone ? '\nPhone: ' + phone : '') + '\n\n' + msg;
  window.location.href = 'mailto:reserve@clovehotels.com?subject=' + encodeURIComponent('Website enquiry from ' + name) + '&body=' + encodeURIComponent(body);
  const okBox = document.getElementById('formOk');
  if(okBox) okBox.classList.add('show');
  return false;
}
function contactViaWA(){
  const name = (document.getElementById('cName') || {}).value || '';
  const msg = (document.getElementById('cMsg') || {}).value || '';
  window.open(wa('Hello Clove Beach' + (name ? ', this is ' + name : '') + '.\n' + (msg || "I'd like to make an enquiry.")), '_blank');
}

/* active nav marking */
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mmenu a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === here) a.classList.add('on');
  });
  const hamb = document.getElementById('hamb');
  if(hamb) hamb.addEventListener('click', openMenu);
  reveal();
  onScroll();
})();
