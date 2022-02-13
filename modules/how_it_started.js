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
                            From making after school snacks of Triscuits with liverwurst, pickles, and mustard to serving Thanksgiving dinner and my favorite turkey for 40, I’m the one you’ll find happily cooking away in the kitchen.
                        </p>
                    </div>
                    <LearnMoreHIS />
                </div>

            </main>
        </section>
    );
};

export default HowItStarted;
