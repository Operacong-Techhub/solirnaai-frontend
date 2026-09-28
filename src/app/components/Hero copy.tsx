import { nData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="px-6 bg-[var(--bg)]/80 pb-10 pt-[54px] sm:pb-[70px] sm:pt-[90px]">
            <div className="grid items-center gap-[42px] lg:grid-cols-[1.05fr_.95fr] lg:gap-[50px]">
                {/* Grid 1 */}
                <div>
                    <span className="bg-gradient-to-r from-[var(--brand)]/10 to-[var(--brand-2)]/10 mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-[var(--line-2)] bg-gradSoft px-[15px] py-[7px] text-[13px] font-medium text-ink3">
                        <span className="h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_10px_var(--green)]" />
                        Autonomous co-founder agent · Now in beta
                    </span>
                    <h1 className="max-w-[14ch] text-[length:clamp(38px,6vw,68px)] font-extrabold leading-[1.04] tracking-[-.03em]">
                        Your AI Co-Founder — from <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent ">idea to investor-ready.</span>
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-[length:clamp(16px,2vw,20px)] text-[var(--muted)]">
                        Solirna AI is an autonomous startup co-founder for solo founders and indie hackers. It remembers your context,
                        conducts research, generates investor-grade documents, and pressure-tests your ideas — so you go from concept to
                        fundable company at unprecedented speed.
                    </p>
                    <div className="mt-9 flex flex-col md:flex-row gap-3.5">
                        <Link href="#demo" className="flex w-fit items-center gap-2 text-black font-semibold bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] rounded-sm px-4 py-2">
                            Try the live demo
                            <ArrowRight size={18} />
                        </Link>
                        <a href="#features" className="w-fit bg-[var(--panel)] border border-[var(--line)] px-4 py-2 rounded-sm">Explore features</a>
                    </div>

                    <div className="mt-[46px] flex flex-col gap-[38px]">
                        {nData.map(([n, l]) => (
                            <div key={l}>
                                <div className="text-[28px] font-extrabold tracking-[-.02em] bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] bg-clip-text text-transparent ">{n}</div>
                                <div className="text-[13.5px] text-muted">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-[20px] border border-[var(--line-2)] bg-gradient-to-b from-panel to-bg2 shadow-card">
                        <div className="flex items-center gap-[7px] border-b border-[var(--line)] bg-white/[.02] px-4 py-[13px]">
                            <i className="block h-[11px] w-[11px] rounded-full bg-[var(--traffic-red)]" />
                            <i className="block h-[11px] w-[11px] rounded-full bg-[var(--traffic-yellow)]" />
                            <i className="block h-[11px] w-[11px] rounded-full bg-[var(--traffic-green)]" />
                            <span className="ml-2.5 text-[12.5px] text-muted">solirna.ai/workspace</span>
                        </div>

                        <div className="flex flex-col gap-3 p-[18px]">
                            <div className="max-w-[88%] rounded-[14px] px-3.5 py-3 text-[13.5px] leading-[1.5] self-end bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] font-medium text-black">
                                Validate my idea: an AI tool that turns Figma files into production React code.
                            </div>
                            <div className="max-w-[88%] rounded-[14px] px-3.5 py-3 text-[13.5px] leading-[1.5] self-start border border-[var(--line)] bg-white/5 text-[var(--text)]">
                                <b className="text-white">Strong concept.</b> Pulling from your saved context (B2B, dev tooling). Running JTBD +
                                Blue Ocean now → market is crowded but margins favor speed. I&apos;ll draft a PRD and a 12-slide deck. Want me to
                                start?
                            </div>
                            <div className="max-w-[88%] rounded-[14px] px-3.5 py-3 text-[13.5px] leading-[1.5] self-end bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] font-medium text-black">
                                Yes — and remember we&apos;re targeting Series-A SaaS teams.
                            </div>
                            <div className="flex bg-red-500 items-center gap-1 px-3.5 py-3">
                                <i className="" />
                                <i className="block h-[7px] w-[7px] rounded-full bg-brand2 animate-dot [animation-delay:.15s]" />
                                <i className="block h-[7px] w-[7px] rounded-full bg-brand2 animate-dot [animation-delay:.3s]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// {
//     nData.map(([nData, l]) => (
//         <div key={l}>
//             <div className="text-[28px] font-extrabold tracking-[-.02em]`}>{">{n}</div>
//             <div className="text-[13.5px] text-muted">{l}</div>
//         </div>
//     ))
// }