export default function Projetos() {
    return (
        <section
            id="projetos"
            className="relative overflow-hidden bg-black py-20 text-white"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size[50px_50px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* Header */}
                <div className="mb-20 max-w-3xl">

                    <span className="mb-6 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-xl">
                        Projetos
                    </span>

                    <h2 className="text-[42px] font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                        Alguns projetos que
                        <span className="block bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            desenvolvi.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                        Projetos desenvolvidos com foco em interface moderna,
                        experiência do usuário e boas práticas de desenvolvimento.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Projeto 1 */}
                    <div className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src="/contabil-img.jpg"
                                alt="Projeto Contábil"
                                className="h-55 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:w-100"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 p-8">

                            <div>
                                <h3 className="text-2xl font-bold">
                                    Site Contábil
                                </h3>

                                <p className="mt-4 leading-relaxed text-zinc-400">
                                    Plataforma desenvolvida para apresentação de
                                    serviços contábeis, com layout moderno,
                                    responsivo e foco em acessibilidade.
                                </p>
                            </div>

                            {/* Techs */}
                            <div className="flex flex-wrap gap-2">

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    HTML
                                </span>

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    CSS
                                </span>

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    JavaScript
                                </span>

                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">

                                <a
                                    href="https://github.com/YanJonathas/site-contabil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-violet-500/20 hover:bg-violet-500/10"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://yanjonathas.github.io/site-contabil/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:scale-105"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 2 */}
                    <div className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src="/poke-img.jpg"
                                alt="API Pokedex"
                                className="h-55 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:w-100"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 p-8">

                            <div>
                                <h3 className="text-2xl font-bold">
                                    API Pokedex
                                </h3>

                                <p className="mt-4 leading-relaxed text-zinc-400">
                                    Aplicação consumindo API Pokémon com foco em
                                    manipulação de dados, componentes dinâmicos
                                    e experiência interativa.
                                </p>
                            </div>

                            {/* Techs */}
                            <div className="flex flex-wrap gap-2">

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    JavaScript
                                </span>

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    API
                                </span>

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    CSS
                                </span>

                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">

                                <a
                                    href="https://github.com/YanJonathas/API-pokedex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-violet-500/20 hover:bg-violet-500/10"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://yanjonathas.github.io/API-pokedex/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:scale-105"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projeto 3 */}
                    <div className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src="/yugi-img.jpeg"
                                alt="Yu Gi Oh"
                                className="h-55 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:w-100"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 p-8">

                            <div>
                                <h3 className="text-2xl font-bold">
                                    Yu-Gi-Oh
                                </h3>

                                <p className="mt-4 leading-relaxed text-zinc-400">
                                    Projeto inspirado no universo Yu-Gi-Oh com
                                    interface temática, animações e experiência
                                    interativa para os usuários.
                                </p>
                            </div>

                            {/* Techs */}
                            <div className="flex flex-wrap gap-2">

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    HTML
                                </span>

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    CSS
                                </span>

                                <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                                    JavaScript
                                </span>

                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">

                                <a
                                    href="https://github.com/YanJonathas/yu-gi-oh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all hover:border-violet-500/20 hover:bg-violet-500/10"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://yanjonathas.github.io/yu-gi-oh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:scale-105"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}