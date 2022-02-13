import Image from 'next/image';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Line from "../assets/line.png"
import Store1 from "../assets/store-1.jpg";
import Store2 from "../assets/store-2.jpg";
import Store3 from "../assets/store-3.jpg";
import Store4 from "../assets/store-4.jpg";
import Store5 from "../assets/store-5.jpg";
import Store6 from "../assets/store-6.png";
import Store7 from "../assets/store-7.png";
import Store8 from "../assets/store-8.png";
import Store9 from "../assets/store-9.png";

import AddToCartButton from '../components/add_to_cart_button';

const ProductsComponent = () => {
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
                    PRODUCTS
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store1}
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
                                        HALLOWEEN ICING CUPCAKE DECS
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store1}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Assortment of 12 fun Halloween icing decorations to
                                            decorate cupcakes, cookies and desserts.
                                            <br /><br />
                                            The pack includes sugar ghosts, pumpkins, spiders
                                            and R.I.P. tombstones (3 of each design).
                                            <br /><br />
                                            Size:<br />
                                            Approx. 25mm
                                            <br /><br />
                                            Ingredients:<br />
                                            Sugar, cornstarch, egg albumen, colours: E129, E102, E133, E122.
                                            E129, E102, E122: may have an adverse effect on activity and attention in children.
                                            <div className="mt-3 text-xl justify-between font-bold">£3.05<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div>Halloween Icing Cupcake Decs (12pc)</div>
                        <div className="font-bold text-lg">£3.05</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store2}
                                layout="intrinsic"
                                width={400}
                                height={400}
                                alt="Popular Recipe 2"
                            />}
                            modal
                            nested
                        >
                            {close => (
                                <div className="px-2 mb-4 rounded-lg">
                                    <div className="text-xl w-auto py-4 p-2 text-center font-shadow">
                                        BLACK ICING BATS FOR CUPCAKES
                                    </div>
                                    <div className="grid grid-cols-2 place-content-between font-raleway">
                                        <div className="p-2"><Image
                                            src={Store2}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Top cakes, cupcakes, cookies and desserts with these black edible bat decorations. Made from moulded sugar paste, these flying bats are perfect for adding that finishing touch to your Halloween treats!
                                            <br /><br />
                                            Available as a pack of 25 or box of 450
                                            <br /><br />
                                            Size:<br />
                                            Approx. 37mm
                                            <div className="mt-3 text-xl font-bold">£3.05<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div>Black Icing Bats for Cupcakes</div>
                        <div className="font-bold text-lg">£3.05</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store3}
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
                                        SPIDER CUPCAKE BAKING BOX
                                    </div>
                                    <div className="grid grid-cols-2 place-content-between font-raleway">
                                        <div className="p-2"><Image
                                            src={Store3}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Bake and decorate 12 toffee cupcakes for Halloween with this fantastic baking box.
                                            We're sure toddlers and teenagers alike will have fun getting involved -
                                            a great activity for the whole family!
                                            <br /><br />
                                            The box includes:<br />
                                            12 Wilton spider honeycomb cake toppers
                                            500g of  Sattina Toffee cake mix
                                            12 orange cupcake cases
                                            250g pack of Sattina white sugarpaste
                                            Orange writing icing
                                            White writing icing
                                            Black writing icing
                                            Lilac Gel icing
                                            <div className="align-end text-xl font-bold mt-3">£10.00<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div>Spider Cupcake Baking Box</div>
                        <div className="font-bold text-lg">£10.00</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store4}
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
                                        ROUND SUGAR DISCS CAKE TOPPERS
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store4}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Fun Halloween cake toppers to simply pop onto sugarpaste or buttercream cupcakes or cookies.
                                            Designs include Dracula, witch, Frankenstein's monster, cat, ghost, spider, pumpkin and mummy.
                                            <br /><br />
                                            Available as a pack of 8 or box of 256
                                            <br /><br />
                                            Size:<br />
                                            Approx.30mm dia.
                                            <div className="align-end text-xl font-bold mt-3">£2.20<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Round Sugar Discs Cake Toppers</div>
                        <div className="font-bold text-lg">£2.20</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store5}
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
                                        HALLOWEEN CUPCAKE CASES
                                    </div>

                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store5}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Present some Halloween bakes in these fun cupcake cases from Anniversary House.
                                            The pack of 75 cases in Halloween colours - green, black and purple (25 of each) have
                                            a friendly pumpkins and ghosts design. Supplied in a handy plastic resealable tub.
                                            <br /><br />
                                            Size:<br />
                                            Height - approx. 30mm<br />
                                            Width across top - approx. 74mm<br />
                                            Width across base - approx. 50mm
                                            <div className="align-end text-xl font-bold mt-3">£2.99<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Halloween Cupcake Cases (75pc)</div>
                        <div className="font-bold text-lg">£2.99</div>
                    </div>
                    <div className="cursor-pointer font-raleway hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Store6}
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
                                        HALLOWEEN GHOST MIX SPRINKLES
                                    </div>
                                    <div className="grid grid-cols-2 font-raleway">
                                        <div className="p-2"><Image
                                            src={Store6}
                                            layout="intrinsic"
                                            width={500}
                                            height={500}
                                            alt="Popular Recipe 2"
                                        />
                                        </div>
                                        <div className="p-4 text-sm">
                                            Scatter these yellow and orange vermicelli and white ghost sprinkles over your
                                            Halloween bakes and desserts. Ideal for sprinkling onto fresh icing, buttercream,
                                            chocolate and candy melts.
                                            <br /><br />
                                            The Wilton ghost mix sprinkles come in a convenient resealable pouch.
                                            <br /><br />
                                            Available as a single pouch or box of 12
                                            <br /><br />
                                            Ingredients: Sugar, starch (corn), dextrose, palm oil, maltodextrin, emulsifier (E470b),
                                            lecithins (soy), glazing agents (E903, E904), colours (E100, E102, E160c), thickener (E414),
                                            flavouring.

                                            <div className="align-end text-xl font-bold mt-3">£2.20<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Halloween Ghost Mix Sprinkles 50g</div>
                        <div className="font-bold text-lg">£2.20</div>
                    </div>
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
                                        PIPED ICING HALLOWEEN DECORATIONS
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
                                            These spooky decorations are ideal for all Halloween treats including cupcakes, ice cream and biscuits.
                                            Designs include a spider, witch, skull, pumpkin and bat.
                                            <br /><br />
                                            Available as a pack of 50 or box of 250
                                            <br /><br />
                                            Size: 25mm

                                            <div className="align-end text-xl font-bold mt-3">£4.95<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Piped Icing Halloween Decorations</div>
                        <div className="font-bold text-lg">£4.95</div>
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
                                        EDIBLE HALLOWEEN DECORATIONS
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
                                            Fantastic set of edible Halloween cupcake decorations to top your cakes for a Halloween tea or hand out to trick or treaters!
                                            <br /><br />
                                            Includes:
                                            <br />
                                            Pack of Spooky Cobwebs Edible Decs* (4g) approx. 50<br />
                                            Pack of Edible Candy Eyes (25g) approx. 50<br />
                                            Pot of 'Hocus Pocus' sprinkles by Satting, 90g<br />
                                            <br />
                                            Size:<br />
                                            Cobweb - approx. 37mm dia.<br />
                                            Individual eyes - approx. 10mm dia.<br />
                                            'Hocus Pocus' Sprinkles - 90g

                                            <div className="align-end text-xl font-bold mt-3">£7.22<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Edible Halloween Decorations</div>
                        <div className="font-bold text-lg">£7.22</div>
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
                                        FONDANT ICING
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
                                            The four assorted 250g packs of sugarpaste include:<br />
                                            Bright Orange, White, Pitch Black and Regal Purple.
                                            <br /><br />
                                            Create grey sugarpaste for tombstones, haunted houses, axes and knives for scary or gory cake toppers by mixing the black and white together!

                                            <div className="align-end text-xl font-bold mt-3">£5.20<br /><br /><AddToCartButton /></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Popup>
                        <div className="mt-3">Fondant Icing</div>
                        <div className="font-bold text-lg">£5.20</div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default ProductsComponent;