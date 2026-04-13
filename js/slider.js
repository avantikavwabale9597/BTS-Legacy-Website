const cards = document.querySelectorAll(".album-card");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const albumTitle = document.getElementById("albumTitle");
const songList = document.getElementById("songList");
const strip = document.querySelector("album.strip");

const defaultBg = `
radial-gradient(circle at top left, rgba(106,13,173,.22), transparent 35%),
radial-gradient(circle at bottom right, rgba(0,90,255,.12), transparent 30%),
linear-gradient(135deg,#05050a,#0b0b14,#111122)
`;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const songs = card.dataset.songs.split(",");
    const bg = card.dataset.bg;

    document.body.style.background = bg;

    albumTitle.textContent = title;

    songList.innerHTML = "";

    songs.forEach((song) => {
      const li = document.createElement("li");
      li.textContent = song.trim();
      songList.appendChild(li);
    });

    popup.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

function closePopup() {
  popup.classList.remove("show");
  document.body.style.overflow = "auto";
  document.body.style.background = defaultBg;
}

closeBtn.addEventListener("click", closePopup);

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
