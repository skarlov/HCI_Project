import Image from 'next/image';
import Link from 'next/link';

import SpiderImg from '../assets/spider.png';

const SearchButton = () => {
    return (
        <Link href="/">
            <button className="w-auto py-3 rounded-lg bg-orange-400 hover:bg-orange-500 hover: shadow-md whitespace-nowrap text-xs text-black font-medium font-shadow border-0">

                <div className="px-4 align-center flex flex-row justify-center">
                    CHECKOUT

                </div>
            </button>
        </Link>
    );
};

export default SearchButton;