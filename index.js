const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const target_text = document.getElementById("text");
const target_title = document.getElementById("title");

const card = document.querySelector(".card");

card.addEventListener("click", () => {
  const inner = card.querySelector(".card-inner");
  inner.style.transform =
    inner.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
  target_text.innerText = "";
  target_title.style.fontSize = "41px";
  target_title.innerText = "Твой подарок в пути, кстати вот он";
});
