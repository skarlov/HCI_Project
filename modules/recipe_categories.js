import Image from "next/image";
import Link from "next/link";

import Spiders from "../assets/spiders.png"

const RecipeCategories = () => {
    return (
        <section className="py-12 bg-white">
            <main className="max-w-screen">
                <div>
                    <h2 className="text-2xl text-center font-shadow text-black">
                        RECIPE CATEGORIES
                    </h2>
                </div>
                <div className="m-8 grid grid-cols-3 justify-evenly">
                    <div className='flex flex-col text-center'>
                        <Link href="/recipes/sweet">
                            <button className="py-4 rounded-lg bg-orange-400 hover:bg-orange-500">
                                <h3 className="text-xl font-shadow text-black hover:font-bold cursor-pointer">
                                    SWEET
                                </h3>
                            </button>
                        </Link>
                        <ul className="mt-4 font-medium underline text-black">
                            <Link href="/">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Cookies
                                </li>
                            </Link>
                            <Link href="/recipes/sweet/cakes">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Cakes
                                </li>
                            </Link>
                            <Link href="/recipes">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Drinks
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Snacks
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex justify-center align-start">
                        <Image
                            src={Spiders}
                            layout="fixed"
                            width={281}
                            height={350}
                            alt="Spiders"
                        />
                    </div>
                    <div className='flex flex-col text-center'>
                        <Link href="/recipes/savory">
                            <button className="py-4 rounded-lg bg-orange-400 hover:bg-orange-500">

                                <h3 className="text-xl font-shadow text-black">
                                    SAVORY
                                </h3>
                            </button>
                        </Link>
                        <ul className="mt-4 underline font-medium text-black">
                            <Link href="/">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Salads
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Dinner
                                </li>
                            </Link>
                            <Link href="/recipes">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Lunch
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Appetizers
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default RecipeCategories;