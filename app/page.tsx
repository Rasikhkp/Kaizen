import Image from "next/image";
import logoKaizen from "@/public/bumi.png"
import ourLogo from "@/public/our logo clean.png"
import cewe from "@/public/cewe.png"
import Spark from "./_components/spark";
import { adelia, aileron, garamond, poppins } from "./fonts";
import ig from '@/public/ig.svg'
import tiktok from '@/public/tiktok.svg'
import email from '@/public/email.svg'
import tiktokWhite from '@/public/tiktok-white.svg'
import igWhite from '@/public/ig-white.svg'
import emailWhite from '@/public/email-white.svg'
import blobBlue from '@/public/blob-blue.svg'
import blobGreen from '@/public/blob-green.svg'
import wave from '@/public/wave-top.svg'
import gradientBlue from '@/public/gradient-blue.svg'

export default function Home() {
    return (
        <>
            <nav
                className={`${aileron.className} flex z-50 aileron justify-between bg-white/70 backdrop-blur fixed w-full top-0 py-6 px-12 items-center max-w-screen-xl`}>

                <div className="flex gap-4">
                    <div className="h-10 w-10 relative object-cover">
                        <Image src={logoKaizen} fill alt="logo kaizen" />
                    </div>
                    <div>
                        <div className="font-bold">ENVIRONMENT KEY</div>
                        <div className="text-[10px]">COMMUNITY AND COMPANY</div>
                    </div>
                </div>

                <div className="flex gap-10 text-sm">
                    <div>HOME</div>
                    <div>ABOUT</div>
                    <div>NEWS</div>
                </div>
            </nav>

            <main className="relative">

                {/* <Image src={wave} alt="wave" className="w-full absolute" /> */}
                <section className="flex relative justify-center items-center gap-28 h-screen overflow-x-clip">
                    <div className="w-80 relative text-center">
                        <Spark className="absolute -top-8 left-8" color="blue" />
                        <Spark className="absolute -bottom-10 -right-3" color="blue" />
                        <div className={`${adelia.className} text-[72px] leading-none`}>XXX XXX</div>

                        <div className="text-2xl mt-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                            cillum sint
                            consectetur
                            cupidatat.
                        </div>

                    </div>

                    <Image src={cewe} width={250} height={250} alt="cewe bumi" className="z-10 drop-shadow-[0px_0px_100px_#2D507F]" />

                    <Image src={blobBlue} width={700} alt="blob blue" className="absolute -bottom-60 -right-80" />
                </section>

                <section className="h-screen flex items-center justify-center relative gap-28 w-full">
                    <div className="relative">
                        <Image className="object-cover" src={ourLogo} width={500} alt="our logo" />
                    </div>
                    <div className={`${adelia.className} relative text-[72px] leading-none w-96`}>
                        <div className="z-10 relative text-[#86A964] drop-shadow-sm" style={{ textShadow: "4px 4px #4D715F" }}>OUR LOGO</div>
                        <Spark className="absolute z-20 -top-10 left-40" color="green" />
                        <Spark className="absolute -bottom-11 -left-11" color="green" />
                    </div>

                    <Image src={blobGreen} width={700} alt="blob blue" className="absolute -bottom-60 -left-80" />
                </section>

                {/* <div className="w-full h-1 bg-transparet shadow-[0px_0px_10px_rgba(134,169,100,1)]"></div> */}

                <section className="h-screen flex gap-28 justify-center items-center">
                    <div className="w-80 relative text-center">
                        <Spark className="absolute -top-8 left-4" color="green" />
                        <Spark className="absolute top-28 -right-10" color="green" />
                        <div className={`${adelia.className} text-[72px] leading-none`}>OUR VISION</div>

                        <div className="text-2xl mt-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                            cillum sint
                            consectetur
                            cupidatat.</div>
                    </div>
                    <div className="w-80 relative text-center">
                        <Spark className="absolute -top-4 left-0" color="green" />
                        <Spark className="absolute top-28 -right-24" color="green" />
                        <div className={`${adelia.className} text-[72px] leading-none`}>OUR MISSION</div>

                        <div className="text-2xl mt-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
                            cillum sint
                            consectetur
                            cupidatat.</div>
                    </div>
                </section>

                <footer className={`${poppins.className} text-gray-300 px-12 bg-[#111111]`}>
                    <div className="flex justify-between items-center py-6">
                        <div className="flex gap-4">
                            <div className="h-10 w-10 relative object-cover">
                                <Image src={logoKaizen} fill alt="logo kaizen" />
                            </div>
                            <div>
                                <div className="font-bold">ENVIRONMENT KEY</div>
                                <div className="text-[10px]">COMMUNITY AND COMPANY</div>
                            </div>
                        </div>

                        <div className="text-sm font-medium flex gap-10">
                            <div>HOME</div>
                            <div>ABOUT</div>
                            <div>NEWS</div>
                        </div>

                        <div className="flex flex-col gap-1 items-end ">
                            <div className="text-xs mb-3 flex gap-4 items-center">
                                enzironmentkaizen@gmail.com
                                <Image src={emailWhite} width={24} alt="email logo" />
                            </div>
                            <div className="text-xs mb-3 flex gap-4">
                                @nkey.co
                                <Image src={igWhite} width={20} alt="email logo" />
                            </div>
                            <div className="text-xs mb-3 flex gap-4">
                                @nkey.co
                                <Image src={tiktokWhite} width={20} alt="email logo" />
                            </div>
                        </div>
                    </div>

                    <div className="text-xs py-6 w-full border-t border-gray-800 text-center">© 2024 Environment Key</div>
                </footer>
            </main >
        </>
    );
}
