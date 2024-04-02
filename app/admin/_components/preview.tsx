"use client"

import trash from "@/public/trash.jpg"
import defaultImage from "@/public/default-placeholder.png"
import { XMarkIcon } from '@heroicons/react/24/outline'
import { UploadButton } from "@uploadthing/react"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { updateTitleDraft } from "@/utils/api"

const Preview = ({ className, setShowPreview, id }: { className: string, setShowPreview: any, id: string }) => {
    const [draft, setDraft] = useState(null)
    const previewRef = useRef(null)
    const [url, setUrl] = useState('')
    const [key, setKey] = useState('')
    const [imageLoading, setImageLoading] = useState(false)

    const updateImage = async (imageUrl: string, imageKey: string) => {
        console.log("imageUrl", imageUrl)
        console.log("imageKey", imageKey)

        await axios.patch("/api/draft/" + id, {
            imageUrl,
            imageKey,
            content: draft?.content || "",
            title: draft?.title || ""
        })
    }

    const deleteImage = async () => {
        const options = {
            method: 'POST',
            url: 'https://uploadthing.com/api/deleteFile',
            headers: {
                'Content-Type': 'application/json',
                'X-Uploadthing-Api-Key': 'sk_live_bb4eef2612fda49943764f455bfd6444d45053baa4639bdcee6886016b73c9b3',
                'X-Uploadthing-Version': '6.4.0'
            },
            data: { fileKeys: [key] }
        };

        try {
            const { data } = await axios.request(options);
            updateImage('', '')
            setUrl('')
            setKey('')
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getDraft = async () => {
            const { data } = await axios.get("/api/draft/" + id)
            console.log('draft', data)

            setDraft(data)
            setKey(data.imageKey)
            setUrl(data.imageUrl)
        }

        getDraft()

    }, [])

    useEffect(() => {
        const handleClick = (e) => {
            if (previewRef.current && !previewRef.current.contains(e.target)) {
                setShowPreview(false)
            }
        }

        document.addEventListener("click", handleClick)

        return () => document.removeEventListener("click", handleClick)
    }, [])


    return (
        <div className={`${className} min-h-screen w-full flex justify-center items-center`}>
            <div ref={previewRef} className="w-[90vw] h-[90vh] bg-white rounded-2xl drop-shadow-xl border border-gray-300 relative overflow-y-scroll overscroll-none preview scrollbar scrollbar-w-0 scrollbar-track-w-0 ">
                <button onClick={() => setShowPreview(false)}><XMarkIcon className='w-6 fixed right-4 top-4 text-slate-500 transition-all hover:text-slate-600' /></button>
                <div className='max-w-screen-sm mx-auto'>
                    {draft?.content ? (
                        <>
                            <div className='aspect-video bg-red-200 relative w-full overflow-clip rounded-xl'>
                                <Image
                                    onLoad={() => setImageLoading(false)}
                                    src={url || defaultImage}
                                    fill
                                    className="object-cover"
                                    alt="trash"
                                />

                                {imageLoading && (
                                    <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center">
                                        <BeatLoader
                                            loading={true}
                                            size={16}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="absolute right-20 top-6">
                                {url ? (
                                    <button onClick={deleteImage} className="py-2 px-4 text-white rounded-lg bg-red-400 hover:bg-red-500 active:bg-red-600 transition-all">Delete Image</button>

                                ) : (
                                    <UploadButton
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            // Do something with the response
                                            console.log("Files: ", res);
                                            setUrl(res[0].url)
                                            setKey(res[0].key)
                                            updateImage(res[0].url, res[0].key)
                                            setImageLoading(true)
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                        }}
                                    />
                                )}
                            </div>
                            <div className="mt-10 text-[#374151] prose px-5">
                                <h1 className='text-[#111827]'>{draft.title}</h1>
                                <div dangerouslySetInnerHTML={{ __html: draft.content }} className='prose-h1:text-2xl prose-h2:text-xl'></div>
                            </div>
                        </>
                    ) : (
                        <div className='w-full flex justify-center mt-20'>
                            <BeatLoader
                                loading={true}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Preview
