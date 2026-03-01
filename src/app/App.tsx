import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-mia2lkl4th";
import Frame7 from "../imports/Frame7";

// Corrected relative paths to your local assets folder
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

            {/* Mobile Menu Button - Absolute positioned to right */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#cf6857] p-2 absolute right-4"
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
              numOctaves="5"
              stitchTiles="stitch"
            >
              <animate
                attributeName="baseFrequency"
                dur="0.4s"
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
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Large band photo on the left with gap from margin */}
        <div className="absolute left-0 md:left-16 top-0 w-full md:w-[calc(50%-4rem)] h-[50vh] md:h-full">
          <img
            alt="Red Mess band photo"
            className="absolute left-0 top-0 h-full w-full object-cover md:object-contain object-top md:object-left"
            src={imgFotoThresholdedDithered1}
          />
        </div>

        {/* Pixel texture overlay - FULL WIDTH, ONLY HERO SECTION HEIGHT */}
        <div
          className="absolute inset-0 w-full h-screen pointer-events-none"
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

        {/* Right side content - Logo and Video */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-full md:w-1/2 md:ml-auto px-0 md:px-8 lg:px-16 py-4 md:py-20 md:space-y-12 mt-[50vh] md:mt-0">
            {/* Logo centered on mobile (below photo) and on right side on desktop - BIGGER */}
            <div className="flex justify-center md:justify-center items-center px-4 md:px-0 -mt-4 md:mt-0">
              <svg
                className="w-[85vw] md:w-full max-w-[600px] h-auto"
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

            {/* Scroll down with bounce animation - VISIBLE ON MOBILE */}
            <div className="flex md:hidden justify-center mt-8">
              <div className="flex items-center gap-2 animate-bounce">
                <div className="text-[#cf6857] text-xs uppercase tracking-wider">
                  Scroll Down
                </div>
                <svg
                  className="w-4 h-4 text-[#cf6857]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Intravenous Video Embed - 16:9 with thumbnail - HIDDEN ON MOBILE */}
            <div className="hidden md:block w-full max-w-[600px] mx-auto">
              <div
                className="relative w-full"
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

            {/* Scroll down under the video with bounce animation - DESKTOP ONLY */}
            <div className="hidden md:flex justify-center pt-4 md:pt-8">
              <div className="flex items-center gap-2 animate-bounce">
                <div className="text-[#cf6857] text-xs uppercase tracking-wider">
                  Scroll Down
                </div>
                <svg
                  className="w-4 h-4 text-[#cf6857]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
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
                    Bandcamp
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
                <p className="text-lg mb-1">Inexistent Color</p>
                <p className="text-sm opacity-80">
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
                <p className="text-lg mb-1">
                  Deep Blue Fever / Crushing Gravity
                </p>
                <p className="text-sm opacity-80">
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
                <p className="text-lg mb-1">Intravenous</p>
                <p className="text-sm opacity-80">(2025)</p>
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
                <p className="text-lg mb-1">Outta Sight</p>
                <p className="text-sm opacity-80">(2022)</p>
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

      {/* Contact Section - Redesigned */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#cf6857] px-5 py-2">
              <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-2xl sm:text-3xl md:text-4xl uppercase">
                Contact
              </h2>
            </div>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            {/* Booking EU */}
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-[#cf6857]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 border-b border-[#cf6857] pb-4">
                <div className="text-[#cf6857] text-xs md:text-sm uppercase tracking-wider opacity-70">
                  Booking (EU)
                </div>
                <div className="text-[#e8dedd] text-base md:text-lg mt-1 select-text cursor-text break-all">
                  broken-music@posteo.de
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-[#cf6857]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 border-b border-[#cf6857] pb-4">
                <div className="text-[#cf6857] text-xs md:text-sm uppercase tracking-wider opacity-70">
                  General Contact
                </div>
                <div className="text-[#e8dedd] text-base md:text-lg mt-1 select-text cursor-text break-all">
                  redmessmusic@gmail.com
                </div>
              </div>
            </div>

            {/* Press Kit */}
            <a
              href="https://drive.google.com/drive/folders/1PCmJG0Lgo85creVF7m79VISLbJ3-WQOH?usp=sharing"
              className="flex items-center gap-3 md:gap-6 hover:translate-x-2 transition-transform group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-[#cf6857]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <div className="flex-1 border-b border-[#cf6857] pb-4">
                <div className="text-[#cf6857] text-xs md:text-sm uppercase tracking-wider opacity-70">
                  Press Kit
                </div>
                <div className="text-[#e8dedd] text-base md:text-lg mt-1 group-hover:text-[#cf6857] transition-colors">
                  Logo & Photos
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="social" className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto h-[50px]">
          <Frame7 />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm opacity-60">
        <p>© 2026 Red Mess. All rights reserved.</p>
      </footer>

      {/* Video Modal Overlay */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeVideoModal}
        >
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-[#cf6857] text-3xl font-bold transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
