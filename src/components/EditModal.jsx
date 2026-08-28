'use client'

import { useState } from "react";
import {
    Modal,
    Button,
    Surface,
    TextField,
    Label,
    Input,
    FieldError,
    TextArea,
    Select,
    ListBox
} from "@heroui/react";

import {
    BiEdit,
    BiX,
} from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const EditModal = ({ facility: facilityData }) => {

    const {
        _id,
        title,
        description,
        image,
        price,
        category,
        duration,
        label,
        facility,
        capacity,
        location,
        rating,
        trainer,
        timeSlot,
        level,
        status
    } = facilityData;

    const { data: session } = authClient.useSession()
    const currentUserEmail = session?.user?.email;

    const [open, setOpen] = useState(false)

    const handleEditData = async (e) => {
        e.preventDefault();

        // Identify Token
        const { data: tokenData } = await authClient.token()
        const token = tokenData?.token;
        // console.log("token from Edit --> 🟢", token)

        const formData = new FormData(e.target);
        const itemData = Object.fromEntries(formData.entries())
        // console.log(itemData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                id: _id,
                currentuser: currentUserEmail,
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(itemData)
        })
        const data = await res.json();

        if (data.success) {
            toast.success(data.message)
            redirect('/manage-facilities')
        }
        else {
            toast.error(data.message)
        }

    }

    return (
        <Modal isOpen={open} onOpenChange={setOpen}>

            <Button
                onPress={() => setOpen(true)}
                variant="outline"
                className="rounded-lg bg-green-700 text-white font-semibold text-lg border-white/50">
                <BiEdit /> Edit
            </Button>

            <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#fefae0]">

                        <Modal.CloseTrigger />

                        {/* Header */}
                        <Modal.Header className=" text-[#fefae0] p-6 border-b border-[#bc6c25]/40">
                            <div>
                                <Modal.Heading className="text-2xl font-bold">
                                    Edit Facility Info
                                </Modal.Heading>

                                <p className="text-sm text-black mt-1">
                                    Update your facility data by changing some info
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="p-0">
                            <Surface
                                variant="default"
                                className="bg-[#fefae0]"
                            >
                                <form
                                    className="p-5 md:p-8 space-y-10"
                                    onSubmit={handleEditData}
                                >

                                    {/* Basic Information */}
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                                📄 Basic Information
                                            </h2>

                                            <div className="grid grid-cols-1 gap-6">

                                                <TextField
                                                    name="title"
                                                    isRequired
                                                    defaultValue={title}
                                                >
                                                    <Label>Title</Label>
                                                    <Input
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>

                                                <TextField
                                                    name="description"
                                                    isRequired
                                                    defaultValue={description}
                                                >
                                                    <Label>Description</Label>

                                                    <TextArea

                                                        className="rounded-3xl min-h-32"
                                                    />

                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Category & Details */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            🏷️ Category & Details
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                            {/* Category */}
                                            <div>
                                                <Select
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    defaultValue={category}
                                                    placeholder="Select category"
                                                >
                                                    <Label>Category</Label>

                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>

                                                    <Select.Popover>
                                                        <ListBox>

                                                            {[
                                                                "Tennis",
                                                                "Football",
                                                                "Cricket",
                                                                "Basketball",
                                                                "Badminton",
                                                                "Swimming",
                                                                "Martial Arts",
                                                                "Gym",
                                                                "Other"
                                                            ].map((item) => (
                                                                <ListBox.Item
                                                                    key={item}
                                                                    id={item}
                                                                    textValue={item}
                                                                >
                                                                    {item}
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                            ))}

                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Level */}
                                            <div>
                                                <Select
                                                    name="level"
                                                    isRequired
                                                    className="w-full"
                                                    defaultValue={level}
                                                    placeholder="Select level"
                                                >
                                                    <Label>Level</Label>

                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>

                                                    <Select.Popover>
                                                        <ListBox>

                                                            {[
                                                                "Beginner",
                                                                "Intermediate",
                                                                "Advanced",
                                                                "All Levels"
                                                            ].map((item) => (
                                                                <ListBox.Item
                                                                    key={item}
                                                                    id={item}
                                                                    textValue={item}
                                                                >
                                                                    {item}
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                            ))}

                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Label */}
                                            <TextField
                                                name="label"
                                                defaultValue={label}>
                                                <Label>Label</Label>

                                                <Input
                                                    placeholder="Featured, New, Hot"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                        </div>
                                    </div>

                                    {/* Facility */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            🏢 Facility & Capacity
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <TextField
                                                name="facility"
                                                isRequired
                                                defaultValue={facility}
                                            >
                                                <Label>Facility Name</Label>

                                                <Input
                                                    placeholder="Training Studio"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                name="capacity"
                                                type="number"
                                                isRequired
                                                defaultValue={capacity}
                                            >
                                                <Label>Capacity</Label>

                                                <Input
                                                    type="number"
                                                    placeholder="15"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                        </div>
                                    </div>

                                    {/* Scheduling */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            🕐 Scheduling
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <TextField
                                                name="duration"
                                                isRequired
                                                defaultValue={duration}
                                            >
                                                <Label>Duration</Label>

                                                <Input
                                                    placeholder="60 Minutes"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                name="timeSlot"
                                                isRequired
                                                defaultValue={timeSlot}
                                            >
                                                <Label>Time Slot</Label>

                                                <Input
                                                    placeholder="9:00 AM – 5:00 PM"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            📍 Location & Trainer
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <TextField
                                                name="location"
                                                isRequired
                                                defaultValue={location}
                                            >
                                                <Label>Location</Label>

                                                <Input
                                                    placeholder="Dhaka Sports Complex"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                name="trainer"
                                                isRequired
                                                defaultValue={trainer}
                                            >
                                                <Label>Trainer / Coach</Label>

                                                <Input
                                                    placeholder="Mr. Rahim Uddin"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            💰 Pricing & Rating
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <TextField
                                                name="price"
                                                type="number"
                                                isRequired
                                                defaultValue={price}
                                            >
                                                <Label>Price</Label>

                                                <Input
                                                    type="number"
                                                    placeholder="120"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                name="rating"
                                                type="number"
                                                defaultValue={rating}
                                            >
                                                <Label>Rating</Label>

                                                <Input
                                                    type="number"
                                                    placeholder="4.5"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            🔘 Status
                                        </h2>

                                        <div>
                                            <Select
                                                name="status"
                                                isRequired
                                                className="w-full"
                                                placeholder="Available"
                                                defaultValue={status}
                                            >
                                                <Label>Availability</Label>

                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>

                                                <Select.Popover>
                                                    <ListBox>

                                                        <ListBox.Item
                                                            id="Available"
                                                            textValue="Available"
                                                            defaultValue={status}
                                                        >
                                                            ✅ Available
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>

                                                        <ListBox.Item
                                                            id="Unavailable"
                                                            textValue="Unavailable"
                                                        >
                                                            ❌ Unavailable
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>

                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Image & Email */}
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#606c38] border-b-2 border-[#dda15e] pb-2 mb-6">
                                            🖼️ Image & Contact
                                        </h2>

                                        <div className="grid grid-cols-1 gap-6">

                                            <TextField
                                                name="image"
                                                isRequired
                                                defaultValue={image}
                                            >
                                                <Label>Image URL</Label>

                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/image.jpg"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField>

                                            {/* <TextField
                                                name="userEmail"
                                                defaultValue={currentUserEmail}
                                                type="email"
                                                isRequired
                                            >
                                                <Label>Contact Email</Label>

                                                <Input
                                                    type="email"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />
                                            </TextField> */}

                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <Modal.Footer className="px-0 pt-4">

                                        <Button
                                            type="button"
                                            variant="secondary"
                                            onPress={() => setOpen(false)}
                                        >
                                            <BiX size={18} />
                                            Close
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="bg-gradient-to-r from-[#bc6c25] to-[#dda15e] text-[#fefae0]"
                                        >
                                            Save
                                        </Button>

                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}
export default EditModal;