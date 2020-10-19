import React, { useState } from 'react';
import AddButton from '../../components/StarterApp/AddButton'
import Display from '../../components/StarterApp/Display'

function StarterApp () {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (v) => setCounter(counter+v);
    return (
        <>
        <AddButton onClickFunction={incrementCounter} increment={1}/>
        <AddButton onClickFunction={incrementCounter} increment={5}/>
        <AddButton onClickFunction={incrementCounter} increment={10}/>
        <AddButton onClickFunction={incrementCounter} increment={15}/>
        <Display value={counter}/>
    </>
    );
}

export default StarterApp;