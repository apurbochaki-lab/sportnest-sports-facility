// 'use client'

import { Card, Chip, Button } from "@heroui/react";
import Image from "next/image";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { MdSportsTennis } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import Link from "next/link";

const SportsCard = ({ sport }) => {
    const {
        _id,
        title,
        description,
        category,
        duration,
        label,
        level,
        location,
        price,
        status,
        trainer,
        image,
        rating,
        timeSlot,
    } = sport;

    console.log(sport)
    return (
        <Card className="bg-[#606c38] text-[#fefae0] overflow-hidden border border-[#283618] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">

            {/* Image */}
            <div className="overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="w-full h-[250px] object-cover transition-transform duration-500 btn-hover rounded-tl-xl rounded-tr-xl border-2 border-white/30 shadow-lg"
                />
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">

                {/* Top Chips */}
                <div className="flex flex-wrap gap-2">
                    <Chip className="bg-[#dda15e] text-[#283618] font-semibold">
                        {category}
                    </Chip>

                    <Chip className="bg-[#fefae0] text-[#283618] font-semibold">
                        {level}
                    </Chip>

                    <Chip
                        className={`${status === "Available"
                            ? "bg-green-700 text-white"
                            : "bg-red-700 text-white"
                            }`}
                    >
                        {status}
                    </Chip>
                </div>

                {/* Title */}
                <div>
                    <h2 className="text-3xl text-[#fefae0] font-bold leading-tight">
                        {title}
                    </h2>

                    <p className="text-white mt-2 text-md leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Info */}
                <div className="space-y-2 text-md">

                    <div className="flex items-center gap-2">
                        <FaLocationDot className="text-[#dda15e]" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <IoTime className="text-[#dda15e]" />
                        <span>{duration} • {timeSlot}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MdSportsTennis className="text-[#dda15e]" />
                        <span>Coach: {trainer}</span>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-3 border-t border-[#fefae0]/20">

                    <div>
                        <h3 className="text-3xl font-extrabold text-[#dda15e]">
                            ${price}
                        </h3>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="font-semibold">{rating}</span>
                    </div>
                </div>

                {/* CTA */}
                <Link href={`/sport-details/${_id}`}>
                    <Button className="w-full bg-[#bc6c25] text-[#fefae0] font-bold text-lg hover:opacity-90 transition-all">
                        View Details
                    </Button>
                </Link>

            </div>
        </Card>
    );
};

export default SportsCard;