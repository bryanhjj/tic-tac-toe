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

//module for display
const displayController = (() => {

})();


//module for controlling the flow of the game
const gameController = (() => {

})();