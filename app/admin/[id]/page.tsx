import TextField from "../_components/text-field"
import Link from "next/link"
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import DraftOptions from "../_components/draft-options"

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();

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
                        <DraftOptions user={user} id={id} />
                    </div>

                    <TextField id={id} />
                </div>
            </div>
        </>
    )
}

export default page
