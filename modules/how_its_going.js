import Image from 'next/image';

import HowItsGoingImg from '../assets/howitsgoing.png';
import LearnMoreHIG from '../components/learn_more_hig_button.js';

const HowItsGoing = () => {
    return (
        <section className="bg-black bg-cover bg-web-2 pt-12">
            <main className="max-w-4xl mx-auto flex text-white align-center">

                <div className="mt-8 ml-16 flex flex-col text-justify justify-between">
                    <div>

                        <div>
                            <h1 className="text-4xl font-raleway font-bold text-white">
                                How is it going?
                            </h1>

                        </div>
                        <div className="mt-10 w-5/6 text-justify">
                            <p className="font-raleway leading-8">
                                I’ve morphed my love of making food with my former career as a magazine designing Creative Director to become a recipe creating, photo-taking, storytelling, food blogging content creator.
                                <br />
                                The web has become a virtual food buffet and I count my lucky stars that I’m a part of it.
                            </p>
                        </div>
                    </div>
                    <LearnMoreHIG />
                </div>
                <div className="drop-shadow-3xl mb-8 flex relative">
                    <Image
                        src={HowItsGoingImg}
                        layout="fixed"
                        width={450}
                        height={450}
                        alt="How It's Going"
                    />
                </div>
            </main>
        </section>
    );
};

export default HowItsGoing;
