import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-mia2lkl4th";

// CORRECTED ASSET IMPORTS (Matching your GitHub folder exactly)
import imgFotoThresholdedDithered1 from "../assets/1bb2b93ca796b15564bd8dff5fdcb2332ee0683a.png";
import imgPixelTextureBg1 from "../assets/4166484cd3a953fff426748408f60accb77fa672.png";
import imgUntitled13 from "../assets/410bb0131791f3dc2392fe74c38e4369e9ea9935.png";
import imgUntitled14 from "../assets/79319b374118f30feb596fcc0fe693e953fe6455.png";
import imgUntitled15 from "../assets/e13c93808054b139cf4ab66144bf4acd0d8b26fc.png";
import imgRectangle41 from "../assets/f6d98f970bf4b87dc09b228191298827486ce6c7.png";
import imgRectangle42 from "../assets/49d03c1ed56c6615e0fd971f9e667533870f6ed0.png";
import imgRectangle44 from "../assets/c8adfa1d39e88e7929765d7f388e07f77ceca601.png";
import imgAboutPhoto from "../assets/7151b447f7f39f03ff4ebd37469a6a9f6f792760.png";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Songkick Widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget-app.songkick.com/injector/10208165";
    script.async = true;
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#1a1a1a] text-[#e8dedd] min-h-screen font-sans selection:bg-[#cf6857] selection:text-[#1a1a1a]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#cf6857]/30 transition-transform duration-300 ${!showNav ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {['releases', 'live', 'tour', 'bio', 'shop', 'contact'].map((sec) => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-xs uppercase tracking-[0.2em]">{sec}</button>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#cf6857] ml-auto">
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] p-4 flex flex-col gap-4 border-t border-[#cf6857]/30">
            {['releases', 'live', 'tour', 'bio', 'shop', 'contact'].map((sec) => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="text-[#e8dedd] text-left uppercase text-sm tracking-widest">{sec}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4 gap-8">
          {/* Band Photo */}
          <div className="w-full md:w-1/2">
            <img src={imgFotoThresholdedDithered1} alt="Red Mess" className="w-full h-auto object-contain max-h-[70vh]" />
          </div>
          
          {/* Logo & Video */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
            <svg className="w-full max-w-[500px]" fill="none" viewBox="0 0 505.684 159.767">
              <path d={svgPaths.p2f56c800} fill="#CF6857" />
            </svg>
            <div className="w-full aspect-video border-2 border-[#cf6857]/20 shadow-2xl">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/FhMkNEFWZQc" title="Video" frameBorder="0" allowFullScreen />
            </div>
          </div>
        </div>
        <img src={imgPixelTextureBg1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
      </section>

      {/* Releases Section */}
      <section id="releases" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <h2 className="font-stretch bg-[#cf6857] text-[#1a1a1a] text-3xl md:text-5xl px-6 py-2 uppercase">Latest Releases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: imgRectangle41, title: "Hi-Tech Starvation", type: "Album - 2025", link: "hi-tech-starvation", buy: "LP/CD" },
              { img: imgRectangle42, title: "Breathtaker", type: "Album - 2022", link: "breathtaker", buy: "CD" },
              { img: imgRectangle44, title: "Phantom Limb", type: "EP - 2022", link: "phantom-limb-ep", soldOut: true }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="border-2 border-[#cf6857] overflow-hidden group">
                  <img src={item.img} alt={item.title} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#cf6857] text-xs uppercase mb-4 tracking-widest">{item.type}</p>
                  <div className="flex justify-center gap-4 text-xs mb-6">
                    <a href="#" className="hover:text-[#cf6857] transition-colors">SPOTIFY →</a>
                    <a href={`https://redmess.bandcamp.com/album/${item.link}`} className="hover:text-[#cf6857] transition-colors">BANDCAMP →</a>
                  </div>
                  {item.soldOut ? (
                    <div className="border border-[#cf6857]/40 py-2 text-xs opacity-50 uppercase tracking-widest cursor-not-allowed">Sold Out</div>
                  ) : (
                    <a href="#" className="bg-[#cf6857] text-[#1a1a1a] block py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Buy {item.buy} →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="bio" className="py-24 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
             <img src={imgAboutPhoto} alt="About Red Mess" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-stretch text-4xl text-[#cf6857] uppercase">About</h2>
            <div className="space-y-4 opacity-80 leading-relaxed text-sm md:text-base">
              <p>Formed in 2013 in Londrina, Brazil, and now based in Berlin, Germany, Red Mess is a trio consisting of Thiago Franzim, Douglas Labigalini, and Lucas Klepa.</p>
              <p>Red Mess plays loud music. It is crooked, heavy, and driven by tension, combining heartfelt vocals with gritty riffs that capture the raw energy of their live performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 text-center border-t border-[#cf6857]/10">
        <p className="text-[#cf6857] text-xs uppercase tracking-[0.5em] mb-4">Red Mess 2026</p>
        <div className="flex justify-center gap-8 opacity-60 text-xs">
          <a href="#" className="hover:opacity-100 uppercase">Instagram</a>
          <a href="#" className="hover:opacity-100 uppercase">Facebook</a>
          <a href="#" className="hover:opacity-100 uppercase">Contact</a>
        </div>
      </footer>
    </div>
  );
}
