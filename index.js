const ttt = (() => {
  const render = (() => {})();
  const form = (() => {})();
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
      gameBoard.board[row][column] = player.playerMarker;
      gamePlay.turn++;
    };
    return { turnChange, play, currentPlayer, turn: 0 };
  })();
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
        tempArrayChecker(gameBoard.board[i]) &&
        gameBoard.board[i].length === 3 &&
        !gameBoard.board[i].includes(undefined)
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
        tempArrayChecker(tempArray) &&
        tempArray.length === 3 &&
        !tempArray.includes(undefined)
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
        tempArrayChecker(tempArray) === true &&
        tempArray.length === 3 &&
        !tempArray.includes(undefined)
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
          tempArrayChecker(tempArray) === true &&
          tempArray.length === 3 &&
          !tempArray.includes(undefined)
        ) {
          check.win = true;
          console.log("winner 4");
        }
      }
    };
    const checkAll = () => {
      if (gamePlay.turn == 9) {
        console.log("tie");
      } else {
        horizontalCheck();
        verticalCheck();
        diagonalCheck();
      }
    };
    return { checkAll, win };
  })();
  const binding = (() => {
    const restartButton = document.querySelector(".restart");
    const newGameButton = document.querySelector(".new-game");
    const player1Score = document.querySelector(".player-1-score");
    const player2Score = document.querySelector(".player-2-score");
    const announcement = document.querySelector(".announcement");
    const player1name = document.querySelector(".firstPlayerName");
    const player2name = document.querySelector(".secondPlayerName");
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");
    restartButton.addEventListener("click", gameBoard.generateBoard());
    cells.forEach((element) => {
      element.addEventListener(
        "click",
        (e) => {
          if (check.win != true) {
            gamePlay.turnChange();
            gamePlay.play(
              gamePlay.currentPlayer,
              e.target.getAttribute("data-row"),
              e.target.getAttribute("data-col")
            );
            console.log(gameBoard.board);
            console.log(gamePlay.turn);
            check.checkAll();
            console.log(check.win);
          } else {
            return;
          }
        },
        { once: true }
      );
    });
  })();
  const player1 = {
    playerName: "Aymen",
    playerMarker: "X",
  };
  const player2 = {
    playerName: "nemyA",
    playerMarker: "O",
  };
})();
