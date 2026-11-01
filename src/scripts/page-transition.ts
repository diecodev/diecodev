import { prefersReducedMotion } from "./motion";
import { isGliding, scrollToTarget } from "./smooth-scroll";

// Leaving a scrolled page: scroll back to the top to reset the header while the next
// page loads, and swap the content mid-scroll so it arrives while the scroll finishes.
const MAX_SCROLL_WAIT_MS = 1800;

const root = document.documentElement;
let leftFrom: number | null = null;
let arriveFrom: number | null = null;

const whenAtTop = (onTop: () => void) => {
  const startedAt = performance.now();
  const check = () => {
    if (
      window.scrollY <= 0 ||
      performance.now() - startedAt > MAX_SCROLL_WAIT_MS
    ) {
      onTop();
      return;
    }
    window.requestAnimationFrame(check);
  };
  window.requestAnimationFrame(check);
};

// The content fades out through CSS; the swap waits for that fade, not a fixed delay.
const fadeOut = () => {
  const fading = document.querySelector("main")?.getAnimations() ?? [];
  return Promise.allSettled(fading.map((animation) => animation.finished));
};

const finishArrival = () => {
  // Lenis keeps gliding through the swap; the native scroll was cancelled by it.
  if (!isGliding()) {
    scrollToTarget(0);
  }
  whenAtTop(() => {
    root.classList.remove("is-arriving");
  });
};

const resumeAfter = async (transition: ViewTransition) => {
  try {
    await transition.finished;
  } finally {
    finishArrival();
  }
};

document.addEventListener("astro:before-preparation", (event) => {
  // A link with a hash lands the next page scrolled to it, so there is nothing to reset.
  const shouldScroll =
    event.navigationType === "push" &&
    event.to.hash === "" &&
    window.scrollY > 0 &&
    !prefersReducedMotion();
  leftFrom = shouldScroll ? window.scrollY : null;
  if (!shouldScroll) {
    return;
  }
  root.classList.add("is-leaving");
  scrollToTarget(0, { lock: true });
  const loadPage = event.loader;
  event.loader = async () => {
    await Promise.all([loadPage(), fadeOut()]);
  };
});

document.addEventListener("astro:before-swap", (event) => {
  if (leftFrom === null) {
    arriveFrom = null;
    return;
  }
  // Back should return to where the link was clicked, not to the middle of the scroll.
  if (history.state) {
    history.replaceState({ ...history.state, scrollY: leftFrom }, "");
  }
  leftFrom = null;
  arriveFrom = window.scrollY > 0 ? window.scrollY : null;
  if (arriveFrom !== null) {
    // Scrolling inside the swap gets cancelled, so the scroll resumes once it has finished.
    resumeAfter(event.viewTransition);
  }
});

// The router jumps fresh pages to the top; keep the scroll where it was instead.
document.addEventListener("astro:after-swap", () => {
  if (arriveFrom === null) {
    return;
  }
  // is-handoff stays for this page: removing it would re-time the entrance animations.
  root.classList.add("is-arriving", "is-handoff");
  window.scrollTo({ behavior: "instant", top: arriveFrom });
  arriveFrom = null;
});
