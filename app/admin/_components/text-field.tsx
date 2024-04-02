"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";

const TextField = ({
    id,
    draftedContent,
    draftedTitle,
}: {
    id: string;
    draftedTitle: string;
    draftedContent: string;
}) => {
    const [content, setContent] = useState(draftedContent);
    const [title, setTitle] = useState(draftedTitle);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        var textarea = document.querySelector("textarea")!;

        const textareaAutoResize = () => {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        };

        textareaAutoResize();

        textarea.addEventListener("input", textareaAutoResize);

        return () => textarea?.removeEventListener("input", textareaAutoResize);
    }, []);

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isSaving) {
                e.preventDefault();
                e.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () =>
            window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [isSaving]);

    const saveDraft = async (titleDraft: string, contentDraft: string) => {
        setIsSaving(true);

        try {
            await axios.patch("/api/draft/" + id, {
                title: titleDraft,
                content: contentDraft,
                imageKey: '',
                imageUrl: ''
            });
            console.log("Draft saved successfully!");
        } catch (error) {
            console.error("Error saving draft:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const updateTitle = (val: string) => {
        setTitle(val);

        if (timer) {
            clearTimeout(timer);
        }

        setTimer(
            setTimeout(() => {
                saveDraft(val, content);
            }, 1000)
        );
    };

    const updateContent = (val: string) => {
        setContent(val);

        if (timer) {
            clearTimeout(timer);
        }

        setTimer(
            setTimeout(() => {
                saveDraft(title, val);
            }, 1000)
        );
    };

    return (
        <>
            {isSaving ? (
                <div className="fixed top-[26px] z-20 left-[370px] text-sm text-gray-500">
                    Saving...
                </div>
            ) : (
                <div className="fixed top-[26px] z-20 left-[370px] text-sm text-gray-500">
                    Saved
                </div>
            )}

            <textarea
                className="w-full pl-4 mb-4 font-serif text-5xl border-l border-white outline-none peer focus:border-slate-300"
                rows={1}
                onChange={(e) => updateTitle(e.target.value)}
                placeholder="Title"
                style={{ resize: "none" }}
            >
                {title}
            </textarea>

            <div className="peer-focus:after:content-['Title'] text-xs absolute -left-10 text-slate-600 top-14">
                {" "}
            </div>

            <ReactQuill
                theme="bubble"
                value={content}
                onChange={(val) => updateContent(val)}
                placeholder="Your stories..."
                className="mb-40"
            />
        </>
    );
};

export default TextField;
