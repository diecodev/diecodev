export type Cleanup = () => void;

// With the ClientRouter, module scripts run once per visit. Page-bound setup runs on
// every page load and is torn down right before the next page swaps in.
export const onPage = (setup: () => Cleanup) => {
  let cleanup: Cleanup | undefined;
  document.addEventListener("astro:page-load", () => {
    cleanup?.();
    cleanup = setup();
  });
  document.addEventListener("astro:before-swap", () => {
    cleanup?.();
    cleanup = undefined;
  });
};
