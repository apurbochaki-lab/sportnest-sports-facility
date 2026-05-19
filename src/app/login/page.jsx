'use client'

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const LoginPage = () => {
    const [showPass, setShowPass] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email,
            password,

            callbackURL: "/"
        })
        if (!error) {
            toast.success("Login Successful✅")
            redirect('/')
        }
        else {
            toast.error("Invalid email or password!⚠️")
        }

        console.log("From Login Page : ", data, error)

    }

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div className="bg-gradient-to-br from-[#283618] via-[#606c38] to-[#fefae0]">
            <Card className="bg-gradient-to-br from-[#fefae0] via-[#f8f5e4] to-[#f3ecd0] my-20 p-10 max-w-md mx-auto shadow-2xl">
                <div>
                    <h2 className="text-center text-3xl font-bold mb-5 text-[#606c38]">Login Your Account</h2>
                    <Button onClick={handleGoogle} className="w-full rounded-md shadow-md border border-black/10" variant="tertiary">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                </div>
                <div className="divider text-muted">OR Login With Email</div>

                <div className="w-full flex justify-center">
                    <Form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-md">
                        <TextField
                            className="w-full"
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" className="rounded-lg w-full bg-white/70border border-[#606c38]/20text-[#283618]placeholder:text-[#283618]/50" />
                            <FieldError />
                        </TextField>
                        <TextField
                            className="w-full relative"
                            isRequired
                            name="password"
                            type={showPass ? "text" : "password"}
                            validate={(value) => {

                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }

                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }

                                if (!/[a-z]/.test(value)) {
                                    return "Password must contain at least one lowercase letter";
                                }

                                return null;
                            }}
                        >
                            <Label>Password</Label>

                            <Input
                                placeholder="Enter your password"
                                className="rounded-lg w-full bg-white/70 border border-[#606c38]/20 text-[#283618] placeholder:text-[#283618]/50 "
                            />

                            <FieldError />

                            <button
                                type="button"
                                className="absolute top-[36px] right-3 cursor-pointer"
                            >
                                <span onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoEyeOff /> : <FaEye />}
                                </span>
                            </button>
                        </TextField>

                        <div className="flex justify-end gap-2">
                            <Button type="reset" variant="secondary" className="bg-[#dda15e] text-[#fefae0] hover:bg-red-300 hover:text-black rounded-md">
                                Reset
                            </Button>

                            <Button type="submit" className="bg-[#2d7930] hover:bg-[#33b42f] text-[#fefae0] font-semibold rounded-md">
                                <Check />
                                Register
                            </Button>

                        </div>

                        <div className="mt-3">
                            <h2 className="text-center flex justify-center gap-2 text-muted">
                                Don&apos;t have an account?
                                <Link href={"/register"} className="text-[#bc6c25] font-bold">Register</Link>
                            </h2>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;