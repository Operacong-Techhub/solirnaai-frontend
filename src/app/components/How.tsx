import { howData } from "@/lib/data";
import { SectionHead } from "./AllFunc";
import { Reveal } from "./Reveal";

export default function How() {
    return (
        <section id="how" className="py-20 bg-[var(--bg)]">
            <div className="mx-auto max-w-[1200px] px-6">
                <Reveal>
                    <SectionHead
                        eyebrow="Workflow"
                        title="From blank page to fundable in four moves"
                    />
                </Reveal>
                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-4">
                    {howData.map(([n, h, p]) => (
                        <Reveal key={n}>
                            <div className="rounded-[var(--radius)] border border-[var(--line)] bg-[linear-gradient(180deg,var(--panel),var(--bg-2))] p-6">
                                <div className="mb-3.5 grid h-[38px] w-[38px] place-items-center rounded-[11px] border border-[var(--line-2)] bg-[var(--grad-soft)] font-extrabold text-[var(--brand-2)]">
                                    {n}
                                </div>
                                <h4 className="mb-1.5 text-[16.5px] font-semibold">
                                    {h}
                                </h4>
                                <p className="text-sm text-[var(--muted)]">
                                    {p}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
