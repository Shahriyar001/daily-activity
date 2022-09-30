import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props.activity)
    const { name, picture, about, age, time } = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Activity;