import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Solirna AI",
    description:
        "Solirna AI is an autonomous startup co-founder for solo founders and indie hackers. It remembers your context, conducts research, generates investor-grade documents, and pressure-tests your ideas — so you go from concept to fundable company at unprecedented speed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
