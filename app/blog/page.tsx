import React from "react";
import Post from "./_components/post";
import prisma from "@/prisma";

const page = async () => {
    const drafts = await prisma.draft.findMany({
        where: {
            isPublished: true
        }
    })

    return (
        <div className="w-full max-w-screen-lg min-h-screen px-4 mx-auto md:py-12">
            <div className="text-xl md:text-5xl px-5 font-semibold mb-4 md:mb-16 text-[#1E1E1E]">
                Featured Post
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-16">
                {drafts.map((draft, i) => (
                    <Post key={i} draft={draft} />
                ))}
            </div>
        </div>
    );
};

export default page;
