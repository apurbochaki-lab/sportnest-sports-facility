import MyBookingsPage from "@/app/my-bookings/page";

export const getAllData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`);
    return await res.json();
}

export const getDataById = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports/${id}`);
    return await res.json();
}

export const getBookingsData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings`);
    const Bookings = await res.json();
    return Bookings;

    // return Bookings.map(book => <MyBookingsPage key={book._id} book={book} /> )
}