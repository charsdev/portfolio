const termWindow = document.getElementById("terminal-window");
const termHeader = document.getElementById("terminal-header");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

termHeader.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains('btn-close')) return;

  isDragging = true;
  offsetX = e.clientX - termWindow.offsetLeft;
  offsetY = e.clientY - termWindow.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  termWindow.style.left = `${e.clientX - offsetX}px`;
  termWindow.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

