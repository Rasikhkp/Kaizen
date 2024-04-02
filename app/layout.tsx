import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Nav from "./_components/nav";
import Footer from "./_components/footer";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "@/redux/redux-provider";

export const metadata: Metadata = {
    title: "Environment Kaizen | Wajah Cantik Bersama Bumi Yang Bersih",
    description: "Wajah cantik bersama bumi yang bersih",
    icons: {
        icon: 'bumi.png'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} relative`}>
                    <NextTopLoader showSpinner={false} />
                    <Nav />
                    <div className="pt-24">
                        <ReduxProvider>
                            {children}
                        </ReduxProvider>
                    </div>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
