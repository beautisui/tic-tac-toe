import TicTacToeModel from "./model.js";
import TicTacToeView from "./view.js";

class TicTacToeController {
  constructor() {
    this.model = new TicTacToeModel();
    this.view = new TicTacToeView();
  }

  isValidMove(userInput) {
    return this.model.isValidMove(userInput);
  }

  isWon() {
    return this.model.hasAnyOneWon(this.model.currentPlayer.symbol);
  }

  displayBoard() {
    this.view.displayBoard(this.model.board);
  }

  declareResult() {
    this.view.declareMessage(this.isWon() ? this.model.currentPlayer : null);
  }

  startGame() {
    let shouldGameGoOn = true;

    while (shouldGameGoOn) {
      this.displayBoard();
      const userInput = this.view.getUserInput(this.model.currentPlayer);

      if (!this.isValidMove(userInput)) {
        console.log("\t\t Invalid move! Try again.");
        continue;
      }

      this.model.makeMove(userInput);
      this.displayBoard();

      if (this.model.isGameOver()) {
        this.declareResult();
        shouldGameGoOn = false;
        continue;
      }

      this.model.switchPlayer();
    }
  }
}

export default TicTacToeController;
