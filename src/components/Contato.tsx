import { Code, Users, Mail, MessageCircle } from "lucide-react";

export default function Contato() {
    return (
        <section
            id="contato"
            className="relative overflow-hidden bg-black py-10 text-white"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[50px_50px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* Header */}
                <div className="mb-20 max-w-3xl text-start">

                    <span className="mb-6 inline-flex items-start rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-xl">
                        Contato
                    </span>

                    <h2 className="text-[42px] font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                        Vamos trabalhar
                        <span className="block bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            juntos.
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
                        Estou disponível para novos projetos, freelas
                        e oportunidades como desenvolvedor frontend.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/yan-jonathas-047507210/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20"
                    >
                        <Users className="mb-6 h-10 w-10 text-violet-400" />

                        <h3 className="mb-2 text-xl font-bold">
                            LinkedIn
                        </h3>

                        <p className="text-zinc-400">
                            Conecte-se comigo profissionalmente.
                        </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/YanJonathas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20"
                    >
                        <Code className="mb-6 h-10 w-10 text-violet-400" />

                        <h3 className="mb-2 text-xl font-bold">
                            GitHub
                        </h3>

                        <p className="text-zinc-400">
                            Veja meus projetos e códigos.
                        </p>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:yan1094@hotmail.com"
                        className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20"
                    >
                        <Mail className="mb-6 h-10 w-10 text-violet-400" />

                        <h3 className="mb-2 text-xl font-bold">
                            Email
                        </h3>

                        <p className="break-all text-zinc-400">
                            yan1094@hotmail.com
                        </p>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5574998157489?text=Olá,%20vim%20pelo%20seu%20portfólio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-[28px] border border-white/10 bg-linear-to-br from-violet-600/10 to-blue-500/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20"
                    >
                        <MessageCircle className="mb-6 h-10 w-10 text-violet-400" />

                        <h3 className="mb-2 text-xl font-bold">
                            WhatsApp
                        </h3>

                        <p className="text-zinc-400">
                            Entre em contato rapidamente.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
}