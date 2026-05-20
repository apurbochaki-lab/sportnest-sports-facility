'use client'

import { AlertDialog, Button } from '@heroui/react';

const BookingDelete = ({ _id, refresh }) => {

    const handleCancelBooking = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings/${_id}`, {
            method: 'DELETE'
        })
        const data = await res.json();

        if (data.deletedCount > 0) {
            refresh('/my-bookings')
        }
        console.log(data)
    }

    return (
        <AlertDialog>
            <Button variant='outline' className="border-[#dda15e] hover:border-[#bc6c25] hover:bg-[#bc6c25]/08 hover:text-red-700 rounded-xl">🗑 Cancel</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className='text-red-700 text-xl'>Want to cancel the booking?</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingDelete;