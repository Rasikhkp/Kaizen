import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Nav from "./_components/nav";
import Footer from "./_components/footer";
import NextTopLoader from "nextjs-toploader";
import ReduxProvider from "@/redux/redux-provider";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata: Metadata = {
    title: "Environment Kaizen | Wajah Cantik Bersama Bumi Yang Bersih",
    description: "Wajah cantik bersama bumi yang bersih",
    icons: {
        icon: 'bumi.png'
    }
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    return (
        <html lang="en">
            <body className={`${inter.className} relative`}>
                <NextTopLoader showSpinner={false} />
                <Nav user={user} />
                <div className="pt-24">
                    <ReduxProvider>
                        {children}
                    </ReduxProvider>
                </div>
                <Footer />
            </body>
        </html>
    );
}
