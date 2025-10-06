"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-[#1a1a2e]">
          <Header />
          <main>
            <Hero />
            <CompanyLogos />
            <Stats />
            <Services />
            <Projects />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
