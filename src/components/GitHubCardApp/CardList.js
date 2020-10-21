import React from 'react'
import Card from './Card';

const CardList = (props) => (
    <div>
        {props.profileList.map(profile => <Card {...profile}/>)}
        {/* <Card {...TestData[0]}/> */}
    </div>
);

export default CardList;