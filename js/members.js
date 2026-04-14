document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("memberPopup");
  const paper = document.getElementById("paperPopup");
  const closeBtn = document.getElementById("closeMember");
  const memberCards = document.querySelectorAll(".member-card");
  const memberName = document.getElementById("memberName");
  const memberInfo = document.getElementById("memberInfo");

  const memberData = {
    rm: {
      name: "RM (Kim Namjoon)",
      info: `
Birth: September 12, 1994

Position: Leader, Main Rapper

Known For:
• Fluent English speaker
• Powerful speeches
• Deep lyric writing
• High IQ and love for books/art

Achievements:
• Represents BTS globally
• Successful solo releases
• Inspires millions through leadership
      `,
    },

    jin: {
      name: "Jin (Kim Seokjin)",
      info: `
Birth: December 4, 1992

Position: Vocalist, Oldest Member

Known For:
• Worldwide Handsome
• Stable vocals
• Great humor and caring nature

Achievements:
• Popular solo songs
• Loved for confidence and kindness
• Strong live performances
      `,
    },

    suga: {
      name: "SUGA (Min Yoongi)",
      info: `
Birth: March 9, 1993

Position: Lead Rapper, Producer

Known For:
• Honest lyrics
• Calm personality
• Elite producing skills

Achievements:
• Solo career as Agust D
• Produced many hit songs
• Respected songwriter worldwide
      `,
    },

    jhope: {
      name: "j-hope (Jung Hoseok)",
      info: `
Birth: February 18, 1994

Position: Main Dancer, Rapper

Known For:
• Bright energy
• Powerful performer
• Excellent dance skills

Achievements:
• Successful solo albums
• Major festival performances
• Mood maker of BTS
      `,
    },

    jimin: {
      name: "Jimin (Park Jimin)",
      info: `
Birth: October 13, 1995

Position: Lead Vocalist, Main Dancer

Known For:
• Emotional voice
• Elegant dance style
• Strong charisma

Achievements:
• Global chart success
• Popular solo releases
• Loved worldwide by fans
      `,
    },

    v: {
      name: "V (Kim Taehyung)",
      info: `
Birth: December 30, 1995

Position: Vocalist

Known For:
• Deep unique voice
• Fashion icon
• Creative personality

Achievements:
• Successful acting work
• Popular solo music
• Huge global fanbase
      `,
    },

    jk: {
      name: "Jungkook (Jeon Jungkook)",
      info: `
Birth: September 1, 1997

Position: Main Vocalist, Center

Known For:
• Golden Maknae
• All-rounder talent
• Strong stage presence

Achievements:
• Massive solo success
• Global records
• One of the most popular idols worldwide
      `,
    },
  };

  // OPEN POPUP
  memberCards.forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.member;
      const data = memberData[key];

      if (!data) return;

      memberName.textContent = data.name;
      memberInfo.textContent = data.info;

      popup.classList.add("show");
    });
  });

  // CLOSE POPUP WITH ANIMATION
  function closePopup() {
    paper.classList.add("close-anim");

    setTimeout(() => {
      popup.classList.remove("show");
      paper.classList.remove("close-anim");
    }, 700);
  }

  closeBtn.addEventListener("click", closePopup);

  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });
});
