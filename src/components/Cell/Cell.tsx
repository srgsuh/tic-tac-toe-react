import React from "react";
import {Player, PlayerDisplay} from "../../utils/types";
import "./Cell.css";

const CellClasses = {
    [Player.X]: "cell cell-x",
    [Player.O]: "cell cell-o",
    [Player.EMPTY]: "cell",
}

interface CellProps {
    cellValue: Player;
    isWinner?: boolean;
}

const Cell = ({cellValue, isWinner = false}: CellProps) => {
    function getCellClass(cellValue: Player, isWinner?: boolean = false) {
        return (isWinner ? "cell cell-winner" : CellClasses[cellValue]);
    }

    function isDisabled(cellValue: Player) {
        return (cellValue !== Player.EMPTY);
    }

    return (
        <button disabled={isDisabled(cellValue)} className={getCellClass(cellValue, isWinner)}>
            {PlayerDisplay[cellValue]}
        </button>
    );
}

export default Cell;