import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Gallery from './Gallery';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner />

            <Gallery />
            <Category />
            <Footer />
        </div>
    );
};

export default Home;