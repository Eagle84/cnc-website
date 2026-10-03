// Highlights the section of a long page (Rules, Legal) that is on screen.
const links = [...document.querySelectorAll('.toc a[href^="#"]')];
const sections = links.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
    }
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach((s) => io.observe(s));
}
