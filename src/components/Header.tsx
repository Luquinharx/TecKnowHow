import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at top
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        // Show when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Serviços', href: '/#servicos' },
  ];

  const rightLinks = [
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isAtTop 
          ? 'bg-transparent py-3 md:py-4' 
          : 'bg-dark/80 backdrop-blur-md shadow-lg py-2 md:py-2'
      }`}
    >
      <div className="container mx-auto px-3 md:px-4 flex items-center justify-between">
        {/* Left Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 md:gap-8 flex-1 justify-end">
          {leftLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-white hover:text-primary transition-colors text-sm md:text-base">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Logo - Center */}
        <a 
          href="#inicio" 
          className="flex items-center mx-4 md:mx-8 flex-shrink-0"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="TecKnowHow" className="h-8 md:h-10 lg:h-12" />
        </a>

        {/* Right Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 md:gap-8 flex-1">
          {rightLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-white hover:text-primary transition-colors text-sm md:text-base">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md shadow-lg md:hidden animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col p-2">
              {allLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-3 px-4 text-white hover:text-primary hover:bg-primary/10 transition-all rounded-md text-sm md:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
