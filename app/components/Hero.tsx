"use client";

import { ArrowRight, Facebook, Twitter, Instagram, Github } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "Github" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                James Adams
              </h1>
              <p className="text-gray-400 text-lg max-w-xl">
                A freelancer who provides services for digital programming and design content needs. 
                All businesses with more than 10 years of experience.
              </p>
            </div>

            {/* Services Preview */}
            <div className="bg-[#16213e] rounded-2xl p-6 space-y-4 max-w-md">
              <h3 className="text-white font-semibold text-lg">Services</h3>
              <p className="text-gray-400 text-sm">
                Let's build quality products in programming and design with my services.
              </p>
              <button className="flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors font-medium group">
                <span>Show more</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-[#1a1a2e] transition-all duration-200"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Profile Image Container */}
              <div className="relative bg-[#16213e] rounded-3xl p-8 shadow-2xl">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  {/* Placeholder for profile image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-6xl">👨‍💻</span>
                      </div>
                      <p className="text-gray-400 text-sm px-4">
                        Replace with your photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
