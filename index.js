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
})();
