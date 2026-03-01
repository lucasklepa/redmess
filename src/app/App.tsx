import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-mia2lkl4th";
import Frame7 from "../imports/Frame7";

// FIXED: Local asset paths for GitHub/Vite
import imgFotoThresholdedDithered1 from "../assets/1bb2b93ca796b15564bd8dff5fdcb2332ee0683a.png";
import imgPixelTextureBg1 from "../assets/8b25ff0125e871e685a790a2e526e12b4c92a502.png";
import imgRectangle41 from "../assets/9452d684afffda48c34f8e218710253fa15e6eab.png";
import imgRectangle42 from "../assets/74e152bdd9ee79785f907cfadaed06d94b50782c.png";
import imgRectangle44 from "../assets/59f424583c29344c175c96c7d98bc8334f68a2b2.png";
import imgAboutPhoto from "../assets/b780750e3db701da62e68ce439d3cf14acc78ee1.png";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setMobileMenuOpen(false);
      }
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget-app.songkick.com/injector/10208165";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-[#e8dedd] min-h-screen font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#cf6857]/30 transition-transform duration-300 ${!showNav ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8 font-inter uppercase text-xs tracking-widest">
            {["releases", "live", "tour", "bio", "shop", "contact"].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)} className="hover:text-[#cf6857] transition-colors">
                {section}
              </button>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#cf6857] p-2">
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-[#1a1a1a] overflow-hidden">
        {/* Pixel Texture Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={imgPixelTextureBg1} alt="" className="w-full h-full object-cover" />
        </div>

        {/* THE FIX: Centered Flex Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Column 1: Band Photo */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={imgFotoThresholdedDithered1}
                alt="Red Mess"
                className="w-full max-w-md md:max-w-full h-auto object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>

            {/* Column 2: Logo + Video + Scroll */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-10">
              {/* SVG Logo */}
              <div className="w-full max-w-[500px]">
                <svg className="w-full h-auto" fill="none" viewBox="0 0 505.684 159.767">
                  <path d={svgPaths.p2f56c800} fill="#CF6857" />
                </svg>
              </div>

              {/* Video Embed */}
              <div className="w-full border-4 border-[#cf6857] aspect-video bg-black shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/FhMkNEFWZQc"
                  title="Red Mess Video"
                  allowFullScreen
                />
              </div>

              {/* Scroll Indicator */}
              <div className="flex items-center gap-3 text-[#cf6857] animate-pulse">
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Scroll Down</span>
                <div className="w-px h-8 bg-[#cf6857]"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Releases Section */}
      <section id="releases" className="py-32 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-['STRRETCH_SANS'] text-5xl md:text-7xl text-[#cf6857] border-b-4 border-[#cf6857] inline-block pb-2">
              RELEASES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[imgRectangle41, imgRectangle42, imgRectangle44].map((img, i) => (
              <div key={i} className="group">
                <div className="border-2 border-[#cf6857] p-2 mb-4 group-hover:bg-[#cf6857] transition-all">
                  <img src={img} alt="Album" className="w-full grayscale group-hover:grayscale-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="bio" className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-['STRRETCH_SANS'] text-5xl text-[#cf6857]">ABOUT</h2>
            <p className="text-lg leading-relaxed text-gray-400">
              Formed in 2013 in Londrina, Brazil, and now based in Berlin, Germany, Red Mess is a trio...
              (content truncated for brevity)
            </p>
          </div>
          <div className="border-8 border-[#cf6857]/20">
            <img src={imgAboutPhoto} alt="Band Live" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
