import Image from "next/image";
import ourLogo from "@/public/our logo clean.png"
import cewe from "@/public/cewe.png"
import Spark from "./_components/spark";
import { adelia, hey_comic } from "./fonts";
import blobBlue from '@/public/blob-blue.svg'
import blobGreen from '@/public/blob-green.svg'

export default function Home() {
    return (
        <div className="overflow-x-clip relative">
            <main className={`${hey_comic.className} max-w-screen-xl mx-auto flex flex-col items-center`}>
                <section className="flex relative justify-center items-center gap-28 h-[70vh]">
                    <div className="w-52 lg:w-80 relative text-center">
                        <Spark className="absolute -top-8 left-0 md:-left-10" color="blue" />
                        <Spark className="absolute -bottom-8 md:-bottom-10 right-0 md:-right-10" color="blue" />
                        <div className={`${adelia.className} w-40 text-[32px] mx-auto md:text-[52px] lg:text-[72px] leading-none`}>XXX XXX</div>

                        <div className="text-base md:text-lg lg:text-2xl mt-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                            cillum sint
                            consectetur
                            cupidatat.
                        </div>

                    </div>

                    <Image src={cewe} width={250} height={250} alt="cewe bumi" className="z-10 hidden md:block drop-shadow-[0px_0px_100px_#2D507F]" />

                </section>

                <div className="absolute top-[40vh] md:top-[50vh] -right-52 md:-right-80 w-[400px] md:w-[600px] lg:w-[700px] h-96">
                    <Image src={blobBlue} alt="blob blue" fill />
                </div>

                <section className="h-screen flex flex-col lg:flex-row items-center items-center justify-center relative gap-8 lg:gap-28 w-full">
                    <div className={`${adelia.className} lg:hidden z-10 relative text-[#86A964] text-[32px] md:text-[52px] lg:text-[72px] leading-none relative w-28 md:w-40 lg:w-60 drop-shadow-sm`} style={{ textShadow: "4px 4px #4D715F" }}>
                        OUR LOGO
                        <Spark className="absolute z-20 -top-10 -left-10" color="green" />
                        <Spark className="absolute -bottom-9 md:-bottom-11 -right-8 md:-right-10" color="green" />
                    </div>

                    <div className="relative">
                        <Image className="object-cover" src={ourLogo} width={500} alt="our logo" />
                    </div>

                    <div className={`${adelia.className} hidden lg:block z-10 relative text-[#86A964] text-[32px] md:text-[52px] lg:text-[72px] leading-none relative w-28 md:w-40 lg:w-60 drop-shadow-sm`} style={{ textShadow: "4px 4px #4D715F" }}>
                        OUR LOGO
                        <Spark className="absolute z-20 -top-10 -left-10" color="green" />
                        <Spark className="absolute -bottom-9 md:-bottom-11 -right-8 md:-right-10" color="green" />
                    </div>

                </section>

                <div className="absolute top-[135vh] md:top-[150vh] -left-52 md:-left-80 w-[400px] md:w-[600px] lg:w-[700px] h-96">
                    <Image src={blobGreen} alt="blob green" fill />
                </div>

                <section className="h-screen flex flex-col md:flex-row gap-28 mb-20 justify-center items-center">
                    <div className="w-52 lg:w-80 relative text-center">
                        <Spark className="absolute -top-8 left-0 lg:-left-4" color="green" />
                        <Spark className="absolute -bottom-8 right-0 lg:-right-4" color="green" />
                        <div className={`${adelia.className} text-[32px] md:text-[52px] lg:text-[72px] leading-none`}>OUR VISION</div>

                        <div className="text-base md:text-lg lg:text-2xl mt-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                            cillum sint
                            consectetur
                            cupidatat.</div>
                    </div>
                    <div className="w-52 lg:w-80 relative text-center">
                        <Spark className="absolute -top-8 left-0 lg:-left-4" color="green" />
                        <Spark className="absolute -bottom-8 right-0 lg:-right-4" color="green" />
                        <div className={`${adelia.className} text-[32px] md:text-[52px] lg:text-[72px] leading-none`}>OUR MISSION</div>

                        <div className="text-base md:text-lg lg:text-2xl mt-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                            cillum sint
                            consectetur
                            cupidatat.</div>
                    </div>
                </section>
            </main >
        </div>
    );
}
