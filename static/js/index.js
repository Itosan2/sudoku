const container = document.querySelector(".container");
// const winWidth = document.querySelector("#win-width");
// const conWidth = document.querySelector("#con-width");
const hbBtn = document.querySelector(".hamburger-btn");
const mainGameInfo = document.querySelector(".main-game-info");

hbBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    mainGameInfo.classList.toggle("active");
  } else {
    mainGameInfo.classList.toggle("active");
  }
});

// window.addEventListener("resize", () => {
//   const windowWidth = container.clientWidth;

//   winWidth.textContent = `Win: ${windowWidth}px`;
// });

// const observer = new ResizeObserver((entries) => {
//   for (let entry of entries) {
//     const width = Math.floor(entry.contentRect.width);
//     conWidth.textContent = ` Con:${width}px`;
//   }
// });

// observer.observe(container);
