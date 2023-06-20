import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import usePersistState from "./persistState";

function Counter() {

  const [playerScore1,setPlayerScore1] = usePersistState("playerScore1",0);
  const [playerScore2,setPlayerScore2] = usePersistState("playerScore2",0);
  const [disabled,setDisabled] = useState(false);

  return(
    <div id='main'>
      <div id='container'>
        <div id='player-button-div'>
          <button id='player1' onClick={incrementScore1} disabled={disabled}>Player-1</button>
          <button id='player2' onClick={incrementScore2} disabled={disabled}>Player-2</button>
        </div>
        <div id='score-div'>
          <p id='score1'>Player-1 Score : {playerScore1}</p>
          <p id='score2'>Player-2 Score: {playerScore2}</p>
        </div>
      </div>
    </div>
  )

  function incrementScore1() {
    if(playerScore1 >= 10 || playerScore2 >= 10) {
      setDisabled(true);
    }
    else{
      setPlayerScore1(playerScore1+1);
    }
  }

  function incrementScore2() {
    if(playerScore1 >= 10 || playerScore2 >= 10) {
      setDisabled(true);
    }
    else{
      setPlayerScore2(playerScore2+1);
    }
  }
}

export default Counter;