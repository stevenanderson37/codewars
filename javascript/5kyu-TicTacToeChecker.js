// Tic-Tac-Toe Checker

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an X, or 2 if it is an O, like so:

// [[0,0,1],
// [0,1,2],
// [2,1,0]]

// We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won, or 0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  for (i = 0; i < 1; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0 && j === 0) {
        if (board[i][j] === board[i][j+1] && board[i][j] === board[i][j+1]) {
          return board[i][j];
        } else if (board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]) {
          return board[i][j];
        } else if (board[i][j] === board[i+1][j+1] && board[i][j] === board[i+2][j+2]) {
          return board[i][j];
        }
      }

      if (board[i][j] !== 0 && j === 1) {
        if (board[i][j] === board[i][j-1] && board[i][j] === board[i][j+1]) {
          return board[i][j];
        } else if (board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]) {
          return board[i][j];
        }
      }

      if (board[i][j] !== 0 && j === 2) {
        if (board[i][j] === board[i][j-1] && board[i][j] === board[i][j-2]) {
          return board[i][j];
        } else if (board[i][j] === board[i+1][j-1] && board[i][j] === board[i+2][j-2]) {
          return board[i][j];
        } else if (board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]) {
          return board[i][j];
        }
      }
    }
  }

  if (board[1][0] !== 0 && board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
    return board[1][0];
  } else if (board[2][0] !== 0 && board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
    return board[2][0];
  } else if (/[0]/.test(board.join(' ')) === false) {
    return 0;
  } else {
    return -1;
  }
}

console.log(isSolved([[0,0,1],
                      [0,1,2],
                      [2,1,0]])); // Should return -1
console.log(isSolved([[2,0,1],
                      [0,1,2],
                      [1,1,2]])); // Should return 1
console.log(isSolved([[2,0,1],
                      [0,2,2],
                      [1,1,2]])); // Should return 2
console.log(isSolved([[2,0,1],
                      [0,0,2],
                      [1,0,2]])); // Should return -1
console.log(isSolved([[2,1,1],
                      [0,1,1],
                      [2,2,2]])); // Should return 2
console.log(isSolved([[2,1,2],
                      [2,1,1],
                      [1,2,2]])); // Should return 0

// Solution using regex.
// function isSolved(board) {
//   boardStr = board.join(' ').replace(/,/g,'');
//   if (/222|2...2...2|2....2....2|2..2..2/.test(boardStr)) {
//     return 2;
//   } else if (/111|1...1...1|1....1....1|1..1..1/.test(boardStr)) {
//     return 1;
//   } else if (/0/.test(boardStr)) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
