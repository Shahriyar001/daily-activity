import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Home.css'

const Home = () => {
    const [activitys, setActivitys] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivitys(data))

    }, []);

    const handleClick = (activity) => {
        console.log(activity);
    }

    return (
        <div>
            <h3>Select today activity</h3>
            <div className='home-container'>
                <div className='active-side'>
                    {
                        activitys.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleClick={handleClick}
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