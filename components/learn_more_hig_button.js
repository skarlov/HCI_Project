import Image from 'next/image';
import Link from 'next/link';

import SpiderImg from '../assets/spider.png';

const LearnMoreHIG = () => {
    return (
        <Link href="/how_its_going">
            <button className="mb-16 w-2/3 py-4 rounded-lg bg-orange-400 hover:bg-orange-500 hover: shadow-md whitespace-nowrap text-l text-black font-medium font-shadow border-0">

                <div className="mt-2 align-center flex flex-row justify-center">
                    LEARN MORE
                    <Image
                        src={SpiderImg}
                        layout="intrinsic"
                        width={30}
                        height={30}
                        alt="Spider"

                    />

                </div>
            </button>
        </Link>
    );
};

export default LearnMoreHIG;