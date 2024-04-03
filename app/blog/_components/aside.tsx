"use client"

import ContentLink from '@/app/_components/content-link'
import { extractHeadings } from '@/utils/helper-function'
import { Draft } from '@prisma/client'

const Aside = ({ draft }: { draft: Draft }) => {

    return (
        <aside className='fixed text-[#1D1E30] w-[269px] text-sm hidden min-[1180px]:block right-0 top-[85px] max-h-screeen border-l border-slate-200 px-2 pt-10'>
            <div className='font-medium p-3'>Table of Content</div>

            {extractHeadings(draft.content)?.map((heading) => (
                <ContentLink key={draft.id} name={heading.text} className={heading.level === '1' ? 'px-3' : 'px-6'} />
            ))}
        </aside>
    )
}

export default Aside
