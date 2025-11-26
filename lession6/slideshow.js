const images = [
  "/lession6/images/Anh1.jpg",
  "/lession6/images/Anh2.jpg",
    "/lession6/images/Anh3.jpg",
]

const slideshow = document.getElementById('slideshow')

// ham slideshow
function slider(i) {
    slideshow.src = images[i];
}

// di chuyen anh tiep theo
let index = 0;
function next() {
  index ++ ;
  if (index >= images.length) {
    index = 0
  }
  slider(index)
}

//ham previous di chuyen anh
function previous() {
  index -- ;
  if (index < 0) {
    index = images.length - 1;
  }
  slider(index);
}
// ham stats
let intervalId = null;
function start() {
  if (intervalId !== null)
    return;
  intervalId = setInterval(next, 500);
}

// ham stop
function stop() {
  if (intervalId === null) return;
  clearInterval(intervalId);
  intervalId = null;
}
