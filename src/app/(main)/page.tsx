import Capabilities from "../components/Capabilities";
import CTA from "../components/CTA";
import Demo from "../components/Demo";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import How from "../components/How";
import Pricing from "../components/Pricing";

export default function Home() {
    return (
        <div>
            <Hero />
            <Capabilities />
            <Demo />
            <How />
            <Pricing />
            <div className="bg-[var(--bg)]">
                <Faq />
                <CTA />
            </div>
        </div>
    );
}
