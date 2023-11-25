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
          break;
        }
      }
    };
    const verticalCheck = () => {
      if (check.win !== true) {
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
            console.log(check.win);
            console.log("winner 2");
            break;
          }
          tempArray = [];
        }
      } else return;
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
        }
      }
    };
    const checkAll = () => {
      if (gamePlay.turn <= 9) {
        horizontalCheck();
        verticalCheck();
        diagonalCheck();
        if (check.win == true) {
          render.renderWinner();
        } else if (gamePlay.turn == 9 && check.win != true) {
          render.renderTie();
        }
      }
    };
    return { checkAll, win };
  })();
  const cashDOM = (() => {
    return {
      restartButton: document.querySelector(".restart"),
      announcement: document.querySelector(".announcement"),
      player1name: document.querySelector("#firstPlayerName"),
      player2name: document.querySelector("#secondPlayerName"),
      submitButton: document.querySelector(".submit-button"),
      modal: document.querySelector(".modal"),
      board: document.querySelector(".board"),
      cells: document.querySelectorAll(".cell"),
    };
  })();
  const binding = (() => {
    function clickedCell(e) {
      if (check.win != true) {
        gamePlay.turnChange();
        gamePlay.play(
          gamePlay.currentPlayer,
          e.target.getAttribute("data-row"),
          e.target.getAttribute("data-col")
        );
        console.log(gameBoard.board);
        console.log(gamePlay.turn);
        render.renderMarker(e.target);
        check.checkAll();
        console.log(check.win);
      } else {
        return;
      }
    }
    cashDOM.restartButton.addEventListener("click", () => {
      cashDOM.announcement.innerHTML = "";
      gameBoard.generateBoard();
      check.win = null;
      gamePlay.turn = 0;
      cashDOM.cells.forEach((element) => {
        element.removeEventListener("click", clickedCell, { once: true });
        element.innerHTML = "";
      });
      clickCell();
    });
    const clickCell = () => {
      cashDOM.cells.forEach((element) => {
        element.addEventListener("click", clickedCell, { once: true });
      });
    };
    clickCell();
    document.addEventListener("DOMContentLoaded", () => {
      cashDOM.modal.show();
    });
    cashDOM.submitButton.addEventListener("click", (event) => {
      gameBoard.generateBoard();
      player1.playerName = cashDOM.player1name.value;
      player2.playerName = cashDOM.player2name.value;
      console.log(player1);
      console.log(player2);
    });
    return { clickCell };
  })();
  const render = (() => {
    const renderMarker = (element) => {
      element.innerHTML = `${gamePlay.currentPlayer.playerMarker}`;
    };
    const renderBoard = () => {};
    const renderWinner = () => {
      cashDOM.announcement.innerHTML = `${gamePlay.currentPlayer.playerName} wins`;
    };
    const renderTie = () => {
      cashDOM.announcement.innerHTML = `It's a tie`;
    };
    return { renderMarker, renderTie, renderWinner };
  })();
  const player1 = {
    playerName: null,
    playerMarker: "X",
  };
  const player2 = {
    playerName: null,
    playerMarker: "O",
  };
})();
