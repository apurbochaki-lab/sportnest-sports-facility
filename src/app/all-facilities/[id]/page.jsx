import BookingCard from "@/components/sports-details-page/BookingCard";
import { getDataById } from "@/lib/data";
import Image from "next/image";
import {
    FaMapMarkerAlt,
    FaUser,
    FaClock,
    FaStar,
    FaDumbbell,
    FaCheckCircle,
} from "react-icons/fa";

const sportsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const sportsDetails = await getDataById(id)
    console.log(sportsDetails)

    const {
        title,
        description,
        image,
        price,
        category,
        duration,
        label,
        facility,
        capacity,
        location,
        rating,
        trainer,
        availableDays,
        timeSlot,
        level,
        status,
    } = sportsDetails;

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#fefae0] via-[#606c38]/20 to-[#283618] text-[#283618] pb-20">
            <h2 className="text-center text-5xl font-bold pt-10">Sports Details</h2>

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* HEADER */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-[#dda15e] hover:scale-102 transition-all duration-500 hover:-translate-y-3">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* TITLE + BASIC INFO */}
                    <div>
                        <span className="inline-block px-4 py-1 bg-[#dda15e] text-[#283618] rounded-full text-sm font-semibold mb-3">
                            {label}
                        </span>

                        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-[#283618]">
                            {title}
                        </h1>

                        <p className="text-sm text-black font-medium mb-5 leading-6">
                            {description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <div className="flex flex-wrap gap-3 text-md font-medium">
                                    <span className="px-3 py-1 bg-[#606c38] text-[#fefae0] rounded-full">
                                        {category}
                                    </span>
                                    <span className="px-3 py-1 bg-[#283618] text-[#fefae0] rounded-full">
                                        {duration}
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl pt-8 font-semibold text-[#606c38]">Price : ${price}</h2>
                            </div>

                            {/* <BookingCard/> */}
                        </div>
                    </div>
                </div>

                {/* DETAILS GRID */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    <div className="bg-[#fefae0] p-6 rounded-xl shadow-md border border-[#606c38]/30 ">
                        <div className="flex items-center gap-2 text-[#606c38] mb-2 text-2xl">
                            <FaMapMarkerAlt />
                            <h3 className="font-semibold">Location</h3>
                        </div>
                        <p className="text-lg">{location}</p>
                    </div>

                    <div className="bg-[#fefae0] p-6 rounded-xl shadow-md border border-[#606c38]/30">
                        <div className="flex items-center gap-2 text-[#606c38] mb-2 text-2xl">
                            <FaUser />
                            <h3 className="font-semibold">Trainer</h3>
                        </div>
                        <p className="text-lg">{trainer}</p>
                    </div>

                    <div className="bg-[#fefae0] p-6 rounded-xl shadow-md border border-[#606c38]/30">
                        <div className="flex items-center gap-2 text-[#606c38] mb-2 text-2xl">
                            <FaStar />
                            <h3 className="font-semibold">Rating</h3>
                        </div>
                        <p className="text-lg">{rating} / 5</p>
                    </div>

                    <div className="bg-[#fefae0] p-6 rounded-xl shadow-md border border-[#606c38]/30">
                        <div className="flex items-center gap-2 text-[#606c38] mb-2 text-2xl">
                            <FaDumbbell />
                            <h3 className="font-semibold">Facility</h3>
                        </div>
                        <p className="text-lg">{facility}</p>
                    </div>

                    <div className="bg-[#fefae0] p-6 rounded-xl shadow-md border border-[#606c38]/30">
                        <div className="flex items-center gap-2 text-[#606c38] mb-2 text-2xl">
                            <FaClock />
                            <h3 className="font-semibold">Time Slot</h3>
                        </div>
                        <p className="text-lg">{timeSlot}</p>
                    </div>

                    <div className="bg-[#fefae0] p-6 rounded-xl shadow-md border border-[#606c38]/30">
                        <div className="flex items-center gap-2 text-[#606c38] mb-2 text-2xl">
                            <FaCheckCircle />
                            <h3 className="font-semibold">Status</h3>
                        </div>
                        <p className="text-lg">{status}</p>
                    </div>
                </div>

                {/* EXTRA INFO */}
                <div className="mt-10 bg-[#283618] text-[#fefae0] p-8 rounded-2xl shadow-xl max-w-[350px] mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-[#dda15e]">
                        Additional Info
                    </h2>

                    <div className="text-lg">
                        <p className="text-xl font-medium"><span className="text-[#dda15e]">Capacity:</span> {capacity}</p>
                        <p className="text-xl font-medium"><span className="text-[#dda15e]">Level:</span> {level}</p>
                        {/* <p className="text-xl font-medium"><span className="text-[#dda15e]">Available Days:</span> {availableDays?.join(", ") || "Sun - Fri"}</p> */}
                        <p className="text-xl font-medium"><span className="text-[#dda15e]">Category:</span> {category}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default sportsDetailsPage;