"use client"

import { useEffect, useState } from "react"
import Preview from "./preview"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { fillDraft, updateDraft } from "@/redux/features/draft-slice"
import { RootState } from "@/redux/store"
import { Draft } from "@prisma/client"


const DraftOptions = ({ user, id }: { user: any, id: string }) => {
    const [showPreview, setShowPreview] = useState(false)
    const [isPublished, setIsPublished] = useState(false)
    const userId = user?.id
    const dispatch = useDispatch()
    const draft = useSelector((state: RootState) => state.draft.values.find(draft => draft.id === id))

    useEffect(() => {
        const fetchDraft = async () => {
            const { data } = await axios.get("/api/draft/")
            const filterData = data.filter((draft: Draft) => draft.authorId === userId)

            setIsPublished(filterData.find((draft: Draft) => draft.id === id).isPublished)
            dispatch(fillDraft(filterData))
        }

        fetchDraft()
    }, [])

    const publish = async () => {
        if (!draft) {
            return
        }

        const { data } = await axios.patch("/api/draft/" + draft.id, { publishedAt: new Date(), isPublished: true })

        dispatch(updateDraft(data))
        setIsPublished(true)
    }

    return (
        <>
            <div className="flex gap-4">
                <button
                    onClick={() => setShowPreview(true)}
                    className="flex gap-2 font-medium text-gray-600 items-center text-sm py-2 px-4 rounded-full border border-red-400 hover:bg-slate-100 transition-all"
                >
                    Preview
                </button>

                <button
                    disabled={isPublished}
                    onClick={publish}
                    className={`${isPublished ? "cursor-not-allowed bg-red-400" : "bg-red-500 hover:bg-red-600"} flex gap-2 text-white font-medium items-center text-sm py-2 px-4 rounded-full transition-all`}
                >
                    {isPublished ? "Published" : "Publish"}
                </button>
            </div>

            {showPreview && (
                <Preview setShowPreview={setShowPreview} id={id} className="fixed left-0 top-0 z-30" />
            )}

        </>
    )
}

export default DraftOptions
