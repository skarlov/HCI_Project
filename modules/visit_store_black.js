import Store1 from '../assets/store-1.jpg';
import Store2 from '../assets/store-2.jpg';
import Store3 from '../assets/store-3.jpg';
import Store4 from '../assets/store-4.jpg';
import Store5 from '../assets/store-5.jpg';

import Image from 'next/image';

const VisitBlackBg = () => {
    return (
        <section className="py-12 bg-black bg-web-2 bg-cover">
            <main className="ml-6 mr-6 max-w-screen flex flex-col mx-auto">
                <div>
                    <h2 className="text-2xl text-center font-shadow text-white">
                        VISIT OUR STORE
                    </h2>
                </div>
                <div className="ml-6 mr-6 mt-12 grid grid-cols-5 gap-4">
                    <div className="hover:opacity-50 drop-shadow-2xl cursor-pointer" title="Bat Decorations">
                        <Image
                            src={Store1}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Product 1"
                        />

                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Store2}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 2"
                        />
                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Store3}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Store4}
                            layout="intrinsic"
                            width={400}
                            height={400}
                            alt="Popular Recipe 3"
                        />
                    </div>
                    <div className="drop-shadow-2xl">
                        <Image
                            src={Store5}
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

export default VisitBlackBg;