"use client"
import Brand from "./Logo";
import { navLinks } from "@/lib/data";
import { Button } from "@base-ui/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="sticky top-0 border-b border-[var(--line)] bg-[var(--bg)]/50 z-50 backdrop-blur-[14px] py-1 px-3 md:py-3  lg:px-100">

            <div className="py-2 flex justify-between items-center">
                <Brand />

                {/* Mobile Menu */}
                <div className="flex md:hidden">
                    <Button onClick={toggleMobileMenu}>
                        {!isMobileMenuOpen ? (
                            <Menu size={23} color="" />
                        ) : (
                            <X size={23} color="" />
                        )}
                    </Button>
                </div>

                {/* Mobile Dropdownn Menu */}
                <div
                    className={`z-50 fixed top-0 left-0 min-h-screen w-64 bg-[var(--panel)] px-5 py-4 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    <ul className="flex flex-col h-full gap-4">
                        {navLinks.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center p-1 text-md gap-x-2 text-white hover:text-slate-500"
                            >
                                <Link onClick={() => { setIsMobileMenuOpen(false); }} href={item.href} className="flex items-center">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-[30px] sm:flex">
                    {navLinks.map((l) => (
                        <a key={l.href} href={l.href} className="text-[14.5px] font-medium text-muted transition-colors hover:text-white">
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="flex hidden md:flex items-center gap-3">
                    <Link href="/signin" className="bg-black/10 border border-[var(--line)] px-5 py-2 font-semibold rounded-sm text-[14px]">Sign in</Link>
                    <Link href="/signup" className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] px-5 py-2 font-semibold rounded-sm text-black text-[14px] ">Start free</Link>
                </div>


            </div>


        </div>
    )
}


{/* <div className="flex h-[72px] items-center justify-between"> */ }
{/* <Brand /> */ }
{/*  */ }
// Medium and Desktop Menu
{/* <div className="hidden md:flex justify-between"> */ }
{/* <nav className="items-center gap-[30px]"> */ }
{/* {navLinks.map((l) => ( */ }
// <a key={l.href} href={l.href} className="text-[14.5px] font-medium text-[var(--muted)] hover:text-white">
{/* {l.label} */ }
{/* </a> */ }
// ))}
{/* </nav> */ }
{/* <div className="flex items-center gap-3"> */ }
{/* <Link href="/auth/signin" className="bg-zinc-400/10 px-4 py-2 rounded-lg font-bold border border-[var(--line)] text-sm">Sign in</Link> */ }
{/* <Link href="/auth/signup" className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-2)] font-bold px-4 py-2 rounded-lg text-black text-sm">Start free</Link> */ }
{/* </div> */ }
{/* </div> */ }
{/* </div> */ }