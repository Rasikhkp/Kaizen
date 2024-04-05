import React from 'react'
import CreateButton from './_components/create-button'
import PostList from './_components/post-list'
import PostNavigation from './_components/post-navigation'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser()

    return (
        <div className='w-[600px] min-h-screen mx-auto'>
            <div className='flex justify-between items-center my-12'>
                <h1 className='text-4xl font-bold'>Your Post</h1>
                <CreateButton userId={user?.id!} />
            </div>

            <PostNavigation />

            <PostList user={user} />
        </div>
    )
}

export default page
