export enum Player {
    X,
    O,
    EMPTY,
}
export const PlayerDisplay = {
    [Player.X]: 'X',
    [Player.O]: 'O',
    [Player.EMPTY]: '',
};

export interface GameState {
    size: number;
    board: Player[];
    winner: Player | null;
    isFinished: boolean;
    turn: Player;
}

export interface Move {
    player: Player;
    index: number;
}