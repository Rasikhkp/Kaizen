import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    const data = await prisma.published.findMany()

    return NextResponse.json(data)
}

export const POST = async (req: NextRequest) => {
    const { authorId, title, content, imageKey, imageUrl, slug } = await req.json()

    const created = await prisma.published.create({
        data: {
            authorId, content, title, imageKey, imageUrl, slug
        }
    })

    return NextResponse.json(created)
}
