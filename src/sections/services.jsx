import { Code2, Layers, Database, Zap, Shield, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Complete web applications from concept to deployment using modern technologies.",
    features: ["React & Next.js", "Node.js & Express", "Full Database Integration"]
  },
  {
    icon: Layers,
    title: "Frontend Development",
    desc: "Responsive and interactive user interfaces with modern frameworks.",
    features: ["React Components", "Responsive Design", "UI/UX Implementation"]
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Building secure and scalable backend systems using Node.js, Express, and MongoDB.",
    features: ["REST API Development", "MongoDB Integration", "Authentication & Data Handling"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Improve application speed and efficiency for better user experience.",
    features: ["Code Optimization", "Loading Speed", "Caching Strategies"]
  },
  {
    icon: Rocket,
    title: "Web Development Mentorship",
    desc: "Learn web development with hands-on guidance, real-world projects, and continuous support.",
    features: ["Live Coding Sessions", "Real Projects", "Code Reviews"]
  },
  {
    icon: Rocket,
    title: "Website Deployment",
    desc: "I help bring websites live by setting up hosting, domains, and ensuring everything runs smoothly online.",
    features: ["Domain Setup", "Hosting & Deployment", "Website Maintenance"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#242424] text-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-[#ffcf17]">Services</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I offer comprehensive web development solutions tailored to bring your ideas to life
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto md:px-20">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#6fe1ed]/30 rounded-xl p-8 hover:border-[#6fe1ed] hover:shadow-[0_0_20px_rgba(111,225,237,0.2)] transition duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-14 h-14 bg-[#6fe1ed]/10 rounded-lg flex items-center justify-center group-hover:bg-[#6fe1ed]/20 transition">
                  <IconComponent className="text-[#6fe1ed]" size={28} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ffcf17] transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">
                {service.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#ffcf17] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-gray-300 mb-6">
          Have a project in mind? Let's discuss how I can help bring it to life.
        </p>
        <button 
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="bg-[#ffcf17] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b800] transition shadow-lg">
          Start Your Project
        </button>
      </div>
    </div>
  );
}
