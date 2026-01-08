const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];

const colors = ["#e23744", "#f4c430", "#2ecc71", "#3498db"];

for (let i = 0; i < confettiCount; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 3 + 2,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    c.y += c.speed;

    if (c.y > canvas.height) {
      c.y = -10;
    }
  });

  requestAnimationFrame(drawConfetti);
}

// ▶ play sound + confetti
window.onload = () => {
  document.getElementById("successSound").play();
  drawConfetti();

  // stop confetti after 4 seconds
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 4000);
};
