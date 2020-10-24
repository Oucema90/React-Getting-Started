import React, {useState} from 'react';
import utils from './../../utils' 
import './../../index.css';
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay';

const StarMatchApp = () => {
    const [stars,setStars] = useState(utils.random(1,9));
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
          {utils.range(1,9).map(number => <PlayNumber key={number} number={number}/>)}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  export default StarMatchApp;