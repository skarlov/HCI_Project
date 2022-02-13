import Sweet1 from "../assets/sweet1.png";
import Sweet2 from "../assets/sweet2.png";
import Sweet3 from "../assets/sweet3.png";
import Sweet4 from "../assets/sweet4.png";
import Sweet5 from "../assets/sweet5.png";

import Image from 'next/image';

const PopularSweet = () => {
    return (
        <section className="mt-12 py-12 bg-black bg-web-2 bg-cover">
            <main className="ml-6 mr-6 max-w-screen flex flex-col mx-auto">
                <div>
                    <h2 className="text-2xl text-center font-shadow text-white">
                        POPULAR RECIPES
                    </h2>
                </div>
                <div className="ml-6 mr-6 mt-12 grid grid-cols-5 gap-4">
                    <div className="">
                        <Image
                            src={Sweet1}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 1"
                        />
                    </div>
                    <div>
                        <Image
                            src={Sweet2}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 2"
                        />
                    </div>
                    <div>
                        <Image
                            src={Sweet3}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                    <div>
                        <Image
                            src={Sweet4}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                    <div>
                        <Image
                            src={Sweet5}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default PopularSweet;