export default function Reel() {
  const images = [
    { id: 1, src: "/reel-pictures/d.jpeg", alt: "Reel 1" },
    { id: 2, src: "/reel-pictures/f.jpeg", alt: "Reel 2" },
    { id: 3, src: "/reel-pictures/a.jpeg", alt: "Reel 3" },
    { id: 4, src: "/reel-pictures/b.jpeg", alt: "Reel 4" },
    { id: 5, src: "/reel-pictures/c.jpeg", alt: "Reel 5" },
    { id: 6, src: "/reel-pictures/e.jpeg", alt: "Reel 6" },
  ];

  return (
    <section className="w-full py-20 bg-[#111111]">
      {/* Header */}
      <div className="md:px-40 px-10 mb-12">
        <h2 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white">
          Randoms <span className="text-[#ffcf17]">Reel</span>
        </h2>
      </div>

      {/* First Marquee - Left to Right */}
      <div className="overflow-hidden mb-6 fade-edges px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex gap-2 sm:gap-4 md:gap-6 marquee">
          {images.map((image) => (
            <div
              key={`first-${image.id}`}
              className="flex-shrink-0 w-48 sm:w-60 md:w-72 lg:w-80 h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {images.map((image) => (
            <div
              key={`first-repeat-${image.id}`}
              className="flex-shrink-0 w-48 sm:w-60 md:w-72 lg:w-80 h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee - Right to Left */}
      <div className="overflow-hidden fade-edges px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex gap-2 sm:gap-4 md:gap-6 marquee-reverse">
          {images.map((image) => (
            <div
              key={`second-${image.id}`}
              className="flex-shrink-0 w-48 sm:w-60 md:w-72 lg:w-80 h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {images.map((image) => (
            <div
              key={`second-repeat-${image.id}`}
              className="flex-shrink-0 w-48 sm:w-60 md:w-72 lg:w-80 h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
