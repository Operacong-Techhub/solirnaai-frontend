// Shared Tailwind class strings (no external CSS)
export const wrap = "mx-auto w-full max-w-[1200px] px-6";
export const gradText = "bg-grad bg-clip-text text-transparent";

const btn = "inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-[11px] text-[14.5px] font-semibold transition duration-200 active:translate-y-px";
export const btnPrimary = `${btn} bg-grad text-[#08101e] shadow-[0_12px_30px_-10px_rgba(124,92,255,.7)] hover:shadow-[0_16px_40px_-10px_rgba(124,92,255,.9)]`;
export const btnGhost = `${btn} border border-line2 bg-white/5 text-ink hover:bg-white/[.09]`;

export const cardBg = "bg-gradient-to-b from-panel to-bg2";
export const inputCls = "w-full rounded-[11px] border border-line2 bg-white/[.04] px-3.5 py-3 font-[inherit] text-sm text-ink outline-none transition-colors focus:border-brand";

export const bubble = "max-w-[88%] rounded-[14px] px-3.5 py-3 text-[13.5px] leading-[1.5]";
export const dot = "block h-[7px] w-[7px] rounded-full bg-brand2 animate-dot";

export type View = "chat" | "prd" | "validate" | "deck" | "research" | "outreach";

export const titles: Record<View, string> = {
    chat: "Co-Founder Chat",
    prd: "Document Suite",
    validate: "Validate Idea",
    deck: "Pitch Deck Builder",
    research: "Market Research",
    outreach: "Outreach Automation"
};

