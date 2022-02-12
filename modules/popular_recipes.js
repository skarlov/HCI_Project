import Freddie from '../assets/freddie.png';
import Jacks from '../assets/jacks.png';
import Pops from '../assets/cake-pops.png';

import Image from 'next/image';

const Popular = () => {
    return (
        <section className="mt-12 py-12 bg-black bg-web-2 bg-contain">
            <main className="ml-6 mr-6 max-w-screen flex flex-col mx-auto">
                <div>
                    <h2 className="text-2xl text-center font-shadow text-white">
                        POPULAR RECIPES
                    </h2>
                </div>
                <div className="ml-6 mr-6 mt-12 grid grid-cols-3 gap-4">
                    <div className="">
                        <Image
                            src={Freddie}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 1"
                        />
                    </div>
                    <div>
                        <Image
                            src={Jacks}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 2"
                        />
                    </div>
                    <div>
                        <Image
                            src={Pops}
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

export default Popular;