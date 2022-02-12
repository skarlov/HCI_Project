import Header from '../modules/header.js';
import Footer from '../modules/footer_black.js';

import HowItsGoing from '../modules/how_its_going.js';
import Latest from '../modules/latest_recipes_white.js';
import FooterWhite from '../modules/footer_white.js';
import LatestBlackBg from '../modules/latest_recipes_black.js';
import HowItStartedDetails from '../modules/how_it_started_details.js';

const HowItStarted = () => {
    return (
        <>
            <Header />
            <HowItStartedDetails />
            <LatestBlackBg />
            <FooterWhite />
        </>
    );
};

export default HowItStarted;