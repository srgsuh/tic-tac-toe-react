import type {GameState, Move} from "../utils/types.ts";
import {Player, PlayerDisplay} from "../utils/types.ts";

export class Game {
    private static endGameMessage(winner: Player | null) {
        return winner? `Winner is ${PlayerDisplay[winner]}` : "Game is a draw";
    }
    private static regularMessage(turn: Player) {
        return `Player ${PlayerDisplay[turn]}'s turn`;
    }
    static gameInfo(isFinished: boolean, winner: Player | null, turn: Player): string {
        return isFinished ? this.endGameMessage(winner) : this.regularMessage(turn);
    }
    static makeMove(state: GameState, move: Move): GameState {
        const newTurn = state.turn === Player.X? Player.O : Player.X;
        const moveIndex = move.index;
        const newBoard = state.board.map((cell, idx) => (idx === moveIndex ? state.turn : cell));
        const isFinished = !newBoard.includes(Player.EMPTY);
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
          board: new Array(size * size).fill(Player.EMPTY),
          winner: null,
          isFinished: false,
          turn: Player.EMPTY,
        };
    }
}