import React, { useState, useEffect, useMemo } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = useMemo(() => [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;

      // 1. Find the first section's position
      const firstSection = document.getElementById(navLinks[0].id);
      
      // 2. If we haven't reached the first section yet, clear active state
      if (firstSection && scrollPosition < firstSection.offsetTop) {
        setActiveSection('');
        return;
      }

      // 3. Otherwise, run the normal detection loop
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-7' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-120">
        {/* Logo */}
        <a href="#" className="relative z-120">
          <span className="text-xl font-black text-white tracking-tighter uppercase">
            Faisal<span className="text-primary-glow">.</span>Rasaq
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative py-1 ${
                activeSection === link.id ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-glow transition-all duration-500 ${
                activeSection === link.id ? 'w-full' : 'w-0'
              }`} />
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            download 
            className="ml-4 px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-primary-glow hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-white/5"
          >
            Resume
          </a>
        </div>

        {/* Burger Button */}
        <button className="md:hidden flex flex-col gap-1.5 z-120 p-2" onClick={() => setIsOpen(!isOpen)}>
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </div>

      {/* Modern Overlay */}
      <div className={`fixed inset-0 h-screen w-screen bg-black transition-all duration-500 ease-in-out z-110 flex flex-col items-center justify-center ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold uppercase tracking-[0.5em] transition-all duration-300 ${
                activeSection === link.id ? 'text-primary-glow scale-110' : 'text-white/30'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-8 h-px bg-white/10 my-4" />
          
          <a 
            href="/resume.pdf"
            download
            className="text-[10px] font-black text-white uppercase tracking-[0.3em] px-8 py-4 border border-white/20 rounded-full active:scale-95 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;