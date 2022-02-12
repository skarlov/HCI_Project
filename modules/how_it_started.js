import Image from 'next/image';

import HowItStartedImg from '../assets/howitstarted.png';
import LearnMoreHIS from '../components/learn_more_his_button.js';

const HowItStarted = () => {
    return (
        <section className="bg-web-main bg-contain pt-12">
            <main className="max-w-4xl mx-auto flex align-center">
                <div className="drop-shadow-3xl mb-8 flex relative">
                    <Image
                        src={HowItStartedImg}
                        layout="fixed"
                        width={450}
                        height={450}
                        alt="How It Started"
                    />
                </div>
                <div className="mt-8 ml-16 flex flex-col text-justify justify-between">


                    <div>
                        <h1 className="text-4xl font-raleway font-bold text-black">
                            How did it start?
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
                    <LearnMoreHIS />
                </div>

            </main>
        </section>
    );
};

export default HowItStarted;