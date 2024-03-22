import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Nav from "./_components/nav";
import Footer from "./_components/footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: "Environment Kaizen | Wajah cantik bersama bumi yang bersih",
    description: "Wajah cantik bersama bumi yang bersih",
    icons: {
        icon: ['./favicon.ico']
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} relative`}>
                <NextTopLoader showSpinner={false} />
                <Nav />
                <div className="pt-24">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
