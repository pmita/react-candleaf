//ROUTER
import { Link } from 'react-router-dom';
//ASSETS
import CandleImageOne from '../../assets/images/candle-image-one.jpg';
import CandleImageTwo from '../../assets/images/candle-image-two.jpg';
import BodyCandle from '../../assets/images/body-candle.jpg'
import './style.scss';

const OurStoryPreview = () => {
    return(
        <div className='ourStory-preview'>
            <div className='ourStory-left'>
                <div className='ourStory-banner'>
                    <h2>Our Story</h2>
                    <p>
                    We started making these as gifts for our closest friends, with the purest 
                    of intentions and deepest of love. They loved them so much and pushed us to 
                    make it a product for everyone to experience. We focus on good ingredients 
                    with deep scent that can be used on every occasion and day
                    </p>
                </div>
                <Link to='/our-story' className='btn primary'>
                   Check our Story
                </Link>
            </div>
            <div className='ourStory-right'>
                <img src={BodyCandle} alt='body shaped candle on fire' />
                <img src={CandleImageOne} alt='canldeaf candle on top of a white background' />
                <img src={CandleImageTwo} alt='candleaf candle on top of desk background' />
            </div>
        </div>
    );
}

export default OurStoryPreview;