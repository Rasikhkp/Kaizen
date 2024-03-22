import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import trash from "@/public/trash.jpg"
import Image from 'next/image'
import Link from 'next/link'
import ContentLink from '@/app/_components/content-link'

const page = () => {
    return (
        <div className='relative max-w-screen-sm mx-auto px-4 min-h-screen'>
            <Link href={'/blog'} className='sm:px-5 hover:underline hover:underline-offset-4 font-medium text-sm text-[#6C7793] flex gap-3'>
                <ArrowLongLeftIcon className='w-4' />
                <div>Back to Blog</div>
            </Link>

            <div className='aspect-video relative object-cover w-full overflow-clip rounded-xl mt-5'>
                <Image src={trash} fill alt="trash" />
            </div>

            <div className='text-sm text-[#474E6B] font-medium mt-4 text-end px-5'>Februari 21, 2024 • 6 min read</div>

            <aside className='fixed text-[#1D1E30] w-[269px] text-sm hidden min-[1180px]:block right-0 top-[85px] max-h-screeen border-l border-slate-200 px-2 pt-10'>
                <div className='font-medium p-3'>Table of Content</div>

                <ContentLink to='#introduction' name='Introduction' className='px-3' />
                <ContentLink to='#dashboard' name='Dashboard' className='px-6' />
                <ContentLink to='#calendar' name='Calendar' className='px-6' />
            </aside>

            <article className='text-[#1D1E30] mt-10 prose-sm sm:prose mb-20 sm:px-5'>
                <h1>Building a Complete React CRM App with Refine, Ant Design and GraphQL</h1>

                <p>I want to introduce our newest example app – a full-fledged React CRM (Customer Relationship Management) application built using Refine, Ant Design, and GraphQL. This example is open-source, which means anyone can freely utilize and customize the source code as they see fit. It's not just another application; it's a comprehensive solution that boasts all the features and functionalities required for an accurate enterprise-level application.</p>

                <p>Moreover, this application serves as a guiding light for all developers. Whether you're a seasoned pro or just starting, our project is a valuable resource that can be used as a reference to better understand best practices and modern development techniques.</p>

                <p>A minimal CRM app tutorial from scratch was published on YouTube. You can follow the Refine to get notified for more real use case examples!</p>

                <h2 id='introduction'>Introduction</h2>

                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                <h3 id='dashboard'>Dashboard</h3>

                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                <h3 id='calendar'>Calendar</h3>

                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

            </article>
        </div>
    )
}

export default page
