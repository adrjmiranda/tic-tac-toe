import { BsCircle } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { useContext } from 'react';

import { GameContext } from '../../contexts/GameContextProvider';

import { actions, results, symbols } from '../../constants/constants';

import Button from '../Button';

const FinishDisplay = () => {
	const { gameStage, setGameStage } = useContext(GameContext);

	const handleToggleStage = () => {
		setGameStage({ type: actions.START });
	};

	return (
		<div className='finish'>
			{gameStage.result === results.WIN && (
				<h1>
					<span>
						{gameStage.currentSymbol === symbols.X ? <GrClose /> : <BsCircle />}
					</span>{' '}
					won !
				</h1>
			)}
			{gameStage.result === results.DRAW && <h1>Draw !</h1>}
			<Button buttonText={'Play again'} handleToggleStage={handleToggleStage} />
		</div>
	);
};

export default FinishDisplay;
