export const getDrafts = async () => {
    const res = await fetch("api/draft")
    const data = await res.json()

    return data
}

export const updateTitleDraft = async (id: string, title: string) => {
    await fetch('/api/draft/' + id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id, title
        })
    })
}

export const updateContentDraft = async (id: string, content: string) => {
    await fetch('/api/draft/' + id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id, content
        })
    })
}

export const getPosts = async () => {
    const res = await fetch("api/post")
    const data = await res.json()

    return data
}

