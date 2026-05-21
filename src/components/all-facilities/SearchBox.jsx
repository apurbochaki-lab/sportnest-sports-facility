'use client'

import { Cross, CrossIcon, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const SearchBox = () => {

    const [search, setSearch] = useState("")
    console.log("Search State : ", search);
    const [facilities, setFacilities] = useState([])
    console.log(facilities)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports?search=${search}`);
            const data = await res.json();
            setFacilities(data)
        }
        getData()
    }, [search])

    return (
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
    );
};

export default SearchBox;