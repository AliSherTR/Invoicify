import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Invoicify",
    description: "Create and manage all your invoices",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <div className="grid grid-cols-12 bg-transparent overflow-hidden h-screen">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SideBar />

                        <main className="col-start-2 bg-[#f8f8fb] dark:bg-[#141625] col-span-full min-h-screen overflow-auto ">
                            {children}
                        </main>
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
