export default function Footer() {
    return (
        <div className="sm:px-6 lg:px-93 bg-[var(--bg)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-[var(--line)] text-[13px] text-[var(--muted-2)] py-6">
                <span>
                    &copy; {new Date().getFullYear()} Solirna AI. All rights
                    reserved.
                </span>
                {/* 
                <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px]">
                    <span className="h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_10px_var(--green)]" />{" "}
                    Powered by — Operaconga
                </span> */}
                <span className="bg-gradient-to-r from-[var(--brand)]/10 to-[var(--brand-2)]/10 mb-[26px] inline-flex items-center gap-[9px] px-2.5 py-1 text-[10px] rounded-full border border-[var(--line-2)] ">
                    <span className="h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_10px_var(--green)]" />
                    Powered by — Operaconga
                </span>
            </div>
        </div>
    );
}
