"use client"

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef, useState } from 'react'
import Tooltip from './tooltip';
import Link from 'next/link';

type Draft = {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

const PostItem = ({ draft }: { draft: Draft }) => {
    const [openTooltip, setOpenTooltip] = useState(false)
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)

        return () => document.removeEventListener("click", handleClickOutside)

    }, [])

    const handleClickOutside = (e: MouseEvent) => {
        if (tooltipRef.current && !tooltipRef.current?.contains(e.target as Node)) {
            setOpenTooltip(false)
            console.log("masuk")
        }
    }

    const getLastEdited = () => {
        const currentDate = new Date();
        const diff = currentDate.getTime() - draft.updatedAt.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) {
            return `Last edited ${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `Last edited ${months} month${months > 1 ? 's' : ''} ago`;
        } else if (weeks > 0) {
            return `Last edited ${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else if (days > 1) {
            return `Last edited ${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 1) {
            return `Last edited about ${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 1) {
            return `Last edited about ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Last edited less than a minute ago';
        }
    }

    const estimateReadingTime = () => {
        const wordsPerMinute = 200;
        const wordCount = draft.content.split(/\s+/).length;
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

        return `${readingTimeMinutes} min read (${wordCount} words) so far`;
    }

    const slugifyTitle = () => {
        return draft.title.toLowerCase().split(" ").join("-")
    }

    return (
        <div className='py-4 border-b border-[#F2F2F2]'>
            <Link href={`/admin/${draft.id}`} className='font-bold'>{draft.title || 'Untitled'}</Link>
            <div className='flex gap-2 text-[#6B6B6B] mt-2'>
                <div className='text-sm'>{getLastEdited()} • {estimateReadingTime()}</div>
                <div className='relative' ref={tooltipRef}>
                    <button onClick={() => setOpenTooltip(!openTooltip)}>
                        <ChevronDownIcon className='w-4 cursor-pointer' />
                    </button>

                    <div>
                        {openTooltip && (
                            <Tooltip />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem
