// While the visitor is on another tab, the title asks them back.
const AWAY_TITLE = "👋 Let’s build something";

let pageTitle = document.title;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pageTitle = document.title;
    document.title = AWAY_TITLE;
  } else if (document.title === AWAY_TITLE) {
    document.title = pageTitle;
  }
});
