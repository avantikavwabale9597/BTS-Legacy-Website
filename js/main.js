const text = "Celebrating the journey, music and global impact of BTS";
const typingTarget = document.querySelector(".typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 45);
  }
}
typeEffect();
