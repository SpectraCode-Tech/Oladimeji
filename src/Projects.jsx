import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Bitswap from'./assets/Bitswap.png'
import Brandnest from'./assets/Brandnest.png'
import Ecosculpt from'./assets/Ecosculpt.png'
import Fnx from'./assets/Fnx.png'
import Ntff from'./assets/ntffmk.png'
import Paga from'./assets/Paga.png'
import royalfix from'./assets/royalfit.png'
import Xchange from'./assets/Xchange.png'

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    { title: "Pythagoras' Theorem Calculator", tags: ["React", "Node Js"], description: "It is a dedicated online tool specifically designed to solve problems related to the Pythagorean Theorem.", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", liveLink: "https://pythagoras-calculator-gamma.vercel.app/", codeLink: "https://github.com/SpectraCode-Tech/Pythagoras-Calculator" },
    { title: "Paga Landing Page", tags: ["Html", "Css"], description: "A premium landing page prototype designed for the fintech sector. This project focuses on high-end visual hierarchy and modern CSS techniques to establish trust and drive user sign-ups.", image: Paga, liveLink: "https://paga-one.vercel.app/", codeLink: "https://github.com/SpectraCode-Tech/Paga" },
    { title: "Dimeji Xchange", tags: ["Html", "Css"], description: "Frictionless Digital Asset Exchange UI. A conceptual storefront for digital currency trading.", image: Xchange, liveLink: "https://dimeji-xchange.vercel.app/", codeLink: "https://github.com/SpectraCode-Tech/Dimeji-Xchange" },
    { title: "FNX Investment", tags: ["Html", "Tailwind Css"], description: "Luxury Asset Management Landing Experience. A boutique investment brand concept that prioritizes a 'premium-tier' user experience.", image: Fnx, liveLink: "https://fnx-investment.vercel.app/", codeLink: "https://github.com/SpectraCode-Tech/FNX-Investment" },
    { title: "EcoSculpt", tags: ["Html", "Tailwind Css", "JavaScript"], description: "End-to-End Service Industry Marketing Engine. A comprehensive digital platform for a luxury landscaping brand.", image: Ecosculpt, liveLink: "https://eco-sculpt.vercel.app/", codeLink: "https://github.com/SpectraCode-Tech/EcoSculpt" },
    { title: "RoyalFix Mechanic", tags: ["React", "Tailwind Css", "Node", "MongoDB"], description: "A clean, grid-based landing experience for professional mechanical services.", image: royalfix, liveLink: "https://royal-fix-frontend.vercel.app/", codeLink: "https://github.com/SpectraCode-Tech/Royal-Fix--Frontend" },
    { title: "BitSwap Crypto", tags: ["Html", "Css", "Javascript", "Django"], description: "BitSwap is a cryptocurrency exchange and digital asset management platform.", image: Bitswap , liveLink: "https://bitswap.onrender.com", codeLink: "https://github.com/SpectraCode-Tech/Bitswap" },
    { title: "Nollywood Travel Festival Website", tags: ["React", "Bootstrap"], description: "A dynamic event-driven platform built to manage the global footprint of the Nollywood Travel Festival.", image: Ntff, liveLink: "https://spectracode-tech.github.io/Nollywood-Travel-Festival/", codeLink: "https://github.com/SpectraCode-Tech/Nollywood-Travel-Festival" },
    { title: "Brandnest Onboarding Site", tags: ["Html", "Tailwind Css", "Javascript"], description: "A modern website for a brand management group", image: Brandnest, liveLink: "https://spectracode-tech.github.io/BrandNest/", codeLink: "https://github.com/SpectraCode-Tech/BrandNest" },
    // { title: "Brandnest Onboarding Site", tags: ["Html", "Tailwind Css", "Javascript"], description: "A modern website for a brand management group", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800", liveLink: "https://spectracode-tech.github.io/BrandNest/", codeLink: "https://github.com/SpectraCode-Tech/SmartBuy" },
  ];

  const visibleProjects = showAll ? data : data.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* 1. Changed items-end to items-start to keep everything left-aligned 
          2. Reduced mb-16 to mb-12 for a tighter mobile look
      */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-4 md:gap-6">
        <div>
          {/* Reduced mobile text size from text-4xl to text-3xl */}
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3 md:mb-4 italic">
            My <span className="text-slate-500 not-italic">Projects</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-linear-to-r from-primary-glow to-transparent rounded-full" />
        </div>
        
        {/* 1. Removed md:text-right to keep left-aligned on all screens
            2. Reduced font size slightly for mobile (text-[11px])
        */}
        <p className="text-slate-500 text-[11px] md:text-sm font-mono max-w-xs leading-relaxed">
          A selection of projects built with modern technologies and focus on performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <div className="mt-16 md:mt-20 flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="group relative cursor-pointer px-10 py-4 bg-transparent border border-border-subtle rounded-full text-white text-xs font-black tracking-[0.3em] uppercase transition-all duration-500 hover:border-primary-glow active:scale-95"
        >
          <span className="relative z-10">{showAll ? "Show Less" : "See All Projects"}</span>
          <div className="absolute inset-0 bg-primary-glow/5 opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
        </button>
      </div>
    </section>
  );
};

export default Projects;