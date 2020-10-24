import React, {useState} from 'react';
import utils from './../../utils' 
import './../../index.css';
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay';

const StarMatchApp = () => {
    const [stars,setStars] = useState(utils.random(1,9));
    const [availableNums,setAvailableNums] = useState(utils.range(1,9));
    const [candiadateNums,setCandiadateNums] = useState([]);

    const candidatesAreWrong = utils.sum(candiadateNums) > stars;

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
        if (currentStatus === 'used') {
            return;
        }
        const newCandiadateNums = candiadateNums.concat(number);

        if (utils.sum(newCandiadateNums) !== stars) {
            setCandiadateNums(newCandiadateNums);
        }
        else {
            const newAvailableNums = availableNums.filter(
                n => !newCandiadateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums,9));
            setAvailableNums(newAvailableNums);
            setCandiadateNums([]);
        }
    }
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
              <StarsDisplay count={stars} />
          </div>
          <div className="right">
          {utils.range(1,9).map(number => <PlayNumber status={numberStatus(number)} onClick={onNumberClick} key={number} number={number}/>)}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  export default StarMatchApp;