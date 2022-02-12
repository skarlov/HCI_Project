import Header from '../modules/header.js';
import Footer from '../modules/footer_black.js';

import HowItStarted from '../modules/how_it_started.js';
import HowItsGoing from '../modules/how_its_going.js';
import LatestWhiteBg from '../modules/latest_recipes_white.js';

const AboutPage = () => {
    return (
        <>
            <Header />
            <HowItStarted />
            <HowItsGoing />
            <LatestWhiteBg />
            <Footer />
        </>
    );
};

export default AboutPage;