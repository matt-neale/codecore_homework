$(function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  alphabet.forEach((node) => {
    $("body").append(`<div class="letter container"> ${node} </div>`);
  });

  document.querySelectorAll(".letter").forEach((node) => {
    node.addEventListener("click", function () {
      node.classList.add("selected");
      node.classList.add("highlight");
    });
  });
});
