import Image from 'next/image';

import CupcakesImg from '../assets/cupcakes.png';
import LearnMoreAbout from '../components/learn_more_about_button.js';

const About = () => {
    return (
        <section className="bg-web-main bg-contain pt-12">
            <main className="max-w-4xl mx-auto flex align-center">

                <div className="mt-16 mr-10 flex flex-col text-justify justify-between">
                    <div>
                        <div>
                            <h1 className="text-4xl font-raleway font-bold text-black">
                                Welcome to the
                            </h1>
                            <h1 className="text-4xl font-raleway font-bold text-black">
                                Spooky Kitchen!
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
                        </div>
                    </div>
                    <LearnMoreAbout />
                </div>
                <div className="drop-shadow-3xl mt-8 flex relative">
                    <Image
                        src={CupcakesImg}
                        layout="fixed"
                        width={400}
                        height={485}
                        alt="Cupcakes"
                    />
                </div>
            </main>
        </section>
    );
};

export default About;