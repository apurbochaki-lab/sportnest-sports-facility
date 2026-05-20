import img from '../../assets/who3.jpg'
import Image from "next/image";
import { BiEdit, BiLocationPlus } from "react-icons/bi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdReduceCapacity } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { Button, Card } from '@heroui/react';
import EditModal from '../EditModal';

const MyBookingCard = ({ facility }) => {
    const { facility: facilityName, duration, timeSlot, location, capacity, image } = facility;
    return (
        <Card className="bg-[#86a35f] ">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex items-center gap-4 text-white">
                    <Image
                        src={image}
                        width={150} height={150}
                        alt="All data pic"
                        className="rounded-xl border-2 border-white/60 shadow-md"
                    />

                    <div>
                        <h2 className="text-2xl font-semibold">{facilityName}</h2>
                        <span className="flex items-center gap-1">
                            <IoMdStopwatch className="text-black" />
                            <div className="flex items-center gap-3">
                                <h2>{duration}</h2>
                                <h2>●</h2>
                                <h2>{timeSlot}</h2>
                            </div>
                        </span>
                        <h2 className="flex items-center gap-1">
                            <BiLocationPlus className="text-black" />
                            {location}
                        </h2>
                        <h2 className="flex items-center gap-1"><MdReduceCapacity className="text-black" />Capacity : {capacity}</h2>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-5">
                    {/* <Button variant="outline" className="rounded-lg bg-green-700 text-white font-semibold text-lg border-white/50">
                        <BiEdit /> Edit
                    </Button> */}

                    <EditModal facility={facility}/>

                    <Button variant="outline" className="rounded-lg bg-red-700 text-white font-semibold text-lg border-white/50">
                        <RiDeleteBack2Fill /> Delete
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default MyBookingCard;