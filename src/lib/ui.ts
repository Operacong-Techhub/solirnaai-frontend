export type View = "chat" | "prd" | "validate" | "deck" | "research" | "outreach";

export const titles: Record<View, string> = {
    chat: "Co-Founder Chat",
    prd: "Document Suite",
    validate: "Validate Idea",
    deck: "Pitch Deck Builder",
    research: "Market Research",
    outreach: "Outreach Automation"
};


export const reply = (text: string) => {
    const t = text.trim().toLowerCase();

    if (t.includes("pricing") || t.includes("price")) {
        return {
            html: () => `Here's what I'm holding for <b>NovaForge</b>:
                        <ul className="my-2 ml-[18px] list-disc">
                            <li>
                                Targeting <b>Series-A SaaS engineering teams</b>
                            </li>
                            <li>Core wedge: Figma → production React</li>
                            <li>Pricing pivot to seat-based (last week)</li>
                            <li>
                                Competitive moat = generation speed + code
                                quality
                            </li>
                        </ul>
                        Want me to act on any of these? `,

            mem: () => "Recalled 4 facts from memory vault",
        };
    }

    if (t.includes("email") || t.includes("outreach") || t.includes("investor")) {
        return {
            html: () => `Drafting a personalized investor email now. Head to{" "}
                        <b>Outreach Automation</b> to refine it — I'll pull in
                        NovaForge's traction and tailor it to the investor's
                        thesis.`,

            mem: () => "Linked context: traction metrics"
        }
    }

    if (t.includes("market") || t.includes("size") || t.includes("tam")) {
        return {
            html: () => `Quick read on AI design-to-code: <b>TAM ≈ $14B</b>,
                        growing ~27% YoY. Open the <b>Market Research</b> tab
                        for the full landscape and sizing breakdown.`,

            mem: () => "Saved market sizing snapshot"
        }
    }

    if (t.includes("validate") || t.includes("idea")) {
        return {
            html: () => `Let's pressure-test it. I'll run{" "}
                        <b>SWOT + Jobs-to-be-Done</b> and score founder-fit.
                        Jump to <b>Validate Idea</b> and hit generate — I've
                        pre-filled it with your concept.`,

            mem: () => "Idea added to memory"
        }
    }

    if (t.includes("prd") || t.includes("document") || t.includes("deck")) {
        return {
            html: () => `On it. Use the <b>Document Suite</b> for a full PRD or
                        the <b>Pitch Deck Builder</b> for a 12-slide investor
                        deck — both inherit your saved NovaForge context
                        automatically.`,

            mem: () => "Context auto-attached"
        }
    }
    return {
        html: () => `Got it — I've noted that and updated your startup memory. As
                    your co-founder, here's my take: let's tie this back to your{" "}
                    <b>Series-A SaaS</b> wedge. Want me to validate it, draft a
                    doc, or research the market?`,

        mem: () => "New decision saved to memory"
    }
}
