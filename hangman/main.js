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

  function hangman() {
    let correctGuess = 0;
    let wrongGuess = 0;

    document.querySelectorAll(".letter").forEach((letter) => {
      letter.addEventListener("click", function () {
        letter.classList.add("highlight");
        letter.classList.add("disabled");

        console.log(letter.innerText);
        console.log(answer);
        if (console.log(answer.includes(letter.innerText))) {
          console.log(wrongGuess);
        } else if (!answer.includes(letter.innerText)) {
          wrongGuess++;
          $("img").remove();
          $("body").append(images[1 * wrongGuess]);
          console.log(wrongGuess);
        }
        if (wrongGuess >= 6) {
          // tried to have this as an else if in the above statement but didn't work for some reason
          alert("Sorry you lost this time.");
        }
        document.querySelectorAll(".guess").forEach((guess, i) => {
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
