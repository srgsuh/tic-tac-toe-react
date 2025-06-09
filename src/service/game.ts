import {CellValue, Move, GameState} from "../utils/types.ts";



export class Game {
    static randomCell(): CellValue {
        return ['X', 'O', ''][Math.floor(Math.random() * 3)];
    }
    static initialGameState(size: number): GameState {
        return {
          size,
          board: new Array(size * size).fill(''),
          winner: null,
          isFinished: false,
          turn: 'X',
        };
    }
    static makeMove(state: GameState, move: Move): GameState {
        console.log(move.player, move.index);
        return {
            size: state.size,
            board: Array.from({length: state.size * state.size}, Game.randomCell),
            winner: null,
            isFinished: false,
            turn: state.turn === 'X' ? 'O' : 'X',
        }
    }
}