"use client"

import { useEffect, useRef } from "react";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) { node.dataset.revealed = "true"; io.unobserve(node); }
        }), { threshold: 0.12 });
        io.observe(node);
        return () => io.disconnect();
    }, []);
    return <div ref={ref} className={`translate-y-6 opacity-0 transition duration-700 ease-out data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 ${className}`}>{children}</div>;
}