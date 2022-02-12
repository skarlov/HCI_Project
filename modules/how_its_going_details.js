import Image from 'next/image';

import HowItsGoingDetailsImg from '../assets/how_its_going.png';
import Newsletter from '../components/newsletter';
import SocialMedia from '../components/social_media';

const HowItsGoingDetails = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black align-center">
                <div className="drop-shadow-3xl flex flex-col ml-20 mt-10 mb-8 flex relative">
                    <Image
                        src={HowItsGoingDetailsImg}
                        layout="fixed"
                        width={500}
                        height={500}
                        alt="How It's Going"
                    />
                    <SocialMedia />
                    <Newsletter />
                </div>
                <div className="mt-16 ml-16 flex flex-col text-justify justify-between">
                    <div>

                        <div>
                            <h1 className="text-4xl font-raleway font-bold text-black">
                                How is it going?
                            </h1>

                        </div>
                        <div className="mt-10 w-5/6 text-justify">
                            <p className="font-raleway leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                            <p className="font-raleway leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                            <p className="text-xl m-6 font-raleway font-bold leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                            <p className="font-raleway leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                            <p className="font-raleway leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                            <p className="font-raleway leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                            <p className="text-xl m-6 font-raleway font-bold leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </section>
    );
};

export default HowItsGoingDetails;