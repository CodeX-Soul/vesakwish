// Blinking Lights
let lights = document.querySelectorAll(".light");
let activeIndex = 0;

setInterval(() => {
  lights.forEach((light, index) => {
    light.style.backgroundColor = index === activeIndex ? "#FFD60A" : "#555";
    light.style.boxShadow = index === activeIndex ? "0 0 10px #FFD60A" : "none";
  });

  activeIndex = (activeIndex + 1) % lights.length;
}, 400);

// Rotating Quotes
const messages = [
  "May all beings be happy and safe",
  "Happy Vesak! බුදු සරණයි!",
  "Celebrate with compassion and peace",
  "Let your heart be light and pure",
  "Spread kindness and joy this Vesak"
];

let msgIndex = 0;
const messageDiv = document.getElementById("vesakMessage");

setInterval(() => {
  msgIndex = (msgIndex + 1) % messages.length;
  messageDiv.textContent = messages[msgIndex];
}, 5000);



// Generate Floating Vesak Lanterns
const container = document.getElementById("lanternContainer");

function createLantern() {
  const lantern = document.createElement("div");
  lantern.classList.add("lantern-float");

  // Randomize horizontal position
  lantern.style.left = Math.random() * 100 + "vw";
  
  // Random duration and delay
  const duration = Math.random() * 5 + 5; // 5s to 10s
  lantern.style.animationDuration = `${duration}s`;

  // Random size
  const size = Math.random() * 20 + 20; // 20px–40px
  lantern.style.width = `${size}px`;
  lantern.style.height = `${size}px`;

  container.appendChild(lantern);

  // Remove after animation
  setTimeout(() => {
    container.removeChild(lantern);
  }, duration * 1000);
}

// Create new lanterns continuously
setInterval(createLantern, 400);

setInterval(createLantern, 800); // Slower interval
