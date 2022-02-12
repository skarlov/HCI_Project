import Image from 'next/image';

import Facebook from '../assets/facebook.png'
import Insta from '../assets/instagram.png'
import Pin from '../assets/pinterest.png'
import Twitter from '../assets/twitter.png'
import Phone from '../assets/phone_white.png'
import Mail from '../assets/mail_white.png'

const ContactDetails = () => {
    return (
        <section className="py-12 bg-white bg-web-main bg-contain">
            <main className="max-w-screen-xl flex mx-auto">
                <div className="px-8 py-6 w-1/2 m-6 flex-col rounded-lg bg-black">
                    <h3 className="capitalize text-center text-xl m-4 font-shadow text-white">
                        CONTACT US DIRECTLY
                    </h3>
                    <div className="mt-2 flex flex-col text-black">
                        <input
                            className="border rounded-lg border-black mt-4 p-2 opacity-100 font-raleway bg-gray-100"
                            placeholder="First Name"
                            type="text"
                        />
                        <input
                            className="border rounded-lg border-black mt-4 p-2 opacity-100 font-raleway bg-gray-100"
                            placeholder="E-mail"
                            type="text"
                        />
                        <textarea
                            className="border rounded-lg border-black mt-4 p-2 opacity-100 font-raleway bg-gray-100"
                            placeholder="Type your message..."
                            type="text"
                            rows="4"
                        />
                        <button className="mt-4 bg-white text-black font-raleway font-bold rounded-lg py-2 cursor-pointer hover:bg-orange-400">
                            Send
                        </button>
                    </div>
                </div>
                <div className="px-8 py-6 w-1/2 m-6 flex flex-col items-center rounded-lg bg-black">
                    <h3 className="capitalize mt-6 flex-col text-xl m-4 text-center font-shadow text-white">
                        FIND US ON
                    </h3>
                    <div className="m-4 mt-5 justify-between cursor-pointer flex-col">
                        <Image
                            src={Facebook}
                            layout="fixed"
                            width={75}
                            height={75}
                            alt="Facebook icon"
                        />
                        <Image
                            src={Insta}
                            layout="fixed"
                            width={75}
                            height={75}
                            alt="Instagram icon"
                        />
                        <Image
                            src={Pin}
                            layout="fixed"
                            width={75}
                            height={75}
                            alt="Pinterest icon"
                        />
                        <Image
                            src={Twitter}
                            layout="fixed"
                            width={75}
                            height={75}
                            alt="Twitter icon"
                        />
                    </div>
                    <div className="flex-col">
                        <h3 className="capitalize text-xl m-4 text-center font-shadow text-white">
                            OR CONTACT US BY
                        </h3>
                    </div>
                    <div className="flex-col mt-4">
                        <div className="mt-3 flex items-center">
                            <Image
                                src={Phone}
                                layout="fixed"
                                width={15}
                                height={15}
                                alt="Phone icon"
                            />
                            <p className="ml-3 text-white font-raleway">209-212-4753</p>
                        </div>
                        <div className="mt-3 flex items-center">
                            <Image
                                src={Mail}
                                layout="fixed"
                                width={17}
                                height={15}
                                alt="Mail icon"
                            />
                            <p className="ml-3 text-white font-raleway">info@spookykitchen.com</p>
                        </div>
                    </div>
                </div>
            </main>
        </section >
    );
};

export default ContactDetails;