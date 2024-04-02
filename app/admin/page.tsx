import React from 'react'
import PostItem from './_components/post-item'
import { auth, currentUser } from '@clerk/nextjs'
import { getDrafts } from '@/utils/api'
import prisma from '@/prisma'
import CreateButton from './_components/create-button'

const page = async () => {
    const drafts = await prisma.draft.findMany();
    const { userId } = auth()

    return (
        <div className='w-[600px] min-h-screen mx-auto'>
            <div className='flex justify-between items-center my-12'>
                <h1 className='text-4xl font-bold'>Your Post</h1>
                <CreateButton userId={userId} />
            </div>

            {drafts.map((draft) => (
                <PostItem key={draft.id} draft={draft} />
            ))}

        </div>
    )
}

export default page
