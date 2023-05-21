import { useReducer, createContext } from 'react';

import {
	initialMoves,
	stages,
	symbols,
	actions,
	victoryConditions,
	results,
} from '../constants/constants';

export const GameContext = createContext({
	gameStage: {},
	setGameStage: () => {},
});

const checkWin = (moves) => {
	let check = false;

	victoryConditions.forEach((condition) => {
		const combination = moves.filter((move) => condition.includes(move.pos));

		if (
			combination.every(
				(item) => item.symbol === combination[0].symbol && item.symbol
			)
		) {
			check = true;
		}
	});

	return check;
};

const checkDraw = (moves) => {
	return moves.every((move) => move.symbol);
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.START:
			return {
				...state,
				stage: stages.GAME,
				currentSymbol: symbols.X,
				moves: initialMoves,
				result: results.EMPTY,
			};

		case actions.TEST:
			if (checkWin(state.moves)) {
				state.currentSymbol =
					state.currentSymbol === symbols.X ? symbols.O : symbols.X;

				return {
					...state,
					stage: stages.FINISH,
					result: results.WIN,
				};
			} else if (checkDraw(state.moves)) {
				return {
					...state,
					stage: stages.FINISH,
					result: results.DRAW,
				};
			}

			return state;

		case actions.PLAY:
			if (checkDraw(state.moves) || checkWin(state.moves)) {
				return;
			}

			return {
				...state,
				moves: state.moves.map((move) => {
					if (action.payload === move.pos && !move.symbol) {
						state.currentSymbol =
							state.currentSymbol === symbols.X ? symbols.O : symbols.X;

						return {
							...move,
							symbol: state.currentSymbol,
						};
					} else {
						return move;
					}
				}),
			};

		default:
			return state;
	}
};

const GameContextProvider = ({ children }) => {
	const [gameStage, setGameStage] = useReducer(reducer, {
		stage: stages.BEGINNING,
		currentSymbol: symbols.X,
		moves: initialMoves,
		result: results.EMPTY,
	});

	return (
		<GameContext.Provider value={{ gameStage, setGameStage }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
