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

const target_img = document.getElementById("target_img");
const target_text = document.getElementById("text");
const target_title = document.getElementById("title");
const boys_btn = document.getElementById("target_img");
boys_btn.addEventListener("click", () => {
  setTimeout(() => {
    target_img.src = "/src/gift.jpeg";
    target_text.innerText = "";
    target_title.innerText = "Твой подарок в пути, кстати вот он";
    target_title.style.fontSize = "32px";
  }, 500);
});
