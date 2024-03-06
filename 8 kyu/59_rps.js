// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Logic = 1
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   else if (p1 === "rock" && p2 == "scissors") {
//     return `Player 1 won!`;
//   } else if (p1 === "rock" && p2 == "paper") {
//     return `Player 2 won!`;
//   } else if (p1 === "scissors" && p2 == "paper") {
//     return `Player 1 won!`;
//   } else if (p1 === "scissors" && p2 == "rock") {
//     return `Player 2 won!`;
//   } else if (p1 === "paper" && p2 == "scissors") {
//     return `Player 2 won!`;
//   } else if (p1 === "paper" && p2 == "rock") {
//     return `Player 1 won!`;
//   }
// };

// Logic = 2
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   else if (
//     (p1 === "rock" && p2 == "scissors") ||
//     (p1 === "scissors" && p2 == "paper") ||
//     (p1 === "paper" && p2 == "rock")
//   ) {
//     return `Player 1 won!`;
//   } else if (
//     (p1 === "rock" && p2 == "paper") ||
//     (p1 === "scissors" && p2 == "rock") ||
//     (p1 === "paper" && p2 == "scissors")
//   ) {
//     return `Player 2 won!`;
//   }
// };

// Logic = 3
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  else if (
    (p1 === "rock" && p2 == "scissors") ||
    (p1 === "scissors" && p2 == "paper") ||
    (p1 === "paper" && p2 == "rock")
  ) {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
};

rps("rock", "scissors"); //, getMsg(1));
rps("scissors", "paper"); //, getMsg(1));
rps("paper", "rock"); //, getMsg(1));

rps("scissors", "rock"); //, getMsg(2));
rps("paper", "scissors"); //, getMsg(2));
rps("rock", "paper"); //, getMsg(2));

rps("rock", "rock"); //, "Draw!");
rps("scissors", "scissors"); //, "Draw!");
rps("paper", "paper"); //, "Draw!");
