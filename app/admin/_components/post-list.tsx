"use client"

import { getActive, getAllDraft } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from './post-item'
import { useEffect, useState } from 'react'
import { fillDraft } from '@/redux/features/draft-slice'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { useAuth } from '@clerk/nextjs'
import { Draft } from '@prisma/client'

const PostList = () => {
    const [isFetching, setIsFetching] = useState(true)
    const { userId } = useAuth()

    const draftState = useSelector(getAllDraft);
    const active = useSelector(getActive)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/draft")
            const filterData = data.filter((draft: Draft) => draft.authorId === userId)

            dispatch(fillDraft(filterData))
            setIsFetching(false)
        }

        fetchData()
    }, [])

    return (
        <div className='pb-12'>
            {isFetching ? (
                <div className='flex mt-10 justify-center'>
                    <BeatLoader
                        loading={true}
                        color="#000"
                        size={12}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>

            ) : (
                <>
                    {active === 'draft' ? (
                        <>
                            {draftState.filter(draft => !draft.isPublished).length ? draftState.map((draft) => {
                                if (!draft.isPublished) {
                                    return (
                                        <PostItem key={draft.id} draft={draft} />
                                    )
                                }
                            }) : (
                                <div className='flex justify-center mt-4 font-semibold text-gray-600'>No Post</div>
                            )}
                        </>

                    ) : (
                        <>
                            {draftState.filter(draft => draft.isPublished).length ? draftState.map((draft) => {
                                if (draft.isPublished) {
                                    return (
                                        <PostItem key={draft.id} draft={draft} />
                                    )
                                }
                            }) : (
                                <div className='flex justify-center mt-4 font-semibold text-gray-600'>No Post</div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default PostList
