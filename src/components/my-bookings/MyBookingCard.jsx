import Image from "next/image";
import Link from "next/link";
import BookingDelete from "./BookingDelete";
import { revalidatePath } from "next/cache";

const MyBookingCard = async ({ book }) => {
    const { _id, sportsId, userName, sportsTitle, sportsImage, price, rating, status = "Pending", bookingDate } = book;
    // console.log(_id)

    const refresh = async (path) => {
        'use server';
        return revalidatePath(path)
    }


    return (
        <div className="group relative bg-[#fefae0] rounded-2xl border border-[#606c38]/15 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">

            {/* Status Badge */}
            <div className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full border-[1.5px] text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm ${status === "Pending" && "bg-[#bc6c25] font-semibold text-white "}`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse`} />
                {status}
            </div>

            {/* Card Body */}
            <div className="flex flex-col sm:flex-row min-h-[200px]">

                {/* Image */}
                <div className="relative sm:w-[220px] w-full h-48 sm:h-auto overflow-hidden shrink-0">
                    <Image
                        width={300} height={200}
                        src={sportsImage}
                        alt={sportsTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#283618]/30 to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 bg-[#283618]/70 text-[#fefae0] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        Sports
                    </span>
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5">

                    {/* Title */}
                    <h2 className="text-[#283618] font-semibold text-lg leading-snug mb-4 pr-24 sm:pr-28">
                        {sportsTitle}
                    </h2>

                    {/* Meta */}
                    <div className="flex flex-col gap-2 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-[#bc6c25]">📅</span>
                            <span className="text-[#aaa] uppercase text-[10px] tracking-wider">Booking Date</span>
                            <span className="text-[#283618] font-medium text-[13px]">{new Date(bookingDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-[#bc6c25]">🕗</span>
                            <span className="text-[#aaa] uppercase text-[10px] tracking-wider">Time Slot</span>
                            <span className="text-[#283618] font-medium text-[13px]">08:00 AM – 10:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-[#bc6c25]">👤</span>
                            <span className="text-[#aaa] uppercase text-[10px] tracking-wider">Booked by</span>
                            <span className="text-[#283618] font-medium text-[13px]">{userName}</span>
                        </div>
                    </div>

                    {/* Booking ID */}
                    <p className="text-[11px] text-[#ccc] tracking-tight mb-auto truncate">
                        🔖 ID: {_id}
                    </p>

                    {/* Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-[#606c38]/10">

                        {/* Price + Rating */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-baseline gap-0.5">
                                {/* <span className="text-sm font-semibold text-[#606c38]">$</span> */}
                                <span className="text-[1.55rem] font-bold text-[#283618] leading-none">${price}</span>
                            </div>
                            <span className="flex items-center gap-1 text-xs font-medium text-[#d47b2c] bg-[#bc6c25]/10 px-2.5 py-1 rounded-full">
                                ⭐ {rating}
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2">
                            <BookingDelete _id={_id} refresh={refresh} />
                            <Link href={`/all-facilities/${sportsId}`}>
                                <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#fefae0] bg-[#283618] hover:bg-[#606c38] px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer">
                                    👁 View
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;