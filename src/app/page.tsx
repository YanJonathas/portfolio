import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full px-8 bg-black text-zinc-900 dark:text-white min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}