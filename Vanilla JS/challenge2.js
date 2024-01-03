const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN, SMALL_SCREEN);
    console.log('big screen');
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
    console.log('midium screen');
  } else {
    body.classList.remove(MEDIUM_SCREEN, BIG_SCREEN);
    body.classList.add(SMALL_SCREEN);
    console.log('small screen');
  }
}

window.addEventListener("resize", handleResize);
