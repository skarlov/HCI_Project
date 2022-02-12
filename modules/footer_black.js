import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '../assets/logo_mini.png'
import Facebook from '../assets/facebook.png'
import Insta from '../assets/instagram.png'
import Pin from '../assets/pinterest.png'
import Twitter from '../assets/twitter.png'
import Phone from '../assets/phone_white.png'
import Mail from '../assets/mail_white.png'

const Footer = () => {
    return (
        <section className="py-12 bg-black">
            <main className="max-w-screen-xl flex flex-col mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <Image
                            src={LogoImg}
                            layout="fixed"
                            width={75}
                            height={75}
                            alt="Design logo"
                        />
                        <div>
                            <div className="flex m-3 items-center cursor-pointer">
                                <Image
                                    src={Facebook}
                                    layout="fixed"
                                    width={50}
                                    height={50}
                                    alt="Facebook icon"
                                />
                            </div>
                            <div className="flex m-3 items-center cursor-pointer">
                                <Image
                                    src={Insta}
                                    layout="fixed"
                                    width={50}
                                    height={50}
                                    alt="Instagram icon"
                                />
                            </div>
                            <div className="flex m-3 items-center cursor-pointer">
                                <Image
                                    src={Pin}
                                    layout="fixed"
                                    width={50}
                                    height={50}
                                    alt="Pinterest icon"
                                />
                            </div>
                            <div className="flex m-3 items-center cursor-pointer">
                                <Image
                                    src={Twitter}
                                    layout="fixed"
                                    width={50}
                                    height={50}
                                    alt="Twitter icon"
                                />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="px-8 py-6 rounded-lg bg-white">
                            <h3 className="capitalize text-s font-shadow text-black">
                                SIGN UP FOR NEWSLETTER!
                            </h3>
                            <div className="mt-2 flex flex-col text-black">
                                <input
                                    className="border border-black mt-4 p-1 opacity-100 font-raleway bg-gray-100"
                                    placeholder="Name"
                                    type="text"
                                />
                                <input
                                    className="border border-black mt-4 p-1 opacity-100 font-raleway bg-gray-100"
                                    placeholder="E-mail"
                                    type="text"
                                />
                                <button className="mt-4 bg-black text-white font-raleway rounded-lg py-2 cursor-pointer hover:bg-orange-400">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <h3 className="text-s font-shadow text-white mt-10">
                            IF YOU HAVE ANY QUESTIONS
                        </h3>
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


                    <div className='flex flex-col text-center'>
                        <h3 className="text-xl font-shadow text-white">
                            SPOOKY KITCHEN
                        </h3>
                        <ul className="mt-4 font-medium text-white">
                            <Link href="/">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Home
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    About
                                </li>
                            </Link>
                            <Link href="/recipes">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Recipes
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Contact
                                </li>
                            </Link>
                            <Link href="/sign_up">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Sign Up
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </main>
        </section >
    );
};

export default Footer;