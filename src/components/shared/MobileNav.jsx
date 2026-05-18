'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ href, children }) => {

    const pathName = usePathname()

    return (
        <li className="">
            <Link href={href} className={`text-black font-medium text-[19px] ${pathName === href && "text-red-500 font-semibold"}`}>
                {children}
            </Link>
        </li>
    );
};

export default MobileNav;