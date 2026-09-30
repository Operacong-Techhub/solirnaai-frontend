import { pricing } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./AllFunc";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-[var(--bg)]">
            <div className="mx-auto max-w-[1200px] px-6">
                <Reveal>
                    <SectionHead
                        eyebrow="Pricing"
                        title="Plans that scale with your runway">
                        Subscription tiers based on generation credits and
                        memory depth. Cancel anytime.
                    </SectionHead>
                </Reveal>
                <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {pricing.map((p) => (
                        <Reveal key={p.name}>
                            <div
                                className={`relative flex h-full flex-col rounded-[20px] border p-[30px] ${p.featured ? "-translate-y-1.5 border-transparent shadow-[var(--shadow)] [background:linear-gradient(var(--panel),var(--panel))_padding-box,var(--grad)_border-box] max-[640px]:translate-y-0" : "border-[var(--line)] bg-[linear-gradient(180deg,var(--panel),var(--bg-2))]"}`}>
                                {p.featured && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-[5px] text-[11.5px] font-extrabold text-[var(--ink)] bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]">
                                        Most popular
                                    </span>
                                )}
                                <div className="text-[15px] font-semibold tracking-[.02em] text-[var(--muted)]">
                                    {p.name}
                                </div>
                                <div className="my-2 text-[42px] font-extrabold tracking-[-.03em]">
                                    {p.price}
                                    <small className="text-[15px] font-medium text-[var(--muted)]">
                                        /mo
                                    </small>
                                </div>
                                <div className="min-h-10 text-[13.5px] text-[var(--muted)]">
                                    {p.desc}
                                </div>
                                <ul className="my-5 flex flex-col gap-[11px]">
                                    {p.items.map((x) => (
                                        <li
                                            key={x}
                                            className="flex items-start gap-2.5 text-sm text-[var(--bubble-2)]">
                                            <Check
                                                name="check"
                                                size={16}
                                                stroke="var(--green)"
                                            />
                                            {x}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/signup"
                                    className={`mt-auto inline-flex w-full justify-center rounded-xl px-5 py-[11px] text-[14.5px] font-semibold ${p.featured ? "bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] text-[var(--ink)]" : "border border-[var(--line-2)] bg-[var(--glass-05)] text-[var(--text)]"}`}>
                                    {p.cta}
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
