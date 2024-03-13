import Image from 'next/image'
import sparkBlue from "@/public/sparkBlue.svg"
import sparkGreen from "@/public/sparkGreen.svg"

const Spark = ({ className, color }: { className?: string; color: "blue" | "green" }) => {
    return (

        <div className={`${className}`}>
            <Image src={color === "green" ? sparkGreen : sparkBlue} alt="spark" width={56} height={56} />
            <Image src={color === "green" ? sparkGreen : sparkBlue} alt="spark" width={28} height={28} className="absolute -left-5 top-7 " />
            <Image src={color === "green" ? sparkGreen : sparkBlue} alt="spark" width={28} height={28} className="absolute -right-4 top-0 " />
        </div>
    )
}

export default Spark
