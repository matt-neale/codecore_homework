const fs = require("fs");
const args = process.argv.slice(2);

const drawLine = (num) => {
  return `\u2501`.repeat(num);
};

const drawTopBorder = (num) => {
  return `\u250F` + drawLine(num) + `\u2513`;
};

const drawMiddleBorder = (num) => {
  return `\u2523` + drawLine(num) + `\u252B`;
};

const drawBottomBorder = (num) => {
  return `\u2517` + drawLine(num) + `\u251B`;
};

const drawBarsAround = (str) => {
  if (str.length < longestWord) {
    str = str + " ".repeat(longestWord - str.length);
  }
  return `\u2503` + str + `\u2503`;
};

const boxIt = (args) => {
  let newArr = [];
  if (args.length === 0) {
    return drawTopBorder(0) + `\n\n` + drawBottomBorder(0);
  } else {
    args.forEach(function (word) {
      longestWord = "";
      if (word.length > longestWord.length) {
        longestWord = word.length;
      }
    });
    for (let i = 0; i < args.length; i++) {
      if (i === 0) {
        newArr.push(
          drawTopBorder(longestWord) + `\n` + drawBarsAround(args[i]) + `\n`
        );
      } else {
        newArr.push(
          drawMiddleBorder(longestWord) + `\n` + drawBarsAround(args[i]) + `\n`
        );
      }
    }
    return newArr.join("") + drawBottomBorder(longestWord);
  }
};
console.log(boxIt(args));
