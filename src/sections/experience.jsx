import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Zeplus Academy",
    period: "September 2025 - Present",
    desc: "Leading development of large-scale web applications, mentoring junior developers, and implementing best practices across the team.",
    highlight: false
  },
  {
    title: "Tech Course Instructor",
    company: "Zeplus Academy",
    period: "2025 - Present",
    desc: "Teaching modern web development to students, focusing on practical skills in React, Next.js, and full-stack development. Dedicated to helping the next generation of developers succeed.",
    highlight: true
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#242424] text-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-[#ffcf17]">Experience</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional journey and career milestones in web development and education
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-8 last:mb-0">
            
            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-20 bg-gradient-to-b from-[#6fe1ed] to-transparent opacity-50"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 w-12 h-12 bg-[#1a1a1a] border-2 border-[#6fe1ed] rounded-full flex items-center justify-center">
              <Briefcase className="text-[#ffcf17]" size={20} />
            </div>

            {/* Content Card */}
            <div
              className={`ml-20 p-6 rounded-xl border transition duration-300 ${
                exp.highlight
                  ? "bg-gradient-to-br from-[#6fe1ed]/10 to-[#ffcf17]/10 border-[#6fe1ed]/50 hover:border-[#6fe1ed]"
                  : "bg-[#1a1a1a] border-white/10 hover:border-[#6fe1ed]/30"
              }`}
            >
              {/* Title & Company */}
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-[#6fe1ed] font-medium">
                  {exp.company}
                </p>
              </div>

              {/* Period */}
              <div className="mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffcf17] rounded-full"></span>
                <p className="text-sm text-gray-400">
                  {exp.period}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-20">
        <div className="text-center p-6 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#6fe1ed]/30 transition">
          <h4 className="text-3xl font-bold text-[#ffcf17] mb-2">1+</h4>
          <p className="text-gray-300">Years of Experience</p>
        </div>
        
        <div className="text-center p-6 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#6fe1ed]/30 transition">
          <h4 className="text-3xl font-bold text-[#6fe1ed] mb-2">5+</h4>
          <p className="text-gray-300">Students Taught</p>
        </div>
        
        <div className="text-center p-6 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#6fe1ed]/30 transition">
          <h4 className="text-3xl font-bold text-[#ffcf17] mb-2">20+</h4>
          <p className="text-gray-300">Projects Completed</p>
        </div>
      </div>
    </div>
  );
}
