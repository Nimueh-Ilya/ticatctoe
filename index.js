const ttt = (() => {
  const gameBoard = (() => {
    const turn = 0;
    const board = [];
    const generateBoard = () => {
      for (let i = 0; i <= 2; i++) {
        board[i] = [0, 1, 2];
      }
    };
    return { generateBoard, turn, board };
  })();

  const check = (() => {
    const win = null;
    const horizontalCheck = () => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        gameBoard.board[i].every((element) => element === gameBoard.board[i][0])
          ? (check.win = true)
          : (check.win = false);
        if (check.win == true) {
          break;
        }
      }
    };
    const verticalCheck = () => {
      let tempArray = [];
      for (let i = 0; i < gameBoard.board.length; i++) {
        for (let j = 0; j < gameBoard.board.length; j++) {
          tempArray.push(gameBoard.board[j][i]);
        }
        console.log(tempArray);
        tempArray.every((element) => element === tempArray[0])
          ? (check.win = true)
          : (check.win = false);
        if (check.win == true) {
          break;
        }
        tempArray = [];
      }
    };
    const diagonalCheck = () => {};
    return { verticalCheck, diagonalCheck, horizontalCheck, win };
  })();

  // gameBoard.generateBoard();
  // for (let i = 0; i <= 2; i++) {
  //   gameBoard.board[1][i] = 1;
  // }
  // console.log(gameBoard.board);
  // check.verticalCheck();
})();
