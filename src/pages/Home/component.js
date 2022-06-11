import React from 'react';
//COMPONENTS
import Banner from '../../layouts/Banner/component';
import OurStoryPreview from '../../layouts/OurStoryPreview/component';
//STYLES
import './style.scss';

const Home = () => {
    return(
        <>
            <Banner />
            <OurStoryPreview />
        </>
    );
}

export default Home;