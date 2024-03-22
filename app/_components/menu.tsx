"use client"

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

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
                        <div className='border-b p-4 border-slate-200'>Home</div>
                        <div className='p-4'>Blog</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu
