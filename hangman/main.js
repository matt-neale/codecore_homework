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

  const images = [
    `<img src="images/gallows.jpg">`,
    `<img src="images/gallows+head.jpg">`,
    `<img src="images/gallows+head+torso.jpg">`,
    `<img src="images/gallows+head+torso+arm.jpg">`,
    `<img src="images/gallows+head+torso+2leg.jpg">`,
    `<img src="images/gallows+head+torso+2leg+arm.jpg">`,
    `<img src="images/gallows+head+torso+2leg+2arm.jpg">`,
  ];
  $("body").append(images[0]);

  let correctGuess = 0;

  function hangman() {
    document.querySelectorAll(".letter").forEach((letter) => {
      letter.addEventListener("click", function () {
        letter.classList.add("highlight");

        document.querySelectorAll(".guess").forEach((guess) => {
          if (letter.innerHTML === guess.innerHTML) {
            guess.style.visibility = "visible";
            correctGuess++;
          } else if (correctGuess === answer.length) {
            alert("You have won the game!");
          }
        });
      });
    });
  }

  hangman();
});
