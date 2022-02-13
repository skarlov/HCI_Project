import Image from "next/image";

import SavoryMain from "../assets/savory.png";
import SearchButton from "../components/search_button.js";

const SavoryRecipeSearch = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black items-center">

                <div className="mb-8 flex flex-col w-1/2 px-16 relative">
                    <div>
                        <h1 className="text-4xl px-16 ml-4 font-raleway font-bold text-black">
                            Search for a savory recipe!
                        </h1>

                    </div>
                    <div className="mt-10 text-justify px-20">
                        <p className="font-raleway leading-8">
                            We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.
                        </p>

                    </div>
                    <div className="text-justify mt-8 px-20">
                        <p className="text-2xl font-raleway font-bold leading-8">
                            Search by keyword:
                        </p>
                        <input
                            className="border mr-4 rounded-lg border-black mt-4 p-2 opacity-100 font-raleway bg-gray-100"
                            placeholder="Enter keyword"
                            type="text"
                        /><SearchButton />
                    </div>
                    <div className=" mt-4 px-20">

                    </div>
                </div>
                <div className="flex flex-col w-1/2 px-16 mt-8 justify-between">
                    <div className="flex-col items-center">
                        <Image
                            src={SavoryMain}
                            layout="fixed"
                            width={530}
                            height={511}
                            alt="Candy image"
                        />
                    </div>
                </div>

            </main>
        </section>
    );
};

export default SavoryRecipeSearch;
