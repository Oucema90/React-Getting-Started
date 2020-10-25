import {useState, useEffect} from 'react'
import utils from './../../utils'

const useGameState = () => {
    const [stars,setStars] = useState(utils.random(1,9));
    const [availableNums,setAvailableNums] = useState(utils.range(1,9));
    const [candiadateNums,setCandiadateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
    // setTimeout
    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0){
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft-1);
            },1000)
            return () => clearTimeout(timerId);
        }
    });

    const setGameState = (newCandiadateNums) => {
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
    };
    return {stars, availableNums, candiadateNums,secondsLeft,setGameState};
}

export default useGameState;