// Map keyboard letters to audio element ids
const keyToSound = {
  a: "boom",
  s: "clap",
  d: "hihat",
  f: "kick",
  g: "openhat",
  h: "ride",
  j: "snare",
  k: "tink",
  l: "tom",
};

// Play a given audio element from the start
function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

// Add a short pressed animation to a key element
function animateKey(keyElement) {
  keyElement.classList.add("active");
  setTimeout(() => keyElement.classList.remove("active"), 120);
}

// Handle letter -> sound + animation
function trigger(letter) {
  const lower = letter.toLowerCase();
  const soundName = keyToSound[lower];
  if (!soundName) return;

  const keyDiv = document.querySelector(`.key[data-key="${lower}"]`);
  if (!keyDiv) return;

  const audio = document.getElementById(soundName);
  if (!audio) return;

  playSound(audio);
  animateKey(keyDiv);
}

// Keyboard events
window.addEventListener("keydown", (e) => {
  trigger(e.key);
});

// Mouse click events
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    trigger(key.dataset.key);
  });
});


