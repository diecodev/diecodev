import { onPage } from "./lifecycle";

onPage(() => {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    for (const target of targets) {
      target.classList.add("is-visible");
    }
    return null;
  }

  // Sections can be taller than a phone screen, so waiting for a share of their area left
  // their top empty on screen; they fade in as soon as their top passes the bottom edge.
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0 }
  );

  for (const target of targets) {
    observer.observe(target);
  }

  return () => observer.disconnect();
});
