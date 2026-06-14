import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});

lenis.on("scroll", ScrollTrigger.update);

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
  window.addEventListener("vl-logo-complete", () => {
    lenis.start();
  });
} else {
  lenis.start();
}

let cursorElement: HTMLElement | null = null;
let cursorInitialized = false;

function initCursor() {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!finePointer || reducedMotion) return;

  if (!cursorInitialized) {
    cursorElement = document.createElement("div");
    cursorElement.id = "custom-cursor";
    cursorElement.setAttribute("aria-hidden", "true");

    gsap.set(cursorElement, {
      xPercent: -50,
      yPercent: -50,
      width: 44,
      height: 44,
      opacity: 0,
      scale: 1,
    });

    const moveX = gsap.quickTo(cursorElement, "x", { duration: 0.18, ease: "power3.out" });
    const moveY = gsap.quickTo(cursorElement, "y", { duration: 0.18, ease: "power3.out" });

    window.addEventListener("mousemove", (e) => {
      if (cursorElement && document.body.contains(cursorElement)) {
        moveX(e.clientX);
        moveY(e.clientY);
        gsap.to(cursorElement, { opacity: 1, duration: 0.2, overwrite: "auto" });
      }
    });

    window.addEventListener("mouseleave", () => {
      if (cursorElement) gsap.to(cursorElement, { opacity: 0, duration: 0.2, overwrite: "auto" });
    });

    const interactiveSelector =
      'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement | null;
      if (!target || !cursorElement) return;

      if (target.closest(interactiveSelector)) {
        gsap.to(cursorElement, {
          scale: 1.6,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target as HTMLElement | null;
      if (!target || !cursorElement) return;

      if (target.closest(interactiveSelector)) {
        gsap.to(cursorElement, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });

    document.addEventListener("focusin", (e) => {
      const target = e.target as HTMLElement | null;
      if (!target || !cursorElement) return;

      if (target.matches("input, textarea, select")) {
        gsap.to(cursorElement, {
          scale: 1.8,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });

    document.addEventListener("focusout", (e) => {
      const target = e.target as HTMLElement | null;
      if (!target || !cursorElement) return;

      if (target.matches("input, textarea, select")) {
        gsap.to(cursorElement, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });
    
    cursorInitialized = true;
  }

  // Re-append to new body on View Transition
  if (cursorElement && !document.body.contains(cursorElement)) {
    document.body.appendChild(cursorElement);
    document.documentElement.classList.add("has-custom-cursor");
  } else if (cursorElement) {
    document.body.appendChild(cursorElement);
    document.documentElement.classList.add("has-custom-cursor");
  }
}

document.addEventListener("astro:page-load", initCursor);