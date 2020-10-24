import React from 'react'
import './../../index.css';

const PlayNumber = (props) => {
    return (
        <button className='number'>{props.number}</button>
    );
}

export default PlayNumber;