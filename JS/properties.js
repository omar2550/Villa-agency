document.querySelectorAll(".work .main-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".work .main-btn")
      .forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");

    document.querySelectorAll(".work .vila-box").forEach((box) => {
      box.parentElement.style.display = "none";
    });

    document.querySelectorAll(`.work ${btn.dataset.prop}`).forEach((box) => {
      box.parentElement.style.display = "block";
    });
  });
});
