import React from 'react';
import TestData from '../../TestData';
import './../../index.css';
import CardList from './CardList';
import Form from './Form';
import { setState, useState } from 'react';

function GitHubCardApp(props) {

    const [profiles, setProfiles] = useState([]);
    const addNewProfile = (profileData) => {
        setProfiles([...profiles, profileData]);
    };
    return (
        <>
        <div className="header">{props.title}

        <Form onSubmit={addNewProfile}/>
        <CardList profileList={profiles}/>
        </div>
        </>
    );
}

export default GitHubCardApp;