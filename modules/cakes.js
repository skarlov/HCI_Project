import Image from 'next/image';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Close from "../assets/close.png"
import Sweet1 from "../assets/cake1.png";
import Sweet2 from "../assets/cake2.png";
import Sweet3 from "../assets/cake3.png";
import Sweet4 from "../assets/cake4.png";
import Sweet5 from "../assets/cake5.png";
import Sweet6 from "../assets/cake6.png";

const CakesGrid = () => {
    return (
        <section className="bg-web-main-2 bg-contain pt-12">
            <main className="max-w-6xl mx-auto flex flex-col text-center">
                <div>
                    <h1 className="font-shadow text-2xl mt-8 text-black">
                        CAKES
                    </h1>
                    <p className="font-raleway m-6 leading-8">
                        Browse the best Halloween cake recipes!
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="cursor-pointer hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Sweet1}
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
                                        HALLOWEEN LAYER CAKE
                                    </div>
                                    <div className="grid grid-cols-3 font-raleway">
                                        <div className="p-2"><Image
                                            src={Sweet1}
                                            layout="intrinsic"
                                            width={300}
                                            height={300}
                                            alt="Popular Recipe 2"
                                        /></div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold text-sm">FOR THE CAKE</div>

                                            - Cooking spray, for pans<br />
                                            - 1 box Devil's Food cake mix<br />
                                            - 1 box vanilla cake mix
                                            <br />
                                            <div className="mt-2 font-bold text-sm">FOR THE FROSTING</div>

                                            - 450 g butter, softened<br />
                                            - 875 g icing sugar<br />
                                            - 120 ml whole milk<br />
                                            - 2 tsp. vanilla extract<br />
                                            - 2 tsp. pumpkin spice<br />
                                            - Orange food colouring<br />
                                        </div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold">FOR THE GANACHE</div>
                                            - 250 g chocolate chips<br />
                                            - 180 ml double cream<br />
                                            - Ghost marshmallows<br />
                                            - Rectangle biscuits<br />
                                            - Oreos, crushed<br />
                                            - Candy pumpkins<br />
                                            - Sprinkles<br />
                                            - Candy eyeballs
                                        </div>
                                    </div>
                                    <div className="px-5 font-raleway text-l font-bold">RECIPE:</div>
                                    <div className="px-5 mb-2 text-sm font-raleway list-decimal">

                                        1. Preheat oven to 180°C (160ºC fan) and spray four 23cm cake tins with cooking spray. In two large bowls using a hand mixer, prepare both chocolate and vanilla cake batter.
                                        <br />
                                        2. Divide batter among prepared pans, two chocolate and two vanilla, and bake until a toothpick comes out clean, 30 minutes. Transfer to a wire rack to cool completely.
                                        <br />
                                        3. Make frosting: In another large bowl using a hand mixer, beat together butter and half of the icing sugar until smooth. Beat in the milk, vanilla, and the rest of the icing sugar until light and fluffy. Stir in food colouring until frosting is a bright, jack-o-lantern orange.
                                        <br />
                                        4. Make ganache: In a small saucepan over low heat, heat double cream just until it bubbles. Place chocolate chips in a medium, heatproof bowl and pour over hot double cream. Let sit 2 minutes, then whisk until smooth.
                                        <br />
                                        5. Top cake with some frosting and smooth into an even layer. Add the first chocolate cake on top of that, frost some more, then repeat with remaining vanilla and chocolate layers. Frost outside of cake with remaining frosting.
                                        <br />
                                        6. Drip ganache down the sides of the cake, then pour the rest on top of cake and smooth out with an offset spatula.


                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                    <div className="cursor-pointer hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Sweet2}
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
                                        EVIL EYES HALLOWEEN CAKE
                                    </div>
                                    <div className="grid grid-cols-3 font-raleway">
                                        <div className="p-2"><Image
                                            src={Sweet2}
                                            layout="intrinsic"
                                            width={300}
                                            height={300}
                                            alt="Popular Recipe 2"
                                        /></div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold text-sm">INGREDIENTS</div>

                                            - Favorite cake mix<br />
                                            - Creamy white decorator icing<br />
                                            - Assorted candy eyeballs<br />
                                            - 30 g black icing color, 1 oz<br />
                                            - Black jimmies sprinkle tube<br />
                                            - 30 g christmas red icing color<br />
                                            - 100 g black sanding sugar<br />
                                            - 30 g red-red icing color<br />
                                            - Clear piping gel

                                        </div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold">TOOLS</div>
                                            -- Round cake pan, 6-inch<br />
                                            - Non-stick cooling grid<br />
                                            - Open star cake decorating tip<br />
                                            - 9-inch angled spatula<br />
                                            - Ruler<br />
                                            - Decorating bags<br />
                                            - Piping bags
                                        </div>
                                    </div>
                                    <div className="px-5 font-raleway text-l font-bold">RECIPE:</div>
                                    <div className="px-5 mb-2 text-sm font-raleway list-decimal">

                                        1. Bake cakes. Prepare cake batter following recipe
                                        instructions. Bake and cool three cake layers.
                                        Level, fill, stack and crumb coat cake.<br />
                                        2. Tint icing. Mix ¼ cup black jimmies and ¼ cup black sugars
                                        together. Set aside.<br />
                                        3. Using Black icing color, tint 1 cup icing black. Using spatula,
                                        ice 2½ in. band around middle of cake. Immediately cover
                                        black band with sugar and jimmies mix. Reserve remaining
                                        black icing for later step. <br />
                                        4. Ice cake. Prepare decorating bag with white buttercream.
                                        Cut ½ in. off tip of bag. Pipe icing around bottom half of
                                        cake, following outline of black band. Using spatula, smooth
                                        icing. Repeat on top half of cake.<br />
                                        5. Add eyeballs. Using remaining black icing, attach candy
                                        eyeballs to black band of cake.



                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                    <div className="cursor-pointer hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Sweet3}
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
                                        POISON APPLE CAKE
                                    </div>
                                    <div className="grid grid-cols-3 font-raleway">
                                        <div className="p-2"><Image
                                            src={Sweet3}
                                            layout="intrinsic"
                                            width={300}
                                            height={300}
                                            alt="Popular Recipe 2"
                                        /></div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold text-sm">SUPPLIES</div>

                                            - 8-inch round cake<br />
                                            - Buttercream frosting<br />
                                            - Gel paste food color, yellow and green<br />
                                            - 4 Granny Smith apples<br />
                                            - Parchment paper<br />
                                            - Scissors<br />
                                            - Baking tray<br />
                                            - Wire rack<br />
                                            - Toothpicks
                                        </div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold">MIRROR GLAZE</div>
                                            - 20 g unflavored powdered gelatin<br />
                                            - Half a cup water<br />
                                            - Quarter of a cup corn syrup<br />
                                            - 160 g sugar<br />
                                            - 1 cup water<br />
                                            - 200 g sweetened condensed milk<br />
                                            - 300 g white chocolate, chopped<br />
                                            - Gel paste food color, in black
                                        </div>
                                    </div>
                                    <div className="px-5 font-raleway text-l font-bold">RECIPE:</div>
                                    <div className="px-5 mb-2 text-sm font-raleway list-decimal">

                                        <u>MIRROR GLAZE</u>: Combine gelatin and ½ cup water in a small bowl and allow gelatin to soften 5 minutes.
                                        Heat corn syrup, sugar, ⅔ cup water and sweetened condensed milk in a medium sauce pan on medium heat.
                                        Bring to a boil. Remove from heat and add softened gelatin and stir until most the gelatin is incorporated.
                                        Pour over chopped white chocolate in a separate bowl. Let set for a minute to melt the chocolate.
                                        Whisk or use an immersion blender to blend until the glaze is completely smooth. Pour through strainer and add black gel.
                                        <br />
                                        <u>APPLES</u>: Cut two oval shapes out of parchment paper to create the poison apple eyes. Cut a tall, slender heart shape for the nose.
                                        Using a clean finger, spread a light layer of corn syrup on the back of each parchment paper shape.
                                        Apply the cutouts to the apple, creating your desired face. Smooth so they stick in place.
                                        Using a spoon and or palette knife, drizzle small amounts of the mirror glaze onto the apple. Work the glaze down the front,
                                        back and sides of the apple so that the parchment cutouts are completely covered, but some of the green apple still shows through at the bottom.
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                    <div className="cursor-pointer hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Sweet4}
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
                                        HALLOWEEN SLASH CAKE
                                    </div>
                                    <div className="grid grid-cols-3 font-raleway">
                                        <div className="p-2"><Image
                                            src={Sweet4}
                                            layout="intrinsic"
                                            width={300}
                                            height={300}
                                            alt="Popular Recipe 2"
                                        /></div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold text-sm">FOR THE CAKE</div>
                                            - 140 g unsalted butter<br />
                                            - 100 ml grapeseed oil<br />
                                            - 200 ml milk<br />
                                            - 3 tbsp yogurt<br />
                                            - 1 tsp vanilla extract<br />
                                            - 2 large eggs<br />
                                            - 250 g light muscovado sugar<br />
                                            - 250 g plain flour<br />
                                            - 3 tsp baking powder<br />
                                            - 50 g cocoa powder<br />
                                            - 300 g strawberry jam<br />
                                            - 1,25 kg white fondant icing
                                        </div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold">FOR THE BUTTERCREAM</div>
                                            - 600 g icing sugar, sifted<br />
                                            - 300 g butter, softened<br />
                                            - Red food colouring
                                        </div>
                                    </div>
                                    <div className="px-5 font-raleway text-l font-bold">RECIPE:</div>
                                    <div className="px-5 mb-2 text-sm font-raleway list-decimal">
                                        1. Heat the oven to 180C fan. Butter and line the bases of two 20cm sandwich tins.
                                        Melt the butter in a pan, then remove from the heat and beat in the oil, milk, yogurt, vanilla and eggs.
                                        Whisk the dry ingredients together and mix them.
                                        <br />
                                        2. Divide the batter between the tins and bake for 25-30 mins on the same shelf of the oven until risen
                                        and a skewer inserted into the middle comes out clean. Leave to cool for 10 mins in the tins, then transfer
                                        to a rack to cool completely and split them in halves.
                                        <br />
                                        3. To make the buttercream, beat together the sugar, butter and a few drops of the red food colouring.
                                        Add 2-3 tbsp of boiling water if needed to soften the mixture, until you end up with a smooth, spreadable icing.
                                        <br />
                                        4. Put one cake layer on a board or plate, spread over a thin layer of the buttercream and dot over a third of the jam.
                                        Top with another cake layer and repeat with the buttercream, jam and cake, finishing with a layer of cake.
                                        Use most of the remaining buttercream to ice the cake all over, reserving a small amount.
                                        <br />
                                        5. Roll the fondant icing out on a surface dusted with icing sugar until large enough to cover the top and
                                        sides of the cake. Carefully lift it up onto the cake and smooth down to help it to stick.
                                        Use a sharp knife to cut slashes into the icing, then drizzle a little of the reserved buttercream
                                        mixed with some water into each to look like blood.
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                    <div className="cursor-pointer hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Sweet5}
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
                                        HALLOWEEN MONSTER CAKE
                                    </div>
                                    <div className="grid grid-cols-3 font-raleway">
                                        <div className="p-2"><Image
                                            src={Sweet5}
                                            layout="intrinsic"
                                            width={300}
                                            height={300}
                                            alt="Popular Recipe 2"
                                        /></div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold text-sm">INGREDIENTS</div>
                                            - Chocolate fudge cake mix <br />
                                            - Water <br />
                                            - Vegetable oil<br />
                                            - Eggs<br />
                                            - Creamy white frosting<br />
                                            - Black food coloring<br />
                                            - Green neon gel food color<br />
                                            - Black decorating icing<br />
                                            - 2 black string licorice
                                        </div>
                                    </div>
                                    <div className="px-5 font-raleway text-l font-bold">RECIPE:</div>
                                    <div className="px-5 mb-2 text-sm font-raleway list-decimal">
                                        1. Heat oven to 350°F (325°F for dark or nonstick pan). Make and bake cake as directed on box for 13x9-inch pan.
                                        Cool 10 minutes. Run knife around sides of pan to loosen cake; remove from pan to cooling rack. Cool completely, about 1 hour.
                                        <br />
                                        2. Place cake, bottom side up, on large platter or foil-covered cookie sheet. Remove 2 tablespoons of white frosting from container;
                                        set aside. Remove one-third of the frosting (about 1/2 cup) to small bowl. Tint black; set aside. Tint remaining frosting neon green.
                                        Frost sides and top of cake with neon green frosting.
                                        <br />
                                        3. Using picture as a guide, use decorating icing with a round tip to outline hair. Add licorice pieces for eyebrows.
                                        Use reserved white frosting to form eyes. Use icing to outline remaining facial features.
                                        Spread black frosting within the outlines to fill in the hair. Store loosely covered.
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                    <div className="cursor-pointer hover:opacity-70">
                        <Popup
                            trigger={<Image
                                src={Sweet6}
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
                                        JACK-O-LANTERN CAKE
                                    </div>
                                    <div className="grid grid-cols-3 font-raleway">
                                        <div className="p-2"><Image
                                            src={Sweet6}
                                            layout="intrinsic"
                                            width={300}
                                            height={300}
                                            alt="Popular Recipe 2"
                                        /></div>
                                        <div className="p-4 text-sm">
                                            <div className="font-bold text-sm">INGREDIENTS</div>
                                            - 2 packages spice cake mix<br />
                                            - 4 cans vanilla frosting<br />
                                            - Red and yellow food coloring<br />
                                            - 1 ice cream cake cone<br />
                                            - 2 Oreo cookies<br />
                                            - 1 package black fondant
                                        </div>
                                    </div>
                                    <div className="px-5 font-raleway text-l font-bold">RECIPE:</div>
                                    <div className="px-5 mb-2 text-sm font-raleway list-decimal">
                                        1. Prepare and bake cakes according to package directions using two 10-in. fluted tube pans. Invert cakes onto wire racks; cool completely.
                                        Meanwhile, tint frosting orange using red and yellow food coloring.
                                        <br />
                                        2. Cut thin slice off bottom of each cake. Spread one cake bottom with frosting; press flat sides together to make a pumpkin shape. Place a foil ball in the center to support the "stem"; top with an ice cream cake cone. Frost cake with remaining frosting.
                                        <br />
                                        3. To decorate face, roll out fondant to 1/8-in. thickness; cut into desired shapes for mouth and nose. Remove tops from two Oreo cookies; cut half-circles in filling for eyes. Press cookies and fondant into frosting to make the face.
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default CakesGrid;
