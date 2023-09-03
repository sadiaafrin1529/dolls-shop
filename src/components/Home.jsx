import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Gallery from './Gallery';
import Category from './Category';
import PupolarToys from './PupolarToys';
import Contact from './Contact';
import ShortGalary from './ShortGalary';
import JoinUs from './JoinUs';
import Discount from './Discount';

const Home = () => {
    return (
        <div>
            <Banner />
            <Discount />
            <Gallery />

            <Category />
            <PupolarToys />
            <Contact />
            <ShortGalary />
            <JoinUs />
            <Footer />
        </div>
    );
};

export default Home;