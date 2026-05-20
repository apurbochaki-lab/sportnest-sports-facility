import MyBookingCard from "@/components/my-bookings/MyBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaRegCalendarTimes } from "react-icons/fa";

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user?.id;
    // console.log(userId)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings/${userId}`)
    const bookedData = await res.json()
    // console.log(bookedData)



    return (
        <section className="bg-[#f5f0e8]">
            <div className="pt-7 container mx-auto ">
                <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#283618]">My Bookings</h2>

                <div className="space-y-10 m-7 pb-20">
                    {
                        bookedData.length === 0 &&
                        <div className="flex flex-col gap-5 py-20">
                            <span className="text-center text-6xl mx-auto"><FaRegCalendarTimes /></span>
                            <h2 className="text-center text-3xl text-muted font-semibold">My Booking data here</h2>
                        </div>
                    }

                    {
                        bookedData.map(book => <MyBookingCard key={book._id} book={book} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyBookingsPage;