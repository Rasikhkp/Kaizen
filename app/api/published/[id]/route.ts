import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"


export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params
    const { title, content } = await req.json()

    const updated = await prisma.published.update({
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

    const deleted = await prisma.published.delete({
        where: {
            id
        }
    })

    return NextResponse.json({ deleted })
}
