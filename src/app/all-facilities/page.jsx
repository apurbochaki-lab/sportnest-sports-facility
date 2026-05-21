'use client'

import SportsCard from '@/components/homepage/SportsCard';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';


const AllFacilitiesPage = () => {

    const [search, setSearch] = useState("")
    console.log("Search State : ", search);
    const [sports, setSports] = useState([])
    // console.log(facilities)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports?search=${search}`);
            const data = await res.json();
            setSports(data)
        }
        getData()
    }, [search])

    // const sports = await getAllData()
    // console.log(sports)

    return (
        <section className='bg-[#fefae0] pb-20'>
            <div className="container mx-auto">
                <h2 className='text-center text-3xl md:text-5xl font-bold pt-10 pb-5 text-[#606c38]'>All Facilities</h2>

                {/* Search Field */}
                {/* <SearchBox /> */}
                <div className="w-full max-w-2xl mx-auto pb-8">
                    <div className="flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">

                        {/* Input */}
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search facilities..."
                            className="flex-1 px-5 py-4 outline-none text-slate-700 placeholder:text-slate-400 bg-transparent"
                        />

                        {/* Button */}
                        <button
                            onClick={() => setSearch("")}
                            className="btn py-7 flex items-center gap-2 bg-[#780000] hover:bg-[#c1121f] text-white font-semibold px-6 py-4 transition-colors cursor-pointer text-xl"
                        >
                            <X className="w-5 h-5" />
                            Clear
                        </button>
                    </div>
                </div>


                {sports.length === 0 && <h2 className='text-center text-4xl font-medium text-muted py-10'>No Facilities Found...</h2>}


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


