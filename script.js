const root = document.documentElement;
const eras = Array.from(document.querySelectorAll('.era'));
const meterLabel = document.getElementById('meter-label');
const meterFill = document.getElementById('meter-fill');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  root.style.setProperty('--page-progress', Math.max(0, Math.min(progress, 1)));
  meterFill.setAttribute('aria-valuenow', Math.round(progress * 100));
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress, { passive: true });
updateScrollProgress();

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    eras.forEach((era) => era.classList.remove('is-active'));
    entry.target.classList.add('is-active');
    meterLabel.textContent = entry.target.dataset.count;
    document.body.dataset.era = entry.target.dataset.label;
  });
}, { threshold: .52 });

eras.forEach((era) => activeObserver.observe(era));

const starfield = document.getElementById('starfield');
if (starfield && !reducedMotion.matches) {
  const context = starfield.getContext('2d');
  const pointer = { x: 0, y: 0 };
  let stars = [];
  let width = 0;
  let height = 0;

  function makeStar() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.35 + .25,
      speed: Math.random() * .22 + .03,
      depth: Math.random() * .9 + .1,
      hue: Math.random() > .82 ? 183 : 258
    };
  }

  function resizeField() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    starfield.width = Math.round(width * ratio);
    starfield.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars = Array.from({ length: Math.min(190, Math.max(90, Math.round(width / 8))) }, makeStar);
  }

  function drawField(time) {
    context.clearRect(0, 0, width, height);
    const scrollShift = window.scrollY * .025;

    stars.forEach((star) => {
      const x = (star.x + pointer.x * star.depth * .014) % width;
      const y = (star.y - scrollShift * star.speed + pointer.y * star.depth * .008 + height) % height;
      const pulse = .55 + Math.sin(time * .0012 + star.x) * .25;
      context.beginPath();
      context.arc(x, y, star.size * pulse, 0, Math.PI * 2);
      context.fillStyle = 'hsla(' + star.hue + ', 85%, 84%, ' + (.18 + star.depth * .55) + ')';
      context.fill();
    });

    requestAnimationFrame(drawField);
  }

  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    pointer.x = event.clientX - width / 2;
    pointer.y = event.clientY - height / 2;
  }, { passive: true });

  window.addEventListener('resize', resizeField, { passive: true });
  resizeField();
  requestAnimationFrame(drawField);
}
