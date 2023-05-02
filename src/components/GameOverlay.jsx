import React from "react";
const GameOverlay = ({ onRestart, board }) => {
    if (board.hasWon()) {
        return <div className="tile2048"></div>;
    } else if (board.hasLost()) {
        return <div className="gameOver" onClick={onRestart}></div>;
    }

    return null;
};

export default GameOverlay;
