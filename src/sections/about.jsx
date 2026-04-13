import {useState, useEffect} from 'react'


const textParts = [
    {text: "Hello, I am a ", style: ""},
    {text: "Full Stack ", style: "text-[#6fe1ed] font-bold"},
    {text: "Website Developer", style: "text-[#ffcf17] font-bold"}
]
export default function App() {

    // birthdate age constantly uppdating every year
    const birthDate = new Date ("1998-04-25");

    const calculateAge = () => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear()

        const monthDiff = today.getMonth() - birthDate.getMonth();

        if(
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    }

    // smooth words transition 
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);

    const fullText =textParts.map((p) => p.text).join("");

    useEffect(() => {
        let timeout;

        if (index < fullText.length) {
            timeout = setTimeout(() => {
                setCurrentText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 100);

        }else{
            timeout = setTimeout(() => {
                setCurrentText("");
                setIndex(0);
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [index]);


    // Function to apply style correctly
    const renderStyledText = () => {
        let count = 0;

        return textParts.map((part, i) => {
            const partText = currentText.slice(count, count + part.text.length);
            count += part.text.length;

            return (
                <span key={i} className={part.style}>
                    {partText}
                </span>
            )
        })
    }


return (
  <div className="flex flex-col items-center text-center bg-gradient-to-br from-[#1a1a1a] via-[#202020] to-[#242424] text-white py-16 px-6 md:px-12 lg:px-24">
  
  {/* Heading */}
  <h1 className="text-3xl font-bold mb-2">
    About <span className="text-[#ffcf17]">Me</span>
  </h1>

  <p className="mb-4 text-sm max-w-2xl text-gray-300">
    I’m a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications. 
    I enjoy turning complex problems into simple, beautiful, and intuitive digital experiences.
  </p>

  <hr className="border-[#ffcf17] w-20 border-2"/>

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mt-12 w-full max-w-5xl">

    {/* Image */}
    <div className="border-2 border-[#ffcf17] p-2 bg-[#1a1a1a] flex-shrink-0 shadow-[0_0_25px_rgba(255,207,23,0.2)]">
      <img 
        src="/emoji.png" 
        alt="emoji" 
        className="w-64 h-80 object-cover border-y-8 border-[#6fe1ed]"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col items-start gap-4 text-left max-w-xl">

      <h1 className="text-xl md:text-2xl font-semibold text-white">
        {renderStyledText()}
        <span className="animate-blink text-[#6fe1ed]">|</span>
      </h1>

      <p className="text-sm text-gray-300">
        I specialize in building responsive and dynamic web applications using modern technologies like React, Tailwind CSS, and backend tools. 
        I’m constantly learning and improving my skills to create solutions that are not only functional but also visually appealing. 
        My goal is to develop impactful products that solve real-world problems and deliver great user experiences.
      </p>

      {/* Info */}
      <div className="flex flex-col gap-3 mt-2 w-full">

        <div className="flex items-center gap-4">
          <h3 className="w-24 font-semibold text-sm text-[#ffcf17]">Name:</h3>
          <p className="text-sm text-gray-200">Oguntade Razak Damilare</p>
        </div>

        <div className="flex items-center gap-4">
          <h3 className="w-24 font-semibold text-sm text-[#ffcf17]">Age:</h3>
          <p className="text-sm text-gray-200">{calculateAge()}</p>
        </div>

        <div className="flex items-center gap-4">
          <h3 className="w-24 font-semibold text-sm text-[#ffcf17]">Location:</h3>
          <p className="text-sm text-gray-200">Lagos State</p>
        </div>

        <div className="flex items-center gap-4">
          <h3 className="w-24 font-semibold text-sm text-[#ffcf17]">Email:</h3>
          <p className="text-sm text-gray-200 break-all">oguntaderasaq30@gmail.com</p>
        </div>

        <div className="flex gap-4 mt-4">
          <a 
            href="/certificates/cv.pdf" 
            download="cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffcf17] text-black py-2 px-4 font-bold rounded-md hover:bg-[#e6b800] hover:scale-105 transition shadow-md cursor-pointer inline-block">
            Download Cv
          </a>
          <a 
            href="/certificates/web-dev-certificate.pdf" 
            download="web-dev-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6fe1ed] text-black py-2 px-4 font-bold rounded-md hover:bg-[#5dced9] hover:scale-105 transition shadow-md cursor-pointer inline-block">
            View My Certificate
          </a>
        </div>

      </div>
    </div>
  </div>
</div>
)
}