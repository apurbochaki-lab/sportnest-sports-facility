'use client'

import { motion } from "framer-motion";

const LoadingPage = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#fefae0]">

            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#dda15e]/30 blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#bc6c25]/20 blur-3xl"
            />

            {/* Main Loader */}
            <div className="relative flex items-center justify-center">

                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="h-28 w-28 rounded-full border-[6px] border-[#dda15e] border-t-[#283618]"
                />

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute h-16 w-16 rounded-full border-[5px] border-[#bc6c25] border-b-[#606c38]"
                />

                {/* Center Dot */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                    className="absolute h-4 w-4 rounded-full bg-[#283618]"
                />
            </div>

            {/* Text */}
            <motion.div
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="mt-10 text-center"
            >
                <h1 className="text-3xl font-bold tracking-wide text-[#283618]">
                    Loading
                </h1>

                <p className="mt-2 text-sm tracking-[0.3em] text-[#606c38]">
                    FETCHING DATA...
                </p>
            </motion.div>
        </div>
    );
};

export default LoadingPage;