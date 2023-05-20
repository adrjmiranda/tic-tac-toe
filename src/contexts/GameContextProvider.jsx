import { useReducer, createContext } from 'react';

import { initialMoves, stages, symbols, actions } from '../constants/constants';

export const GameContext = createContext({
	gameStage: {},
	setGameStage: () => {},
});

const reducer = (state, action) => {
	switch (action.type) {
		case actions.START:
			return {
				...state,
				stage: stages.GAME,
				moves: initialMoves,
			};
		case actions.PLAY:
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
		case actions.RESTART:
		default:
			return state;
	}
};

const GameContextProvider = ({ children }) => {
	const [gameStage, setGameStage] = useReducer(reducer, {
		stage: stages.BEGINNING,
		currentSymbol: symbols.X,
		moves: initialMoves,
	});

	return (
		<GameContext.Provider value={{ gameStage, setGameStage }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
