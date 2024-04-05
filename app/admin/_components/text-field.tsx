"use client";

import { updateDraft } from "@/redux/features/draft-slice";
import { slugify } from "@/utils/helper-function";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";

const TextField = ({ id }: { id: string }) => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [isFetching, setIsFetching] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDraft = async () => {
            const { data } = await axios.get("/api/draft/" + id)
            setContent(data.content)
            setTitle(data.title)
            setIsFetching(false)
        }

        fetchDraft()
    }, [])

    useEffect(() => {
        if (isFetching) {
            return
        }

        var textarea = document.querySelector("textarea")!;

        const textareaAutoResize = () => {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        };

        textareaAutoResize();

        textarea.addEventListener("input", textareaAutoResize);

        return () => textarea?.removeEventListener("input", textareaAutoResize);
    }, [isFetching]);

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
            const { data } = await axios.patch("/api/draft/" + id, {
                title: titleDraft,
                content: contentDraft,
                slug: slugify(titleDraft)
            });

            dispatch(updateDraft(data))
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

            {isFetching ? (
                <div className="w-full mt-10 flex justify-center">
                    <BeatLoader
                        loading={true}
                        color="#000"
                        size={16}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <>
                    <textarea
                        className="w-full pl-4 mb-4 font-serif text-5xl border-l border-white outline-none peer focus:border-slate-300"
                        autoFocus
                        rows={1}
                        value={title}
                        onChange={(e) => updateTitle(e.target.value)}
                        placeholder="Title"
                        style={{ resize: "none" }}
                    >
                    </textarea>

                    <div className="peer-focus:after:content-['Title'] text-xs absolute -left-10 text-slate-600 top-20">
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
            )}
        </>
    );
};

export default TextField;
