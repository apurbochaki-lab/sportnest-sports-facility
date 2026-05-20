"use client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { FiAlertCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const DeleteModal = ({ facility, refresh }) => {

    const handleDelete = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
                id: facility._id
            }
        })
        const data = await res.json();

        if (data.deletedCount > 0) {
            toast.success("Item Deleted")
            refresh('/manage-facilities')
        }
        // console.log(data);
    }

    return (
        <AlertDialog>
            <Button variant="outline" className="rounded-lg bg-red-700 text-white font-semibold text-lg border-white/50">
                <MdDelete /> Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <FiAlertCircle />
                            <AlertDialog.Heading className="text-xl font-semibold text-red-700">Delete Facility permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong className="text-red-600">This Facility Info</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Facility
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteModal;