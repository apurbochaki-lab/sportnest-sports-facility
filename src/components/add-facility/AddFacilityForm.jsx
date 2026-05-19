"use client";

import {
    Button,
    Input,
    Textarea,
} from "@heroui/react";

export default function AddFacilityForm() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fefae0] via-[#879973]/30 to-[#283618] py-12 px-4">

            <div className="max-w-6xl mx-auto bg-[#606c38] border border-[#283618] shadow-2xl rounded-3xl p-8 md:p-12">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-[#fefae0]">
                        Add New Facility
                    </h1>

                    <p className="text-[#fefae0]/80 mt-3">
                        Create and publish a new sports facility.
                    </p>
                </div>

                {/* FORM */}
                <form className="space-y-8">

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Title */}
                        <Input
                            label="Facility Title"
                            placeholder="Enter facility title"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Image */}
                        <Input
                            label="Image URL"
                            placeholder="Paste image URL"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Price */}
                        <Input
                            type="number"
                            label="Price"
                            placeholder="Enter price"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Duration */}
                        <Input
                            label="Duration"
                            placeholder="e.g 90 Minutes"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Category */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#fefae0] font-medium">
                                Category
                            </label>

                            <select
                                name="category"
                                defaultValue=""
                                className="bg-[#283618] border border-[#dda15e] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#dda15e]"
                            >
                                <option value="" disabled>
                                    Select category
                                </option>

                                <option value="Football">Football</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Badminton">Badminton</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Basketball">Basketball</option>
                            </select>
                        </div>

                        {/* Skill Level */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#fefae0] font-medium">
                                Skill Level
                            </label>

                            <select
                                name="level"
                                defaultValue=""
                                className="bg-[#283618] border border-[#dda15e] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#dda15e]"
                            >
                                <option value="" disabled>
                                    Select level
                                </option>

                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="All Levels">All Levels</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#fefae0] font-medium">
                                Status
                            </label>

                            <select
                                name="status"
                                defaultValue=""
                                className="bg-[#283618] border border-[#dda15e] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#dda15e]"
                            >
                                <option value="" disabled>
                                    Select status
                                </option>

                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                            </select>
                        </div>

                        {/* Label */}
                        <Input
                            label="Label"
                            placeholder="e.g Popular"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Facility */}
                        <Input
                            label="Facility Type"
                            placeholder="e.g Outdoor Turf"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Capacity */}
                        <Input
                            type="number"
                            label="Capacity"
                            placeholder="Enter capacity"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Location */}
                        <Input
                            label="Location"
                            placeholder="Enter location"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Trainer */}
                        <Input
                            label="Trainer Name"
                            placeholder="Enter trainer name"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Time Slot */}
                        <Input
                            label="Time Slot"
                            placeholder="e.g 6:00 PM - 7:30 PM"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                        {/* Rating */}
                        <Input
                            type="number"
                            label="Rating"
                            placeholder="e.g 4.8"
                            variant="bordered"
                            classNames={{
                                label: "text-[#fefae0]",
                                input: "text-white",
                                inputWrapper:
                                    "bg-[#283618] border border-[#dda15e]",
                            }}
                        />

                    </div>

                    {/* Description */}
                    <Textarea
                        label="Description"
                        placeholder="Write facility description..."
                        minRows={5}
                        variant="bordered"
                        classNames={{
                            label: "text-[#fefae0]",
                            input: "text-white",
                            inputWrapper:
                                "bg-[#283618] border border-[#dda15e]",
                        }}
                    />

                    {/* Available Days */}
                    <Input
                        label="Available Days"
                        placeholder="e.g Saturday, Monday, Wednesday"
                        variant="bordered"
                        classNames={{
                            label: "text-[#fefae0]",
                            input: "text-white",
                            inputWrapper:
                                "bg-[#283618] border border-[#dda15e]",
                        }}
                    />

                    {/* Button */}
                    <Button className="w-full bg-[#bc6c25] text-[#fefae0] font-bold text-lg py-7 hover:opacity-90 transition-all duration-300">
                        Add Facility
                    </Button>

                </form>
            </div>
        </div>
    );
}