export type Cleanup = () => void;

// With the ClientRouter, module scripts run once per visit. Page-bound setup runs on
// every page load and is torn down right before the next page swaps in.
export const onPage = (setup: () => Cleanup | null) => {
  let cleanup: Cleanup | null = null;
  document.addEventListener("astro:page-load", () => {
    cleanup?.();
    cleanup = setup();
  });
  document.addEventListener("astro:before-swap", () => {
    cleanup?.();
    cleanup = null;
  });
};
