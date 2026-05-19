'use client'

import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Label } from "@heroui/react";
import { useRouter } from "next/navigation";

const LogoutBtn = ({ refresh }) => {
    const router = useRouter()

    const handleLogout = async () => {
        await authClient.signOut();
        refresh("/login")
        router.push("/login")
    }

    return (
        <div onClick={handleLogout} className="flex w-full items-center justify-between gap-2">
            <Label>Log Out</Label>
            <ArrowRightFromSquare className="size-3.5 text-danger" />
        </div>
    );
};

export default LogoutBtn;