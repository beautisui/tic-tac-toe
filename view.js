class TicTacToeView {
  displayBoard(board) {
    const boardString = board
      .map((cell) => (cell === 0 ? "⬜️" : cell))
      .reduce(
        (str, symbol, i) => str + symbol + ((i + 1) % 3 === 0 ? "\n" : " "),
        ""
      );

    console.clear();
    console.log(boardString);
  }

  getUserInput(player) {
    while (true) {
      const input = +prompt(
        `\t\t ${player.name} (${player.symbol}) Enter Your Choice (1-9)`
      );
      const index = input - 1;
      if (index >= 0 && index < 9) return index;
      console.log("\t\t Please enter a valid input!\n");
    }
  }

  declareMessage(winner) {
    if (winner) {
      console.log(
        `\t\t 🎉 ${winner.name} (${winner.symbol}) wins the game! 🥳`
      );
    } else {
      console.log("\t\t It's a tie! Play again! 🔄");
    }
  }
}

export default TicTacToeView;
