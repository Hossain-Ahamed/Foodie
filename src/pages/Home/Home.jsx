import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            {/* This is home page
            <SectionTitle h1='Hello gelo'/> */}
            <Navbar />
        </div>
    );
};

export default Home;