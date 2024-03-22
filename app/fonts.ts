import localFont from "next/font/local"
import { Inter, EB_Garamond, Poppins } from "next/font/google"; import "./globals.css";


export const poppins = Poppins({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const inter = Inter({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const garamond = EB_Garamond({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})


export const adelia = localFont({ src: "../public/fonts/ADELIA.otf" })
export const aileron = localFont({ src: "../public/fonts/aileron.regular.otf" })
export const hey_comic = localFont({ src: "../public/fonts/Hey Comic.ttf" })
