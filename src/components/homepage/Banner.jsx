import heroImg from '@/assets/hero-image.jpg'
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="bg-[url('/wave.svg')] min-h-screen bg-cover bg-bottom bg-no-repeat">
            <div className="container mx-auto pt-10 md:pt-20 flex flex-col-reverse md:flex-row justify-center  gap-10">
                {/* Left Side */}
                <div className='m-5 pb-15 md:pb-0'>
                    <h2 className="text-[#fefae0] text-6xl font-bold">BOOK YOUR PERFECT <br /> SPORTS FACILITY INSTANTLY!</h2>
                    <p className="text-white max-w-3xl mt-2 text-lg">Discover premium sports venues including football turfs, badminton courts, swimming lanes, and tennis courts. Explore available facilities and reserve your preferred time slots with a smooth and secure booking experience.</p>

                    <Link href="/all-facilities" className=''>
                        <Button className="rounded-lg mt-10 flex justify-center mx-auto bg-[#dda15e] text-[#283618] text-xl font-bold p-6 btn-hover">Explore Facilities <FaLongArrowAltRight />
                        </Button>
                    </Link>
                </div>

                {/* Right Side */}
                <div className='m-5'>
                    <Image
                        src={heroImg}
                        alt='Hero Image'
                        width={600} height={300}
                        className='rounded-xl shadow-md hover:scale-105 animate-floating transition-all duration-500 ease-in-out'
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;