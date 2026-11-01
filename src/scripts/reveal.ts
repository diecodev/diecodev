import { onPage } from "./lifecycle";

onPage(() => {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    for (const target of targets) {
      target.classList.add("is-visible");
    }
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  for (const target of targets) {
    observer.observe(target);
  }

  return () => observer.disconnect();
});
