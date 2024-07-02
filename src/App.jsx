
import './App.css'
import StartGames from "./components/StartGames";
import GamePlay from "./components/GamePlay";
import { useState } from 'react';
const App = () => {
    const [isGameStarted, setGameStarted] = useState(false);
    const toggleGamePlay = () =>{
    setGameStarted((prev)=> !prev);
    }
    return (
    <>
    {isGameStarted? <GamePlay/> : <StartGames 
    toggle={toggleGamePlay}
    
    />
    }
     
    </>
  );
};

export default App;

