import React from 'react';
import './../../index.css';
import CardList from './CardList';

function GitHubCardApp(props) {
    return (
        <>
        <div className="header">{props.title}
        <CardList/>
        </div>
        </>
    );
}

export default GitHubCardApp;