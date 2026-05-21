
const CourseCard = ({course}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">

                {/* Category */}
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-4">
                    {course.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {course.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-5">
                    {course.description}
                </p>

                {/* Button */}
                <button className="px-5 py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition duration-300">
                    Read More
                </button>

            </div>

        </div>
    );
};

export default CourseCard;