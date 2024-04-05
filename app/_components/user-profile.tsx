"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const UserProfile = ({ user }: any) => {
    return (
        <div className="px-4 pt-4 pb-2 w-80 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-xl bg-white font-medium" >
            <div className='flex gap-4 pb-4 items-center border-b-2 border-gray-300'>
                <Avatar>
                    <AvatarImage src={user?.picture} alt="image profile" />
                    <AvatarFallback>{user?.given_name[0]}</AvatarFallback>
                </Avatar>

                <div>
                    <div className='text-sm text-gray-800'>{user?.given_name + " " + user?.family_name}</div>
                    <div className='text-[10px] text-xs text-gray-600'>{user?.email}</div>
                </div>
            </div>
            <LogoutLink>
                <button className='w-full flex gap-4 mt-2 items-center hover:bg-gray-200 rounded-lg active:bg-gray-300 transition-all px-4 py-3 text-sm'>
                    <ArrowLeftStartOnRectangleIcon className='w-4' />
                    Log out
                </button>
            </LogoutLink>
        </div >
    )
}

export default UserProfile
