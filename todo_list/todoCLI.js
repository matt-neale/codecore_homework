const { strict } = require("assert");
const { fs } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menuActions = ` (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n \n `;
console.log(
  "\n Welcome to Todo CLI! \n \n -------------------- \n\n" + menuActions
);
rl.prompt();

let list = [
  { completed: true, task: "Take out the trash" },
  { completed: true, task: "Buy toothpaste" },
  { completed: false, task: "Buy Snickerdoodles" },
  { completed: false, task: "Fix the climate" },
  { completed: false, task: "Find a cure for aging" },
];

function printBox(boolean) {
  if (boolean === false) {
    return "[ ]";
  } else {
    return "[✓]";
  }
}
//view
rl.on("line", (input) => {
  if (input === "v") {
    let listString = "";
    list.forEach((item, i) => {
      listString += `\n ${i} ${printBox(item.completed)} ${item.task}\n`;
    });
    console.log(listString + `\n` + menuActions);
    rl.prompt();
  }
});
//add
rl.on("line", (input) => {
  if (input === "n") {
    rl.question("\n What task would you like to add to the list? ", (task) => {
      const obj = { completed: false, task };
      list.push(obj);
      console.log(`\n "${task}" was added to the list!\n\n` + menuActions);
      rl.prompt();
    });
  }
});
//completed
rl.on("line", (input) => {
  if (input[0] === `c`) {
    const indexNumber = input.substr(1);
    list[indexNumber].completed = true;
    console.log(`\nCompleted "${list[indexNumber].task}"\n\n` + menuActions);
    rl.prompt();
  }
});
// delete
rl.on("line", (input) => {
  if (input[0] === `d`) {
    const indexNumber = input.substr(1);
    console.log(`\nDeleted "${list[indexNumber].task}"\n\n` + menuActions);
    list.splice(indexNumber, 1);
    rl.prompt();
  }
});

//load

// rl.on('line', input => {
//     if (input === 'l') {
//         // rl.question('\n Please enter your own todo list file:', () => {
//             fs.readFile('./myTodos.json', 'utf8', (err, data) => {
//                 if(err) {
//                     throw err
//                 } else {
//                     console.log(data);
//                 }
//             })
//         // })
//     }
// })
//^^^couldn't quite get it to work, any feedback is appreciated

//exit
rl.on("line", (input) => {
  if (input === "q") {
    console.log(`\nSee you soon! :D\n`);
    rl.close();
  }
});
