export type Player = 'X' | 'O';
export type CellValue = Player | "";

export interface GameState {
    size: number;
    board: CellValue[];
    winner: Player | null;
    isFinished: boolean;
    turn: Player;
}

export interface Move {
    player: Player;
    index: number;
}