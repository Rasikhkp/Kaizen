"use client";

import logoKaizen from "@/public/bumi.png";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import UserProfile from "./user-profile";
import { useEffect, useRef, useState } from "react";

const Nav = ({ user }: any) => {
    const [showProfile, setShowProfile] = useState(false)
    const profileRef = useRef<HTMLDivElement | null>(null)
    const pathName = usePathname();

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)

        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    const handleClickOutside = (e: MouseEvent) => {
        if (profileRef.current && !profileRef.current?.contains(e.target as Node)) {
            setShowProfile(false)
        }
    }

    return (
        <nav className={`z-20 bg-white/70 backdrop-blur fixed w-full top-0`}>
            <div className="flex items-center justify-between w-full max-w-screen-lg p-4 mx-auto md:px-4 md:py-6">
                <Link href={"/"} className="flex gap-4">
                    <div className="relative object-cover w-8 h-8 md:h-10 md:w-10">
                        <Image src={logoKaizen} fill alt="logo kaizen" />
                    </div>
                    <div className="hidden md:block">
                        <div className="font-bold">ENVIRONMENT KEY</div>
                        <div className="text-[10px]">COMMUNITY AND COMPANY</div>
                    </div>
                </Link>

                <div className="hidden relative gap-10 text-sm font-medium md:flex">
                    {!pathName.includes("admin") ? (
                        <>
                            <Link
                                href={"/"}
                                className={`${pathName.match(/^\/$/) &&
                                    "underline underline-offset-4"
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                href={"/blog"}
                                className={`${pathName.match(/^\/blog(?:\/|$)/) &&
                                    "underline underline-offset-4"
                                    }`}
                            >
                                Blog
                            </Link>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setShowProfile(!showProfile)}>
                                <Avatar>
                                    <AvatarImage src={user?.picture} alt="profile image" />
                                    <AvatarFallback>{user?.given_name[0]}</AvatarFallback>
                                </Avatar>
                            </button>

                            {showProfile && (
                                <div className="absolute top-14 right-0">
                                    <UserProfile user={user} />
                                </div>
                            )}
                        </>
                    )}
                </div>

                <Menu />
            </div>
        </nav>
    );
};

export default Nav;
