import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: "success", 
          message: "Message sent successfully! I'll get back to you soon." 
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ 
          type: "error", 
          message: data.error || "Failed to send message" 
        });
      }
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "Error sending message. Make sure backend is running." 
      });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#202020] to-[#242424] text-white px-6 md:px-12 lg:px-20 py-16">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-20"
        style={{ backgroundImage: "url('/lights.jpg')" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#ffcf17]">Touch</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project idea, collaboration, or just want to say hi? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Form */}
          <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-lg border border-white/10">

            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#6fe1ed] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#6fe1ed] transition"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-[#2a2a2a] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#6fe1ed] transition"
              />

              {status.message && (
                <div className={`p-3 rounded-lg text-sm ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-[#ffcf17] text-black py-3 rounded-lg font-semibold hover:bg-[#e6b800] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">

            <div className="flex items-center gap-4 bg-[#1f1f1f] p-5 rounded-xl border border-white/10 hover:border-[#6fe1ed] transition">
              <Mail className="text-[#6fe1ed]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300 text-sm">oguntaderasaq30@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#1f1f1f] p-5 rounded-xl border border-white/10 hover:border-[#6fe1ed] transition">
              <Phone className="text-[#6fe1ed]" />
              <div>
                <h3 className="font-semibold">Call Me</h3>
                <p className="text-gray-300 text-sm">+234 909 241 3942</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#1f1f1f] p-5 rounded-xl border border-white/10 hover:border-[#6fe1ed] transition">
              <MapPin className="text-[#6fe1ed]" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300 text-sm">Lagos, Nigeria</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}