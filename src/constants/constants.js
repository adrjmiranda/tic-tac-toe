const stages = {
	BEGINNING: 'BEGINNING',
	GAME: 'GAME',
	FINISH: 'FINISH',
};

const symbols = {
	X: 'X',
	O: 'O',
};

const actions = {
	START: 'START',
	PLAY: 'PLAY',
	RESTART: 'RESTART',
};

const initialMoves = [
	{ pos: 1, symbol: 'X' },
	{ pos: 2, symbol: undefined },
	{ pos: 3, symbol: undefined },
	{ pos: 4, symbol: undefined },
	{ pos: 5, symbol: undefined },
	{ pos: 6, symbol: undefined },
	{ pos: 7, symbol: undefined },
	{ pos: 8, symbol: undefined },
	{ pos: 9, symbol: undefined },
];

export { stages, symbols, initialMoves, actions };
