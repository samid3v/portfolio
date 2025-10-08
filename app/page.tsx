"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"), { ssr: false });
const Loader = dynamic(() => import("./components/Loader"), { ssr: false });
const Hero = dynamic(() => import("./components/Hero"));
const Services = dynamic(() => import("./components/Services"));
const Skills = dynamic(() => import("./components/Skills"));
const Experience = dynamic(() => import("./components/Experience"));
const Projects = dynamic(() => import("./components/Projects"));
const Footer = dynamic(() => import("./components/Footer"));

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
            <Services />
            <Skills />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
