export default function Sobre() {
    return (
        <section
            id="sobre"
            className="relative overflow-hidden bg-black text-white mt-20 2xl:mt-0"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size[50px_50px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* TOP SECTION */}
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="max-w-3xl">

                        {/* Badge */}
                        <span className="mb-6 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-xl">
                            Sobre mim
                        </span>

                        {/* Title */}
                        <h2 className="text-[42px] font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                            Criando experiências
                            <span className="block bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                modernas e funcionais.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                            Desenvolvedor frontend focado em criar interfaces modernas,
                            performáticas e experiências digitais com visual premium
                            e excelente usabilidade.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">

                        {/* Glow */}
                        <div className="absolute h-87 w-87 rounded-full bg-violet-600/20 blur-3xl" />

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-5xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                                alt="Developer"
                                className="h-75 w-75 rounded-3xl object-cover"
                            />
                        </div>

                        {/* Extra Blur */}
                        <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                    </div>
                </div>

                {/* Content */}
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Left */}
                    <div className="space-y-6">
                        <p className="text-lg mt-10 leading-relaxed text-zinc-400">
                            Sou desenvolvedor frontend apaixonado por criar
                            interfaces modernas, performáticas e intuitivas.
                            Meu foco é transformar ideias em experiências
                            digitais que realmente geram impacto.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            Trabalho principalmente com React, Next.js,
                            TypeScript e Tailwind CSS, sempre buscando
                            escrever código limpo, escalável e alinhado
                            com as boas práticas do mercado.
                        </p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-3 pt-6">

                            <span className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                                React
                            </span>

                            <span className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                                Next.js
                            </span>

                            <span className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                                TypeScript
                            </span>

                            <span className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                                Tailwind
                            </span>

                            <span className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                                UI/UX
                            </span>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="grid gap-6 sm:grid-cols-2">

                        {/* Card */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                            <h3 className="mb-4 text-4xl font-black text-violet-400">
                                +20
                            </h3>

                            <p className="text-zinc-400">
                                Projetos desenvolvidos com foco em
                                performance e experiência do usuário.
                            </p>
                        </div>

                        {/* Card */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                            <h3 className="mb-4 text-4xl font-black text-blue-400">
                                2+
                            </h3>

                            <p className="text-zinc-400">
                                Anos estudando e evoluindo constantemente
                                no desenvolvimento frontend.
                            </p>
                        </div>

                        {/* Large Card */}
                        <div className="rounded-3xl border border-white/10 bg-linear-to-br from-violet-600/10 to-blue-500/10 p-8 backdrop-blur-xl sm:col-span-2">
                            <h3 className="mb-4 text-2xl font-bold">
                                Meu objetivo
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Construir interfaces que unam design moderno,
                                performance e uma ótima experiência para o usuário,
                                criando produtos digitais de alto nível.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}