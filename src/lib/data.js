
export const getAllData = async (token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}


export const getDataById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return await res.json();
}

export const getBookingsData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/bookings`);
    const Bookings = await res.json();
    return Bookings;

    // return Bookings.map(book => <MyBookingsPage key={book._id} book={book} /> )
}