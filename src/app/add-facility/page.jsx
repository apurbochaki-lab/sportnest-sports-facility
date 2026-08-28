'use client'

import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const AddFacilityPage = () => {

    const { data: session } = authClient.useSession()
    const userEmail = session?.user?.email;

    const handleAddSports = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const objectData = Object.fromEntries(formData.entries());
        const sportsData = {
            ...objectData,
            userEmail
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sportsData)
        })
        const data = await res.json();
        // console.log(data);

        if (data.acknowledged) {
            redirect('/manage-facilities')
        }
    }

    return (
        <div className="">
            <form onSubmit={handleAddSports} className="min-h-screen bg-gradient-to-br from-[#283618]/40 via-[#3a4f20] to-[#283618]/50 pt-18 pb-36 px-4">
                <Card className="max-w-4xl mx-auto bg-[#fefae0] rounded-2xl overflow-hidden shadow-2xl ">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#283618] to-[#606c38] px-8 py-7 rounded-tl-xl rounded-tr-xl rounded-bl-sm rounded-br-sm shadow-md border-2 border-[#bc6c25]/70">
                        <span className="text-4xl block mb-2">🏟️</span>
                        <h1 className="text-3xl font-bold text-[#fefae0] tracking-wide">Add Sport Facility</h1>
                        <p className="text-[#dda15e] text-sm mt-1">Fill in all the details to list a new sporting facility</p>
                    </div>

                    {/* Form Body */}
                    <div className="px-8 py-8 space-y-8">

                        {/* Basic Info */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                📄 Basic Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Title <span className="text-[#bc6c25]">*</span></label>
                                    <input type="text" name="title" placeholder="e.g. Premium Tennis Court"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Description <span className="text-[#bc6c25]">*</span></label>
                                    <textarea name="description" rows={3} placeholder="Describe the facility, amenities, rules..."
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all resize-y" />
                                </div>
                            </div>
                        </div>

                        {/* Category & Details */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                🏷️ Category & Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Category <span className="text-[#bc6c25]">*</span></label>
                                    <select name="category"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all cursor-pointer">
                                        <option value="">Select category</option>
                                        <option>Tennis</option>
                                        <option>Football</option>
                                        <option>Cricket</option>
                                        <option>Basketball</option>
                                        <option>Badminton</option>
                                        <option>Swimming</option>
                                        <option>Martial Arts</option>
                                        <option>Gym</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Level <span className="text-[#bc6c25]">*</span></label>
                                    <select name="level"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all cursor-pointer">
                                        <option value="">Select level</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                        <option>All Levels</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Label</label>
                                    <input type="text" name="label" placeholder="e.g. Featured, New, Hot"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* ✅ NEW: Facility & Capacity */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                🏢 Facility & Capacity
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Facility Name <span className="text-[#bc6c25]">*</span></label>
                                    <input type="text" name="facility" placeholder="e.g. Training Studio, Main Court"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Capacity <span className="text-[#bc6c25]">*</span></label>
                                    <input type="number" name="capacity" placeholder="e.g. 15" min="1"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Scheduling */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                🕐 Scheduling
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Duration <span className="text-[#bc6c25]">*</span></label>
                                    <input type="text" name="duration" placeholder="e.g. 60 minutes"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Time Slot <span className="text-[#bc6c25]">*</span></label>
                                    <input type="text" name="timeSlot" placeholder="e.g. 9:00 AM – 5:00 PM" defaultValue="00:00 AM – 00:00 PM"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                            </div>

                            {/* ✅ NEW: Available Days */}
                            {/* <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-[#283618]">Available Days <span className="text-[#bc6c25]">*</span></label>
                                <div className="flex flex-wrap gap-2">
                                    {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                                        <label key={day} className="cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="availableDays"
                                                value={day}
                                                className="hidden peer"
                                            />
                                            <span className="inline-block px-4 py-1.5 rounded-full border-[1.5px] border-[#c8c4a0] bg-white text-sm font-semibold text-[#606c38] peer-checked:bg-[#606c38] peer-checked:border-[#606c38] peer-checked:text-[#fefae0] transition-all cursor-pointer">
                                                {day}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div> */}
                        </div>

                        {/* Location & Trainer */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                📍 Location & Trainer
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Location <span className="text-[#bc6c25]">*</span></label>
                                    <input type="text" name="location" placeholder="e.g. Dhaka Sports Complex"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Trainer / Coach <span className="text-[#bc6c25]">*</span></label>
                                    <input type="text" name="trainer" placeholder="e.g. Mr. Rahim Uddin"
                                        className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Pricing & Rating */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                💰 Pricing & Rating
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Price <span className="text-[#bc6c25]">*</span></label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#606c38] font-bold">$</span>
                                        <input type="number" name="price" placeholder="0.00" min="0" step="0.01"
                                            className="w-full pl-8 pr-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-[#283618]">Rating</label>
                                    <div className="relative">
                                        <input type="number" name="rating" placeholder="4.5" min="0" max="5" step="0.1"
                                            className="w-full px-3.5 pr-14 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">/ 5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                🔘 Status
                            </h2>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-[#283618]">Availability <span className="text-[#bc6c25]">*</span></label>
                                <select name="status"
                                    className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all cursor-pointer">
                                    <option value="Available">✅ Available</option>
                                    <option value="Unavailable">❌ Unavailable</option>
                                </select>
                            </div>
                        </div>

                        {/* Image */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                🖼️ Facility Image
                            </h2>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-[#283618]">Image URL <span className="text-[#bc6c25]">*</span></label>
                                <input type="url" name="image" placeholder="https://example.com/image.jpg"
                                    className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                            </div>
                        </div>
                        {/* <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-1.5 mb-4">
                                📩 Contact Email
                            </h2>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-[#283618]">Please enter your contact email <span className="text-[#bc6c25]">*</span></label>
                                <input type="email" name="userEmail" placeholder="" defaultValue={userEmail}
                                    className="w-full px-3.5 py-2.5 bg-white border-[1.5px] border-[#c8c4a0] rounded-xl text-sm text-[#283618] outline-none focus:border-[#606c38] focus:ring-2 focus:ring-[#606c38]/20 transition-all" />
                            </div>
                        </div> */}

                        {/* Submit Button */}
                        <Button type="submit"
                            className="w-full py-6 bg-gradient-to-r from-[#bc6c25] to-[#dda15e] text-[#fefae0] font-bold text-lg rounded-xl hover:opacity-90 active:scale-95 transition-all border-2 border-[#bc6c25] shadow-sm">
                            ➕ Add Sport Facility
                        </Button>

                    </div>
                </Card>
            </form>
        </div>
    );
};

export default AddFacilityPage;