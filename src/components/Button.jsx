const Button = ({ buttonText, handleToggleStage }) => {
	return (
		<button className='button' onClick={handleToggleStage}>
			{buttonText}
		</button>
	);
};

export default Button;
