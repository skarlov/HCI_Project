import Image from "next/image";

import SweetMain from "../assets/sweet_search.png";
import SearchButton from "../components/search_button.js";

const SweetRecipeSearch = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black items-center">

                <div className="mb-8 flex flex-col text-justify w-1/2 px-16 relative">
                    <div>
                        <h1 className="text-4xl px-20 font-raleway font-bold text-black">
                            Search for a sweet recipe!
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
                            src={SweetMain}
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

export default SweetRecipeSearch;