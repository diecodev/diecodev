const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export const prefersReducedMotion = (): boolean =>
  window.matchMedia(reducedMotionQuery).matches;

export const scrollBehavior = (): ScrollBehavior =>
  prefersReducedMotion() ? "auto" : "smooth";
