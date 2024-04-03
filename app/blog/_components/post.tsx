import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Draft } from '@prisma/client'
import { formatDate, htmlTagCleaner } from '@/utils/helper-function'
import defaultImage from "@/public/default-placeholder.png"

const Post = ({ className, draft }: { className?: string, draft: Draft }) => {
    return (
        <div className={className}>
            <Link href={`/blog/${draft.slug}`}>
                <div className='aspect-video overflow-clip rounded-xl bg-blue-300 relative'>
                    <Image src={draft.imageUrl || defaultImage} fill alt='title image' className='object-cover' />
                </div>
            </Link>

            <div className='px-5 mt-3'>
                <Link href={`/blog/${draft.slug}`} className='text-sm hover:underline hover:underline-offset-4 text-[#303450] md:text-2xl font-bold'>{draft.title}</Link>
                <div className='text-xs md:text-base text-slate-700 mt-3'>{htmlTagCleaner(draft.content).slice(0, 100)}...</div>
                <div className='text-xs text-slate-600 mt-3'>{formatDate(draft.createdAt)}</div>
            </div>
        </div>
    )
}

export default Post
