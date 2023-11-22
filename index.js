const ttt = (() => {
  const gamePlay = (() => {
    const currentPlayer = null;
    const turnChange = () => {
      if (gamePlay.currentPlayer == player1) {
        gamePlay.currentPlayer = player2;
      } else {
        gamePlay.currentPlayer = player1;
      }
    };
    const play = (player, row, column) => {
      player.turn = false;
      gameBoard.board[row][column] = player.playerMarker;
      console.log(
        `${player.playerName} played at the coordinates [${row},${column}]`
      );
    };
    return { turnChange, play, currentPlayer };
  })();
  const binding = (() => {})();
  const render = (() => {})();
  const gameBoard = (() => {
    const board = [];
    const generateBoard = () => {
      for (let i = 0; i <= 2; i++) {
        board[i] = [];
      }
    };
    return { generateBoard, board };
  })();

  const check = (() => {
    const win = null;
    const tempArrayChecker = (array) => {
      return array.every((element) => element === array[0]);
    };
    const horizontalCheck = () => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        tempArrayChecker(gameBoard.board[i]) && gameBoard.board[i].length === 3
          ? (check.win = true)
          : (check.win = false);
        if (check.win === true) {
          console.log("winner 1");
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
        tempArrayChecker(tempArray) && !tempArray.length
          ? (check.win = true)
          : (check.win = false);
        if (check.win === true) {
          console.log("winner 2");
          break;
        }
        tempArray = [];
      }
    };
    const diagonalCheck = () => {
      let tempArray = [];
      tempArray.push(
        gameBoard.board[0][0],
        gameBoard.board[1][1],
        gameBoard.board[2][2]
      );
      if (tempArrayChecker(tempArray) === true && !tempArray.length) {
        check.win = true;
        console.log("winner 3");
      } else {
        tempArray = [];
        tempArray.push(
          gameBoard.board[0][2],
          gameBoard.board[1][1],
          gameBoard.board[2][0]
        );
        if (tempArrayChecker(tempArray) === true && !tempArray.length) {
          check.win = true;
          console.log("winner 4");
        }
      }
    };
    const checkAll = () => {
      if (gamePlay.turn == 9) {
        console.log("tie");
      } else {
        check.win = null;
        verticalCheck();
        check.win = null;
        horizontalCheck();
        check.win = null;
        diagonalCheck();
        check.win = null;
      }
    };
    return { checkAll, win };
  })();
  const player1 = { playerName: "poopi" };
  const player2 = {};

  gameBoard.generateBoard();
  gamePlay.play(player1, 0, 0);
  gamePlay.turnChange();
  console.log(gamePlay.currentPlayer);
  console.log(gameBoard.board);
  check.checkAll();
})();
