import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [activitys, setActivitys] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivitys(data))

    }, [])
    return (
        <div>
            <h1>I am from home</h1>
            <div className='home-container'>
                <div className='active-side'>
                    <h1>all activity: {activitys.length}</h1>
                </div>
                <div className='data-side'>
                    <h1>cart</h1>
                    <div className='cart'>
                        <p>This is player cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;