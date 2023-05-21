import { useContext } from 'react';

import { GameContext } from '../../contexts/GameContextProvider';

import { actions } from '../../constants/constants';

import PlayingArea from '../PlayingArea';

const GameDisplay = () => {
	const { gameStage, setGameStage } = useContext(GameContext);

	const handleMove = (position) => {
		setGameStage({ type: actions.PLAY, payload: position });
		setGameStage({ type: actions.TEST });
	};

	return (
		<div className='game'>
			{gameStage.moves.map((move) => (
				<PlayingArea key={move.pos} handleMove={handleMove} move={move} />
			))}
		</div>
	);
};

export default GameDisplay;
