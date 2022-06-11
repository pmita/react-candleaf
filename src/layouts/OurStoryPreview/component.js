//ROUTER
import { Link } from 'react-router-dom';
//ASSETS
import { OurStoryImages } from '../../assets/variables/OurStoryImages';
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
                {OurStoryImages && OurStoryImages.map(image => (
                    <img 
                        key={image.id}
                        src={image.img_href} 
                        alt={image.altText}
                    />
                ))}
            </div>
        </div>
    );
}

export default OurStoryPreview;