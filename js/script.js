/* ── Tagline typewriter loop ── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const taglineEl = document.getElementById('tagline-type');
if (taglineEl) {
  const TAGLINE_TEXT = 'A Full-Stack Developer';
  if (prefersReducedMotion) {
    taglineEl.textContent = TAGLINE_TEXT;
  } else {
    let charIndex = 0;
    let deleting = false;
    const TYPE_MS = 75;
    const DELETE_MS = 40;
    const HOLD_FULL_MS = 1800;
    const HOLD_EMPTY_MS = 500;

    (function tick() {
      if (!deleting) {
        charIndex++;
        taglineEl.textContent = TAGLINE_TEXT.slice(0, charIndex);
        if (charIndex === TAGLINE_TEXT.length) {
          deleting = true;
          setTimeout(tick, HOLD_FULL_MS);
        } else {
          setTimeout(tick, TYPE_MS);
        }
      } else {
        charIndex--;
        taglineEl.textContent = TAGLINE_TEXT.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          setTimeout(tick, HOLD_EMPTY_MS);
        } else {
          setTimeout(tick, DELETE_MS);
        }
      }
    })();
  }
}

/* ── Active top-nav icon highlight ── */
const sections = document.querySelectorAll('section[id]');
const navIcons = document.querySelectorAll('.topnav-icons a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navIcons.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

/* ── Experience card scroll-in reveal ── */
const expCards = document.querySelectorAll('.exp-card');
const expObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      expObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
expCards.forEach(card => expObserver.observe(card));

/* ── Sidebar CTA pill: fades in once the hero has scrolled past ── */
const sidebarCta = document.getElementById('sidebar-cta');
const heroSection = document.getElementById('hero');
if (sidebarCta && heroSection) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      sidebarCta.classList.toggle('visible', !entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
  }, { threshold: 0 });
  heroObserver.observe(heroSection);
}

/* ── Contact form: build a mailto: link (static site, no backend) ── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const type = contactForm.type.value;
    const message = contactForm.message.value.trim();

    const subject = `Portfolio contact from ${name} — ${type}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:niko92.biz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
