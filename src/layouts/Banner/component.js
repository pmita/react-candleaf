import React from 'react';
import './style.scss';

const Banner = () => {
    return(
        <div className='banner-section'>
            <div className='banner-left'>
            </div>
            <div className='banner-right'>
                <h2>Fragrant with every flame</h2>
                <h4>
                    Simple, organic, with a soft scent that permiates all odours. 
                    Suitable for all occasions
                </h4>
                <div className='banner-actions'>
                    <button className='btn primary'>Shop Now</button>
                    <button className='btn secondary'>Check us Out</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;