import PlayingAreas from '../PlayingAreas';

const GameDisplay = () => {
	const ttt = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div className='game'>
			{ttt.map((t) => (
				<PlayingAreas />
			))}
		</div>
	);
};

export default GameDisplay;
