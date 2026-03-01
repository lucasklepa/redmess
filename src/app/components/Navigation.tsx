// Navigation Menu Component
// Responsive nav with mobile hamburger menu

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  showNav: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: "releases", label: "Releases" },
  { id: "live", label: "Videos" },
  { id: "tour", label: "Tour" },
  { id: "bio", label: "About" },
  { id: "shop", label: "Shop" },
  { id: "contact", label: "Contact" },
];

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navigation({ showNav, mobileMenuOpen, onToggleMobileMenu, onNavigate }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[110] bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#cf6857]/30 transition-transform duration-300 ${
        !showNav ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Absolute positioned to right */}
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden text-[#cf6857] p-2 absolute right-4"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#cf6857]/30">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-[#e8dedd] hover:text-[#cf6857] transition-colors text-sm uppercase tracking-wider text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
