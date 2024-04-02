import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params

    const data = await prisma.draft.findUnique({
        where: { id }
    })

    return NextResponse.json(data)
}

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params
    const { title, content, imageKey, imageUrl } = await req.json()

    const updated = await prisma.draft.update({
        where: {
            id
        },
        data: {
            title,
            content,
            imageKey,
            imageUrl,
            updatedAt: new Date()
        }
    })

    console.log(updated)

    return NextResponse.json({ updated })
}

export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params

    const deleted = await prisma.draft.delete({
        where: {
            id
        }
    })

    return NextResponse.json({ deleted })
}
