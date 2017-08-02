// Sudoku Solution Validator <4 kyu>

// ###Sudoku Background Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// ###Sudoku Solution Validator Write a function validSolution that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

function validSolution(board){
  let boardStr = board.join(' ').replace(/,/g,'');
  if (/0/.test(boardStr)) {
    return false;
  }

  let bs = boardStr;
  let square1 = bs[0]+bs[1]+bs[2]+bs[10]+bs[11]+bs[12]+bs[20]+bs[21]+bs[22];
  let square2 = bs[3]+bs[4]+bs[5]+bs[13]+bs[14]+bs[15]+bs[23]+bs[24]+bs[25];
  let square3 = bs[6]+bs[7]+bs[8]+bs[16]+bs[17]+bs[18]+bs[26]+bs[27]+bs[28];
  let square4 = bs[30]+bs[31]+bs[32]+bs[40]+bs[41]+bs[42]+bs[50]+bs[51]+bs[52];
  let square5 = bs[33]+bs[34]+bs[35]+bs[43]+bs[44]+bs[45]+bs[53]+bs[54]+bs[55];
  let square6 = bs[36]+bs[37]+bs[38]+bs[46]+bs[47]+bs[48]+bs[56]+bs[57]+bs[58];
  let square7 = bs[60]+bs[61]+bs[62]+bs[70]+bs[71]+bs[72]+bs[80]+bs[81]+bs[82];
  let square8 = bs[63]+bs[64]+bs[65]+bs[73]+bs[74]+bs[75]+bs[83]+bs[84]+bs[85];
  let square9 = bs[66]+bs[67]+bs[68]+bs[76]+bs[77]+bs[78]+bs[86]+bs[87]+bs[88];

  if (/1/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /2/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /3/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /4/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /5/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /6/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /7/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /8/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false
    || /9/.test(square1,square2,square3,square4,square5,square6,square7,square8,square9) === false) {
    return false;
  }

  return true;
}

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]])); // should return true
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                           [6, 7, 2, 1, 9, 0, 3, 4, 8],
                           [1, 0, 0, 3, 4, 2, 5, 6, 0],
                           [8, 5, 9, 7, 6, 1, 0, 2, 0],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 0, 1, 5, 3, 7, 2, 1, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 0, 0, 4, 8, 1, 1, 7, 9]])); // should return false
console.log(validSolution([[1, 2, 6, 3, 4, 7, 5, 9, 8],
                           [7, 3, 5, 8, 1, 9, 6, 4, 2],
                           [1, 9, 4, 2, 7, 5, 8, 6, 3],
                           [3, 1, 7, 5, 8, 4, 2, 6, 9],
                           [7, 5, 9, 1, 6, 2, 4, 3, 8],
                           [4, 8, 2, 9, 3, 6, 7, 1, 5],
                           [1, 4, 8, 7, 5, 9, 3, 2, 6],
                           [5, 6, 1, 4, 2, 3, 9, 8, 7],
                           [2, 7, 3, 6, 9, 1, 8, 5, 4]])); // should return false
console.log(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                           [2, 3, 1, 5, 6, 4, 8, 9, 7],
                           [3, 1, 2, 6, 4, 5, 9, 7, 8],
                           [4, 5, 6, 7, 8, 9, 1, 2, 3],
                           [5, 6, 4, 8, 9, 7, 2, 3, 1],
                           [6, 4, 5, 9, 7, 8, 3, 1, 2],
                           [7, 8, 9, 1, 2, 3, 4, 5, 6],
                           [8, 9, 7, 2, 3, 1, 5, 6, 4],
                           [9, 7, 8, 3, 1, 2, 6, 4, 5]])); // should return false
console.log(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                           [2, 3, 4, 5, 6, 7, 8, 9, 1],
                           [3, 4, 5, 6, 7, 8, 9, 1, 2],
                           [4, 5, 6, 7, 8, 9, 1, 2, 3],
                           [5, 6, 7, 8, 9, 1, 2, 3, 4],
                           [6, 7, 8, 9, 1, 2, 3, 4, 5],
                           [7, 8, 9, 1, 2, 3, 4, 5, 6],
                           [8, 9, 1, 2, 3, 4, 5, 6, 7],
                           [9, 1, 2, 3, 4, 5, 6, 7, 8]])); // should return false

// CHECKS THE HORIZONTAL AND VERTICAL ROWS, BUT DOES NOT CHECK THE 9 LARGER SQUARES MADE UP OF 9 SMALLER SQUARES.

// function validSolution(board){
//   let boardStr = board.join(' ').replace(/,/g,'');
//   if (/0/.test(boardStr)) {
//     return false;
//   }

//   var numsSet = new Set();

//   for (i = 0; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 1; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 2; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 3; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 4; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 5; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 6; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 7; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }
//   numsSet.clear();
//   for (i = 8; i < boardStr.length-1; i+=10) {
//     if (numsSet.has(boardStr[i])) {
//       return false;
//     } else {
//       numsSet.add(boardStr[i]);
//     }
//   }

//   return true;
// }
