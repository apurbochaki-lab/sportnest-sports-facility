import { getAllData, myFacilities } from "@/lib/data";
import { Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";
import Link from "next/link";
import ManageAllFacilities from "@/components/my-bookings/ManageAllFacilities";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ManageMyFacilities = async () => {

    // Identify Token
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    if (!token) return;

    // User session
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userEmail = session?.user?.email;

    // Date fetching
    const facilities = await myFacilities(token, userEmail)


    return (
        <section className="bg-[#f5f0e8]">
            <div className='container mx-auto pt-10 pb-32'>
                <div className="flex flex-col gap-5 sm:flex-row sm:justify-between items-center mb-10 m-5">
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

                <div className="space-y-8 m-5">
                    {
                        facilities.map(facility => <ManageAllFacilities key={facility._id} facility={facility} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default ManageMyFacilities;