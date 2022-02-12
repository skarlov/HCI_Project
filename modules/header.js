import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '../assets/logo.png';
import NavBar from '../components/navbar';

const Header = () => {
    return (
        <header className="h-20 shadow-lg relative flex items-center justify-around">
            <main className="max-w-screen-xl mx-auto flex-grow flex flex-col">
                <div className="z-10 flex justify-between items-center">
                    <div className="cursor-pointer mt-2"><Link href="/">
                        <Image
                            src={LogoImg}
                            layout="intrinsic"
                            width={400}
                            height={133}
                            alt="Design logo"
                        />
                    </Link>
                    </div>
                    <div>
                        <NavBar />
                    </div>
                </div>

            </main>
        </header>
    );
};

export default Header;
