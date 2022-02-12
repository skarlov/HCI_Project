import Header from '../modules/header.js';
import FooterWhite from '../modules/footer_white.js';
import LatestBlackBg from '../modules/latest_recipes_black.js';
import SignUpDetails from '../modules/sign_up.js';

const SignUp = () => {
    return (
        <>
            <Header />
            <SignUpDetails />
            <LatestBlackBg />
            <FooterWhite />
        </>
    );
};

export default SignUp;