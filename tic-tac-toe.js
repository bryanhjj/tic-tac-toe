// factory function for players
const Player = (icon) => {
    const getIcon = () => icon;
    return {getIcon};
};

// module for gameboard
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setArea = (index, icon) => {
        if (index >= board.length) {
            alert("Invalid area, please try again.");
        };
        if (board[index] !="") {
            alert("That area is no longer available, please pick another area.");
        } else {
            board[index] = icon;
        };
    };

    const getArea = (index) => {
        return board[index];
    };

    const clearBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        };
    }

    return {setArea, getArea, clearBoard};

})();

//module for functions for the game
const gameController = (() => {
    const player1 = Player("X");
    const player2 = Player("O");
    let curPlayer;
    let round = 1;
    let player1Won = false;
    let player2Won = false;

    // checks for winnning conditions
    const checkRows = () => {
        const row1 = [gameBoard.getArea(0), gameBoard.getArea(1), gameBoard.getArea(2)];
        const row2 = [gameBoard.getArea(3), gameBoard.getArea(4), gameBoard.getArea(5)];
        const row3 = [gameBoard.getArea(6), gameBoard.getArea(7), gameBoard.getArea(8)];

        if (row1.every(icon => icon == "X") || row2.every(icon => icon == "X") || row3.every(icon => icon == "X")) {
            player1Won = true;
        } else if (row1.every(icon => icon == "O") || row2.every(icon => icon == "O") || row3.every(icon => icon == "O")) {
            player2Won = true;
        };
    };

    const checkColumns = () => {
        const column1 = [gameBoard.getArea(0), gameBoard.getArea(3), gameBoard.getArea(6)];
        const column2 = [gameBoard.getArea(1), gameBoard.getArea(4), gameBoard.getArea(7)];
        const column3 = [gameBoard.getArea(2), gameBoard.getArea(5), gameBoard.getArea(8)];

        if (column1.every(icon => icon == "X") || column2.every(icon => icon == "X") || column3.every(icon => icon == "X")) {
            player1Won = true;
        } else if (column1.every(icon => icon == "O") || column2.every(icon => icon == "O") || column3.every(icon => icon == "O")) {
            player2Won = true;
        };
    };

    const checkDiagonal = () => {
        const diag1 = [gameBoard.getArea(0), gameBoard.getArea(4), gameBoard.getArea(8)];
        const diag2 = [gameBoard.getArea(2), gameBoard.getArea(4), gameBoard.getArea(6)];

        if (diag1.every(icon => icon == "X") || diag2.every(icon => icon == "X")) {
            player1Won = true;
        } else if (diag1.every(icon => icon == "O") || diag2.every(icon => icon == "O")) {
            player2Won = true;
        };
    };

    // to switch between players based on the rounds (ie. player1 always go first in the 1st round)
    const switchIcon = () => {
        if (round % 2 != 0) {
            curPlayer = player1;
        } else {
            curPlayer = player2;
        }
    };

    const winCheck = () => {
        if (round > 9) {
            alert("It's a draw!");
            round = 0;
            gameBoard.clearBoard();
        } else if (player1Won == true) {
            alert ("Congratulations, Player 1 won!");
        } else if (player2Won == true) {
            alert ("Congratulations, Player 2 won!");
        }
    };

    const play = (index) => {
        gameBoard.setArea(index, curPlayer.getIcon());
        gameController.checkColumns();
        gameController.checkRows();
        gameController.checkDiagonal();
        gameController.winCheck();
        gameController.switchIcon();
        round++;
    };

    return {play};

})();

//module for display
const displayController = (() => {

})();