import { gradText } from "@/lib/ui";

export function LogoMark() {
    return (
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] shadow-[0_8px_24px_-8px_rgba(124,92,255,.8)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                <path d="M12 2.5l2.4 5.3 5.6.5-4.3 3.7 1.3 5.5L12 20.2 6.7 17.5 8 12 3.7 8.3l5.6-.5L12 2.5z" fill="#08101e" />
                <circle cx="12" cy="12" r="2.4" fill="#fff" />
            </svg>
        </span>
    );
}

export default function Brand() {
    return (
        <div className="flex items-center gap-[11px] text-[19px] font-extrabold tracking-[-.02em]">
            <LogoMark />
            <span className="text-xl">
                Solirna<span className="bg-gradient-to-br from-[var(--brand)] via-[var(--brand-2)]  to-[var(--brand-2)] bg-clip-text text-transparent"> AI</span>
            </span>
        </div>
    );
}