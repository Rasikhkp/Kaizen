"use client"

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter()

    const toggle = () => {
        setOpenMenu(!openMenu)
        console.log('di pencet')

        const body = document.querySelector("body")!

        if (body.classList.contains("overflow-clip")) {
            body.classList.remove('overflow-clip')
        } else {
            body.classList.add('overflow-clip')
        }

    }

    const move = (path: string) => {
        router.push(path)
        toggle()
    }

    return (
        <div className='md:hidden'>
            <button type='button' onClick={toggle}>
                {openMenu ? (
                    <XMarkIcon className='w-5' />
                ) : (
                    <Bars3Icon className="w-5" />
                )}
            </button>

            {openMenu && (
                <div className='h-screen w-full bg-white absolute left-0 pt-10 top-12 px-4 '>
                    <div className='border border-slate-200 rounded-xl'>
                        <button onClick={() => move("/")} className='border-b p-4 border-slate-200 text-start w-full'>Home</button>
                        <button onClick={() => move("/blog")} className='p-4 w-full text-start'>Blog</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu
