document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer
  const weddingDate = new Date("2025-03-14T19:00:00").getTime(); // Set wedding date
  const countdownElement = document.createElement("p");
  countdownElement.id = "countdown";
  countdownElement.style.fontSize = "22px";
  countdownElement.style.fontWeight = "bold";
  countdownElement.style.color = "#c2185b";
  countdownElement.style.background = "#ffe6eb";
  countdownElement.style.padding = "12px";
  countdownElement.style.borderRadius = "12px";
  countdownElement.style.display = "inline-block";
  countdownElement.style.marginTop = "15px";
  countdownElement.style.fontFamily = "'Great Vibes', cursive";
  countdownElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

  const videoSection = document.querySelector(".video-section");
  videoSection.parentNode.insertBefore(countdownElement, videoSection);

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "🎉 The wedding is happening today! 🎉";
      countdownElement.style.animation = "pulse 1.5s infinite alternate";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `💍 Time Until Wedding: <br> <span style="font-size:26px; color:#e91e63; font-family: 'Great Vibes', cursive;">${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Create RSVP Modal
  const modal = document.createElement("div");
  modal.id = "rsvp-modal";
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.background = "#fff";
  modal.style.padding = "20px";
  modal.style.borderRadius = "10px";
  modal.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
  modal.style.display = "none";
  modal.style.textAlign = "center";
  modal.style.zIndex = "1000";

  const modalContent = document.createElement("p");
  modalContent.innerText =
    "Thank you for RSVPing! We can't wait to celebrate with you!";
  modalContent.style.fontSize = "18px";
  modalContent.style.color = "#c2185b";
  modal.appendChild(modalContent);

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.style.marginTop = "10px";
  closeButton.style.padding = "8px 16px";
  closeButton.style.background = "#e84393";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
  modal.appendChild(closeButton);

  document.body.appendChild(modal);

  // Smooth Scroll to RSVP & Confetti Effect
  document.querySelector(".rsvp-button").addEventListener("click", function () {
    modal.style.display = "block";
    confetti({
      particleCount: 200,
      spread: 200,
      origin: { y: 0.7 },
    });
  });

  // Add CSS Animation for Countdown
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.05); opacity: 0.9; }
        }
      `;
  document.head.appendChild(style);

  // Smooth fade-in animation for sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  });

  function revealSections() {
    document.querySelectorAll("section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});
