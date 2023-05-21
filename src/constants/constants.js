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
	TEST: 'TEST',
};

const initialMoves = [
	{ pos: 1, symbol: undefined },
	{ pos: 2, symbol: undefined },
	{ pos: 3, symbol: undefined },
	{ pos: 4, symbol: undefined },
	{ pos: 5, symbol: undefined },
	{ pos: 6, symbol: undefined },
	{ pos: 7, symbol: undefined },
	{ pos: 8, symbol: undefined },
	{ pos: 9, symbol: undefined },
];

const victoryConditions = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

export { stages, symbols, initialMoves, actions, victoryConditions };
