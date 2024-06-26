"use client"

import { addDraft } from "@/redux/features/draft-slice"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { BeatLoader } from "react-spinners"

const CreateButton = ({ userId }: { userId: string }) => {
    const [makingDraft, setMakingDraft] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()

    const createNewDraft = async () => {
        setMakingDraft(true)
        const { data } = await axios.post("/api/draft/", { authorId: userId })

        router.push('/admin/' + data.id)
        dispatch(addDraft(data))
    }

    return (
        <button
            disabled={makingDraft}
            onClick={createNewDraft}
            className='py-[10px] px-4 flex justify-center items-center rounded-full text-white bg-red-500 hover:bg-red-600 active:bg-red-700 transition-all text-sm'>
            {makingDraft ? (
                <BeatLoader
                    loading={true}
                    color="#fff"
                    size={12}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                "Write a Post"
            )}
        </button>
    )
}

export default CreateButton
