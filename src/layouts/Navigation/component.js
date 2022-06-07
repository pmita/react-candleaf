import React from 'react';
//ASSETS
import Burger from '../../assets/images/svg/burger.svg'
//STYLES
import './style.scss';

const Navigation = () => {
    return(
        <nav>
            <img src={Burger} alt='Burger icon for mobiles' className='navigation-burger'/>
            <a href='/' id="navigation-logo">CandLeaf</a>
            <ul className='navigation-links active'>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Our Story</a></li>
                <li><a href='/'>Contact Us</a></li>
            </ul>
            <ul className='navigation-actions active'>
                <button className='btn primary'>Login</button>
                <button className='btn secondary'>Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navigation;