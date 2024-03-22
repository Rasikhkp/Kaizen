"use client"

import Image from 'next/image'
import sparkBlue from "@/public/sparkBlue.svg"
import sparkGreen from "@/public/sparkGreen.svg"
import { useEffect, useState } from 'react'

const Spark = ({ className, color }: { className?: string; color: "blue" | "green" }) => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <div className={`${className}`}>
            <Image src={color === "green" ? sparkGreen : sparkBlue} alt="spark" width={windowWidth > 768 ? 56 : 40} height={windowWidth > 768 ? 28 : 20} />
            <Image src={color === "green" ? sparkGreen : sparkBlue} alt="spark" width={windowWidth > 768 ? 28 : 20} height={windowWidth > 768 ? 28 : 20} className="absolute -left-5 top-7 " />
            <Image src={color === "green" ? sparkGreen : sparkBlue} alt="spark" width={windowWidth > 768 ? 28 : 20} height={windowWidth > 768 ? 28 : 20} className="absolute -right-4 top-0 " />
        </div>
    )
}

export default Spark
