"use client";
import { LogoMark } from "@/app/components/Logo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { environmentDev } from "@/environments/environment.dev";
import { environmentPro } from "@/environments/environments.pro";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
    const router = useRouter();
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [status, setStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const response = await fetch(`${environmentPro.api_url}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            setAlertMessage(`${data.message}`);
            console.log("Success:", data);
            setStatus("success");
            localStorage.setItem("token", data.token);
            setTimeout(() => {
                setAlertMessage(null);
                setStatus(null);
                router.push("/dashboard/overview");
            }, 3000);
        } else {
            setAlertMessage(`${data.detail}`);
            setStatus("error");
            setTimeout(() => {
                setAlertMessage(null);
                setStatus(null);
                return;
            }, 3000);
        }
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4 py-12 --">
                {/* Background glows */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-700/20 blur-[120px]" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-700/20 blur-[120px]" />
                </div>

                <div className="w-full max-w-md relative z-10">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] flex items-center justify-center shadow-2xl shadow-violet-900/60 mb-4">
                            <LogoMark />
                        </div>
                        <h2 className="text-2xl font-black text-white">
                            Login Solirna AI
                        </h2>
                        <p className="text-white/40 text-sm mt-1">
                            Login your startup with AI
                        </p>
                    </div>

                    {/* Card */}
                    <div className="bg-[var(--glass-04)] border border-[var(--line)] rounded-md p-7 card-glow">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">
                                    Email
                                </label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="jonh@example.com"
                                    className="rounded-sm py-5 border-[var(--line)] bg-[var(--glass-02)] text-white/80 placeholder:text-white/30 focus:ring-1 focus:ring-[var(--brand)] focus:border-[var(--brand)]"
                                    autoComplete="email"
                                />
                            </div>
                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">
                                    Password
                                </label>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="********"
                                    className="rounded-sm py-5 border-[var(--line)] bg-[var(--glass-02)] text-white/80 placeholder:text-white/30 focus:ring-1 focus:ring-[var(--brand)] focus:border-[var(--brand)]"
                                    autoComplete="current-password"
                                />
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] w-full py-5 mt-10 flex items-center justify-center gap-2 rounded-sm hover:bg-[var(--brand)]">
                                Sign In
                            </Button>
                        </form>
                    </div>

                    <p className="text-center text-sm text-white/30 mt-6">
                        Don't have an account yet?{" "}
                        <Link
                            href="/signup"
                            className="text-transparent hover:text-[--muted] bg-clip-text bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] font-medium transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
                {/* Alert Box */}
                <div
                    className={`absolute top-0 right-0 ${alertMessage ? "block" : "hidden"} p-4`}>
                    <Alert className="flex items-center gap-4 bg-[var(--glass-08)] border border-[var(--line)] rounded-md p-4">
                        {status === "success" ? (
                            <CheckCircle color="green" />
                        ) : (
                            <XCircle color="red" />
                        )}
                        <AlertTitle>
                            {status === "success" ? (
                                <span className="text-green-500 font-bold">
                                    Success
                                </span>
                            ) : (
                                <span className="text-red-500 font-bold">
                                    Failed
                                </span>
                            )}
                        </AlertTitle>
                        <AlertDescription>
                            {status === "success" ? (
                                <span className="text-green-500">
                                    {alertMessage}
                                </span>
                            ) : (
                                <span className="text-red-500">
                                    {alertMessage}
                                </span>
                            )}
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </>
    );
}
