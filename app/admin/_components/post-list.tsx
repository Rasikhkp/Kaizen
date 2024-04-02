"use client"

import { Draft } from '@prisma/client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostList = () => {
    const [draft, setDraft] = useState<Draft | null>(null)

    useEffect(() => {
        const getDrafts = async () => {
            const { data } = await axios.get("/api/draft")

            setDraft(data)
        }

        getDrafts()
    })
    return (
        {
            drafts.map((draft) => (
                <PostItem key={draft.id} draft={draft} />
            ))
        }
    )
}

export default PostList
