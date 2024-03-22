import React from 'react'
import tiktokWhite from '@/public/tiktok-white.svg'
import igWhite from '@/public/ig-white.svg'
import emailWhite from '@/public/email-white.svg'
import { inter } from '../fonts'
import logoKaizen from "@/public/bumi.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={`${inter.className} relative bottom-0 w-full text-gray-300 bg-[#111111]`}>
            <div className="max-w-screen-lg px-4 md:px-12 w-full mx-auto">
                <div className="flex flex-col md:flex-row justify-between md:items-center py-5">
                    <div className="flex gap-4">
                        <div className="h-10 w-10 relative object-cover">
                            <Image src={logoKaizen} fill alt="logo kaizen" />
                        </div>
                        <div className="hidden md:block">
                            <div className="font-bold">ENVIRONMENT KEY</div>
                            <div className="text-[10px]">COMMUNITY AND COMPANY</div>
                        </div>
                    </div>

                    <div className="text-sm flex flex-col md:flex-row gap-2 md:gap-10 mt-6 md:mt-0">
                        <div className="font-bold md:hidden">Page</div>
                        <div>Home</div>
                        <div>Blog</div>
                    </div>

                    <div className="flex text-sm mt-6 md:mt-0 flex-col gap-3 md:gap-1 md:items-end ">
                        <div className="font-bold md:hidden">Contact Us</div>

                        <div className="text-xs mb-0 md:mb-3 flex gap-4 items-center">
                            <Image src={emailWhite} width={24} alt="email logo" className="md:hidden" />
                            enzironmentkaizen@gmail.com
                            <Image src={emailWhite} width={24} alt="email logo" className="hidden md:block" />
                        </div>
                        <div className="text-xs mb-0 md:mb-3 flex gap-4">
                            <Image src={igWhite} width={20} alt="email logo" className="md:hidden" />
                            @nkey.co
                            <Image src={igWhite} width={20} alt="email logo" className="hidden md:block" />
                        </div>
                        <div className="text-xs mb-0 md:mb-3 flex gap-4">
                            <Image src={tiktokWhite} width={20} alt="email logo" className="md:hidden" />
                            @nkey.co
                            <Image src={tiktokWhite} width={20} alt="email logo" className="hidden md:block" />
                        </div>
                    </div>
                </div>

                <div className="text-xs py-5 w-full border-t border-gray-800 md:text-center">
                    © 2024 Environment Key
                </div>
            </div>
        </footer>
    )
}

export default Footer
