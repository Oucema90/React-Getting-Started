import React, { useState } from 'react'


function Form () {
    // const usernameInput = React.createRef();

    const [state, setState] = useState({
        userName:''
    });

    const submitHandler = (event) =>{
        event.preventDefault();
    };


    
    return (
        <form onSubmit={submitHandler}>
            {/* ref={usernameInput} */}
            <input type='text' value={state.userName} placeholder='GitHub Username' onChange={event => {setState({userName:event.target.value})}}required /> 
            <button>Add card</button>
        </form>
    );
}

export default Form;