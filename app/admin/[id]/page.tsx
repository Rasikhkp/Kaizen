import prisma from "@/prisma"
import TextField from "../_components/text-field"
import Link from "next/link"
import PreviewButton from "../_components/preview-button"
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline"

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const draft = await prisma.draft.findUnique({
        where: { id }
    })

    return (
        <>
            <div className='min-h-screen'>
                <div className='max-w-screen-md mx-auto min-h-40 text-base relative'>
                    <div className="flex justify-between items-center mb-8 ">
                        <Link
                            href={'/admin'}
                            className="flex gap-2 group text-sm ml-4 hover:underline underline-offset-2"
                        >
                            <ArrowLongLeftIcon className="group-hover:-translate-x-1 transition-all w-4" />
                            Back
                        </Link>
                        <PreviewButton id={id} />
                    </div>

                    <TextField
                        id={draft?.id!}
                        draftedContent={draft?.content || ''}
                        draftedTitle={draft?.title || ''}
                    />
                </div>
            </div>
        </>
    )
}

export default page
