import { getAllData } from "@/lib/data";
import { Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";
import Link from "next/link";
import MyBookingCard from "@/components/my-bookings/MyBookingCard";

const ManageMyFacilities = async () => {

    const facilities = await getAllData()
    console.log(facilities)

    return (
        <div className='container mx-auto pt-10 pb-20'>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-5xl font-bold text-[#606c38]">Manage My Facilities</h2>
                    <p className="font-medium text-muted">You can edit or delete from here</p>
                </div>
                <Link href="/add-facility">
                    <Button className="bg-green-600 font-semibold">
                        <Plus />Add New
                    </Button>
                </Link>
            </div>

            <div className="space-y-5">
                {
                    facilities.map(facility => <MyBookingCard key={facility._id} facility={facility} />  )
                }

            </div>
        </div>
    );
};

export default ManageMyFacilities;