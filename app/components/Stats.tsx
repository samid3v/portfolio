export default function Stats() {
  const stats = [
    { value: "250+", label: "Project Completed" },
    { value: "100+", label: "Satisfied Clients" },
    { value: "30+", label: "Business Partners" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-2xl bg-[#16213e]/50 hover:bg-[#16213e] transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-amber-500">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
