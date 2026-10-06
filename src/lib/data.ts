import { iconMap } from "@/app/components/IconMap";
import { View } from "./ui";

export const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Live Demo" },
    { href: "#how", label: "How it works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
];


export const steps = [
    { t: "Brain-dump", d: "Tell Solirna your idea, constraints, and goals. It builds a living memory of your startup." },
    { t: "Validate", d: "Automatic SWOT, JTBD & Blue Ocean analysis pressure-tests the concept before you build." },
    { t: "Generate", d: "PRDs, financial models, and investor decks created in seconds — design-ready and on-brand." },
    { t: "Pitch", d: "Personalized investor outreach and a polished deck take you straight to the term sheet." },
];

export const plans = [
    {
        name: "Indie", price: "$0", desc: "For exploring your first idea.", cta: "Start free", featured: false,
        items: ["50 generation credits / mo", "Co-founder chat", "7-day rolling memory", "PRD generation"],
    },
    {
        name: "Founder", price: "$39", desc: "For solo founders going to market.", cta: "Start 14-day trial", featured: true,
        items: ["1,000 generation credits / mo", "Unlimited persistent memory", "Full document suite + decks", "Outreach automation", "Deep market research"],
    },
    {
        name: "Scale", price: "$129", desc: "For teams raising and scaling.", cta: "Talk to us", featured: false,
        items: ["Unlimited credits", "Multi-venture memory vaults", "Investor CRM (roadmap)", "Collaboration mode (roadmap)", "Priority models & support"],
    },
];

export const faqs = [
    { q: "How does the persistent memory actually work?", a: "Solirna stores your decisions, pivots, and constraints as vector embeddings in a pgvector-backed database. Every session retrieves the most relevant context via RAG, so the agent stays grounded in your specific startup — not generic advice." },
    { q: "Is my startup data confidential?", a: "Yes. Your memory vault is isolated per workspace and never used to train shared models. You can export or permanently delete your data at any time." },
    { q: "Which models power Solirna?", a: "Solirna routes across leading OpenAI and Anthropic models depending on the task — reasoning-heavy validation vs. fast drafting — to balance quality, speed, and cost." },
    { q: "Can it really generate an investor-grade deck?", a: "It produces a complete, narrative-driven 12-slide outline with content and design recommendations aligned to what seed and Series-A investors expect. You stay in control with slide-by-slide editing." },
    { q: "What's on the roadmap?", a: "Agentic workflow orchestration, an automated investor CRM, and a real-time co-founder collaboration mode for small teams." },
];

export const slides = [
    ["Cover", "NovaForge", "Figma → production React, autonomously."],
    ["Problem", "Design handoff is broken", "Lossy, slow, eats senior eng time."],
    ["Solution", "Autonomous design-to-code", "Clean components with tests in minutes."],
    ["Why now", "AI-native dev shift", "Models finally good enough for prod code."],
    ["Market", "$14B TAM", "27% YoY growth in dev tooling."],
    ["Product", "Live demo", "Plugin → reviewed PR in one flow."],
    ["Traction", "Early signal", "10 design-partner waitlist, 3 LOIs."],
    ["Business model", "Seat-based SaaS", "$39–129/seat, usage upsell."],
    ["Competition", "Win on quality", "Speed + design-system fidelity moat."],
    ["Go-to-market", "Bottom-up + DevRel", "Land via individual devs, expand to teams."],
    ["Team", "Technical founder", "Ex-FAANG tooling, shipped at scale."],
    ["Ask", "Raising $1.5M", "18-month runway to 100 paying teams."],
];

export const firstFooter = [
    { h: "Product", links: [["Features", "#features"], ["Live demo", "#demo"], ["Pricing", "#pricing"], ["How it works", "#how"]] },
    { h: "Company", links: [["About", "#"], ["Blog", "#"], ["Careers", "#"], ["Contact", "#"]] },
    { h: "Legal", links: [["Privacy", "#"], ["Terms", "#"], ["Security", "#"], ["FAQ", "#faq"]] },
];

export const nData = [
    ["12×", "Faster to first pitch deck"],
    ["∞", "Persistent startup memory"],
    ["7", "Built-in agent modules"],
]


export const navItems: Array<[View, string, keyof typeof iconMap]> = [
    ["chat", "Co-Founder Chat", "chat"],
    ["prd", "Document Suite", "doc"],
    ["validate", "Validate Idea", "shield"],
    ["deck", "Pitch Deck", "screen"],
    ["research", "Market Research", "search"],
    // ["outreach", "Outreach", "mail"]
];

export const pricing = [
    { name: "Indie", price: "$0", desc: "For exploring your first idea.", items: ["50 generation credits / mo", "Co-founder chat", "7-day rolling memory", "PRD generation"], cta: "Start free" },
    { name: "Founder", price: "$39", desc: "For solo founders going to market.", items: ["1,000 generation credits / mo", "Unlimited persistent memory", "Full document suite + decks", "Outreach automation", "Deep market research"], cta: "Start 14-day trial", featured: true },
    { name: "Scale", price: "$129", desc: "For teams raising and scaling.", items: ["Unlimited credits", "Multi-venture memory vaults", "Investor CRM (roadmap)", "Collaboration mode (roadmap)", "Priority models & support"], cta: "Talk to us" }
];

export const demoPrompt = [
    "Validate my latest idea",
    "Draft an investor email",
    "What do you remember about us?",
    "Size my market",
]

export const docsData = [
    {
        name: "Product Requirements Document(PRD)",
        value: "prd",
    },
    {
        name: "Business Plan",
        value: "business-plan",
    },
    {
        name: "Financial Projection Model",
        value: "financial-projection",
    },
    {
        name: "Lean Canvas",
        value: "lean-canvas",
    },
];


export const howData = [
    [
        "1",
        "Brain-dump",
        "Tell Solirna your idea, constraints, and goals. It builds a living memory of your startup.",
    ],
    [
        "2",
        "Validate",
        "Automatic SWOT, JTBD & Blue Ocean analysis pressure-tests the concept before you build.",
    ],
    [
        "3",
        "Generate",
        "PRDs, financial models, and investor decks created in seconds — design-ready and on-brand.",
    ],
    [
        "4",
        "Pitch",
        "Personalized investor outreach and a polished deck take you straight to the term sheet.",
    ],
]

export const capabilitiesData = [
    "Deep Market Research",
    "Document Generation Suite",
    "Idea Validation Engine",
    "Persistent Startup Memory",
    // "Pitch Deck Builder",
    // "Outreach Automation",
]

export const perks = [
    "AI Co-Founder available 24/7",
    "PRD & Pitch Deck generation",
    "Persistent startup memory",
]