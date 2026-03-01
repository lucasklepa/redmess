import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-mia2lkl4th";
import Frame7 from "../imports/Frame7";
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

      // Show nav when scrolling up, hide when scrolling down
      if (
        currentScrollY < lastScrollY ||
        currentScrollY < 100
      ) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding nav
      }

      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Load Songkick widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget-app.songkick.com/injector/10208165";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openVideoModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setVideoModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideoId("");
    document.body.style.overflow = "auto";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-[#e8dedd] min-h-screen">
      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[110] bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#cf6857]/30 transition-transform duration-300 ${!showNav ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("releases")}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                Releases
              </button>
              <button
                onClick={() => scrollToSection("live")}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection("tour")}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                Tour
              </button>
              <button
                onClick={() => scrollToSection("bio")}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("shop")}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button - Centered */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#cf6857] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#cf6857]/30">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("releases")}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  Releases
                </button>
                <button
                  onClick={() => scrollToSection("live")}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  Videos
                </button>
                <button
                  onClick={() => scrollToSection("tour")}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  Tour
                </button>
                <button
                  onClick={() => scrollToSection("bio")}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("shop")}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  Shop
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Noise Overlay - OPTIMIZED */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.5] md:opacity-[0.45] mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.6"
              numOctaves="3"
              stitchTiles="stitch"
            >
              <animate
                attributeName="baseFrequency"
                dur="0.6s"
                values="1.6;1.65;1.55;1.6"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
          />
        </svg>
      </div>

      {/* VHS Vignette - HIDDEN ON MOBILE */}
      <div
        className="hidden md:block fixed inset-0 pointer-events-none z-[104]"
        style={{
          background:
            "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center bg-[#1a1a1a] pt-16 md:pt-0"
      >
        {/* Pixel texture overlay */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          style={{
            opacity: 1,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <img
            alt=""
            className="absolute left-0 top-0 h-full w-full object-cover"
            src={imgPixelTextureBg1}
          />
        </div>

        {/* Centered Container with Max Width */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-6 w-full">
          {/* Two-Column Layout with Healthy Gap */}
          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-16 lg:gap-20">
            
            {/* Column 1: Band Photo */}
            <div className="w-full md:w-1/2 flex justify-center -mx-6 md:mx-0">
              <img
                src={imgFotoThresholdedDithered1}
                alt="Red Mess band photo"
                className="w-full h-auto object-contain md:max-w-xl lg:max-w-2xl block"
                style={{ 
                  outline: 'none',
                  border: 'none',
                  imageRendering: 'crisp-edges'
                }}
                loading="eager"
              />
            </div>

            {/* Column 2: Logo, Video, Scroll Indicator */}
            <div className="w-full md:w-1/2 flex flex-col items-center space-y-8">
              
              {/* Logo */}
              <div className="w-full max-w-[600px]">
                <svg
                  className="w-full h-auto"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 505.684 159.767"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p2f56c800}
                    fill="#CF6857"
                    fillRule="evenodd"
                  />
                </svg>
              </div>

              {/* Video Embed */}
              <div className="w-full max-w-[600px]">
                <div
                  className="relative w-full border-4 border-[#cf6857]"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/FhMkNEFWZQc"
                    title="Intravenous - Red Mess"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Scroll Down Indicator - Desktop Only */}
              <div className="hidden md:flex items-center justify-center gap-2 text-[#cf6857] animate-bounce pt-4 w-full">
                <span className="text-sm uppercase tracking-wider">
                  Scroll Down
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Releases Section */}
      <section
        id="releases"
        className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#cf6857] px-5 py-2">
              <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-xl sm:text-3xl md:text-4xl uppercase">
                Latest Releases
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Hi-Tech Starvation */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-[#2a2a2a] border-2 border-[#cf6857] overflow-hidden">
                <img
                  src={imgRectangle41}
                  alt="Hi-Tech Starvation album cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-[#e8dedd] mb-2">
                  Hi-Tech Starvation
                </h3>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider mb-4">
                  Album - 2025
                </p>
                <div className="flex gap-4 justify-center flex-wrap mb-4">
                  <a
                    href="https://open.spotify.com/album/3FGK0p0zvW7j9xgJXQWHhM"
                    className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify →
                  </a>
                  <a
                    href="https://redmess.bandcamp.com/album/hi-tech-starvation"
                    className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bandcamp →
                  </a>
                </div>
                <a
                  href="https://www.noisolution.de/shop/Vinyl/Red-Mess-Hi-Tech-Starvation-LP-Erstauflage-Black-Lyricsheet::439.html"
                  className="inline-block w-full bg-[#cf6857] hover:bg-[#e07666] text-[#1a1a1a] px-6 py-2 text-sm uppercase tracking-wider transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy LP/CD →
                </a>
              </div>
            </div>

            {/* Breathtaker */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-[#2a2a2a] border-2 border-[#cf6857] overflow-hidden">
                <img
                  src={imgRectangle42}
                  alt="Breathtaker album cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-[#e8dedd] mb-2">
                  Breathtaker
                </h3>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider mb-4">
                  Album - 2022
                </p>
                <div className="flex gap-4 justify-center flex-wrap mb-4">
                  <a
                    href="https://open.spotify.com/album/7dzn3K3WxWLdYtlQOUGHa3"
                    className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify →
                  </a>
                  <a
                    href="https://redmess.bandcamp.com/album/breathtaker"
                    className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bandcamp →
                  </a>
                </div>
                <a
                  href="https://www.stickman-records.com/shop/red-mess-breathtaker/"
                  className="inline-block w-full bg-[#cf6857] hover:bg-[#e07666] text-[#1a1a1a] px-6 py-2 text-sm uppercase tracking-wider transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy CD →
                </a>
              </div>
            </div>

            {/* Phantom Limb */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-square bg-[#2a2a2a] border-2 border-[#cf6857] overflow-hidden">
                <img
                  src={imgRectangle44}
                  alt="Phantom Limb EP cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-[#e8dedd] mb-2">
                  Phantom Limb
                </h3>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider mb-4">
                  EP - 2022
                </p>
                <div className="flex gap-4 justify-center flex-wrap mb-4">
                  <a
                    href="https://open.spotify.com/album/0PuM6P2X5r5gPPM4b8AY7g"
                    className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify →
                  </a>
                  <a
                    href="https://redmess.bandcamp.com/album/phantom-limb-ep"
                    className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bandcamp →
                  </a>
                </div>
                <div className="inline-block w-full bg-[#2a2a2a] border-2 border-[#cf6857] text-[#e8dedd] px-6 py-2 text-sm uppercase tracking-wider opacity-60 cursor-not-allowed">
                  Sold Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Performance Section */}
      <section
        id="live"
        className="py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#cf6857] px-5 py-2">
              <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-xl sm:text-2xl md:text-4xl uppercase">
                Live Performance
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-2 border-[#cf6857]"
                  src="https://www.youtube.com/embed/Dzvaf_q9e_g"
                  title="Inexistent Color - Live at Schokoladen"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-[#e8dedd] mb-2">Inexistent Color</p>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider">
                  @ Schokoladen - Berlin (2025)
                </p>
              </div>
            </div>

            <div>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-2 border-[#cf6857]"
                  src="https://www.youtube.com/embed/eWAg3mtxUxA"
                  title="Deep Blue Fever / Crushing Gravity - Live at Audio13"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-[#e8dedd] mb-2">
                  Deep Blue Fever / Crushing Gravity
                </p>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider">
                  @ Audio13 - Londrina (2022)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Video Section */}
      <section
        id="videos"
        className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#cf6857] px-5 py-2">
              <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-xl sm:text-3xl md:text-4xl uppercase">
                Music Video
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-2 border-[#cf6857]"
                  src="https://www.youtube.com/embed/FhMkNEFWZQc"
                  title="Intravenous music video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-[#e8dedd] mb-2">Intravenous</p>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider">(2025)</p>
              </div>
            </div>

            <div>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-2 border-[#cf6857]"
                  src="https://www.youtube.com/embed/RVBOX02cJNU"
                  title="Outta Sight music video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-[#e8dedd] mb-2">Outta Sight</p>
                <p className="text-sm text-[#cf6857] uppercase tracking-wider">(2022)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section
        id="tour"
        className="py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#cf6857] px-5 py-2">
              <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-2xl sm:text-3xl md:text-4xl uppercase">
                Tour
              </h2>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Songkick Widget with styled wrapper for auto-detection */}
            <div
              className="songkick-wrapper"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#e8dedd",
                fontFamily:
                  "system-ui, -apple-system, sans-serif",
              }}
            >
              <a
                href="https://www.songkick.com/artists/10208165"
                className="songkick-widget"
                data-theme="dark"
                data-track-button="on"
                data-detect-style="on"
                data-locale="en"
                data-other-artists="on"
                data-share-button="on"
                data-country-filter="on"
                data-rsvp="on"
                data-request-show="on"
                data-past-events="off"
                data-past-events-offtour="off"
                data-remind-me="off"
                style={{ display: "none" }}
              >
                Red Mess tour dates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section - Moved after Music Video */}
      <section id="bio" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center md:text-left">
                <div className="inline-block bg-[#cf6857] px-5 py-2">
                  <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-2xl sm:text-3xl md:text-4xl uppercase">
                    About
                  </h2>
                </div>
              </div>
              <div className="text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Formed in 2013 in Londrina, Brazil, and now
                  based in Berlin, Germany, Red Mess is a trio
                  with Thiago Franzim on guitar, Douglas
                  Labigalini on drums, and Lucas Klepa on bass
                  and vocals. The band grew out of a long
                  history between Thiago and Douglas, who had
                  been playing together since they were kids.
                  When Lucas joined in 2013, things finally
                  clicked and the name Red Mess came into
                  existence, defining the lineup that still
                  stands today.
                </p>

                <p>
                  Red Mess plays loud music. It is crooked,
                  heavy, and driven by tension, combining
                  heartfelt vocals with gritty riffs that make
                  you want to move your body whether you planned
                  to or not. The band grew out of constant live
                  shows in their hometown, where volume and
                  physical presence mattered more than sounding
                  polite, and that mindset never really changed.
                  Studio recordings are treated as an extension
                  of the stage, trying to capture the mess, the
                  pressure, and whatever emotion happens to be
                  there. In 2022, the band moved to Berlin,
                  Germany, and kept doing exactly that.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                alt="Red Mess live performance photo"
                className="w-full max-w-md rounded-lg shadow-2xl"
                src={imgAboutPhoto}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section
        id="shop"
        className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#cf6857] px-5 py-2">
              <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-2xl sm:text-3xl md:text-4xl uppercase">
                Shop
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Hi-Tech Starvation LP */}
            <a
              href="https://www.noisolution.de/shop/Vinyl/Red-Mess-Hi-Tech-Starvation-LP-Erstauflage-Black-Lyricsheet::439.html"
              className="group block border-2 border-[#cf6857] p-6 hover:bg-[#cf6857] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#e8dedd] group-hover:text-[#1a1a1a] transition-colors mb-2">
                    Hi-Tech Starvation
                  </h3>
                  <p className="text-sm text-[#cf6857] group-hover:text-[#1a1a1a] transition-colors uppercase tracking-wider">
                    LP
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <span className="text-[#e8dedd] group-hover:text-[#1a1a1a] text-sm uppercase tracking-wider transition-colors">
                    Buy Now →
                  </span>
                </div>
              </div>
            </a>

            {/* Hi-Tech Starvation CD */}
            <a
              href="https://www.noisolution.de/shop/CDs/Red-Mess-Hi-Tech-Starvation-CD-Booklet-Lyrics::440.html"
              className="group block border-2 border-[#cf6857] p-6 hover:bg-[#cf6857] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#e8dedd] group-hover:text-[#1a1a1a] transition-colors mb-2">
                    Hi-Tech Starvation
                  </h3>
                  <p className="text-sm text-[#cf6857] group-hover:text-[#1a1a1a] transition-colors uppercase tracking-wider">
                    CD
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <span className="text-[#e8dedd] group-hover:text-[#1a1a1a] text-sm uppercase tracking-wider transition-colors">
                    Buy Now →
                  </span>
                </div>
              </div>
            </a>

            {/* Breathtaker CD */}
            <a
              href="https://www.stickman-records.com/shop/red-mess-breathtaker/"
              className="group block border-2 border-[#cf6857] p-6 hover:bg-[#cf6857] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#e8dedd] group-hover:text-[#1a1a1a] transition-colors mb-2">
                    Breathtaker
                  </h3>
                  <p className="text-sm text-[#cf6857] group-hover:text-[#1a1a1a] transition-colors uppercase tracking-wider">
                    CD
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <span className="text-[#e8dedd] group-hover:text-[#1a1a1a] text-sm uppercase tracking-wider transition-colors">
                    Buy Now →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
