import Image from 'next/image'

import Facebook from '../assets/facebook.png'
import Insta from '../assets/instagram.png'
import Pin from '../assets/pinterest.png'
import Twitter from '../assets/twitter.png'

const SocialMedia = () => {
    return (
        <div className="mr-6 mb-6 px-6 py-6 flex rounded-lg bg-black">
            <h3 className="capitalize flex-col w-1/4 text-s font-shadow text-center text-white">
                FIND US ON {" "}
                SOCIAL MEDIA!
            </h3>
            <div className="flex-col ml-6 w-3/4">
                <div className="flex m-3 justify-items-center cursor-pointer">
                    <Image
                        src={Facebook}
                        layout="fixed"
                        width={75}
                        height={75}
                        alt="Facebook icon"
                    />
                    <Image
                        src={Insta}
                        layout="fixed"
                        width={75}
                        height={75}
                        alt="Instagram icon"
                    />
                    <Image
                        src={Pin}
                        layout="fixed"
                        width={75}
                        height={75}
                        alt="Pinterest icon"
                    />
                    <Image
                        src={Twitter}
                        layout="fixed"
                        width={75}
                        height={75}
                        alt="Twitter icon"
                    />

                </div>
            </div>

        </div>
    );
};

export default SocialMedia;
