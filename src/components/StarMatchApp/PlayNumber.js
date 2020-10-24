import React from 'react'
import colors from './../../colors'
import './../../index.css';

const PlayNumber = (props) => {
    return (
        <button style={{backgroundColor:colors[props.status]}} 
        className='number' 
        onClick={() => props.onClick(props.number,props.status)}>
            {props.number}
        </button>
    );
}

export default PlayNumber;