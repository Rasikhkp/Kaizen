"use client"

const ContentLink = ({ to, name, className }: { to: string; name: string; className?: string }) => {
    const goTo = () => {
        const element: HTMLElement = document.querySelector(to)!
        const pos = element.offsetTop - 50;

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }
    return (
        <button onClick={goTo} className={`${className} py-3 rounded-xl hover:bg-slate-100 active:bg-slate-200 transition-all w-full text-start`}>
            {name}
        </button>

    )

}

export default ContentLink
