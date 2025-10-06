import { Palette, Code, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create a beautiful and usefull user interface design with a seamless user experience for your website or mobile app.",
      projectCount: "80 Project",
    },
    {
      icon: Code,
      title: "Web Programming",
      description:
        "Build a quality website with the best technology and optimization on search engines to reach more customers.",
      projectCount: "120 Project",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Create an app from your own idea that can be used on Android and iOS with the best quality and performance.",
      projectCount: "50 Project",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Can I Do For Your Needs
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              projectCount={service.projectCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
