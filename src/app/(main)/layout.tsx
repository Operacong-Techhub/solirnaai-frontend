import { Metadata } from "next";
import FirstFooter from "../components/FirstFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
    title: "Solirna AI | Home",
    description:
        "Solirna AI is an autonomous startup co-founder for solo founders and indie hackers. It remembers your context, conducts research, generates investor-grade documents, and pressure-tests your ideas — so you go from concept to fundable company at unprecedented speed.",
};

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <FirstFooter />
            <Footer />
        </div>
    );
}
