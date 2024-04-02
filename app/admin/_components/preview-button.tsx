"use client"

import { useState } from "react"
import Preview from "./preview"


const PreviewButton = ({ id }: { id: string }) => {
    const [showPreview, setShowPreview] = useState(false)
    return (
        <>
            <div className="flex gap-4">
                <button
                    onClick={() => setShowPreview(true)}
                    className="flex gap-2 font-medium text-gray-600 items-center text-sm py-2 px-4 rounded-full border border-red-400 hover:bg-slate-100 transition-all"
                >
                    Preview
                </button>

                <button
                    className="flex gap-2 text-white font-medium items-center text-sm py-2 px-4 rounded-full bg-red-400 hover:bg-red-500 transition-all"
                >
                    Publish
                </button>
            </div>

            {showPreview && (
                <Preview setShowPreview={setShowPreview} id={id} className="fixed left-0 top-0 z-30" />
            )}

        </>
    )
}

export default PreviewButton
