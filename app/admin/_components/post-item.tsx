"use client"

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef, useState } from 'react'
import Tooltip from './tooltip';
import Link from 'next/link';
import { Draft } from '@prisma/client';
import { estimateReadingTime, htmlTagCleaner } from '@/utils/helper-function';


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
        }
    }

    const getLastEdited = () => {
        const currentDate = new Date();
        const updatedAt = new Date(draft.updatedAt)
        const diff = currentDate.getTime() - updatedAt.getTime();

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

    const getPublishInfo = () => {
        const currentDate = new Date();
        const publishedAt = new Date(draft.publishedAt)
        const diff = currentDate.getTime() - publishedAt.getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) {
            return `Published about ${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `Published about ${months} month${months > 1 ? 's' : ''} ago`;
        } else if (weeks > 0) {
            return `Published about ${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else if (days > 1) {
            return `Published about ${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 1) {
            return `Published about ${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 1) {
            return `Published about ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Published less than a minute ago';
        }

    }

    return (
        <div className='py-4 border-b border-gray-300'>
            <Link href={`/admin/${draft.id}`} className='font-bold'>{draft.title || 'Untitled'}</Link>
            <div className='flex gap-2 text-[#6B6B6B] mt-2'>
                <div className='text-sm'>
                    {!draft.isPublished ? getLastEdited() : getPublishInfo()} • {estimateReadingTime(htmlTagCleaner(draft.content))}
                </div>
                <div className='relative' ref={tooltipRef}>
                    <button onClick={() => setOpenTooltip(!openTooltip)}>
                        <ChevronDownIcon className='w-4 cursor-pointer' />
                    </button>

                    <div>
                        {openTooltip && (
                            <Tooltip id={draft.id} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem
