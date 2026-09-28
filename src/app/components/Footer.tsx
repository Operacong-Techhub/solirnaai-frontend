export default function Footer() {

    return (
        <div className="sm:px-6 lg:px-93 bg-[var(--bg)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-[var(--line)] text-[13px] text-[var(--muted-2)] py-6">
                <span>&copy; {new Date().getFullYear()} Solirna AI. All rights reserved.</span>
                <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px]">Powered by — Operaconga</span>
            </div>
        </div>
    )
}