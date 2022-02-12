import Image from "next/image";

import SocialMedia from "../components/social_media";
import Newsletter from "../components/newsletter";
import FrankImg from "../assets/sign_up.png";

const SignUpDetails = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black items-center">

                <div className="mt-8 mb-8 flex flex-col text-justify w-1/2 px-16 relative">
                    <div>
                        <h1 className="text-4xl px-20 font-raleway font-bold text-black">
                            Wanna be the first to know about new recipes?
                        </h1>

                    </div>
                    <div className="mt-10 text-justify px-20">
                        <p className="font-raleway leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>

                    </div>
                    <div className="text-justify px-8">
                        <p className="text-xl m-6 font-raleway font-bold text-center leading-8">
                            SIGN UP FOR THE NEWSLETTER 🎃
                        </p>
                    </div>
                    <div className="px-6 items-center ml-8 mt-8">
                        <Newsletter />
                    </div>
                </div>
                <div className="flex flex-col w-1/2 px-16 mt-8 justify-between">
                    <div className="flex-col items-center">
                        <Image
                            src={FrankImg}
                            layout="fixed"
                            width={600}
                            height={400}
                            alt="Frankenstein image"
                        />
                    </div>
                    <div className="m-8">
                        <SocialMedia />
                    </div>
                </div>

            </main>
        </section>
    );
};

export default SignUpDetails;