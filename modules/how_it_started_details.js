import Image from "next/image";

import HowItStartedImg1 from "../assets/how_it_started_1.png"
import HowItStartedImg2 from "../assets/how_it_started_2.png"

const HowItStartedDetails = () => {
    return (
        <section className="bg-white bg-cover bg-web-main-2 pt-12">
            <main className="max-w-screen mx-auto flex flex-row text-black align-center">
                <div className="drop-shadow-3xl flex flex-col w-1/2 ml-28 mt-10 mb-8 flex relative">
                    <div className="ml-12">
                        <Image
                            src={HowItStartedImg1}
                            layout="fixed"
                            width={500}
                            height={500}
                            alt="How It Started"
                        />
                    </div>
                    <div className="mt-10 w-5/6 text-justify">
                        <p className="font-raleway leading-8">
                            I started Spooky Kitchen in 2011 with the intention of creating an online magazine featuring the web’s most innovative food bloggers, their recipes and photography. I wanted to take my years of creating magazines for others and make something of my own, to showcase the talents of so many food bloggers who with the simple click of a mouse inspire every level of home cook to create something wonderful in the kitchen.
                            <br /><br />
                            But then I discovered I couldn’t just feature food bloggers’ recipes like I did in my first post. I had to create my own recipes. I had to take my own photos. I had to become ONE OF THEM!
                        </p>
                        <p className="text-xl m-6 font-raleway font-bold text-center leading-8">
                            And. So. I did.
                        </p>
                        <p className="font-raleway leading-8">
                            I worked at my magazine designing day job while blogging wee into the nights. Then in 2013, I quit corporate life to become a full time content creator of my own and I haven’t looked back. In case you’re wondering where the magazine went? FoodieCrush magazine has been on a hiatus while I dedicate more time to cultivating the community here. Because I love you guys!
                        </p>
                    </div>

                </div>
                <div className="mt-16 mb-16 flex flex-col w-1/2 text-justify justify-between">
                    <div>
                        <div>
                            <h1 className="text-4xl font-raleway font-bold text-black">
                                How it started?
                            </h1>

                        </div>
                        <div className="mt-10 w-5/6 text-justify">
                            <p className="font-raleway leading-8">
                                <b>HI, MY NAME IS LINDSAY!</b><br />
                                And Spooky Kitchen is my little corner of the internet!
                                <br /> <br />
                                I'm the voice, author, and creator behind Spooky Kitchen. What started as a casual hobby for nights and weekends while I was working as a fourth grade teacher has now grown into a full-blown business (!!) that reaches millions of people with fun recipes each month.
                                <br /><br />
                                I live in Saint Paul, MN with my husband Bjork and our dog Sage. My favorite things in life are a big plate of pad Thai, sunny days, and going to the dog park.

                            </p>
                            <p className="text-xl m-6 font-raleway font-bold leading-8 text-center">
                                My motto is: <br />
                                If I wouldn’t eat it in real life, I won’t put in on the blog.
                            </p>


                        </div>
                        <div className="ml-12 mt-12">
                            <Image
                                src={HowItStartedImg2}
                                layout="fixed"
                                width={500}
                                height={500}
                                alt="How It Started"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default HowItStartedDetails;
