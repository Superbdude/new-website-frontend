import { Eye, FileText, Computer, ZoomIn } from "lucide-react";
import { useState } from "react";

function Project() {


  const [previewId, setPreviewId] = useState(null);
  const [zoomImage, setZoomImage] = useState(null)

  return (
    <>
   <div className="flex flex-col justify-center items-center text-white bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#242424] py-16 px-6 md:px-12 lg:px-24">
    
    <h1 className="text-3xl font-bold mb-2 text-[#ffcf17]">
        Check Out My Projects
    </h1>

    <p className="mb-4 text-sm max-w-2xl text-gray-300">
        Here's what i have done so far...
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* box 1 */}
        <div className="relative group w-full sm:w-[350px] md:w-[440px] overflow-hidden">

            {/* sidebar */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center gap-4 
                bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-4 w-16 
                transform -translate-x-full group-hover:translate-x-0 
                opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                transition-all duration-1000 ease-in-out rounded-l-xl z-10 border-r border-[#6fe1ed]/30">

                <button 
                    onClick={() => window.open('https://dohub-mgt.web.app', '_blank')}
                    onMouseEnter={() => setPreviewId(1)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Eye size={24}/>
                    {previewId === 1 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Live Preview
                        </span>
                    )}
                </button>


                

                <button
                    onClick={() => window.open('https://github.com/Superbdude/dohub-fullsatck-task-mgt.git', '_blank')} 
                    onMouseEnter={() => setPreviewId(3)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Computer size={24}/>
                    {previewId === 3 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            View Github Code
                        </span>
                    )}
                </button>

                <button 
                    onClick={() => setZoomImage('/dohub-view.png')}
                    onMouseEnter={() => setPreviewId(4)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <ZoomIn size={24}/>
                    {previewId === 4 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Zoom Image
                        </span>
                    )}
                </button>
            </div>

            {/* card */}
            <div className="bg-[#1a1a1a] border-8 border-[#6fe1ed]/70 hover:border-[#6fe1ed] p-4 text-center flex flex-col items-center gap-4 rounded-xl overflow-hidden transition duration-1000 group-hover:shadow-[0_0_30px_rgba(111,225,237,0.3)]">

                <img 
                    src="/dohub-view.png" 
                    alt="dohub" 
                    className="w-full object-cover rounded-md h-52"
                />

                <h3 className="font-bold text-[#ffcf17] text-sm line-clamp-2">
                    Dohub Task Management App
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2">
                    Collaborative task management tool with real-time updates and team features.
                </p>

            </div>  

        </div>

         {/* box 2 */}
        <div className="relative group w-full sm:w-[350px] md:w-[440px] overflow-hidden">

            {/* sidebar */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center gap-4 
                bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-4 w-16 
                transform -translate-x-full group-hover:translate-x-0 
                opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                transition-all duration-1000 ease-in-out rounded-l-xl z-10 border-r border-[#6fe1ed]/30">

                <button 
                    onClick={() => window.open('https://fakes-ecommerce.web.app', '_blank')}
                    onMouseEnter={() => setPreviewId(1)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Eye size={24}/>
                    {previewId === 1 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Live Preview
                        </span>
                    )}
                </button>


                

                <button
                    onClick={() => window.open('https://github.com/Superbdude/FakeStore', '_blank')} 
                    onMouseEnter={() => setPreviewId(3)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Computer size={24}/>
                    {previewId === 3 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            View Github Code
                        </span>
                    )}
                </button>

                <button 
                    onClick={() => setZoomImage('/dohub-view.png')}
                    onMouseEnter={() => setPreviewId(4)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <ZoomIn size={24}/>
                    {previewId === 4 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Zoom Image
                        </span>
                    )}
                </button>
            </div>

            {/* card */}
            <div className="bg-[#1a1a1a] border-8 border-[#6fe1ed]/70 hover:border-[#6fe1ed] p-4 text-center flex flex-col items-center gap-4 rounded-xl overflow-hidden transition duration-1000 group-hover:shadow-[0_0_30px_rgba(111,225,237,0.3)]">

                <img 
                    src="/ecommerce-view.png" 
                    alt="ecommerce" 
                    className="w-full object-cover rounded-md h-52"
                />

                <h3 className="font-bold text-[#ffcf17] text-sm line-clamp-2">
                    E-Commerce Platform
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2">
                    A full-featured online shopping platform with cart, checkout, and payment integration.
                </p>

            </div>  

        </div>

         {/* box 3 */}
        <div className="relative group w-full sm:w-[350px] md:w-[440px] overflow-hidden">

            {/* sidebar */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center gap-4 
                bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-4 w-16 
                transform -translate-x-full group-hover:translate-x-0 
                opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                transition-all duration-1000 ease-in-out rounded-l-xl z-10 border-r border-[#6fe1ed]/30">

                <button 
                    onClick={() => window.open('https://hydrology360.web.app/', '_blank')}
                    onMouseEnter={() => setPreviewId(1)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Eye size={24}/>
                    {previewId === 1 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Live Preview
                        </span>
                    )}
                </button>


                

                <button
                    onClick={() => window.open('https://github.com/Superbdude/hydro360', '_blank')} 
                    onMouseEnter={() => setPreviewId(3)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Computer size={24}/>
                    {previewId === 3 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            View Github Code
                        </span>
                    )}
                </button>

                <button 
                    onClick={() => setZoomImage('/dohub-view.png')}
                    onMouseEnter={() => setPreviewId(4)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <ZoomIn size={24}/>
                    {previewId === 4 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Zoom Image
                        </span>
                    )}
                </button>
            </div>

            {/* card */}
            <div className="bg-[#1a1a1a] border-8 border-[#6fe1ed]/70 hover:border-[#6fe1ed] p-4 text-center flex flex-col items-center gap-4 rounded-xl overflow-hidden transition duration-1000 group-hover:shadow-[0_0_30px_rgba(111,225,237,0.3)]">

                <img 
                    src="/hydro-view.png" 
                    alt="hydro" 
                    className="w-full object-cover rounded-md h-52"
                />

                <h3 className="font-bold text-[#ffcf17] text-sm line-clamp-2">
                    Water Mgt Dashboard
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2">
                    Hydro360 collects water data, analyzes it, alerts you to problems, and helps you make better decisions.
                </p>

            </div>  

        </div>

         {/* box 4 */}
        <div className="relative group w-full sm:w-[350px] md:w-[440px] overflow-hidden">

            {/* sidebar */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center gap-4 
                bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-4 w-16 
                transform -translate-x-full group-hover:translate-x-0 
                opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                transition-all duration-1000 ease-in-out rounded-l-xl z-10 border-r border-[#6fe1ed]/30">

                <button 
                    onClick={() => window.open('https://flinkserve.web.app', '_blank')}
                    onMouseEnter={() => setPreviewId(1)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Eye size={24}/>
                    {previewId === 1 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Live Preview
                        </span>
                    )}
                </button>


                

                <button
                    onClick={() => window.open('https://github.com/Superbdude/flinkserve.git', '_blank')} 
                    onMouseEnter={() => setPreviewId(3)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Computer size={24}/>
                    {previewId === 3 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            View Github Code
                        </span>
                    )}
                </button>

                <button 
                    onClick={() => setZoomImage('/dohub-view.png')}
                    onMouseEnter={() => setPreviewId(4)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <ZoomIn size={24}/>
                    {previewId === 4 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Zoom Image
                        </span>
                    )}
                </button>
            </div>

            {/* card */}
            <div className="bg-[#1a1a1a] border-8 border-[#6fe1ed]/70 hover:border-[#6fe1ed] p-4 text-center flex flex-col items-center gap-4 rounded-xl overflow-hidden transition duration-1000 group-hover:shadow-[0_0_30px_rgba(111,225,237,0.3)]">

                <img 
                    src="/service-view.png" 
                    alt="service" 
                    className="w-full object-cover rounded-md h-52"
                />

                <h3 className="font-bold text-[#ffcf17] text-sm line-clamp-2">
                    Service Platform
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2">
                    FlinkServe is a lightweight React marketplace where people can list, discover, book, and review local services, with localStorage used as a temporary backend for development.
                </p>

            </div>  

        </div>

         {/* box 5 */}
        <div className="relative group w-full sm:w-[350px] md:w-[440px] overflow-hidden">

            {/* sidebar */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center gap-4 
                bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-4 w-16 
                transform -translate-x-full group-hover:translate-x-0 
                opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                transition-all duration-1000 ease-in-out rounded-l-xl z-10 border-r border-[#6fe1ed]/30">

                <button 
                    onClick={() => window.open('https://zeplusacademy.com', '_blank')}
                    onMouseEnter={() => setPreviewId(1)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Eye size={24}/>
                    {previewId === 1 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Live Preview
                        </span>
                    )}
                </button>


                

                <button
                    onClick={() => window.open('https://github.com/placeholder/zeplus-academy', '_blank')} 
                    onMouseEnter={() => setPreviewId(3)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Computer size={24}/>
                    {previewId === 3 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            View Github Code
                        </span>
                    )}
                </button>

                <button 
                    onClick={() => setZoomImage('/dohub-view.png')}
                    onMouseEnter={() => setPreviewId(4)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <ZoomIn size={24}/>
                    {previewId === 4 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Zoom Image
                        </span>
                    )}
                </button>
            </div>

            {/* card */}
            <div className="bg-[#1a1a1a] border-8 border-[#6fe1ed]/70 hover:border-[#6fe1ed] p-4 text-center flex flex-col items-center gap-4 rounded-xl overflow-hidden transition duration-1000 group-hover:shadow-[0_0_30px_rgba(111,225,237,0.3)]">

                <img 
                    src="/zeplus-view.png" 
                    alt="zeplus" 
                    className="w-full object-cover rounded-md h-52"
                />

                <h3 className="font-bold text-[#ffcf17] text-sm line-clamp-2">
                    ZePlus Academy Website
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2">
                    ZePlus Academy provides high-quality tech education through hands-on courses, expert instructors, and a structured learning path for beginners and professionals.
                </p>

            </div>  

        </div>

         {/* box 6 */}
        <div className="relative group w-full sm:w-[350px] md:w-[440px] overflow-hidden">

            {/* sidebar */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center gap-4 
                bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-4 w-16 
                transform -translate-x-full group-hover:translate-x-0 
                opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                transition-all duration-1000 ease-in-out rounded-l-xl z-10 border-r border-[#6fe1ed]/30">

                <button 
                    onClick={() => window.open('https://oguntade-razak.me', '_blank')}
                    onMouseEnter={() => setPreviewId(1)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Eye size={24}/>
                    {previewId === 1 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Live Preview
                        </span>
                    )}
                </button>


                

                <button
                    onClick={() => window.open('https://github.com/Superbdude/portfolio', '_blank')} 
                    onMouseEnter={() => setPreviewId(3)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <Computer size={24}/>
                    {previewId === 3 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            View Github Code
                        </span>
                    )}
                </button>

                <button 
                    onClick={() => setZoomImage('/dohub-view.png')}
                    onMouseEnter={() => setPreviewId(4)}
                    onMouseLeave={() => setPreviewId(null)}
                    className="text-gray-300 hover:text-[#6fe1ed] transition relative"
                >
                    <ZoomIn size={24}/>
                    {previewId === 4 && (
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-[#6fe1ed] text-[#0f0f0f] px-3 py-1 rounded-xl text-sm whitespace-nowrap font-semibold shadow-lg">
                            Zoom Image
                        </span>
                    )}
                </button>
            </div>

            {/* card */}
            <div className="bg-[#1a1a1a] border-8 border-[#6fe1ed]/70 hover:border-[#6fe1ed] p-4 text-center flex flex-col items-center gap-4 rounded-xl overflow-hidden transition duration-1000 group-hover:shadow-[0_0_30px_rgba(111,225,237,0.3)]">

                <img 
                    src="/portfolio-view.png" 
                    alt="portfolio" 
                    className="w-full object-cover rounded-md h-52"
                />

                <h3 className="font-bold text-[#ffcf17] text-sm line-clamp-2">
                    Portfolio Website
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2">
                    Modern, responsive portfolio website featuring smooth animations, clean UI design, and seamless user interactions.
                </p>

            </div>  

        </div>

    </div>
</div>
      
      {zoomImage && (
        <div
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer p-4">

            {/* Close Button */}
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#6fe1ed] transition text-3xl font-bold md:flex hidden"
            >
              ✕
            </button>

            {/* Close text for mobile */}
            <div className="absolute top-4 left-4 text-white text-sm md:hidden">
              Tap anywhere to close
            </div>

            <img 
            src={zoomImage} 
            alt="zoomed" className="w-full h-full max-w-full max-h-screen object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}
    </>
  )
}

export default Project