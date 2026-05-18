'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {

    const pathName = usePathname()

    return (
        <li>
            <Link href={href} className={`text-[#fefae0] font-medium text-[19px] ${pathName === href && "text-amber-300 font-semibold"}`}>
                {children}
            </Link>
        </li>
    );
};

export default NavLink;