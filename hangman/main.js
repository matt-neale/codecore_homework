$(function () {
  $("body").append(`<div class='container1'></div>`);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.forEach((node) => {
    $(".container1").append(`<div class="letter"> ${node} </div>`);
  });

  $("body").append(`<div class='container2'></div>`);

  const answer = "stranger".split("");
  answer.forEach((node) => {
    $(".container2").append(`<div class="guess"> ${node} </div>`);
  });

  $("body").append(`<div class='container3'></div>`);

  answer.forEach((node) => {
    $(".container3").append(`<div class='underline'></div>`);
  });

  $("body").append(`<img src="images/gallows.jpg">`);

  document.querySelectorAll(".letter").forEach((letter) => {
    letter.addEventListener("click", function () {
      letter.classList.add("selected");
      letter.classList.add("highlight");
      console.log(letter.innerHTML);

      document.querySelectorAll(".guess").forEach((guess) => {
        if (letter.innerHTML === guess.innerHTML) {
          console.log(guess.innerHTML);
          guess.style.visibility = "visible";
        }
      });
    });
  });

  function hangman() {}
});
