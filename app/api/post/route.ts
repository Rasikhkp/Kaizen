import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    const data = await prisma.post.findMany()

    return NextResponse.json(data)
}

export const POST = async (req: NextRequest) => {
    const { authorId, title, content } = await req.json()

    const created = await prisma.post.create({
        data: {
            authorId, content, title
        }
    })

    return NextResponse.json(created)
}
