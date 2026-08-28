import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { MdAvTimer, MdReduceCapacity } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { Button, Card } from '@heroui/react';
import EditModal from '../EditModal';
import DeleteModal from "../DeleteModal";
import { revalidatePath } from "next/cache";
import { Eye } from "@gravity-ui/icons";
import Link from "next/link";


const ManageAllFacilities = async ({ facility }) => {
    const { title, duration, timeSlot, location, capacity, image } = facility;

    const refresh = async (path) => {
        'use server';
        return revalidatePath(path)
    }


    return (
        <Card className="bg-[#86a35f] ">

            <div className="md:flex md:justify-between mx-auto sm:mx-0 md:mx-0 md:items-center">
                {/* Left Side */}
                <div className="sm:flex sm:justify-center sm:items-center sm:gap-10 sm:pt-5 md:pt-0 md:flex md:gap-4 text-white">
                    <Image
                        src={image}
                        width={150} height={150}
                        alt="All data pic"
                        className="rounded-xl border-2 w-[300px] md:w-auto border-white/60 shadow-md"
                    />

                    <div className="pt-5 md:pt-0">
                        <h2 className="text-3xl font-semibold text-black pb-3 sm:pb-0">{title}</h2>

                        <h2 className="flex items-center gap-1">
                            <IoMdStopwatch className="text-black" />
                            {duration}
                        </h2>
                        <h2 className="flex items-center gap-1">
                            <MdAvTimer className="text-black" /> {timeSlot}
                        </h2>

                        <h2 className="flex items-center gap-1">
                            <BiLocationPlus className="text-black" />
                            {location}
                        </h2>
                        <h2 className="flex items-center gap-1"><MdReduceCapacity className="text-black" />Capacity : {capacity}</h2>
                    </div>
                </div>

                {/* Right Side */}
                <div className="mt-5 flex gap-5 justify-end md:flex-col">
                    <EditModal facility={facility} />

                    <DeleteModal facility={facility} refresh={refresh} />

                    <Link href={`/all-facilities/${facility._id}`}>
                        <Button
                            className="w-full bg-[#99c962]"
                            variant="outline">
                            <Eye />
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default ManageAllFacilities;