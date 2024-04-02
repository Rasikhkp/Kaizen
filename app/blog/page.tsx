import React from "react";
import Post from "./_components/post";

const page = () => {
    return (
        <div className="w-full max-w-screen-lg min-h-screen px-4 mx-auto md:py-12">
            <div className="text-xl md:text-5xl px-5 font-semibold mb-4 md:mb-16 text-[#1E1E1E]">
                Featured Post
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-16">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Post key={i} />
                ))}
            </div>
        </div>
    );
};

export default page;
