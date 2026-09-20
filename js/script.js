document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".pricing");
  const buttons = document.querySelectorAll(".btn");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (c) {
        c.classList.remove("selected");
      });
      card.classList.add("selected");
    });
  });

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const title = button.closest(".pricing").querySelector(".title").textContent;
      alert("Vous avez choisi le " + title + " !");
    });
  });
});
