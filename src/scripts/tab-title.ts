// When the visitor looks away (another tab, app or window), the title calls them back,
// cycling like a notification until they return.
const AWAY_TITLES = ["Hey!!!", "Yoo-hoo!!!", "Come back!"];
const CYCLE_MS = 1600;

let pageTitle: string | null = null;
let cycleTimer = 0;

const lookAway = () => {
  if (pageTitle !== null) {
    return;
  }
  pageTitle = document.title;
  let index = 0;
  document.title = AWAY_TITLES[index] ?? pageTitle;
  cycleTimer = window.setInterval(() => {
    index = (index + 1) % AWAY_TITLES.length;
    document.title = AWAY_TITLES[index] ?? "";
  }, CYCLE_MS);
};

const lookBack = () => {
  if (pageTitle === null) {
    return;
  }
  window.clearInterval(cycleTimer);
  document.title = pageTitle;
  pageTitle = null;
};

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    lookAway();
  } else if (document.hasFocus()) {
    lookBack();
  }
});
window.addEventListener("blur", lookAway);
window.addEventListener("focus", lookBack);
