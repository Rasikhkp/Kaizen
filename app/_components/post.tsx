import Image from 'next/image'
import trash from '@/public/trash.jpg'
import React from 'react'
import Link from 'next/link'

const Post = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <Link href={'/blog/makan-siang-apa'}>
                <div className='aspect-video overflow-clip rounded-xl bg-blue-300 relative object-cover'>
                    <Image src={trash} fill alt='trash' />
                </div>
            </Link>

            <div className='px-5 mt-3'>
                <Link href="/blog/makan-siang-apa" className='text-sm hover:underline hover:underline-offset-4 text-[#303450] md:text-2xl font-bold'>Building a Complete React CRM App with Refine, Ant Design and GraphQL</Link>
                <div className='text-xs md:text-base text-slate-700 mt-3'>We’ll explore the key feature of our CRM app, the technologies we used.</div>
                <div className='text-xs text-slate-600 mt-3'>March 22, 2024</div>
            </div>
        </div >

    )
}

export default Post
