import { useState, useEffect } from "react";
import { Home, User, Code2, Briefcase, Zap, Mail, Menu, X } from "lucide-react";

const menuItems = [
    { icon: Home, label: "Home", id: "hero" },
    { icon: User, label: "About", id: "about" },
    { icon: Code2, label: "Tech Stack", id: "stacks" },
    { icon: Briefcase, label: "Experience", id: "experience" },
    { icon: Zap, label: "Projects", id: "projects" },
    { icon: Mail, label: "Contact", id: "contact" },
];

export default function Sidebar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeSection, setActiveSection] = useState("hero");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observerOptions = {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: "-50% 0px -50% 0px"
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        menuItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close menu after clicking
        }
    };

    const styles = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-10px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        .animate-slideIn {
            animation: slideIn 0.3s ease-out forwards;
        }
    `;

    return (
        <>
        <style>{styles}</style>
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex w-24 h-screen flex-col items-center justify-center gap-4 bg-[#1a1a1a] border-r border-white/10 py-8 px-6 fixed left-0 top-0 z-40">
            {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isHovered = hoveredIndex === index;
                const isActive = activeSection === item.id;
                
                return (
                    <div key={index} className="relative h-16 flex items-center">
                        <button
                            onClick={() => scrollToSection(item.id)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-in-out ${
                                isActive
                                    ? "bg-[#ffcf17] text-black shadow-lg shadow-[#ffcf17]/50 scale-110"
                                    : "bg-[#6fe1ed]/10 text-[#6fe1ed] hover:bg-[#6fe1ed] hover:text-black"
                            }`}
                        >
                            <IconComponent size={20} />
                        </button>
                        {isHovered && (
                            <div className="absolute left-20 top-1/2 -translate-y-1/2 z-50">
                                <div className="bg-[#6fe1ed] text-black px-4 py-2 rounded-full whitespace-nowrap shadow-lg font-sm animate-slideIn">
                                    {item.label}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden fixed top-6 left-6 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6fe1ed] text-black hover:bg-[#ffcf17] transition-all duration-500 ease-in-out"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-[#1a1a1a] border-r border-white/10 z-40 flex flex-col items-center justify-center gap-4 pt-20">
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                        <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full flex items-center gap-4 px-6 py-3 transition-all duration-500 ease-in-out ${
                                isActive
                                    ? "bg-[#ffcf17] text-black"
                                    : "text-[#6fe1ed] hover:bg-[#6fe1ed]/10"
                            }`}
                        >
                            <IconComponent size={24} />
                            <span className="font-semibold">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        )}

        {/* Mobile backdrop */}
        {isOpen && (
            <div
                className="lg:hidden fixed inset-0 bg-black/50 z-30"
                onClick={() => setIsOpen(false)}
            />
        )}
        </>
    );
}