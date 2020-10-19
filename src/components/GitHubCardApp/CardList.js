import React from 'react'
import Card from './Card';
import TestData from'./../../TestData'

const CardList = () => (
    <div>
        {TestData.map(profile => <Card {...profile}/>)}
        {/* <Card {...TestData[0]}/> */}
    </div>
);

export default CardList;