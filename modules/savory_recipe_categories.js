import Image from "next/image";
import Link from "next/link";

import Spiders from "../assets/spiders.png"

const SavoryRecipeCategories = () => {
    return (
        <section className="py-12 bg-white">
            <main className="max-w-screen">
                <div>
                    <h2 className="text-2xl text-center font-shadow text-black">
                        SAVORY RECIPE CATEGORIES
                    </h2>
                </div>
                <div className="mx-8 grid grid-cols-3 justify-evenly">
                    <div className='flex flex-col text-center mt-8'>
                        <button className="py-4 rounded-lg bg-orange-400 hover:bg-orange-500">
                            <h3 className="text-xl font-shadow text-black hover:font-bold cursor-pointer">
                                BY TYPE
                            </h3>
                        </button>
                        <ul className="mt-4 font-medium underline text-black">
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
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Sandwiches
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Soup
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Pasta
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={Spiders}
                            layout="fixed"
                            width={281}
                            height={350}
                            alt="Spiders"
                        />
                    </div>
                    <div className='flex flex-col text-center mt-8'>
                        <button className="py-4 rounded-lg bg-orange-400 hover:bg-orange-500">
                            <h3 className="text-xl font-shadow text-black">
                                BY INGREDIENT
                            </h3>
                        </button>
                        <ul className="mt-4 underline font-medium text-black">
                            <Link href="/">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Meat
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Fish
                                </li>
                            </Link>
                            <Link href="/recipes">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Potatoes
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Avocado
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Cauliflower
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Pumpkin
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="whitespace-nowrap font-raleway hover:underline cursor-pointer m-6">
                                    Mushroom
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default SavoryRecipeCategories;
