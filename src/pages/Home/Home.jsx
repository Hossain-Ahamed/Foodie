import React from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Header from '../Shared/Header/Header.jsx';
import Banner from '../../components/LandingPageBanner/Banner.jsx';
import Divider from '../../components/LandingPageDivider/Divider.jsx';
import Feature from '../../components/LandingPageFeatureSection/Feature.jsx';
import home2 from '../../assets/images/Home/home2.png';
import Pricing from '../../components/LandingPagePricing/PricingCard.jsx';
import Footer from '../Shared/Footer/Footer.jsx';
import SetTitle from '../Shared/SetTtitle/SetTitle.jsx';
const Home = () => {
    return (
        <div>
            <SetTitle title="Home"/>
            <ScrollToTop />

            {/* this is banner image under navbar */}
            <Banner />

            {/* this is the section under banner image */}
            <Divider />

            <Feature
                img={home2}
                flexDirection={false}
                background={true}
                responsiveDirection='flex-row'
                heading='OUR SOFTWARE FEATURES'
            />
            <Feature
                img={home2}
                flexDirection={true}
                background={false}
                responsiveDirection='flex-row-reverse'
                heading='OUR SOFTWARE FEATURES'
            />

            {/* <Feature
            img={home2}
            heading='Download Our Software'
            /> */}

    
        </div>
    );
};

export default Home;