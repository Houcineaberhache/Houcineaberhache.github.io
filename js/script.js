// ---------- MOBILE MENU ----------

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');

if (menu) {
  menu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px';
    nav.style.background = '#080909';
    nav.style.flexDirection = 'column';
    nav.style.borderBottom = '1px solid #202020';
  });
}

// ---------- PROJECT GALLERY ----------

document.querySelectorAll('.project-visual.gallery').forEach(gallery => {
  const mainShot = gallery.querySelector('.main-shot');
  const thumbs = gallery.querySelectorAll('.thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainShot.src = thumb.dataset.full;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});

// ---------- CERTIFICATIONS TOGGLE ----------

const certGrid = document.getElementById('certGrid');
const certToggle = document.getElementById('certToggle');

if (certToggle) {
  certToggle.addEventListener('click', () => {
    const isExpanded = certGrid.classList.toggle('expanded');
    certToggle.textContent = isExpanded ? 'Show less ↑' : 'Show all 14 ↓';
  });
}
const imgModal = document.getElementById('imgModal');
const imgModalFull = document.getElementById('imgModalFull');
const imgModalClose = document.getElementById('imgModalClose');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    imgModalFull.src = card.dataset.full;
    imgModal.classList.add('open');
  });
});

function closeImgModal() {
  imgModal.classList.remove('open');
  imgModalFull.src = '';
}

imgModalClose.addEventListener('click', closeImgModal);

imgModal.addEventListener('click', (e) => {
  if (e.target === imgModal) closeImgModal();
});