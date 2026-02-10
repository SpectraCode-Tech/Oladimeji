import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SpectraCode-Tech' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/faisal-rasaq-741269331' },
    { name: 'X / Twitter', href: 'https://x.com/dimejirsq' },
    { name: 'Email', href: 'mailto:dimejirsq@yahoo.com' },
  ];

  return (
    <footer className="relative py-20 px-8 md:px-12 border-t border-white/5 bg-black overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Block */}
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-xl font-black text-white tracking-tighter uppercase">
                Faisal<span className="text-primary-glow">.</span>Rasaq
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Available for freelance and remote opportunities. <br />
              Building digital experiences with precision and purpose.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary-glow transition-colors text-xs font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Status/Time Block */}
          <div className="flex flex-col justify-start">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-slate-400 font-mono tracking-tighter uppercase">Available for hire</span>
              </div>
              <div className="pt-2">
                <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-1 font-black">Local Time</p>
                <p className="text-xl font-mono text-white tracking-tighter">{time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} — Built with React & Tailwind
          </p>
          <div className="flex items-center gap-8">
             <a href="#about" className="text-slate-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Privacy</a>
             <a href="#about" className="text-slate-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;