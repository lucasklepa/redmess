import { useEffect, useState } from 'react';
import svgPaths from "../imports/svg-mia2lkl4th";

// ARQUIVOS CORRIGIDOS COM OS NOMES REAIS DA SUA PASTA ASSETS
import fotoBanda from "../assets/1bb2b93ca796b15564bd8dff5fdcb2332ee0683a.png"; 
import textureBg from "../assets/4166484cd3a953fff426748408f60accb77fa672.png";
import coverHiTech from "../assets/f6d98f970bf4b87dc09b228191298827486ce6c7.png";
import coverBreathtaker from "../assets/49d03c1ed56c6615e0fd971f9e667533870f6ed0.png";
import coverPhantom from "../assets/c8adfa1d39e88e7929765d7f388e07f77ceca601.png";
import aboutPhoto from "../assets/7151b447f7f39f03ff4ebd37469a6a9f6f792760.png";

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

  const scrollToSection = (id: string) => {
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
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#cf6857]/20 p-6 flex flex-col gap-4">
            {['releases', 'videos', 'tour', 'bio', 'shop', 'contact'].map(item => (
              <button key={item} onClick={() => scrollToSection(item)} className="uppercase text-left text-sm tracking-widest">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={fotoBanda} alt="Red Mess" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-8 text-center">
            <svg className="w-full h-auto mx-auto" viewBox="0 0 505 160">
              <path d={svgPaths.p2f56c800} fill="#CF6857" />
            </svg>
            <button onClick={() => scrollToSection('releases')} className="animate-bounce inline-block text-[#cf6857] text-[10px] tracking-[0.4em] uppercase">
              Scroll to explore
            </button>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="py-32 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="bg-[#cf6857] text-[#1a1a1a] inline-block px-4 py-1 text-3xl uppercase font-bold">
              Releases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ReleaseCard img={coverHiTech} title="Hi-Tech Starvation" year="2025" />
            <ReleaseCard img={coverBreathtaker} title="Breathtaker" year="2022" />
            <ReleaseCard img={coverPhantom} title="Phantom Limb" year="2022" soldOut />
          </div>
        </div>
      </section>

      {/* Bio / About */}
      <section id="bio" className="py-32 px-6 border-t border-[#cf6857]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="border-4 border-[#cf6857] p-2">
            <img src={aboutPhoto} alt="Red Mess Live" className="w-full h-auto grayscale" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl uppercase font-bold text-[#cf6857]">The Trio</h2>
            <p className="text-lg leading-relaxed">
              Based in Berlin, Red Mess is a heavy-rock trio known for their intense live 
              performances and crooked riffs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-[#cf6857]/10 text-center">
        <p className="text-[#cf6857] text-xs uppercase tracking-widest mb-4">Get in touch</p>
        <p className="text-2xl font-bold">broken-music@posteo.de</p>
      </footer>
    </div>
  );
}

interface ReleaseCardProps {
  img: string;
  title: string;
  year: string;
  soldOut?: boolean;
}

function ReleaseCard({ img, title, year, soldOut }: ReleaseCardProps) {
  return (
    <div className="group space-y-4">
      <div className="aspect-square border-2 border-[#cf6857] overflow-hidden bg-[#2a2a2a] relative">
        <img src={img} alt={title} className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${soldOut ? 'opacity-40' : ''}`} />
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-[#cf6857] text-sm">{year}</p>
      {soldOut ? (
        <span className="block text-[10px] border border-[#cf6857]/30 py-2 opacity-50 uppercase text-center">Sold Out</span>
      ) : (
        <button className="w-full bg-[#cf6857] text-[#1a1a1a] py-2 text-xs font-bold uppercase hover:bg-white transition-colors">
          Listen / Buy
        </button>
      )}
    </div>
  );
}
