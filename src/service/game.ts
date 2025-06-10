import type {GameState, Move, Player} from "../utils/types.ts";
import {PlayerEnum} from "../utils/types.ts";

export class Game {
    private static endGameMessage(winner: Player | null) {
        return winner? `The player ${winner} has won!` : "Game has ended in a draw!";
    }
    private static regularMessage(turn: Player) {
        return `Player ${turn}'s turn`;
    }
    static gameInfo(isFinished: boolean, winner: Player | null, turn: Player): string {
        return isFinished ? this.endGameMessage(winner) : this.regularMessage(turn);
    }
    static makeMove(state: GameState, move: Move): GameState {
        const newTurn = state.turn === PlayerEnum.X? PlayerEnum.O : PlayerEnum.X;
        const moveIndex = move.index;
        const newBoard = state.board.map((cell, idx) => (idx === moveIndex ? state.turn : cell));
        const isFinished = !newBoard.includes(PlayerEnum.EMPTY);
        return {
            size: state.size,
            board: newBoard,
            winner: null,
            isFinished: isFinished,
            turn: newTurn,
        }
    }
    static initialGameState(size: number): GameState {
        return {
          size,
          board: new Array(size * size).fill(PlayerEnum.EMPTY),
          winner: null,
          isFinished: false,
          turn: PlayerEnum.EMPTY,
        };
    }
}