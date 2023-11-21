const ttt = (() => {
  const gameBoard = (() => {
    const turn = 0;
    const board = [];
    const generateBoard = () => {
      for (let i = 0; i <= 2; i++) {
        board[i] = [];
      }
    };
    return { generateBoard, turn, board };
  })();

  const check = (() => {
    const win = null;
    const horizontalCheck = () => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        gameBoard.board[i].every(
          (element) => element === gameBoard.board[i][0]
        ) && gameBoard.board[i].length === 3
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
        tempArray.every(
          (element) => element === tempArray[0] && !tempArray.length
        )
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
      if (
        tempArray.every((element) => element === tempArray[0]) === true &&
        !tempArray.length
      ) {
        check.win = true;
        console.log("winner 3");
      } else {
        tempArray = [];
        tempArray.push(
          gameBoard.board[0][2],
          gameBoard.board[1][1],
          gameBoard.board[2][0]
        );
        if (
          tempArray.every((element) => element === tempArray[0]) === true &&
          !tempArray.length
        ) {
          check.win = true;
          console.log("winner 4");
        }
      }
    };
    const checkAll = () => {
      if (gameBoard.turn == 9) {
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
  const players = (() => {
    const makePlayer = (name, marker) => {
      const playerName = name;
      const playerMarker = marker;
      return { playerName, playerMarker };
    };
    const play = (player, row, column) => {
      player.turn = false;
      gameBoard.board[row][column] = player.playerMarker;
      console.log(
        `${player.playerName} played at the coordinates [${row},${column}]`
      );
    };
    return { play, makePlayer };
  })();
  gameBoard.generateBoard();
  const player1 = players.makePlayer("peepo", "x");
  const player2 = players.makePlayer("peepo", "o");
  players.play(player1, 0, 0);
  players.play(player2, 0, 1);
  players.play(player1, 0, 2);

  console.log(gameBoard.board);
  check.checkAll();
})();
