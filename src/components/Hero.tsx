import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-black text-white pt-30 2xl:pt-15">
            
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"/>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size[50px_50px]" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
                
                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-xl">
                            Frontend Developer
                        </div>

                        {/* Title */}
                        <div className="space-y-6">
                            <h1 className="text-4xl font-black leading-tight md:text-7xl">
                                Transformando
                                <span className="block bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                                    ideias em
                                </span>
                                interfaces reais.
                            </h1>

                            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                                Desenvolvedor frontend focado em criar interfaces
                                modernas, performáticas e experiências digitais
                                memoráveis com React, Next.js e TypeScript.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">

                            <a
                                href="#projetos"
                                className="group flex items-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-blue-500 px-6 py-4 font-medium transition-all duration-300 hover:scale-105"
                            >
                                Ver projetos

                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#contato"
                                className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-zinc-800"
                            >
                                Contato
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 pt-6">

                            <div>
                                <h2 className="text-3xl font-bold">+20</h2>
                                <p className="text-zinc-500">
                                    Projetos
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">2+</h2>
                                <p className="text-zinc-500">
                                    Anos
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative hidden lg:flex justify-center">

                        {/* Glow */}
                        <div className="absolute h-100 w-100 rounded-full bg-violet-600/20 blur-3xl" />

                        {/* Card */}
                        <div className="relative w-105 rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                            {/* Fake Code Header */}
                            <div className="mb-6 flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>

                            {/* Code */}
                            <div className="space-y-4 font-mono text-sm">

                                <p className="text-zinc-500">
                                    const developer = {"{"}
                                </p>

                                <p className="pl-4 text-blue-400">
                                    name:
                                    <span className="text-white">
                                        {" "} "Yan"
                                    </span>
                                    ,
                                </p>

                                <p className="pl-4 text-violet-400">
                                    stack:
                                    <span className="text-white">
                                        {" "} ["React", "Next.js", "TS"]
                                    </span>
                                    ,
                                </p>

                                <p className="pl-4 text-emerald-400">
                                    focus:
                                    <span className="text-white">
                                        {" "} "UI/UX"
                                    </span>
                                </p>

                                <p className="text-zinc-500">
                                    {"}"}
                                </p>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -right-8 top-10 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl">
                                <p className="text-sm text-zinc-400">
                                    Performance
                                </p>

                                <h3 className="text-xl font-bold text-green-400">
                                    98%
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}