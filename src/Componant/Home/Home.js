import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
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
        // console.log(activity);
        const newData = [...data, activity]
        setData(newData);
    }

    return (
        <div>
            <h3 className='selection-part'>Select today activity</h3>
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
                    <Cart data={data}></Cart>

                </div>
            </div>
            <div>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;