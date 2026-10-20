onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

const openLetterBtn = document.getElementById("openLetterBtn");
const closeLetterBtn = document.getElementById("closeLetterBtn");
const letterOverlay = document.getElementById("letterOverlay");

function openLetter() {
  letterOverlay.classList.add("is-open");
  letterOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("letter-open");
}

function closeLetter() {
  letterOverlay.classList.remove("is-open");
  letterOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("letter-open");
}

openLetterBtn.addEventListener("click", openLetter);
closeLetterBtn.addEventListener("click", closeLetter);
letterOverlay.addEventListener("click", (event) => {
  if (event.target === letterOverlay) closeLetter();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && letterOverlay.classList.contains("is-open")) closeLetter();
});
