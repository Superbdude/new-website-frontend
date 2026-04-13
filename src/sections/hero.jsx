export default function App() {
return (
    <div className="min-h-screen flex items-center justify-start relative px-4 sm:px-6 md:px-18 lg:px-32 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/light.jpg')" }}
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60"></div>

  {/* Animated Glow Effects */}
  <div className="absolute top-20 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#6fe1ed]/15 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-[#ffcf17]/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

  {/* Decorative Line */}
  <div className="absolute top-20 sm:top-32 left-0 w-20 sm:w-40 md:w-96 h-1 bg-gradient-to-r from-[#6fe1ed] via-[#6fe1ed]/50 to-transparent opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl w-full mt-16 sm:mt-0">

    {/* Small Intro */}
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#ffcf17] to-transparent"></div>
      <p className="text-[#6fe1ed] font-medium tracking-widest uppercase text-xs sm:text-sm">
        Developer & Educator
      </p>
    </div>

    {/* Main Name */}
    <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 sm:mb-8 tracking-tight">
      <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">OGUNTADE</span> <br className="hidden sm:block" />
      <span className="text-[#ffcf17] drop-shadow-[0_0_20px_rgba(255,207,23,0.3)]">RAZAK</span> <br className="hidden sm:block"/>
      <span className="text-[#6fe1ed] drop-shadow-[0_0_20px_rgba(111,225,237,0.2)]">DAMILARE</span>
    </h1>

    {/* Subtitle Description */}
    <p className="text-gray-200 max-w-2xl mb-2 sm:mb-3 text-xs sm:text-sm tracking-wide uppercase opacity-70">
      Web Development | Teaching | Innovation
    </p>

    {/* Description */}
    <p className="text-gray-300 max-w-xl mb-6 sm:mb-12 leading-relaxed text-sm sm:text-lg">
      I'm a passionate Full Stack Web Developer and instructor focused on building modern,
      scalable, and user-friendly web applications. I transform ideas into
      powerful digital experiences using modern technologies and best practices.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

      <button
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="bg-[#ffcf17] text-black px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-lg hover:bg-[#e6b800] hover:shadow-[0_0_30px_rgba(255,207,23,0.4)] transition duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto text-center"
      >
        View My Projects
      </button>

      <button 
      onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      
      className="border-2 border-[#6fe1ed] text-[#6fe1ed] px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-lg hover:bg-[#6fe1ed] hover:text-black hover:shadow-[0_0_30px_rgba(111,225,237,0.4)] transition duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto text-center">
        Get In Touch
      </button>

    </div>

    {/* Bottom Accent */}
    <div className="mt-8 sm:mt-16 flex items-center gap-4 sm:gap-8">
      <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-[#6fe1ed] to-transparent"></div>
      <p className="text-[#6fe1ed]/60 text-xs tracking-widest uppercase">Scroll to explore</p>
    </div>
  </div>

</div>
)
}