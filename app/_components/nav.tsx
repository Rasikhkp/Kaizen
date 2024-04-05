"use client"

import logoKaizen from "@/public/bumi.png"
import Image from "next/image"
import Link from "next/link"
import Menu from "./menu"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "@/components/ui/button"

const Nav = ({ user }: any) => {
    const pathName = usePathname();

    return (
        <nav
            className={`z-20 bg-white/70 backdrop-blur fixed w-full top-0`}>
            <div className='max-w-screen-lg w-full flex justify-between items-center mx-auto p-4 md:px-4 md:py-6'>
                <Link href={'/'} className="flex gap-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 relative object-cover">
                        <Image src={logoKaizen} fill alt="logo kaizen" />
                    </div>
                    <div className="hidden md:block">
                        <div className="font-bold">ENVIRONMENT KEY</div>
                        <div className="text-[10px]">COMMUNITY AND COMPANY</div>
                    </div>
                </Link>

                <div className="gap-10 font-medium hidden md:flex text-sm">
                    {!pathName.includes('admin') ? (
                        <>
                            <Link href={'/'} className={`${pathName.match(/^\/$/) && "underline underline-offset-4"}`}>Home</Link>
                            <Link href={'/blog'} className={`${pathName.match(/^\/blog(?:\/|$)/) && "underline underline-offset-4"}`}>Blog</Link>
                        </>
                    ) : (
                        <>
                            <Avatar>
                                <AvatarImage src={user?.picture || undefined} alt="avatarImage" />
                                <AvatarFallback>{user?.given_name[0]}</AvatarFallback>
                            </Avatar>

                            <Button>
                                <LogoutLink>log out</LogoutLink>
                            </Button>
                        </>
                    )}
                </div>

                <Menu />
            </div>
        </nav>
    )
}

export default Nav
