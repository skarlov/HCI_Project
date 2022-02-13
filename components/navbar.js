import SearchImg from '../assets/search.png';
import Image from 'next/image';
import slugify from 'slugify';
import Link from 'next/link'
import { useRouter } from 'next/router';

import Cart from './cart';

const menuItems = [
    'ABOUT',
    'RECIPES',
    'STORE',
    'CONTACT',
    'SIGN UP',
];

const NavBar = () => {
    const router = useRouter();
    const isActive = (pathname) =>
        router.pathname.split("/")[1] === pathname.split("/")[1];
    return (
        <nav className="inline-flex list-none font-shadow">
            {menuItems.map((item, index) => {
                const menuItemPath = index ? `/${slugify(item, { lower: true })}` : "/";
                return (
                    <Link key={item} href={menuItemPath} passHref>
                        <li
                            key={item}
                            className="px-5 py-3 rounded whitespace-nowrap hover:bg-orange-400 hover:rounded-lg hover:bg-opacity-100 hover:text-black cursor-pointer"
                        >
                            {item}

                        </li>
                    </Link>
                );
            })}
            <div className="m-2 ml-4 cursor-pointer rounded whitespace-nowrap hover:drop-shadow-md">
                <Image
                    src={SearchImg}
                    layout="fixed"
                    width={25}
                    height={25}
                    alt="Search icon"
                />
            </div>
            <div className='m-2 ml-4 cursor-pointer rounded font-raleway whitespace-nowrap hover:drop-shadow-md'>
                <Cart />
            </div>
        </nav>
    );
};

export default NavBar;
