"use client"

const ContentLink = ({ name, className }: { name: string; className?: string }) => {
    const goTo = () => {
        const element: HTMLElement | null = getElementByInnerHTML(document.querySelector('#body') as HTMLElement, name)

        if (!element) {
            return
        }

        const pos = element.offsetTop - 50;

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }

    const getElementByInnerHTML = (parentElement: HTMLElement, innerHTML: string): HTMLElement | null => {
        const elements: HTMLCollectionOf<HTMLElement> = parentElement.getElementsByTagName('*') as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML === innerHTML) {
                return elements[i];
            }
        }

        return null; // If no matching element is found
    }

    return (
        <button onClick={goTo} className={`${className} py-3 rounded-xl hover:bg-slate-100 active:bg-slate-200 transition-all w-full text-start`}>
            {name}
        </button>

    )

}

export default ContentLink
