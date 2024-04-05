import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/prisma'
import defaultImage from '@/public/default-placeholder.png'
import { estimateReadingTime, formatDate, htmlTagCleaner } from '@/utils/helper-function'
import TableOfContent from '../_components/table-of-content'

const page = async ({ params }: { params: { slug: string } }) => {
    const draft = await prisma.draft.findFirst({
        where: { slug: params.slug }
    })

    return (
        <div className='relative max-w-screen-sm mx-auto px-4 min-h-screen'>
            <Link href={'/blog'} className='sm:px-5 hover:underline hover:underline-offset-4 font-medium text-sm text-[#6C7793] flex gap-3'>
                <ArrowLongLeftIcon className='w-4' />
                <div>Back to Blog</div>
            </Link>

            <div className='aspect-video relative w-full overflow-clip rounded-xl mt-5'>
                <Image src={draft?.imageUrl || defaultImage} fill alt="title image" className='object-cover' />
            </div>

            <div className='text-sm text-[#474E6B] font-medium mt-4 text-end px-5'>{formatDate(draft!.publishedAt)} • {estimateReadingTime(htmlTagCleaner(draft!.content))}</div>

            <TableOfContent draft={draft!} />

            <h1 className='text-[#1D1E30] sm:px-5 sm:text-4xl text-2xl font-semibold my-10 sm:font-bold'>{draft!.title}</h1>
            <article className=' text-[#1D1E30] prose-sm prose-h1:text-xl prose-h2:text-lg sm:prose-h1:text-2xl sm:prose-h2:text-xl sm:prose mb-20 sm:px-5'>
                <div id='body' dangerouslySetInnerHTML={{ __html: draft!.content }}></div>
            </article>
        </div>
    )
}

export default page
