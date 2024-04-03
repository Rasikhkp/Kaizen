import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/prisma'
import defaultImage from '@/public/default-placeholder.png'
import { estimateReadingTime, formatDate, htmlTagCleaner } from '@/utils/helper-function'
import Aside from '../_components/aside'

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

            <div className='text-sm text-[#474E6B] font-medium mt-4 text-end px-5'>{formatDate(draft!.createdAt)} • {estimateReadingTime(htmlTagCleaner(draft!.content))}</div>

            <Aside draft={draft!} />

            <article className='text-[#1D1E30] mt-10 prose-sm sm:prose mb-20 sm:px-5'>
                <h1>{draft!.title}</h1>
                <div id='body' dangerouslySetInnerHTML={{ __html: draft!.content }}></div>
            </article>
        </div>
    )
}

export default page
