import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Stats />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
