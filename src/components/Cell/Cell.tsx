import {Component} from "react";
import {CellValue} from "../../utils/types";
import "./Cell.css";

interface CellProps {
    cellValue: CellValue;
    isWinner?: boolean;
}

class Cell implements Component<CellProps> {
    getCellClass(cellValue: CellValue, isWinner?: boolean = false) {
        let className = 'cell';
        if (isWinner) {
            className += ' cell-winner';
            return className;
        }
        switch (cellValue) {
            case 'X':
                className += ' cell-x';
                break;
            case "O":
                className += ' cell-o';
        }
        return className;
    }
    getCellDisabled(cellValue: CellValue) {
        return cellValue === 'O';
    }
    render() {
        const {cellValue} = this.props;
        return (
            <button disabled={this.getCellDisabled(cellValue)} className={this.getCellClass(cellValue)}></button>
        );
    }
}

export default Cell;