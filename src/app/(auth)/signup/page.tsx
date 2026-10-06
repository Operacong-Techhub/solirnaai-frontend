"use client";
import { LogoMark } from "@/app/components/Logo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { environmentDev } from "@/environments/environment.dev";
import { environmentPro } from "@/environments/environments.pro";
import { perks } from "@/lib/data";
import { signupFormSchema } from "@/lib/schemas";
import { CheckCircle, Sparkles, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    const [message, setMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [status, setStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const password = formData.get("password");

        const values = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };

        const validData = signupFormSchema.safeParse(values);

        // if (!data.success) {
        //     setErrorMessage(`${data.error.flatten().fieldErrors}`);
        //     console.log("Form Data:", data.error?.flatten().fieldErrors);
        //     console.log(errorMessage?.includes("lastName"));
        //     return;
        // }

        const response = await fetch(
            `${environmentPro.api_url}/auth/register`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                }),
            },
        );

        const data = await response.json();

        if (response.status === 201) {
            setAlertMessage(`${data.message}`);
            setStatus("success");
            setTimeout(() => {
                setAlertMessage(null);
                setStatus(null);
                return;
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

        console.log("Response:", data.detail);
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--bg)]">
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
                            Join Solirna AI
                        </h2>
                        <p className="text-white/40 text-sm mt-1">
                            Build your startup with AI
                        </p>
                    </div>

                    {/* Perks */}
                    <div className="flex flex-col gap-2 mb-6">
                        {perks.map((perk) => (
                            <div
                                key={perk}
                                className="flex items-center gap-2 text-sm text-white/50">
                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                {perk}
                            </div>
                        ))}
                    </div>

                    {/* Card */}
                    <div className="bg-[var(--glass-04)] border border-[var(--line)] rounded-md p-7 card-glow">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">
                                    First Name
                                </label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="Alex"
                                    className="rounded-sm py-5 border-[var(--line)] bg-[var(--glass-02)] text-white/80 placeholder:text-white/30 focus:ring-1 focus:ring-[var(--brand)] focus:border-[var(--brand)]"
                                    autoComplete="name"
                                />
                                <p className="text-red-400 text-sm mt-1">
                                    {errorMessage
                                        ? errorMessage.includes("firstName") &&
                                          "First name must be at least 3 characters long"
                                        : null}
                                </p>
                            </div>
                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">
                                    Last Name
                                </label>
                                <Input
                                    name="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    className="rounded-sm py-5 border-[var(--line)] bg-[var(--glass-02)] text-white/80 placeholder:text-white/30 focus:ring-1 focus:ring-[var(--brand)] focus:border-[var(--brand)]"
                                    autoComplete="family-name"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-1.5">
                                    Email
                                </label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="rounded-sm py-5 border-[var(--line)] bg-[var(--glass-02)] text-white/80 placeholder:text-white/30 focus:ring-1 focus:ring-[var(--brand)] focus:border-[var(--brand)]"
                                    autoComplete="family-name"
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
                                    autoComplete="family-name"
                                />
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] w-full py-5 mt-10 flex items-center justify-center gap-2 rounded-sm hover:bg-[var(--brand)]">
                                Signup
                            </Button>
                        </form>
                    </div>

                    <p className="text-center text-sm text-white/30 mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/signin"
                            className="text-transparent hover:text-[--muted] bg-clip-text bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] font-medium transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* Alert Box */}
                <div
                    className={`z-50 absolute top-0 right-0 ${alertMessage ? "block" : "hidden"} p-4`}>
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
