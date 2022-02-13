import Image from 'next/image';

import HowItsGoingDetailsImg from '../assets/how_its_going.png';
import Newsletter from '../components/newsletter';
import SocialMedia from '../components/social_media';

const HowItsGoingDetails = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black align-center">
                <div className="drop-shadow-3xl flex flex-col ml-20 mt-10 mb-8 flex relative">
                    <Image
                        src={HowItsGoingDetailsImg}
                        layout="fixed"
                        width={500}
                        height={500}
                        alt="How It's Going"
                    />
                    <SocialMedia />
                    <Newsletter />
                </div>
                <div className="mt-16 ml-16 flex flex-col text-justify justify-between">
                    <div>

                        <div>
                            <h1 className="text-4xl font-raleway font-bold text-black">
                                How is it going?
                            </h1>

                        </div>
                        <div className="mt-10 w-5/6 text-justify">
                            <p className="text-xl mb-4 font-raleway font-bold leading-8">
                                10 things you may not know about me:
                            </p>
                            <p className="font-raleway leading-8">
                                1. I’m a Utah native who grew up with the mountains in my backyard but I always dreamed of living at the beach.
                                <br />
                                2. That’s why my husband and I moved to Venice, CA for 13 years. I created and designed magazines about natural health, bodybuilding, MMA fighters, and as one will do when one is in Hollywood, about celebrity stuff. It was like living on a permanent vacation. Then I got pregnant (surprise!) and had a baby. So we moved back to Utah and our families we love so much. And I couldn’t be happier to be home from vacation.
                                <br />
                                3. Our daughter’s nickname is Smudge. I started calling her that when she was in utero because she was just a little Smudge of love. And now at nearly 6’0″, she’s our biggest Smudge of love ever and our everything.
                                <br />
                                4. My husband is my secret weapon in the kitchen.
                                <br />
                                5. I seek out and explore grocery stores like other people visit art museums or fine boutiques.
                                <br />
                                6. I wish I was an amazing baker. I try and I try, and one day, I will be. My favorite sweets are German chocolate cake everything like this and this.
                                <br />
                                7. My last day on earth would include spending the entire day at the beach with my man, my Ali Smudge and a couple of dogs in tow. It would also have to include a cooler full of spicy tuna hand rolls and a couple of beers, while playing Smashball as the sun begins to set on my permanently smiling face.
                                <br />
                                8. I take a tub every, single, night. And my husband draws it for me. Spoiled I am, indeed.
                                <br />
                                9. I’m a to-do list and day planner/calendar junkie, and when I couldn’t find one that worked for me, I created my own.
                                <br />
                                10. My mom is my biggest cheerleader. And I love every one of her pom poms.
                            </p>


                        </div>
                    </div>
                </div>

            </main>
        </section>
    );
};

export default HowItsGoingDetails;
