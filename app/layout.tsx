import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Nav from "./_components/nav";
import Footer from "./_components/footer";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} relative`}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
