'use client'

import { Button, Card, DateField, Label } from "@heroui/react";
import { useState } from "react";

const BookingCard = () => {

    const [date, setDate] = useState(null)
    console.log(new Date(date))

    return (
        <div className="">
            <Card className="bg-[#e9edc9] max-w-[300px] p-5 mx-auto md:mx-0">
                <h2 className="text-xl font-bold text-[#283618]">Book Your Appointment</h2>
                <DateField className="" name="date" onChange={setDate}>
                    <Label>Booking Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button className="w-full bg-[#283618] text-[#fefae0] mt-5 text-lg font-semibold">Book Now</Button>
            </Card>
        </div>
    );
};

export default BookingCard;