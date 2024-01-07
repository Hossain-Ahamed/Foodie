import React from 'react';
import PricingCard from '../../components/LandingPagePricing/PricingCard';
import Faq from '../../components/FAQ/Faq';
import SetTitle from '../Shared/SetTtitle/SetTitle';

const PricingPage = () => {
    return (
        <>
            <SetTitle title="Pricing"/>
            <PricingCard />
            <Faq />
        </>
    );
};

export default PricingPage;