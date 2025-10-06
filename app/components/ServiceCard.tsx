import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  projectCount: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  projectCount,
}: ServiceCardProps) {
  return (
    <div className="bg-[#16213e] rounded-2xl p-6 md:p-8 hover:bg-[#1e2a47] transition-all duration-300 hover:scale-105 group cursor-pointer">
      <div className="space-y-4">
        {/* Icon */}
        <div className="w-14 h-14 bg-[#1a1a2e] rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-[#1a1a2e] transition-all duration-300">
          <Icon size={28} />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Project Count */}
        <p className="text-gray-500 text-sm">{projectCount}</p>

        {/* Show More Link */}
        <button className="flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors font-medium group/btn">
          <span>Show more</span>
          <ArrowRight
            size={18}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
