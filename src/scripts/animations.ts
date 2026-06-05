import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
declare global {
  interface Window {
    __lenis: Lenis;
    __vlLogoDone: boolean;
  }
}
window.__lenis = lenis;

if (!window.__vlLogoDone) {
  lenis.stop();
  window.addEventListener('vl-logo-complete', () => {
    lenis.start();
  });
}

const initCustomCursor = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const canUsePointer = window.matchMedia('(pointer: fine)').matches;
  if (!canUsePointer) {
    return;
  }

  if (document.getElementById('vl-custom-cursor')) {
    return;
  }

  const cursor = document.createElement('div');
  cursor.id = 'vl-custom-cursor';
  cursor.className = 'vl-custom-cursor';
  document.body.appendChild(cursor);

  const updatePosition = (event: PointerEvent) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  };

  const hideCursor = () => {
    cursor.style.opacity = '0';
  };

  const showCursor = () => {
    cursor.style.opacity = '1';
  };

  window.addEventListener('pointermove', updatePosition, { passive: true });
  window.addEventListener('pointerenter', showCursor);
  window.addEventListener('pointerleave', hideCursor);

  showCursor();
};

initCustomCursor();

document.addEventListener('astro:page-load', initCustomCursor);