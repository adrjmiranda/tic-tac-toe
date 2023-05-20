import { useContext } from 'react';

import { actions } from '../../constants/constants';

import Button from '../Button';

import { GameContext } from '../../contexts/GameContextProvider';

const StartDisplay = () => {
	const { setGameStage } = useContext(GameContext);

	const handleToggleStage = () => {
		setGameStage({ type: actions.START });
	};

	return (
		<div className='start'>
			<h1>
				<span>Tic</span>-<span>Tac</span>-<span>Toe</span>
			</h1>
			<Button buttonText={'Start'} handleToggleStage={handleToggleStage} />
		</div>
	);
};

export default StartDisplay;
