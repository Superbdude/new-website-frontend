import { useEffect, useRef } from "react";

const stacks = [
  {
    name: "HTML",
    image: "/html.jpeg",
    desc: "Markup language for creating structured web pages."
  },
  {
    name: "CSS",
    image: "/css.png",
    desc: "Styling language for designing beautiful user interfaces."
  },
  {
    name: "JavaScript",
    image: "/javascript.jpeg",
    desc: "Versatile programming language for interactive web applications."
  },
  {
    name: "TypeScript",
    image: "/typescript.png",
    desc: "Typed superset of JavaScript for building scalable applications."
  },
  {
    name: "React",
    image: "/react.jpeg",
    desc: "A powerful JavaScript library for building dynamic user interfaces."
  },
  {
    name: "Next.js",
    image: "/next.jpeg",
    desc: "A React framework for building fast and scalable web apps."
  },
  {
    name: "Node.js",
    image: "/node.jpeg",
    desc: "Backend runtime for building scalable server-side applications."
  },
  {
    name: "Express.js",
    image: "/express.png",
    desc: "Minimal backend framework for building APIs with Node.js."
  },
  {
    name: "MongoDB",
    image: "/mongo.png",
    desc: "A NoSQL database for flexible and scalable data storage."
  },
  {
    name: "Firebase",
    image: "/firebase.png",
    desc: "Google's platform for building apps with real-time database and auth."
  },
  {
    name: "Tailwind CSS",
    image: "/tailwiind.png",
    desc: "Utility-first CSS framework for rapid UI development."
  },
  {
    name: "REST APIs",
    image: "/rest-api.png",
    desc: "Standard architecture for building scalable web services."
  },
  {
    name: "Git",
    image: "/git.png",
    desc: "Version control system for tracking code changes."
  },
  {
    name: "GitHub",
    image: "/github.png",
    desc: "Platform for hosting and collaborating on code repositories."
  }
];

export default function Stacks() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += 0.5; // speed
      scrollContainer.scrollLeft = scrollAmount;

      // reset for infinite effect
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white py-16 px-6 md:px-12 lg:px-20">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">
          My <span className="text-[#ffcf17]">Tech Stack</span>
        </h1>
        <p className="text-gray-300 mt-4">
          Technologies I use to build modern and scalable applications
        </p>
      </div>

      {/* Desktop Carousel */}
      <div
        ref={scrollRef}
        className="hidden lg:flex overflow-x-hidden gap-6 w-full"
      >
        {[...stacks, ...stacks].map((stack, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-[#242424] border border-white/10 rounded-xl p-6 flex-shrink-0 hover:scale-105 transition duration-300"
          >
            <img
              src={stack.image}
              alt={stack.name}
              className="w-16 h-16 object-contain mb-4"
            />

            <h3 className="text-lg font-semibold text-[#6fe1ed] mb-2">
              {stack.name}
            </h3>

            <p className="text-sm text-gray-300">
              {stack.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Grid - 4 per row */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-4 gap-4">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="bg-[#242424] border border-white/10 rounded-xl p-4 text-center hover:border-[#6fe1ed] transition duration-300"
          >
            <img
              src={stack.image}
              alt={stack.name}
              className="w-12 h-12 object-contain mb-3 mx-auto"
            />

            <h3 className="text-sm font-semibold text-[#6fe1ed] mb-2">
              {stack.name}
            </h3>

            <p className="text-xs text-gray-300 line-clamp-2">
              {stack.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}