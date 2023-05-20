import Button from '../Button';

const FinishDisplay = () => {
	return (
		<div className='finish'>
			<h1>You won/lost!</h1>
			<Button buttonText={'Play again'} />
		</div>
	);
};

export default FinishDisplay;
