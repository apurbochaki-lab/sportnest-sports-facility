export const getAllData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`);
    return await res.json();
}

export const getDataById = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports/${id}`);
    return await res.json();
}