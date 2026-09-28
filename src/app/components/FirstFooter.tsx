import { firstFooter } from "@/lib/data";
import Brand, { LogoMark } from "./Logo";
import Link from "next/link";

export default function FirstFooter() {
    return (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] py-10">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-4">

                {/* Silirna AI */}
                <div>
                    <Brand />

                    <p className="mt-3.5 max-w-[34ch] text-[13.5px] text-[var(--muted-2)]">
                        Your autonomous AI co-founder — from idea to investor-ready.
                    </p>
                </div>

                {/* Footer links */}
                <div className="md:col-span-3 md:ms-20 grid md:grid-cols-3 grid-cols-2 gap-16">
                    {firstFooter.map((c) => (
                        <div key={c.h}>
                            <h5 className="text-[13px] font-bold tracking-[.05em] text-ink">
                                {c.h}
                            </h5>

                            <div className="mt-3">
                                {c.links.map(([label, href]) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        className="flex h-7 text-[14px] text-[var(--muted-2)] transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}