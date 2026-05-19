import Image from "next/image";
import logo from '@/assets/logo.png'
import NavLink from "./NavLink";
import { Gear } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { ImMenu } from "react-icons/im";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LogoutBtn from "./LogoutBtn";
import { revalidatePath } from "next/cache";

const Navbar = async () => {
    // For refresh route (server)
    const refresh = async(path) => {
        'use server';
        return revalidatePath(path)
    }

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    // console.log("session : ", user)

    const isLoggedIn = true;

    return (
        <section className=" bg-[#283618]/95 shadow-sm sticky inset-0 z-10 backdrop-blur-md">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <ImMenu className="text-[#fefae0] text-2xl" />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-[#fefae0] rounded-box z-1 mt-3 w-52 p-2 shadow border border-black/20">
                            <MobileNav href="/">Home</MobileNav>
                            <MobileNav href="/all-facilities">All Facilities</MobileNav>
                            <MobileNav href="/my-bookings">My Bookings</MobileNav>
                            <MobileNav href="/add-facility">Add Facility</MobileNav>
                            <MobileNav href="/manage-facilites">Manage My Facilities</MobileNav>
                        </ul>
                    </div>

                    <Link href={"/"} className="flex items-center gap-1 cursor-pointer">
                        <Image src={logo} alt="Brand Logo" width={50} height={50} />
                        <h2 className="font-extrabold text-[22px] text-[#fefae0]">SportNest</h2>
                    </Link>
                </div>

                <ul className="navbar-center gap-6 hidden md:flex">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/all-facilities">All Facilities</NavLink>
                    <NavLink href="/my-bookings">My Bookings</NavLink>
                    <NavLink href="/add-facility">Add Facility</NavLink>
                    <NavLink href="/manage-facilities">Manage My Facilities</NavLink>
                </ul>

                <div className="navbar-end ">
                    {user &&
                        <Dropdown>
                            <Dropdown.Trigger className="rounded-full">
                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                    />
                                    <Avatar.Fallback delayMs={600} className="uppercase">{user?.name.split(" ")[0].slice(0, 2)}</Avatar.Fallback>
                                </Avatar>
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar size="sm">
                                            <Avatar.Image
                                                alt={user?.name}
                                                src={user?.image}
                                            />
                                            <Avatar.Fallback delayMs={600} className="uppercase">{user?.name.split(" ")[0].slice(0, 2)}</Avatar.Fallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-lg leading-5 font-medium ">{user?.name}</p>
                                            <p className="text-sm leading-none text-muted">{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu>

                                    <Dropdown.Item id="my-Bookings" textValue="MyBookings">
                                        <Link href="/my-bookings">
                                            <Label>My Bookings</Label>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="add-facility" textValue="AddFacility">
                                        <Link href="/all-facilities">
                                            <Label>Add Facilities</Label>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="manage-facilities" textValue="ManageFacilities">
                                        <div className="flex w-full items-center justify-between gap-2">
                                            <Link href="/manage-facilities">
                                                <Label>Manage My Facilities</Label>
                                            </Link>
                                            <Gear className="size-3.5 text-muted" />
                                        </div>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="logout" textValue="Logout" variant="danger">

                                        <LogoutBtn refresh={refresh} />

                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    }

                    {!user &&
                        <Link href={"/login"}>
                            <Button variant="tertiary" className="bg-[#fefae0] text-[16px] font-semibold">Login Now</Button>
                        </Link>
                    }
                </div>
            </div>
        </section>
    );
};

export default Navbar;