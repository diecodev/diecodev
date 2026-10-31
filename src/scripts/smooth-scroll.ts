import Lenis from "lenis";
import { prefersReducedMotion, scrollBehavior } from "./motion";

// Inertial wheel scrolling with Lenis' defaults. Touch keeps the native scroll, and
// reduced motion keeps the browser's scrolling untouched.
let lenis: Lenis | null = null;

interface ScrollOptions {
  lock?: boolean;
}

const scrollPadding = () =>
  Number.parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop
  ) || 0;

export const startSmoothScroll = () => {
  if (lenis || prefersReducedMotion()) {
    return;
  }
  lenis = new Lenis({ autoRaf: true });
};

// True while Lenis drives the scroll toward a target; it keeps going across page swaps.
export const isGliding = () => lenis?.isScrolling === "smooth";

export const scrollToTarget = (
  target: number | HTMLElement,
  { lock = false }: ScrollOptions = {}
) => {
  const offset = typeof target === "number" ? 0 : -scrollPadding();
  if (lenis) {
    lenis.scrollTo(target, { lock, offset });
    return;
  }
  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ behavior: scrollBehavior(), top });
};

const isPlainClick = (event: MouseEvent) =>
  event.button === 0 &&
  !(
    event.defaultPrevented ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );

const samePageTarget = (link: HTMLAnchorElement) => {
  if (
    link.origin !== window.location.origin ||
    link.pathname !== window.location.pathname ||
    link.hash.length < 2 ||
    link.target
  ) {
    return null;
  }
  const id = decodeURIComponent(link.hash.slice(1));
  return document.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
};

// Same-page links glide to their section instead of jumping, then move the focus
// start there as a native jump would.
document.addEventListener(
  "click",
  (event) => {
    const link =
      event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[href*='#']")
        : null;
    const target = link && isPlainClick(event) ? samePageTarget(link) : null;
    if (!(link && target)) {
      return;
    }
    event.preventDefault();
    history.replaceState(history.state, "", link.hash);
    scrollToTarget(target);
    if (!target.matches("a, button, input, select, textarea, [tabindex]")) {
      target.setAttribute("tabindex", "-1");
    }
    target.focus({ preventScroll: true });
  },
  { capture: true }
);
