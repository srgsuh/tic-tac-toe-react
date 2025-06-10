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
    isWinner?: boolean;
}

const Cell = ({cellValue, onClick, isWinner = false}: CellProps) => {
    function getCellClass(cellValue: Player, isWinner: boolean = false) {
        return (isWinner ? "cell cell-winner" : CellClasses[cellValue]);
    }

    function isDisabled(cellValue: Player) {
        return (cellValue !== PlayerEnum.EMPTY);
    }

    return (
        <button
            disabled={isDisabled(cellValue)}
            className={getCellClass(cellValue, isWinner)}
            onClick={onClick}
        >
            {cellValue}
        </button>
    );
}

export default Cell;