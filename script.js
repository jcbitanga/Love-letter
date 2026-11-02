// Change these messages to your own love letters!
const letters = {
  letter: {
    title: "To my favorite person,",
    text: "If I could keep one feeling forever, it would be the warmth I feel whenever I think of you. This little space is for the moments I never want to lose. I love you."
  },
  memory: {
    title: "The moments I keep,",
    text: "It's the little things I remember most: our silly conversations, unexpected laughs, and all the ordinary moments that somehow feel extraordinary with you."
  },
  promise: {
    title: "Still choosing you,",
    text: "I promise to keep showing up, listening, learning, and choosing kindness. No matter the distance or the day, I want us to keep making memories worth holding close."
  }
};

let selected = "letter";
const content = document.getElementById("letterContent");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    selected = button.dataset.letter;
    document.querySelectorAll(".choice").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    content.hidden = true;
  });
});

document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("letterTitle").textContent = letters[selected].title;
  document.getElementById("letterText").textContent = letters[selected].text;
  content.hidden = false;
  content.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.getElementById("closeLetter").addEventListener("click", () => {
  content.hidden = true;
});
