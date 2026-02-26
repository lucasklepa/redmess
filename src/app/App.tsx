import { useEffect, useState } from 'react';
import svgPaths from "../imports/svg-mia2lkl4th";

// SUBSTITUA OS CAMINHOS ABAIXO PELOS SEUS ARQUIVOS LOCAIS
// Exemplo: import fotoBanda from "../assets/foto-banda.png";
import fotoBanda from "../assets/band-photo.png"; 
import textureBg from "../assets/pixel-texture.png";
import coverHiTech from "../assets/hi-tech-starvation.png";
import coverBreathtaker from "../assets/breathtaker.png";
import coverPhantom from "../assets/phantom-limb.png";
import aboutPhoto from "../assets/about-live.png";

export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
        setMobileMenuOpen(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-[#e8dedd] min-h-screen font-sans selection:bg-[#cf6857]">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#cf6857]/20 transition-transform duration-300 ${!showNav ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="hidden md:flex gap-8 mx-auto">
            {['releases', 'videos', 'tour', 'bio', 'shop', 'contact'].map(item => (
              <button key={item} onClick={() => scrollToSection(item)} className="uppercase text-xs tracking-widest hover:text-[#cf6857] transition-colors">
                {item}
              </button>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#cf6857]">
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={fotoBanda} alt="Red Mess" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-end">
          <div className="w-full md:w-1/2 space-y-8 text-center">
            <svg className="w-full max-w-md mx-auto" viewBox="0 0 505 160">
              <path d={svgPaths.p2f56c800} fill="#CF6857" />
            </svg>
            <button onClick={() => scrollToSection('releases')} className="animate-bounce inline-block text-[#cf6857] text-[10px] tracking-[0.4em] uppercase">
              Scroll to explore
            </button>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center bg-[#cf6857] text-[#1a1a1a] inline-block px-4 py-1 text-3xl uppercase font-bold mb-16 relative left-1/2 -translate-x-1/2">
            Releases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ReleaseCard img={coverHiTech} title="Hi-Tech Starvation" year="2025" />
            <ReleaseCard img={coverBreathtaker} title="Breathtaker" year="2022" />
            <ReleaseCard img={coverPhantom} title="Phantom Limb" year="2022" soldOut />
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer id="contact" className="py-20 border-t border-[#cf6857]/10 text-center">
        <p className="text-[#cf6857] text-xs uppercase tracking-widest mb-4">Get in touch</p>
        <p className="text-2xl">broken-music@posteo.de</p>
      </footer>
    </div>
  );
}

function ReleaseCard({ img, title, year, soldOut }) {
  return (
    <div className="group space-y-4">
      <div className="aspect-square border-2 border-[#cf6857] overflow-hidden bg-[#2a2a2a]">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-[#cf6857] text-sm">{year}</p>
      {soldOut ? (
        <span className="block text-[10px] border border-[#cf6857]/30 py-2 opacity-50 uppercase">Sold Out</span>
      ) : (
        <button className="w-full bg-[#cf6857] text-[#1a1a1a] py-2 text-xs font-bold uppercase hover:bg-white transition-colors">Buy Now</button>
      )}
    </div>
  );
}
