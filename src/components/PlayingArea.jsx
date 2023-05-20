import { BsCircle } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { symbols } from '../constants/constants';

const PlayingArea = ({ move, handleMove }) => {
	return (
		<div className='playing_area' onClick={() => handleMove(move.pos)}>
			{move.symbol === symbols.X && <GrClose />}
			{move.symbol === symbols.O && <BsCircle />}
		</div>
	);
};

export default PlayingArea;
