import React from 'react';
import './Activity.css'

const Activity = (props) => {
    console.log(props.activity)
    const { name, picture, about, age, time } = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>{about}</p>
                <p>For age: {age}</p>
                <p>Time required: {time}</p>
            </div>
            <button className='btn-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activity;