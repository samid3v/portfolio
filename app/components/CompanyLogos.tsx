export default function CompanyLogos() {
  const companies = [
    { name: "Meta", logo: "🔵" },
    { name: "Google", logo: "🔴" },
    { name: "LinkedIn", logo: "🔷" },
    { name: "Slack", logo: "🎨" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-[#16213e] rounded-2xl p-6 md:p-8 flex items-center justify-center hover:bg-[#1e2a47] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">
                  {company.logo}
                </div>
                <p className="text-gray-400 text-sm font-medium">{company.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
