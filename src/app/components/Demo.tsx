"use client";
import { navItems } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
    Field,
    OutputBox,
    Placeholder,
    SectionHead,
    TextAreaField,
} from "./AllFunc";
import { Button } from "@base-ui/react";
import React, { useState } from "react";
import { Icon } from "lucide-react";
import { iconMap } from "./IconMap";
import { titles } from "@/lib/ui";

type View = (typeof navItems)[number][0];

export default function Demo() {
    const [view, setView] = useState<View>("chat");
    const [messages, setMessages] = useState<
        Array<{ who: "ai" | "me"; html: React.ReactNode; mem?: string }>
    >([]);
    const [typing, setTyping] = useState(false);

    return (
        <section id="demo" className="px-0 pb-20 pt-10 bg-[var(--bg)]">
            <div className="mx-auto max-w-[1200px] px-6">
                <Reveal>
                    <SectionHead
                        eyebrow="Live, interactive demo"
                        title="Take Solirna for a spin">
                        This is a fully functional front-end prototype. Chat,
                        generate a PRD, validate an idea, build a deck, and run
                        research — all running right here in your browser.
                    </SectionHead>
                </Reveal>
                {/* Demo View Container*/}
                <Reveal>
                    <div className="grid min-h-[600px] grid-cols-[230px_1fr] overflow-hidden rounded-[24px] border border-[var(--line-2)] bg-[linear-gradient(180deg,var(--panel),var(--deep-panel))] shadow-[var(--shadow)] max-[960px]:grid-cols-1">
                        <aside className="flex flex-col gap-1.5 border-r border-[var(--line)] bg-[var(--glass-015)] p-[18px_14px] max-[960px]:flex-row max-[960px]:flex-wrap max-[960px]:border-b max-[960px]:border-r-0">
                            <div className="mb-1.5 flex items-center gap-2.5 border-b border-[var(--line)] px-2 pb-4 max-[960px]:hidden">
                                <div className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-sm font-extrabold text-[var(--ink)]">
                                    A
                                </div>
                                <div>
                                    <b className="text-[13.5px]">Alex Rivera</b>
                                    <small className="block text-[11.5px] text-[var(--muted)]">
                                        Founder · NovaForge
                                    </small>
                                </div>
                            </div>
                            {/* NavItems */}
                            {navItems.map(([id, label, iconKey]) => {
                                const Icon = iconMap[iconKey];

                                return (
                                    <Button
                                        key={id}
                                        onClick={() => setView(id)}
                                        className={`flex cursor-pointer bg-transparent hover:bg-slate-800 gap-[11px] h-10 rounded-[11px] px-3 py-2.5 rounded-sm text-slate-400 text-[14px] transition max-[960px]:flex-1 max-[960px]:justify-center max-[640px]:px-2 ${view === id ? "border-[var(--line-2)] bg-[var(--grad-soft)] text-[var(--white)]" : "border-transparent text-[var(--muted)] hover:bg-[var(--glass-04)] hover:text-[var(--text)]"}`}>
                                        <Icon className="h-4 w-4" />
                                        <span className="max-[640px]:hidden">
                                            {label}
                                        </span>
                                    </Button>
                                );
                            })}

                            {/* Startup Memory*/}
                            <div className="mt-auto rounded-md border border-[var(--line-2)] bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 p-3 text-xs text-[var(--muted)] max-[960px]:hidden">
                                <b className="mb-0.5 block text-[var(--white)]">
                                    🧠 Startup Memory
                                </b>
                                Solirna remembers 38 facts about NovaForge.
                                <div className="mt-2 h-1.5 overflow-hidden rounded-md bg-[var(--glass-08)]">
                                    <i className="block h-full w-[64%] bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]" />
                                </div>
                            </div>
                        </aside>
                        {/* Main Content Container */}
                        <div className="flex min-h-[600px] flex-col">
                            <div className="flex items-center justify-between border-b border-[var(--line)] px-[22px] py-4">
                                <h3 className="text-base font-semibold tracking-[-.01em]">
                                    {titles[view]}
                                </h3>
                                <span className="text-[12.5px] text-[var(--muted)] max-[640px]:hidden">
                                    Persistent memory: ON · Context: NovaForge
                                </span>
                            </div>
                            {/* Content View */}
                            <div>Hello</div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
