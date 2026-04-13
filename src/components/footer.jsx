import { MdEmail, MdPhone, MdFavoriteBorder } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Tech Stack", id: "stacks" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Superbdude", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/oguntade-razak-65aa66222", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/Superb250498", label: "Twitter" },
    { icon: MdEmail, url: "mailto:oguntaderasaq30@gmail.com", label: "Email" }
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0f0f0f] via-[#1a1a1a] to-[#242424] text-white border-t border-[#6fe1ed]/20">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold">
                <span className="text-[#ffcf17]">Oguntade</span> <span className="text-[#6fe1ed]">Razak</span>
              </h3>
              <p className="text-gray-400 text-sm mt-2">Full Stack Developer & Tech Educator</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern, scalable web applications and teaching the next generation of developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ffcf17]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-400 hover:text-[#6fe1ed] transition text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ffcf17]">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:oguntaderasaq30@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#6fe1ed] transition text-sm"
              >
                <MdEmail size={16} />
                oguntaderasaq30@gmail.com
              </a>
              <a
                href="tel:+234 909 241 3942"
                className="flex items-center gap-2 text-gray-400 hover:text-[#6fe1ed] transition text-sm"
              >
                <MdPhone size={16} />
                +234 909 241 3942
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#6fe1ed]/20 via-[#ffcf17]/20 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>© {currentYear} Oguntade Razak. Made with</span>
            <MdFavoriteBorder size={14} className="text-[#ffcf17]" />
            <span>and React</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-start md:justify-end gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#1f1f1f] border border-[#6fe1ed]/30 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#6fe1ed] hover:text-black hover:border-[#6fe1ed] transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}
