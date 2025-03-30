class TicTacToeModel {
  constructor() {
    this.board = Array(9).fill(0);
    this.players = [
      { name: "Player 1", symbol: "🟡" },
      { name: "Player 2", symbol: "🟢" },
    ];
    this.currentPlayerIndex = 0;
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  isPositionEmpty(index) {
    return this.board[index] === 0;
  }

  isValidIndex(index) {
    return index >= 0 && index < 9;
  }

  isValidMove(index) {
    return this.isValidIndex(index) && this.isPositionEmpty(index);
  }

  makeMove(index) {
    this.board[index] = this.currentPlayer.symbol;
  }

  switchPlayer() {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }

  hasAnyOneWon(symbol) {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningConditions.some((line) =>
      line.every((index) => this.board[index] === symbol)
    );
  }

  isGameTied() {
    return this.board.every((cell) => cell !== 0);
  }

  isGameOver() {
    return this.hasAnyOneWon(this.currentPlayer.symbol) || this.isGameTied();
  }
}

export default TicTacToeModel;
