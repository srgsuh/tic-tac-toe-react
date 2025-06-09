import {GameState, Move, Player,} from "../utils/types.ts";


export class Game {
    static randomCell(): CellValue {
        return Math.floor(Math.random() * 3);
    }
    static makeMove(state: GameState, move: Move): GameState {
        console.log(move.player, move.index);
        return {
            size: state.size,
            board: Array.from({length: state.size * state.size}, Game.randomCell),
            winner: null,
            isFinished: false,
            turn: state.turn === Player.X? Player.O : Player.X,
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