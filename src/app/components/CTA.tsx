import { Reveal } from "./Reveal";

export default function CTA() {
    return (
        <section className="py-5 bg-[var(--bg)]">
            <div className="mx-auto max-w-[1200px] px-6">
                <Reveal>
                    <div className="overflow-hidden rounded-[26px] border border-[var(--line-2)] bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 p-14 text-center max-[640px]:px-[22px] max-[640px]:py-9">
                        <h2 className="mx-auto max-w-[18ch] text-[clamp(28px,4vw,42px)] font-extrabold leading-tight tracking-[-.03em]">
                            Stop building alone. Meet your co-founder.
                        </h2>
                        <p className="mx-auto my-4 mb-7 max-w-[50ch] text-[16.5px] text-[var(--muted)]">
                            Join the founders going from idea to investor-ready
                            at unprecedented speed with Solirna AI.
                        </p>
                        <a
                            href="/signup"
                            className="inline-flex rounded-sm bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-7 py-3.5 text-base font-semibold text-[var(--ink)]">
                            Start building for free
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
