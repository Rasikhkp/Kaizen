import React from 'react'
import Post from '../_components/post'

const page = () => {
    return (
        <div className='px-4 md:py-32 w-full mx-auto min-h-screen max-w-screen-lg'>
            <div className='text-xl md:text-5xl px-5 font-semibold mb-4 md:mb-16 text-[#1E1E1E]'>Featured Post</div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16'>
                {Array.from({ length: 8 }).map((_, i) => (
                    <Post key={i} />
                ))}
            </div>
        </div>

    )
}

export default page
