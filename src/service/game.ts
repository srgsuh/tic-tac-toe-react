import type {GameState, Move, Player} from "../utils/types.ts";
import {PlayerEnum} from "../utils/types.ts";

export class Game {
    private static endGameMessage(winner: Player | null) {
        return winner? `The player ${winner} has won!` : "Game has ended in a draw!";
    }

    private static regularMessage(turn: Player) {
        return `Player ${turn}'s turn`;
    }

    private static boardIsFull(board: Player[]) {
        return !board.includes(PlayerEnum.EMPTY);
    }

    static gameInfo(isFinished: boolean, winner: Player | null, turn: Player): string {
        return isFinished ? this.endGameMessage(winner) : this.regularMessage(turn);
    }

    static checkGameEndCondition(board: Player[], size: number, move: number, player: Player): GameState {
        const rowId = Math.floor(move / size), colId = move % size;
        const hasRowWin = board.slice(rowId * size, (rowId + 1) * size).every(cell => cell === player);
        const hasColWin = !hasRowWin && board.filter((_, i) => i % size === colId).every(cell => cell === player);
        const hasDiagWin = !hasColWin && rowId === colId
            && board.filter((_, i) => i%size === Math.floor(i / size)).every(cell => cell === player);
        const hasAntiDiagWin = !hasDiagWin && rowId + colId === size - 1
            && board.filter((_, i) => i % size + Math.floor(i / size) === size - 1).every(cell => cell === player);
        const isFinished = hasRowWin || hasColWin || hasDiagWin || hasAntiDiagWin || Game.boardIsFull(board);

        return {
            size,
            board,
            winner: hasRowWin || hasColWin || hasDiagWin || hasAntiDiagWin? player : null,
            isFinished,
            turn: player,
        }
    }
    static makeMove(state: GameState, move: Move): GameState {
        const newBoard = state.board.map((cell, idx) => (idx === move.index ? state.turn : cell));
        const nextState = Game.checkGameEndCondition(newBoard, state.size, move.index, state.turn);
        nextState.turn = state.turn === PlayerEnum.X? PlayerEnum.O : PlayerEnum.X;
        return nextState;
    }
    static initialGameState(size: number): GameState {
        return {
          size,
          board: new Array(size * size).fill(PlayerEnum.EMPTY),
          winner: null,
          isFinished: false,
          turn: PlayerEnum.X,
        };
    }
}