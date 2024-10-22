import React from 'react'
import './../../index.css';

const PlayAgain = (props) => {
    return (
    <div className='game-done'>
        <div className='message' style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}}>
            {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
    );
}

export default PlayAgain;