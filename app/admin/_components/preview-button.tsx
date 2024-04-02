"use client"

import { useState } from "react"
import Preview from "./preview"
import { EyeIcon } from "@heroicons/react/24/outline"


const PreviewButton = ({ id }: { id: string }) => {
    const [showPreview, setShowPreview] = useState(false)
    return (
        <>
            {/* <button onClick={() => setShowPreview(true)} className="text-sm"> */}
            {/*     <EyeIcon className="w-4" /> */}
            {/*     Preview */}
            {/* </button> */}

            <button
                onClick={() => setShowPreview(true)}
                className="flex gap-2 items-center text-sm ml-4 hover:underline underline-offset-2"
            >
                <EyeIcon className="w-4" />
                Preview
            </button>


            {showPreview && (
                <Preview setShowPreview={setShowPreview} id={id} className="fixed left-0 top-0 z-30" />
            )}

        </>
    )
}

export default PreviewButton
