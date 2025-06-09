import React, {useReducer} from "react";

import Cell from "../Cell/Cell";
import GameLabel from "../GameLabel/GameLabel.tsx";
import {Game} from "../../service/game";

import "./TicTacToe.css";

interface TicTacToeProps {
    size: number;
}

const TicTacToe = ({size}: TicTacToeProps) => {
    const [game, dispatch] = useReducer(Game.makeMove, Game.initialGameState(size));
    const cells = game.board.map((cell, idx) =>
        (<Cell cellValue={cell} key = {idx} onClick={() => dispatch({index: idx})}/>)
    );
    const labelText = Game.gameInfo(game.isFinished, game.winner, game.turn);
    return (
        <div className="game-container">
            <GameLabel text={labelText}/>
            <div className="board">
                {cells}
            </div>
        </div>
    );
}

export default TicTacToe;
