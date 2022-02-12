import Recipe1 from '../assets/latest_recipe_1.png';
import Recipe2 from '../assets/latest_recipe_2.png';
import Recipe3 from '../assets/latest_recipe_3.png';
import Recipe4 from '../assets/latest_recipe_4.png';

import Image from 'next/image';

const LatestBlackBg = () => {
    return (
        <section className="py-12 bg-black bg-web-2 bg-cover">
            <main className="ml-6 mr-6 max-w-screen flex flex-col mx-auto">
                <div>
                    <h2 className="text-2xl text-center font-shadow text-white">
                        LATEST RECIPES
                    </h2>
                </div>
                <div className="ml-6 mr-6 mt-12 grid grid-cols-4 gap-4">
                    <div className="hover:opacity-50 drop-shadow-2xl cursor-pointer" title="Bat Decorations">
                        <Image
                            src={Recipe1}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Recipe 1"
                        />

                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Recipe2}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Recipe 2"
                        />
                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Recipe3}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Recipe 3"
                        />
                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Recipe4}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Recipe 4"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default LatestBlackBg;