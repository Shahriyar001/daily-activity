import React from 'react';
import './Cart.css'

const Cart = (data) => {
    console.log(data)
    console.log(data.length)
    return (
        <div>
            <div className='cart'>
                <p>selected item:{data.length}</p>
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
    );
};

export default Cart;