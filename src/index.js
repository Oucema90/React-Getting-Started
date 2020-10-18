import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import props from 'prop-types';

function Button (props) { 
    const handleClick = () =>  props.onClickFunction(props.increment);
    return (
    <button onClick={handleClick}>
        +{props.increment}
    </button>
    );
}

function Display (props) {
    return (
        <div>{props.value}</div>
    );
}

// function Button () {
//     const [counter, setCounter] = useState(5);
//     return <button onClick={() => setCounter(counter*2)}>{counter}</button>
// }

function App () {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (v) => setCounter(counter+v);
    return (
        <>
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={15}/>
        <Display value={counter}/>
    </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );