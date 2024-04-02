"use client";

import { UploadButton } from "@/utils/uploadthing";
import { UploadDropzone } from "@uploadthing/react";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import defaultImage from "@/public/default-placeholder.png";

export default function Home() {
    const [url, setUrl] = useState("");
    const [key, setKey] = useState("");

    const deleteImage = async () => {
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

        try {
            const { data } = await axios.request(options);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
            <div className="h-60 w-80 mb-10 rounded-2xl  relative  overflow-hidden">
                <Image
                    src={url || defaultImage}
                    alt="fuck"
                    className="object-cover"
                    fill
                />
            </div>
            <button
                onClick={deleteImage}
                className="py-2 px-4 bg-red-300 text-white font-medium mb-10"
            >
                delete
            </button>
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    setUrl(res[0].url);
                    setKey(res[0].key);
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                }}
            />

            <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
}
