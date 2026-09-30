import { faqs } from "@/lib/data";
import { SectionHead } from "./AllFunc";
import { Reveal } from "./Reveal";

export default function Faq() {
    return (
        <section id="faq" className="py-20 bg-[var-(--bg)]">
            <div className="mx-auto max-w-[1200px] px-6">
                <Reveal>
                    <SectionHead eyebrow="FAQ" title="Questions, answered" />
                </Reveal>
                <div className="mx-auto max-w-[780px]">
                    {faqs.map(({ q, a }) => (
                        <Reveal key={q}>
                            <details className="mb-3 overflow-hidden rounded-[14px] border border-[var(--line)] bg-[var(--glass-02)]">
                                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-[18px] text-[15.5px] font-semibold marker:hidden">
                                    {q}
                                    <span className="text-xl text-[var(--brand-2)]">
                                        +
                                    </span>
                                </summary>
                                <div className="px-5 pb-[18px] text-[14.5px] text-[var(--muted)]">
                                    {a}
                                </div>
                            </details>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
