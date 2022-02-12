import Image from "next/image";

import HowItStartedImg1 from "../assets/how_it_started_1.png"
import HowItStartedImg2 from "../assets/how_it_started_2.png"

const HowItStartedDetails = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black align-center">
                <div className="drop-shadow-3xl flex flex-col w-1/2 ml-28 mt-10 mb-8 flex relative">
                    <div className="ml-12">
                        <Image
                            src={HowItStartedImg1}
                            layout="fixed"
                            width={500}
                            height={500}
                            alt="How It Started"
                        />
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
                    </div>

                </div>
                <div className="mt-16 mb-16 flex flex-col w-1/2 text-justify justify-between">
                    <div>
                        <div>
                            <h1 className="text-4xl font-raleway font-bold text-black">
                                How it started?
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

                        </div>
                        <div className="ml-12 mt-12">
                            <Image
                                src={HowItStartedImg2}
                                layout="fixed"
                                width={500}
                                height={500}
                                alt="How It Started"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default HowItStartedDetails;