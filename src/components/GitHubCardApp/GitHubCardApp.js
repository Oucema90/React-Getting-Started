import React from 'react';
import TestData from '../../TestData';
import './../../index.css';
import CardList from './CardList';
import Form from './Form';
import { useState } from 'react';

function GitHubCardApp(props) {
    const [profiles,setProfiles] = useState(TestData);
    return (
        <>
        <div className="header">{props.title}

        <Form/>
        <CardList profileList={profiles}/>
        </div>
        </>
    );
}

export default GitHubCardApp;