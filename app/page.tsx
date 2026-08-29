import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-40">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact/>
    </main>
  );
}