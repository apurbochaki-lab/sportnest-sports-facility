import SportsCard from '@/components/homepage/SportsCard';
import { getAllData } from '@/lib/data';
import React from 'react';

const AllFacilitiesPage = async () => {

    const sports = await getAllData()
    console.log(sports)

    return (
        <section className='bg-[#fefae0]'>
            <div className="container mx-auto">
                <h2 className='text-center text-5xl font-bold pt-10 pb-5'>All Facilities</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5'>
                    {
                        sports.map(sport => <SportsCard key={sport._id} sport={sport} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllFacilitiesPage;


