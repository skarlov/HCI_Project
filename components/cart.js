import Image from "next/image";
import CartImg from "../assets/cart.png"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Product1 from "../assets/store-1.jpg";
import Product2 from "../assets/store-3.jpg";
import Product3 from "../assets/store-6.png";
import Checkout from "./checkout_button";
import Continue from "./continue_shopping";

const Cart = () => {
    return (
        <Popup
            trigger={<Image
                src={CartImg}
                layout="fixed"
                width={25}
                height={25}
                alt="Search icon"
            />}
            modal
            nested
        >
            {close => (
                <div className="bg-white font-raleway rounded-lg flex flex-col">
                    <div className="font-shadow text-center text-xl w-auto py-4 p-2 border-b-2">
                        SHOPPING CART
                    </div>

                    <div className="p-4 flex border-b-2">
                        <div className="buttons">
                            <div>
                                <i class="heart fa fa-heart-o"></i>
                            </div>
                        </div>

                        <div className="p-4 mr-8">
                            <Image
                                src={Product1}
                                layout="intrinsic"
                                width={100}
                                height={100}
                                alt="Product 1"
                            />
                        </div>

                        <div className="w-28 pt-2.5 mr-14 mt-2">
                            Halloween Icing Cupcake Decorations
                        </div>



                        <div className="align-end text-center text-lg pt-6 w-20">£3.05</div>
                    </div>

                    <div className="p-4 flex border-b-2">
                        <div className="buttons">
                            <div>
                                <i class="heart fa fa-heart-o"></i>
                            </div>
                        </div>

                        <div className="p-4 mr-8">
                            <Image
                                src={Product2}
                                layout="intrinsic"
                                width={100}
                                height={100}
                                alt="Product 2"
                            />
                        </div>

                        <div className="w-28 pt-2.5 mr-14 mt-2">
                            Spider Cupcake Baking Box
                        </div>



                        <div className="align-end text-center text-lg pt-6 w-20">£10.00</div>
                    </div>

                    <div className="p-4 flex border-b-2">
                        <div className="buttons">
                            <div>
                                <i class="heart fa fa-heart-o"></i>
                            </div>
                        </div>

                        <div className="p-4 mr-8">
                            <Image
                                src={Product3}
                                layout="intrinsic"
                                width={100}
                                height={100}
                                alt="Product 3"
                            />
                        </div>

                        <div className="w-28 pt-2.5 mr-14 mt-2">
                            Halloween Ghost Mix Sprinkles 50g
                        </div>



                        <div className="align-end text-center text-lg pt-6 w-20">£2.20</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 p-6"><Checkout /><Continue /></div>

                </div>
            )}
        </Popup>
    );
};

export default Cart;