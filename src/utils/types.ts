export interface Move {
    index: number;
}

export interface GameState {
    size: number;
    board: Player[];
    winner: Player | null;
    isFinished: boolean;
    turn: Player;
}

export const PlayerEnum = {
    X: "X",
    O: "0",
    EMPTY: " ",
} as const satisfies Record<string, string>;

export type Player = typeof PlayerEnum[keyof typeof PlayerEnum];