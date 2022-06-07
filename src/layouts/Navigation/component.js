import React from 'react';
//ASSETS
import Burger from '../../assets/images/svg/burger.svg'
//STYLES
import './style.scss';

const Navigation = () => {
    return(
        <nav>
            <a href='/'>CandLeaf</a>
            <ul className='navigation-links'>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Our Story</a></li>
                <li><a href='/'>Contact Us</a></li>
            </ul>
            <ul className='navigation-actions'>
                <button>Login</button>
                <button>Sign Up</button>
            </ul>
            <img src={Burger} alt='Burger icon for mobiles' />
        </nav>
    )
}

export default Navigation;