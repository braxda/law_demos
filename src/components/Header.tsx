import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from './ui/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Team', path: '/team' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
        >
          <span className="font-heading text-2xl md:text-3xl font-bold text-primary">Barrington Legal</span>
        </Link>
        
        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`nav-link ${pathname === link.path ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact button - hidden on mobile */}
        <div className="hidden md:flex items-center">
          <Button 
            variant="outline" 
            size="sm"
            href="tel:555-123-4567"
            icon={<PhoneIcon className="h-4 w-4" />}
            iconPosition="left"
          >
            (555) 123-4567
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
          display: isMenuOpen ? 'block' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container py-5 bg-white">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`block py-2 text-lg font-medium ${pathname === link.path ? 'text-primary' : 'text-neutral-800'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <div className="flex items-center mb-3">
              <PhoneIcon className="h-5 w-5 text-primary mr-2" />
              <a href="tel:555-123-4567" className="text-primary font-medium">
                (555) 123-4567
              </a>
            </div>
            <Button href="/contact" className="w-full justify-center mt-4">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header; 