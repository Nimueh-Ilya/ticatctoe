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
    let win = null;
    const horizontalCheck = () => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        gameBoard.board[i].every((element) => element === gameBoard.board[i][0])
          ? (check.win = true)
          : (check.win = false);
        console.log(check.win);
        if (check.win == true) {
          break;
        }
      }
    };
    return { horizontalCheck, win };
  })();

  gameBoard.generateBoard();
  for (let i = 0; i <= 2; i++) {
    gameBoard.board[1][i] = "g";
  }
  check.horizontalCheck();
})();
