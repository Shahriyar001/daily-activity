import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
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
                    {
                        activitys.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
                <div className='data-side'>
                    <div className='cart'>
                        <p>This is player cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;