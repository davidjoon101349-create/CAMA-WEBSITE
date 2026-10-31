const menu = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
const closeMenu = () => { menu?.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); };
toggle?.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', closeMenu));
const current = location.pathname.split('/').pop() || 'index.html';
if (current === 'index.html') {
  const legacySections = { '#vision': 'about.html#vision', '#history': 'about.html#history', '#ahava': 'about.html#ahava', '#partners': 'partners.html' };
  if (legacySections[location.hash]) location.replace(legacySections[location.hash]);
}
document.querySelectorAll('.nav-menu a').forEach(link => { if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page'); });
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const topButton = document.querySelector('.top-button');
const updateTop = () => topButton?.classList.toggle('show', scrollY > 650);
addEventListener('scroll', updateTop, { passive: true });
updateTop();
topButton?.addEventListener('click', () => scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; document.getElementById(item.getAttribute('aria-controls')).hidden = !selected; });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length]; if (event.key === 'ArrowLeft') next = tabs[(index + tabs.length - 1) % tabs.length]; if (event.key === 'Home') next = tabs[0]; if (event.key === 'End') next = tabs[tabs.length - 1]; if (next) { event.preventDefault(); selectTab(next); next.focus(); } });
});
const search = document.querySelector('#archive-search');
search?.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase();
  const cards = [...document.querySelectorAll('.archive-card')];
  let count = 0;
  cards.forEach(card => { const match = card.textContent.toLocaleLowerCase().includes(query); card.hidden = !match; if (match) count++; });
  document.querySelector('#archive-result').textContent = count ? count + '개의 행사를 찾았습니다.' : '일치하는 행사가 없습니다. 다른 검색어를 입력해 주세요.';
});
const galleryImages = [...document.querySelectorAll('.gallery-card img')];
if (galleryImages.length) {
  const viewer = document.createElement('dialog'); viewer.className = 'photo-viewer'; viewer.setAttribute('aria-label', '사진 크게 보기');
  const close = document.createElement('button'); close.type = 'button'; close.textContent = '닫기 ×';
  const image = document.createElement('img'); const caption = document.createElement('p');
  viewer.append(close, image, caption); document.body.append(viewer);
  const open = source => { image.src = source.src; image.alt = source.alt; caption.textContent = source.closest('figure')?.querySelector('figcaption')?.textContent || source.alt; viewer.showModal(); };
  close.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => image.removeAttribute('src'));
  galleryImages.forEach(source => { source.tabIndex = 0; source.setAttribute('role', 'button'); source.setAttribute('aria-label', source.alt + ' 크게 보기'); source.addEventListener('click', () => open(source)); source.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(source); } }); });
}
