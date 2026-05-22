'use client'

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ sportsDetails }) => {
    const { _id, title, image, price, rating, timeSlot, duration, facility } = sportsDetails;

    // Session Data
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log(user)

    const [date, setDate] = useState(null)
    // console.log(new Date(date))

    const handleBooking = async () => {
        const bookingData = {
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,
            userId: user?.id,
            sportsId: _id,
            sportsTitle: title,
            sportsImage: image,
            price,
            rating,
            status: "Pending",
            bookingDate: new Date(date)
        }
        // console.log(bookingData)

        // Identify Token
        const { data: tokenData } = await authClient.token()
        const token = tokenData?.token
        // console.log(token)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        // console.log(data)
        if (data.acknowledged) {
            toast.success("Booking Done")
        }
        else {
            toast.error("Something went wrong! Try later.")
        }
    }


    return (
        <div className="">
            <Card className="bg-[#e9edc9] max-w-[300px] p-5 mx-auto md:mx-0">
                <h2 className="text-xl font-bold text-[#283618] text-center">Book Your Appointment</h2>
                <h2 className="text-lg font-semibold text-[#283618]">{facility}</h2>
                <h2 className="font-medium">{duration} ● {timeSlot}</h2>
                <DateField name="date" onChange={setDate}>
                    <Label>Booking Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <h2 className="text-lg font-semibold text-[#283618]">Price : ${price}</h2>
                <Button onClick={handleBooking} className="w-full bg-[#283618] text-[#fefae0] mt-2 text-lg font-semibold">Book Now</Button>
            </Card>
        </div>
    );
};

export default BookingCard;