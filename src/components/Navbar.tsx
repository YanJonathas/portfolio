"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggle = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl 2xl:mb-0">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}
                    <div className="text-lg font-bold tracking-tight text-white">
                        <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                            YJ
                        </span>{" "}
                        Yan Jonathas
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center gap-10 md:flex">
                        <li>
                            <a
                                href="#sobre"
                                className="text-sm text-zinc-400 transition-all hover:text-white"
                            >
                                Sobre
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projetos"
                                className="text-sm text-zinc-400 transition-all hover:text-white"
                            >
                                Projetos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                className="text-sm text-zinc-400 transition-all hover:text-white"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>

                    {/* CTA */}
                    <a
                        href="https://wa.me/5574998157489"
                        className="hidden md:flex rounded-xl border border-violet-500/20 bg-violet-500/10 px-5 py-2 mr-5 text-sm font-medium text-violet-300 transition-all hover:border-violet-500/40 hover:bg-violet-500/20"
                    >
                        Vamos conversar
                    </a>

                    {/* Mobile Button */}
                    <button
                        onClick={toggle}
                        className="flex text-white md:hidden mr-10"
                    >
                        {menuAberto ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={toggle}
                className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-300 md:hidden ${
                    menuAberto
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                }`}
            />

            {/* Drawer */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-70 border-l border-white/10 bg-zinc-950 p-8 transition-transform duration-300 md:hidden ${
                    menuAberto
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white">
                        Menu
                    </h2>

                    <button
                        onClick={toggle}
                        className="text-zinc-400 hover:text-white"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-8">
                    <li>
                        <a
                            href="#sobre"
                            onClick={toggle}
                            className="text-lg text-zinc-400 transition-all hover:text-violet-400"
                        >
                            Sobre
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projetos"
                            onClick={toggle}
                            className="text-lg text-zinc-400 transition-all hover:text-violet-400"
                        >
                            Projetos
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contato"
                            onClick={toggle}
                            className="text-lg text-zinc-400 transition-all hover:text-violet-400"
                        >
                            Contato
                        </a>
                    </li>
                </ul>

                {/* Bottom CTA */}
                <div className="mt-12">
                    <a
                        href="#contato"
                        className="flex items-center justify-center rounded-2xl from-violet-600 to-blue-500 px-6 py-4 font-medium text-white"
                    >
                        Entrar em contato
                    </a>
                </div>
            </aside>
        </>
    );
}