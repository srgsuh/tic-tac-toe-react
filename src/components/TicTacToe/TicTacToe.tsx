import React from "react";

import Cell from "../Cell/Cell";
import Label from "../Label/Label.tsx";
import {Player} from "../../utils/types";
//import {Game} from "../../service/game.ts";
import "./TicTacToe.css";

interface TicTacToeProps {
    size: number;
}

const TicTacToe = ({size}: TicTacToeProps) => {
    return (
        <div className="tic-tac-toe">
            <Label text={`Welcome to Tic-tac-toe size ${size} game`}/>
            <Cell cellValue = {Player.X}/>
        </div>
    );
}

export default TicTacToe;
