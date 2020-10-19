import React from 'react';

function Card(props) {
    return (
        <div style={{margin: '1rem'}}>
    	    <img src={props.avatar_url} alt={props.avatar_url}/>
            <div style={{display: 'inline-block', marginLeft: 12}}>
                <div style={{fontSize: '125%'}}>{props.name}</div>
                <div className="company">{props.company}</div>
            </div>
        </div>
    );
}

export default Card;