"use client";
import { demoPrompt, docsData, navItems, slides } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
    Field,
    OutputBox,
    Placeholder,
    SectionHead,
    TextAreaField,
} from "./AllFunc";
import { Button } from "@base-ui/react";
import React, { useEffect, useState } from "react";
import { Icon, Send } from "lucide-react";
import { iconMap } from "./IconMap";
import { reply, titles } from "@/lib/ui";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Header from "./Header";

type View = (typeof navItems)[number][0];

export default function Demo() {
    const [view, setView] = useState<View>("chat");
    const [messages, setMessages] = useState<
        Array<{ who: "ai" | "me"; html: React.ReactNode; mem?: string }>
    >([]);
    const [typing, setTyping] = useState(false);
    const [chatInput, setChatInput] = useState("");
    const [docType, setDocType] = useState(
        "Product Requirements Document (PRD)",
    );
    const [docIdea, setDocIdea] = useState(
        "AI tool that turns Figma files into production React code",
    );
    const [docAud, setDocAud] = useState("Series-A SaaS engineering teams");
    const [valIdea, setValIdea] = useState(
        "An AI co-pilot that auto-generates production React from Figma designs for fast-moving SaaS teams.",
    );
    const [deckIdea, setDeckIdea] = useState(
        "NovaForge turns Figma into production React for Series-A SaaS teams.",
    );
    const [resTopic, setResTopic] = useState(
        "AI design-to-code developer tools",
    );
    const [outType, setOutType] = useState("Investor cold email");
    const [outName, setOutName] = useState(
        "Priya Shah — Partner, Foundry Ventures (seed/Series-A dev tools)",
    );
    const [output, setOutput] = useState<Record<string, React.ReactNode>>({});
    const [loading, setLoading] = useState<Record<string, boolean>>({});

    const setBusy = (
        key: string,
        label: string,
        producer: () => React.ReactNode,
        delay: number,
    ) => {
        setLoading((s) => ({ ...s, [key]: true }));
        setOutput((s) => ({
            ...s,
            [key]: (
                <div className="py-[30px] text-center text-sm text-[var(--muted)]">
                    <span className="inline-block h-[18px] w-[18px] animate-spin rounded-full border-2 border-[var(--focus)] border-t-[var(--brand-2)]" />
                    <br />
                    <br />
                    {label}
                </div>
            ),
        }));
        window.setTimeout(() => {
            setLoading((s) => ({ ...s, [key]: false }));
            setOutput((s) => ({ ...s, [key]: producer() }));
        }, delay);
    };

    useEffect(() => {
        setMessages([
            {
                who: "ai",
                html: (
                    <>
                        Hey Alex 👋 I've loaded everything I know about{" "}
                        <b>NovaForge</b> — your dev-tooling angle, the Series-A
                        SaaS target, and last week's pricing pivot. What are we
                        tackling today?
                    </>
                ),
            },
        ]);
    }, []);

    const sendChat = (value = chatInput) => {
        const v = value.trim();
        if (!v) return;
        setMessages((m) => [...m, { who: "me", html: v }]);
        setChatInput("");
        setTyping(true);
        window.setTimeout(() => {
            const r = reply(v);
            setTyping(false);
            setMessages((m) => [
                ...m,
                { who: "ai", html: r.html(), mem: r.mem() },
            ]);
        }, 900);
    };

    const generateDoc = () =>
        setBusy(
            "prd",
            `Solirna is drafting your ${docType}…`,
            () => (
                <>
                    <h4 className="mb-1.5 flex items-center text-[15px]">
                        ✅ {docType}
                        <span className="ml-auto text-[11px] font-semibold text-[var(--accent)]">
                            saved to memory
                        </span>
                    </h4>
                    {[
                        [
                            "Problem",
                            <p key="p">
                                {docAud} lose days hand-translating designs into
                                code. The handoff is lossy, slow, and pulls
                                senior engineers off roadmap work.
                            </p>,
                        ],
                        [
                            "Solution",
                            <p key="p">
                                {docIdea} — an autonomous pipeline that outputs
                                clean, production-grade components with tests,
                                cutting design-to-deploy time by ~70%.
                            </p>,
                        ],
                        [
                            "Goals & success metrics",
                            <ul key="u" className="ml-[18px] list-disc">
                                <li>Reduce design→PR time to under 1 hour</li>
                                <li>90%+ generated-code acceptance rate</li>
                                <li>Land 10 design-partner teams in Q1</li>
                            </ul>,
                        ],
                        [
                            "Core requirements",
                            <ul key="u" className="ml-[18px] list-disc">
                                <li>Figma plugin + CLI ingestion</li>
                                <li>Design-system aware code generation</li>
                                <li>Human-in-the-loop review & diff</li>
                                <li>CI/CD + GitHub PR integration</li>
                            </ul>,
                        ],
                        [
                            "Out of scope (v1)",
                            <p key="p">
                                Native mobile output, backend scaffolding, and
                                no-code visual editing.
                            </p>,
                        ],
                    ].map(([h, body], i) => (
                        <div
                            key={i}
                            className="mb-[18px] border-b border-dashed border-[var(--line)] pb-4 last:mb-0 last:border-0 last:pb-0">
                            <h5 className="mb-1.5 text-xs uppercase tracking-[.08em] text-[var(--brand-2)]">
                                {h}
                            </h5>
                            <div className="text-sm leading-[1.6] text-[var(--text-soft)]">
                                {body}
                            </div>
                        </div>
                    ))}
                </>
            ),
            1100,
        );

    const generateValidate = () =>
        setBusy(
            "validate",
            "Running SWOT, Jobs-to-be-Done & founder-fit scoring…",
            () => (
                <>
                    <h4 className="mb-1.5 text-[15px]">🛡️ Validation report</h4>
                    <div className="mt-2 flex items-center gap-4">
                        <div
                            className="grid h-[84px] w-[84px] shrink-0 place-items-center rounded-full"
                            style={{
                                background:
                                    "conic-gradient(var(--green) 0 78%, var(--glass-08) 78% 100%)",
                            }}>
                            <div className="grid h-[62px] w-[62px] place-items-center rounded-full bg-[var(--panel)] text-[22px] font-extrabold">
                                78
                            </div>
                        </div>
                        <div>
                            <b className="text-[var(--white)]">
                                Founder-Fit Score: Strong
                            </b>
                            <p className="mt-1 text-[13px] text-[var(--muted)]">
                                High technical fit and a clear, urgent JTBD.
                                Main risk is a crowded field — win on quality +
                                speed.
                            </p>
                        </div>
                    </div>
                    <div className="mt-3.5 grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
                        {[
                            [
                                "Strengths",
                                "s",
                                [
                                    "Acute, recurring pain",
                                    "Fast time-to-value",
                                    "Technical founder edge",
                                ],
                            ],
                            [
                                "Weaknesses",
                                "w",
                                [
                                    "Crowded category",
                                    "Code-quality trust barrier",
                                ],
                            ],
                            [
                                "Opportunities",
                                "o",
                                [
                                    "Design-system standardization",
                                    "AI-native dev workflows",
                                ],
                            ],
                            [
                                "Threats",
                                "t",
                                [
                                    "Incumbent IDE players",
                                    "Foundation-model commoditization",
                                ],
                            ],
                        ].map(([h, c, items]) => (
                            <div
                                key={String(h)}
                                className={`rounded-[13px] border p-[15px] ${c === "s" ? "border-[var(--green-border)] bg-[var(--green-soft)]" : c === "w" ? "border-[var(--warn-border)] bg-[var(--warn-soft)]" : c === "o" ? "border-[var(--cyan-border)] bg-[var(--cyan-soft)]" : "border-[var(--pink-border)] bg-[var(--pink-soft)]"}`}>
                                <h6
                                    className={`mb-1.5 text-xs uppercase tracking-[.06em] ${c === "s" ? "text-[var(--green)]" : c === "w" ? "text-[var(--warn)]" : c === "o" ? "text-[var(--brand-2)]" : "text-[var(--brand-3)]"}`}>
                                    {h}
                                </h6>
                                <ul className="ml-4 list-disc text-[13px] text-[var(--text-soft)]">
                                    {(items as string[]).map((x) => (
                                        <li key={x}>{x}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 border-t border-dashed border-[var(--line)] pt-3.5">
                        <h5 className="mb-1.5 text-xs uppercase tracking-[.08em] text-[var(--brand-2)]">
                            Jobs-to-be-Done
                        </h5>
                        <p className="text-sm leading-[1.6] text-[var(--text-soft)]">
                            “When I finalize a design, I want to ship a
                            faithful, production-ready UI without burning senior
                            eng time — so I can hit my roadmap.”{" "}
                            <b>Blue Ocean angle:</b> compete on guaranteed code
                            quality, not just generation speed.
                        </p>
                    </div>
                </>
            ),
            1200,
        );

    const generateDeck = () =>
        setBusy(
            "deck",
            "Building your investor-ready 12-slide deck…",
            () => (
                <>
                    <h4 className="mb-1.5 flex items-center text-[15px]">
                        🎞️ 12-slide investor deck
                        <span className="ml-auto text-[11px] font-semibold text-[var(--accent)]">
                            design-ready
                        </span>
                    </h4>
                    <div className="mt-4 grid grid-cols-3 gap-3 max-[640px]:grid-cols-1">
                        {slides.map((s, i) => (
                            <div
                                key={i}
                                className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--line-2)] bg-[linear-gradient(160deg,var(--panel-2),var(--deep-slide))] p-[13px] transition hover:-translate-y-[3px] hover:border-[var(--brand)]">
                                <span className="absolute right-2.5 top-2 text-[10px] text-[var(--muted-2)]">
                                    {i + 1}/12
                                </span>
                                <div className="mb-1.5 text-[9.5px] uppercase tracking-[.1em] text-[var(--brand-2)]">
                                    {s[0]}
                                </div>
                                <h6 className="text-[13px] font-semibold leading-[1.25]">
                                    {s[1]}
                                </h6>
                                <p className="mt-1 text-[10.5px] leading-[1.35] text-[var(--muted)]">
                                    {s[2]}
                                </p>
                                <span className="absolute bottom-0 left-0 h-1 w-full bg-[var(--grad)]" />
                            </div>
                        ))}
                    </div>
                    <p className="mt-3.5 text-[12.5px] text-[var(--muted)]">
                        💡 Tip: click any slide in the full app to expand
                        AI-written speaker notes and design suggestions.
                    </p>
                </>
            ),
            1200,
        );

    const generateResearch = () =>
        setBusy(
            "research",
            `Autonomous agent scanning ${resTopic}…`,
            () => (
                <>
                    <h4 className="mb-1.5 text-[15px]">
                        🔭 Research synthesis: {resTopic}
                    </h4>
                    <div className="mb-3 rounded-xl border border-[var(--line)] bg-[var(--glass-02)] p-4">
                        <h5 className="mb-1 text-sm">Market sizing</h5>
                        <div className="mb-2 text-xs text-[var(--muted-2)]">
                            TAM · SAM · SOM
                        </div>
                        <p className="text-[13.5px] text-[var(--text-soft)]">
                            TAM ≈ <b>$14B</b> and growing ~27% YoY. Serviceable
                            market (mid-market + Series-A SaaS) ≈ $3.2B;
                            realistic 3-yr obtainable share ≈ $90M.
                        </p>
                        {/* Chart container */}
                        <div className="mt-3.5 flex h-[140px] items-end gap-3.5 px-1.5">
                            {[
                                ["$14B", 100, "TAM"],
                                ["$3.2B", 46, "SAM"],
                                ["$90M", 14, "SOM"],
                            ].map(([v, h, l]) => (
                                <div
                                    key={String(l)}
                                    className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                                    {/* Value label */}
                                    <span className="text-[11px] font-semibold text-[var(--text)]">
                                        {v}
                                    </span>

                                    {/* The bar – solid gradient, rounded only on top, sits flush on bottom */}
                                    <div
                                        className="
          w-full max-w-[46px]
          rounded-t-lg
          bg-gradient-to-b
          from-[var(--band-2)]
          via-[var(--brand-2)]
          to-[var(--brand)]
        "
                                        style={{ height: `${h}%` }}
                                    />

                                    {/* Axis label */}
                                    <small className="text-[11px] text-[var(--muted)]">
                                        {l}
                                    </small>
                                </div>
                            ))}
                        </div>
                    </div>
                    {[
                        [
                            "Competitive landscape",
                            "5 notable players mapped",
                            <>
                                Incumbents focus on speed;{" "}
                                <b>
                                    whitespace = guaranteed code quality +
                                    design-system fidelity
                                </b>
                                . Few offer human-in-the-loop review with CI
                                integration.
                            </>,
                        ],
                        [
                            "Key trends",
                            "Synthesized from recent signals",
                            <>
                                ① AI-native dev workflows mainstreaming ② design
                                systems becoming standard ③ buyers shifting from
                                “generate” to “trust & ship”. Timing favors a
                                quality-first wedge.
                            </>,
                        ],
                    ].map(([h, m, p]) => (
                        <div
                            key={String(h)}
                            className="mb-3 rounded-xl border border-[var(--line)] bg-[var(--glass-02)] p-4 last:mb-0">
                            <h5 className="mb-1 text-sm">{h}</h5>
                            <div className="mb-2 text-xs text-[var(--muted-2)]">
                                {m}
                            </div>
                            <p className="text-[13.5px] text-[var(--text-soft)]">
                                {p}
                            </p>
                        </div>
                    ))}
                </>
            ),
            1300,
        );

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
                                        className={`flex cursor-pointer h-fit w-fit bg-transparent hover:bg-slate-800 gap-[11px] h-10 rounded-[11px] px-3 py-2.5 rounded-sm text-slate-400 text-[14px] transition max-[960px]:flex-1 max-[960px]:justify-center max-[640px]:px-2 ${view === id ? "border-[var(--line-2)] bg-[var(--grad-soft)] text-[var(--white)]" : "border-transparent text-[var(--muted)] hover:bg-[var(--glass-04)] hover:text-[var(--text)]"}`}>
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
                            <div className="relative flex-1 overflow-hidden">
                                {view === "chat" && (
                                    <div className="flex h-full min-h-[500px] flex-col">
                                        <div className="flex max-h-[430px] flex-1 flex-col gap-4 overflow-y-auto p-[22px]">
                                            {messages.map((m, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex max-w-[90%] items-start gap-3 ${m.who === "me" ? "ml-auto flex-row-reverse" : ""}`}>
                                                    <div
                                                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-[10px] text-[13px] font-extrabold ${m.who === "me" ? "border border-[var(--line)] bg-[var(--glass-08)] text-[var(--text)]" : "bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-[var(--ink)]"}`}>
                                                        {m.who === "me"
                                                            ? "A"
                                                            : "S"}
                                                    </div>
                                                    <div
                                                        className={`rounded-[15px] px-4 py-[13px] text-[14.5px] leading-[1.6] ${m.who === "me" ? "bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] font-medium text-[var(--ink)]" : "border border-[var(--line)] bg-[var(--glass-04)] text-[var(--bubble-2)]"}`}>
                                                        {m.html}
                                                        {m.mem && (
                                                            <div className="mt-2 flex items-center gap-1.5 text-[11.5px] text-[var(--brand-2)]">
                                                                {m.mem}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                            {typing && (
                                                <div className="flex max-w-[90%] items-start gap-3">
                                                    <div className="grid h-8 w-8 place-items-center rounded-[10px] bg-[var(--grad)] text-[13px] font-extrabold text-[var(--ink)]">
                                                        S
                                                    </div>
                                                    <div className="rounded-[15px] border border-[var(--line)] bg-[var(--glass-04)] px-4 py-[13px]">
                                                        <div className="flex items-center gap-1">
                                                            <i className="h-[7px] w-[7px] animate-bounce rounded-full bg-[var(--brand-2)]" />
                                                            <i className="h-[7px] w-[7px] animate-bounce rounded-full bg-[var(--brand-2)] [animation-delay:150ms]" />
                                                            <i className="h-[7px] w-[7px] animate-bounce rounded-full bg-[var(--brand-2)] [animation-delay:300ms]" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {/* Input */}
                                        <div className="flex flex-wrap gap-2 px-[18px] pb-3.5">
                                            {demoPrompt.map((x) => (
                                                <Button
                                                    key={x}
                                                    onClick={() => sendChat(x)}
                                                    className="cursor-pointer rounded-full border border-[var(--line)] bg-[var(--glass-04)] px-3 py-[7px] text-[12.5px] text-[var(--muted)] transition hover:border-[var(--brand)] hover:bg-[var(--grad-soft)] hover:text-[var(--white)]">
                                                    {" "}
                                                    {x}
                                                </Button>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2.5 border-t border-[var(--line)] p-4 px-[18px]">
                                            <Input
                                                value={chatInput}
                                                onChange={(e) => {
                                                    setChatInput(
                                                        e.target.value,
                                                    );
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter")
                                                        sendChat();
                                                }}
                                                placeholder="Message your co-founder…"
                                                className="focus:border placeholder:text-[var(--muted)] px-5 flex-1 border-[var(--line-2)] h-13 bg-[var(--glass-04)] text-[14.5px] text-[var(--text)]  outline-none placeholder:text-[var(--muted)] focus:border-[var(--brand)]"
                                            />
                                            <Button
                                                onClick={() => sendChat()}
                                                className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-black py-3 px-3 rounded-sm">
                                                <Send
                                                    name="send"
                                                    size={20}
                                                    color="currentColor"
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                {/* Chat Ending */}
                                {view !== "chat" && (
                                    <div className="max-h-[530px] overflow-y-auto p-6">
                                        {/* PRD Document Suite */}
                                        {view === "prd" && (
                                            <>
                                                <div className="mb-4">
                                                    <label className="mb-1.5 block text-[13px] font-medium text-[var(--muted)]">
                                                        Document type
                                                    </label>
                                                    {/* Select */}
                                                    <Select
                                                        items={docsData.map(
                                                            ({
                                                                name,
                                                                value,
                                                            }) => ({
                                                                label: name,
                                                                value,
                                                            }),
                                                        )}>
                                                        <SelectTrigger className=" w-full min-h-[50px]  rounded-sm  border border-[var(--line-2)]  bg-[var(--glass-04)]  px-4 py-3  text-sm text-[var(--text)]  outline-none  focus:border-[var(--brand)]  focus:ring-0  data-[placeholder]:text-[var(--muted)]  [&>span]:line-clamp-1">
                                                            {/* Optional: show selected value or placeholder */}
                                                            <SelectValue placeholder="Select a document type..." />
                                                        </SelectTrigger>

                                                        <SelectContent className="mt-10 min-h-[50px] border border-[var(--line)] bg-slate-900 outline-none focus:border-zinc-500 focus:ring-0 data-[placeholder]:text-zinc-500 [&>span]:line-clamp-1">
                                                            {docsData.map(
                                                                (item) => (
                                                                    <SelectItem
                                                                        key={
                                                                            item.value
                                                                        }
                                                                        value={
                                                                            item.value
                                                                        }
                                                                        className="cursor-pointerpx-4 py-2.5text-smoutline-nonefocus:bg-zinc-800data-[highlighted]:bg-zinc-800data-[state=checked]:bg-zinc-800/* make sure background is never transparent */bg-zinc-900
                                                                        cursor-pointer px-4 py-2.5 text-sm] outline-none focus:bg-slate-800 data-[highlighted]:bg-slate-800 data-[state=checked]:bg-zinc-800 hover:bg-slate-700 focus:bg-slate:900 hover:border-[var(--line)] focus:border-[var(--line)]">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </SelectItem>
                                                                ),
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <Field
                                                    label="Product / idea"
                                                    value={docIdea}
                                                    onChange={setDocIdea}
                                                />
                                                <Field
                                                    label="Target customer"
                                                    value={docAud}
                                                    onChange={setDocAud}
                                                />
                                                <Button
                                                    onClick={generateDoc}
                                                    className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-black font-semibold text-sm p-3 rounded-sm">
                                                    ✨ Generate document
                                                </Button>
                                                <OutputBox>
                                                    {output.prd || (
                                                        <Placeholder>
                                                            Your generated
                                                            document will appear
                                                            here — structured,
                                                            editable, and saved
                                                            to memory.
                                                        </Placeholder>
                                                    )}
                                                </OutputBox>
                                            </>
                                        )}
                                        {view === "validate" && (
                                            <>
                                                <TextAreaField
                                                    label="Idea to validate"
                                                    value={valIdea}
                                                    onChange={setValIdea}
                                                />
                                                <Button
                                                    onClick={generateValidate}
                                                    className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-black font-semibold text-sm px-3 py-3 rounded-sm border border-[var(--line)]">
                                                    🛡️ Run validation frameworks
                                                </Button>
                                                <OutputBox>
                                                    {output.validate || (
                                                        <Placeholder>
                                                            SWOT,
                                                            Jobs-to-be-Done & a
                                                            Founder-Fit score
                                                            will be generated
                                                            here.
                                                        </Placeholder>
                                                    )}
                                                </OutputBox>
                                            </>
                                        )}
                                        {/* Deck View */}
                                        {view === "deck" && (
                                            <>
                                                <Field
                                                    label="Startup one-liner"
                                                    value={deckIdea}
                                                    onChange={setDeckIdea}
                                                />
                                                <Button
                                                    onClick={generateDeck}
                                                    className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-black font-semibold text-sm px-3 py-3 rounded-sm border border-[var(--line)]">
                                                    🎞️ Build 12-slide deck
                                                </Button>
                                                <OutputBox>
                                                    {output.deck || (
                                                        <Placeholder>
                                                            An investor-ready
                                                            deck outline with
                                                            slide-by-slide
                                                            content will render
                                                            here.
                                                        </Placeholder>
                                                    )}
                                                </OutputBox>
                                            </>
                                        )}
                                        {/* Reserch View */}
                                        {view === "research" && (
                                            <>
                                                <Field
                                                    label="Market / industry to research"
                                                    value={resTopic}
                                                    onChange={setResTopic}
                                                />
                                                <Button
                                                    className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] text-black font-semibold text-sm px-3 py-3 rounded-sm border border-[var(--line)]"
                                                    onClick={generateResearch}>
                                                    🔭 Run autonomous research
                                                </Button>
                                                <OutputBox>
                                                    {output.research || (
                                                        <Placeholder>
                                                            Competitive
                                                            landscape, market
                                                            sizing, and trend
                                                            synthesis will
                                                            appear here.
                                                        </Placeholder>
                                                    )}
                                                </OutputBox>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
