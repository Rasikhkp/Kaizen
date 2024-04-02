import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"


export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params
    const { title, content } = await req.json()

    const updated = await prisma.post.update({
        where: {
            id
        },
        data: {
            title, content
        }
    })

    return NextResponse.json({ updated })
}

export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params

    const deleted = await prisma.post.delete({
        where: {
            id
        }
    })

    return NextResponse.json({ deleted })
}
