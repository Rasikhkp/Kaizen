import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    const data = await prisma.draft.findMany()

    return NextResponse.json(data)
}

export const POST = async (req: NextRequest) => {
    const { authorId } = await req.json()

    const created = await prisma.draft.create({
        data: {
            authorId
        }
    })

    return NextResponse.json(created)
}
