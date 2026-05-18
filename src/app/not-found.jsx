import Link from "next/link";
import { FaFutbol } from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefae0] via-[#606c38]/20 to-[#283618] px-6">

      <div className="text-center max-w-md">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#dda15e] flex items-center justify-center shadow-lg">
            <FaFutbol className="text-3xl text-[#283618] animate-bounce" />
          </div>
        </div>

        {/* ERROR CODE */}
        <h1 className="text-6xl font-extrabold text-[#283618] mb-2">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#283618] mb-4">
          Oops! Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm text-[#283618]/70 mb-8 leading-6">
          The page you are looking for doesn’t exist or has been moved.
          Let’s get you back to exploring amazing sports facilities.
        </p>

        {/* BUTTON */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#dda15e] text-[#283618] font-semibold rounded-full shadow-md hover:bg-[#bc6c25] hover:text-[#fefae0] transition-all duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
    );
};

export default NotFoundPage;