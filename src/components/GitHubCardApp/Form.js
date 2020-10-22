import React, { useState } from 'react'
import axios from 'axios';


function Form (props) {
    // const usernameInput = React.createRef();

    const [state, setState] = useState({
        username:''
    });

    const submitHandler = async (event) =>{
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${state.username}`);
        console.log(response.data.login)
        props.onSubmit(response.data);

        setState({username:''});
    };


    
    return (
        <form onSubmit={submitHandler}>
            {/* ref={usernameInput} */}
            <input type='text' value={state.username} placeholder='GitHub Username' onChange={event => {setState({username:event.target.value})}}required /> 
            <button>Add card</button>
        </form>
    );
}

export default Form;