import Header from '../modules/header.js';
import Footer from '../modules/footer_black.js';

import FooterWhite from '../modules/footer_white.js';
import LatestBlackBg from '../modules/latest_recipes_black.js';
import HowItsGoingDetails from '../modules/how_its_going_details.js';

const HowItStarted = () => {
    return (
        <>
            <Header />
            <HowItsGoingDetails />
            <LatestBlackBg />
            <FooterWhite />
        </>
    );
};

export default HowItStarted;