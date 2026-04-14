// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".album-card");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close");
  const albumTitle = document.getElementById("albumTitle");
  const songList = document.getElementById("songList");
  const spotifyPlayer = document.getElementById("spotifyPlayer"); // 1. Grab the iframe

  const defaultBg = `
    radial-gradient(circle at top left, rgba(106,13,173,.22), transparent 35%),
    radial-gradient(circle at bottom right, rgba(0,90,255,.12), transparent 30%),
    linear-gradient(135deg,#05050a,#0b0b14,#111122)
  `;

  // 2. Updated function to use the iframe instead of opening a new tab
  function playInIframe(songName) {
    if (typeof tracks !== "undefined" && tracks[songName]) {
      // Some of your IDs have "?si=" at the end. We need to split that off for the embed.
      const trackId = tracks[songName].split("?")[0];

      // Set the iframe source to the Spotify embed URL and show it
      spotifyPlayer.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
      spotifyPlayer.style.display = "block";
    } else {
      // Fallback: If we don't have the track ID, search for it on Spotify in a new tab
      const searchQuery = encodeURIComponent(songName + " BTS");
      window.open(`https://open.spotify.com/search/${searchQuery}`, "_blank");
    }
  }

  // Album click
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const songs = card.dataset.songs.split(",");
      const bg = card.dataset.bg;

      document.body.style.background = bg;
      albumTitle.textContent = title;
      songList.innerHTML = "";

      // Hide the player when opening a new album until they click a song
      spotifyPlayer.src = "";
      spotifyPlayer.style.display = "none";

      songs.forEach((song) => {
        const songName = song.trim();
        const li = document.createElement("li");

        li.textContent = songName;
        li.style.cursor = "pointer";
        li.title = "Play on Spotify";

        li.addEventListener("click", (e) => {
          e.stopPropagation();
          playInIframe(songName); // Call the updated function
        });

        songList.appendChild(li);
      });

      popup.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  // Close popup
  function closePopup() {
    popup.classList.remove("show");
    document.body.style.overflow = "auto";
    document.body.style.background = defaultBg;

    // 3. Stop the music and hide the player when closing the popup
    spotifyPlayer.src = "";
    spotifyPlayer.style.display = "none";
  }

  closeBtn.addEventListener("click", closePopup);

  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });
});
