'use client'

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const TestPage = () => {

    const [searchText, setSearchText] = useState("")
    console.log(searchText)

    const [courses, setCourses] = useState([])
    console.log(courses)


    useEffect(() => {
        const handleSearch = async () => {
            const res = await fetch(`http://localhost:5000/courses?search=${searchText}`);
            const data = await res.json();
            setCourses(data)
        }
        handleSearch()
    }, [searchText])


    return (
        <div className="py-20">
            <div className=" pb-8">
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border mx-auto"
                    type="text"
                    placeholder="Type any text..."
                />

                <button
                    onClick={() => setSearchText("")}
                    className="btn bg-green-500">
                    Search
                </button>
            </div>

            {/* Courses Cards */}
            <div className="grid grid-cols-3 gap-3">
                {courses.length === 0 && <h2 className="text-center text-3xl text-muted">No Facilities Found...</h2> }
                {
                    courses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default TestPage;