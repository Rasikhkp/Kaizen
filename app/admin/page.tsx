import React from 'react'
import { auth } from '@clerk/nextjs'
import CreateButton from './_components/create-button'
import PostList from './_components/post-list'
import PostNavigation from './_components/post-navigation'
import prisma from '@/prisma'

const page = async () => {
    const { userId } = auth()

    return (
        <div className='w-[600px] min-h-screen mx-auto'>
            <div className='flex justify-between items-center my-12'>
                <h1 className='text-4xl font-bold'>Your Post</h1>
                <CreateButton userId={userId!} />
            </div>

            <PostNavigation />

            <PostList />
        </div>
    )
}

export default page
