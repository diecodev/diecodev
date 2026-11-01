export interface ScrollState {
  active: string | null;
  far: boolean;
  progress: number;
  y: number;
}

type Listener = (state: ScrollState) => void;

const FAR_THRESHOLD = 420;
const ACTIVE_LINE_RATIO = 0.4;
const BOTTOM_TOLERANCE = 2;

const listeners = new Set<Listener>();
let frame = 0;
let started = false;

const measure = (): ScrollState => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const line = window.innerHeight * ACTIVE_LINE_RATIO;
  const sections = document.querySelectorAll<HTMLElement>("[data-section]");
  let active: string | null = null;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= line) {
      active = section.dataset.section ?? null;
    }
  }

  const last = sections.item(sections.length - 1);
  if (last && max > 0 && y >= max - BOTTOM_TOLERANCE) {
    active = last.dataset.section ?? active;
  }

  return {
    active,
    far: y > FAR_THRESHOLD,
    progress: max > 0 ? Math.min(1, y / max) : 0,
    y,
  };
};

const update = () => {
  frame = 0;
  const state = measure();
  for (const listener of listeners) {
    listener(state);
  }
};

const schedule = () => {
  if (frame === 0) {
    frame = window.requestAnimationFrame(update);
  }
};

export const subscribeToScroll = (listener: Listener): (() => void) => {
  listeners.add(listener);
  if (!started) {
    started = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  schedule();
  return () => listeners.delete(listener);
};
