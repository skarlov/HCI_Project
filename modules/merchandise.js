import Image from 'next/image';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Line from "../assets/line.png";
import Store7 from "../assets/merch1.png";
import Store8 from "../assets/merch2.png";
import Store9 from "../assets/merch3.png";
import Store10 from "../assets/merch4.png";
import Store11 from "../assets/merch5.png";
import Store12 from "../assets/merch6.png";
import AddToCartButton from '../components/add_to_cart_button';

const MerchandiseComponent = () => {
    return (
        <section className="bg-web-main-3 bg-contain pt-12">
            <main className="max-w-6xl mx-auto mb-8 flex flex-col text-center">
                <div>
                    <h1 className="font-shadow text-2xl mt-8 mb-8 text-black">
                        STORE
                    </h1>
                </div>
                <div className="mb-8">
                    <Image
                        src={Line}
                        layout="intrinsic"
                        width={298}
                        height={1}
                        alt="Popular Recipe 2"
                    />
                </div>

                <h1 className="font-shadow text-xl mb-8 text-black">
                    MERCHANDISE
                </h1>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store7}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        SPOOKY KITCHEN T-SHIRT
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store7}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Fabric: 100% cotton.
                                            <br /> <br />
                                            Select size: <br />
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">SMALL</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">MEDIUM</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">LARGE</button>

                                            <div className="align-end text-xl font-bold mt-3">£19.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div>Spooky Kitchen T-Shirt</div>
                        <div className="font-bold text-lg">£19.99</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store8}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        SPOOKY KITCHEN HOODIE
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store8}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Fabric: 100% cotton.
                                            <br /> <br />
                                            Select size: <br />
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">SMALL</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">MEDIUM</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">LARGE</button>

                                            <div className="align-end text-xl font-bold mt-3">£29.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div>Spooky Kitchen Hoodie</div>
                        <div className="font-bold text-lg">£29.99</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store9}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        SPOOKY KITCHEN SWEATSHIRT
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store9}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Cotton sweatshirt.
                                            <br /> <br />
                                            Select size: <br />
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">SMALL</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">MEDIUM</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">LARGE</button>

                                            <div className="align-end text-xl font-bold mt-3">£25.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div>Spooky Kitchen Sweatshirt</div>
                        <div className="font-bold text-lg">£25.99</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store10}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        SPOOKY KITCHEN ROLLING PIN
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store10}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Wooden rolling pin.
                                            <br /> <br />

                                            <div className="align-end text-xl font-bold mt-3">£9.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Spooky Kitchen Rolling Pin</div>
                        <div className="font-bold text-lg">£9.99</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store11}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        SPOOKY KITCHEN APRON
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store11}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Fabric: 100% apron.
                                            <br /> <br />
                                            Select size: <br />
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">SMALL</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">MEDIUM</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">LARGE</button>

                                            <div className="align-end text-xl font-bold mt-3">£13.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Spooky Kitchen Apron</div>
                        <div className="font-bold text-lg">£13.99</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store12}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        SPOOKY KITCHEN CHEFS HAT
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store12}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Fabric: 100% cotton.
                                            <br /> <br />
                                            Select size: <br />
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">SMALL</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">MEDIUM</button>
                                            <button className="p-2 bg-orange-100 font-bold border-2 border-black hover:bg-orange-300 m-2">LARGE</button>

                                            <div className="align-end text-xl font-bold mt-3">£13.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Spooky Kitchen Chefs Hat</div>
                        <div className="font-bold text-lg">£13.99</div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default MerchandiseComponent;