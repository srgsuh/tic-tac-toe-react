import React from "react";
import {PlayerEnum} from "../../utils/types.ts";
import type {Player} from "../../utils/types.ts";
import "./Cell.css";

const CellClasses = {
    [PlayerEnum.X]: "cell cell-x",
    [PlayerEnum.O]: "cell cell-o",
    [PlayerEnum.EMPTY]: "cell",
}

interface CellProps {
    cellValue: Player;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isFinished: boolean;
}

const Cell = ({cellValue, onClick, isFinished}: CellProps) => {
    function getCellClass(cellValue: Player) {
        return CellClasses[cellValue];
    }

    function isDisabled(cellValue: Player, isWinner: boolean = false) {
        return (isWinner || cellValue !== PlayerEnum.EMPTY);
    }

    return (
        <button
            disabled={isDisabled(cellValue, isFinished)}
            className={getCellClass(cellValue)}
            onClick={onClick}
        >
            {cellValue}
        </button>
    );
}

export default Cell;