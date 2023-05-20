import { useContext } from 'react';

import { GameContext } from './contexts/GameContextProvider';

import { stages } from './constants/constants';

import StartDisplay from './components/screens/StartDisplay';
import GameDisplay from './components/screens/GameDisplay';
import FinishDisplay from './components/screens/FinishDisplay';

import './App.css';

function App() {
	const { gameStage } = useContext(GameContext);

	return (
		<div className='container'>
			{gameStage.stage === stages.BEGINNING && <StartDisplay />}
			{gameStage.stage === stages.GAME && <GameDisplay />}
			{gameStage.stage === stages.FINISH && <FinishDisplay />}
		</div>
	);
}

export default App;
