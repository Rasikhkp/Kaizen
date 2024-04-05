import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { key: string } }) => {
    const { key } = params;

    const options = {
        method: "POST",
        url: "https://uploadthing.com/api/deleteFile",
        headers: {
            "Content-Type": "application/json",
            "X-Uploadthing-Api-Key": process.env.UPLOADTHING_SECRET,
            "X-Uploadthing-Version": "6.4.0",
        },
        data: { fileKeys: [key] },
    };

    const { data } = await axios.request(options)

    return NextResponse.json(data)
}
