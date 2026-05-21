"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle, FaStar } from "react-icons/fa";

const benefits = [
    {
        title: "Expert Coaching",
        description:
            "High-intensity camps focused on athletic growth and competition preparation.",
    },
    {
        title: "Structured Progression",
        description:
            "Step-by-step training systems built for measurable improvement.",
    },
    {
        title: "Performance Tracking",
        description:
            "Track every milestone with personalized athlete reports.",
    },
    {
        title: "Motivating Environment",
        description:
            "Train alongside ambitious athletes in a high-energy atmosphere.",
    },
];

const WhyTrain = () => {

    const [active, setActive] = useState(0);

    return (
        <section className="bg-[#f5f3ef] py-16 lg:py-24 bg-[url('/gradient.svg')] min-h-screen bg-cover bg-bottom bg-no-repeat">
            <div className="container mx-auto px-4 pb-20 pt-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <div>

                        <p className="text-[#3a86ff] font-bold uppercase tracking-wider flex items-center gap-2">
                            ✦ Benefits
                        </p>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2545] mt-5 leading-tight">
                            WHY TRAIN WITH US?
                        </h2>

                        <p className="text-gray-600 font-medium mt-6 leading-relaxed text-lg">
                            At Sporte, we don’t believe in random workouts or temporary motivation.
                            We build structured systems that create real, measurable athletic growth.
                            Every session is designed with purpose.
                        </p>

                        {/* Accordion */}
                        <div className="mt-10 space-y-4">

                            {benefits.map((item, idx) => (

                                <div
                                    key={idx}
                                    className="border-b border-gray-300 pb-4"
                                >

                                    <button
                                        onClick={() => setActive(idx)}
                                        className="flex items-center justify-between w-full text-left"
                                    >
                                        <span className="font-medium text-lg text-[#0b2545]">
                                            {item.title}
                                        </span>

                                        {
                                            active === idx ?
                                                <FaMinusCircle className="text-[#3a86ff]" />
                                                :
                                                <FaPlusCircle className="text-gray-600" />
                                        }
                                    </button>

                                    {
                                        active === idx &&
                                        <p className="text-blue-800 font-medium mt-4 leading-relaxed">
                                            {item.description}
                                        </p>
                                    }

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* MIDDLE CARD */}
                    <div className="relative rounded-3xl overflow-hidden min-h-[550px]">

                        <Image
                            src={"https://images.unsplash.com/photo-1621561248577-5695129fb3b0"}
                            alt="Training"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center p-8">

                            <div className="flex gap-1 text-[#fcbf49] text-xl mb-5">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                                UNLOCK YOUR <br /> POTENTIAL NOW
                            </h2>

                            <p className="text-white/90 font-medium mt-5 text-lg leading-relaxed max-w-sm">
                                Join a community of athletes committed to growth and success.
                            </p>

                            <Link href={"/all-facilities"}>
                                <Button className="mt-10 bg-white text-[#0b2545] text-lg px-10 py-6 rounded-full font-bold hover:scale-105 transition duration-300 shadow-xl">
                                    GET STARTED
                                </Button>
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div>

                        <p className="text-gray-600 font-medium text-lg leading-relaxed">
                            Your potential is bigger than your excuses.
                            At Sporte, we provide the tools, coaching,
                            and environment to push past boundaries,
                            transform your performance,
                            and achieve results that matter.
                        </p>

                        {/* Quote */}
                        <div className="bg-[#dfe7ef] border-l-4 border-[#3a86ff] p-5 mt-8 rounded-r-lg">
                            <p className="text-gray-700 font-medium italic text-lg">
                                “My strength and speed improved faster than I expected.”
                            </p>
                        </div>

                        {/* Bottom Image */}
                        <div className="relative h-[260px] rounded-3xl overflow-hidden mt-8">

                            <Image
                                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
                                alt="Athletes"
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyTrain;