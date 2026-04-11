const textTarget = document.querySelector(".typing-text");

const phrases = [
  "Celebrating the journey of BTS.",
  "Music that inspired the world.",
  "Seven artists. One legacy.",
  "Borahae Forever!!",
];

let current = 0;

function changeText() {
  textTarget.classList.remove("show");

  setTimeout(() => {
    textTarget.textContent = phrases[current];
    textTarget.classList.add("show");

    current = (current + 1) % phrases.length;
  }, 400);
}

changeText();
setInterval(changeText, 3000);

const memberSwiper = new Swiper(".memberSwiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: true,
  loop: false,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 1.2,
    scale: 0.9,
    slideShadows: false,
  },
});
