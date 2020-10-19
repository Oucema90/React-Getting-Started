import React, {useState} from 'react';

function MultiplyButton () {
    const [counter, setCounter] = useState(5);
    return <button onClick={() => setCounter(counter*2)}>{counter}</button>
}

export default MultiplyButton;