"use client"

import { auth } from "@clerk/nextjs"
import axios from "axios"
import { useRouter } from "next/navigation"

const CreateButton = ({ userId }: { userId: string }) => {
    const router = useRouter()

    const createNewDraft = async () => {
        const { data } = await axios.post("/api/draft/", { authorId: userId, title: '', content: '' })

        console.log('newDraft', data)
        router.push('/admin/' + data.id)
    }
    return (
        <button
            onClick={createNewDraft}
            className='py-[10px] px-4 rounded-full text-white bg-red-500 hover:bg-red-600 active:bg-red-700 transition-all text-sm'>
            Write a Post
        </button>
    )
}

export default CreateButton
