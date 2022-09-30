import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Home.css'

const Home = () => {
    const [activitys, setActivitys] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivitys(data))

    }, []);

    const handleClick = (activity) => {
        console.log(activity);
        const newData = [...data, activity]
        setData(newData);
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
                        <h2>Shahriyar</h2>
                        <p>Dhaka, bangladesh</p>
                        <div className='personal-info'>
                            <p><b>60</b><small>kg</small> <br /> <small>Weight</small></p>
                            <p><b>6.5</b><br /><small>Height</small></p>
                            <p><b>25</b><small>yrs</small> <br />
                                <small>Age</small></p>
                        </div>
                        <h3>Add a break</h3>
                        <div className='btn-con'>
                            <button className='break-btn'>10m</button>
                            <button className='break-btn'>20m</button>
                            <button className='break-btn'>30m</button>
                            <button className='break-btn'>40m</button>

                        </div>
                        <h3>Exercize detile</h3>
                        <p>Exersize detile:{ }</p>
                        <p>Break time:{data.length}</p>
                        <button className='btn-com'>Activity complite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;