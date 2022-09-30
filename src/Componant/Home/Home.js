import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1>I am from home</h1>
            <div className='home-container'>
                <div className='left-side'>
                    <h1>all activity</h1>
                </div>
                <div className='right-side'>
                    <h1>cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;