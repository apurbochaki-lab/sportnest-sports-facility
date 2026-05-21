
export const getAllData = async (search = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`);
    const data = await res.json();
    return data;
}


export const getDataById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports/${id}`);
    return await res.json();
}

export const getBookingsData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings`);
    const Bookings = await res.json();
    return Bookings;

    // return Bookings.map(book => <MyBookingsPage key={book._id} book={book} /> )
}