import React from 'react';
import utils from '../../utils' 
import './../../index.css';
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain'
import useGameState from './useGameState';

const Game = (props) => {
    const {stars,availableNums,candiadateNums,secondsLeft,setGameState} = useGameState();
    const candidatesAreWrong = utils.sum(candiadateNums) > stars;
    const gameStatus = availableNums.length === 0 ? 
    'won' : 
    secondsLeft === 0 ? 
    'lost' : 
    'active';

    // const resetGame = () => {
    //     setStars(utils.range(1,9));
    //     setAvailableNums(utils.range(1,9));
    //     setCandiadateNums([]);
    //     setSecondsLeft(10);
    // }
    
    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }

        if (candiadateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    }

    const onNumberClick = (number,currentStatus) => {
        if (currentStatus === 'used' || secondsLeft === 0) {
            return;
        }
        const newCandiadateNums = currentStatus === 'available' ?
         candiadateNums.concat(number) :
         candiadateNums.filter(cn => cn !== number);
         setGameState(newCandiadateNums);
    }
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
              {gameStatus !== 'active' ?
              (<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>) : (<StarsDisplay count={stars} />)}
              
          </div>
          <div className="right">
          {utils.range(1,9).map(number => <PlayNumber status={numberStatus(number)} onClick={onNumberClick} key={number} number={number}/>)}
          </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };

  export default Game;