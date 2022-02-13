import Savory1 from "../assets/savory1.png";
import Savory2 from "../assets/savory2.png";
import Savory3 from "../assets/savory3.png";
import Savory4 from "../assets/savory4.png";
import Savory5 from "../assets/savory5.png";

import Image from 'next/image';

const PopularSavory = () => {
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
                            src={Savory1}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 1"
                        />
                    </div>
                    <div>
                        <Image
                            src={Savory2}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 2"
                        />
                    </div>
                    <div>
                        <Image
                            src={Savory3}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                    <div>
                        <Image
                            src={Savory4}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                    <div>
                        <Image
                            src={Savory5}
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

export default PopularSavory;