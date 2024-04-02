"use client"

import { getAllDraft } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from './post-item'
import { useEffect } from 'react'
import { fillDraft } from '@/redux/features/draft-slice'
import axios from 'axios'

const PostList = () => {
    const draftState = useSelector(getAllDraft);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDrafts = async () => {
            const { data } = await axios.get("/api/draft")
            dispatch(fillDraft(data))
        }

        fetchDrafts()
    }, [])

    return (
        <div className='pb-12'>
            {
                draftState.map((draft) => (
                    <PostItem key={draft.id} draft={draft} />
                ))
            }
        </div>
    )
}

export default PostList
