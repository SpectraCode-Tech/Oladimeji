import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    { title: "E-Commerce Platform", tags: ["React", "Node Js"], description: "A high-scale retail platform with real-time inventory tracking.", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "Analytics Dashboard", tags: ["D3.js", "Firebase"], description: "Visualizing complex data sets into simple, actionable insights.", image: "https://images.unsplash.com/photo-1551288049-bbda38656ad1?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "Social Connect", tags: ["Next.js", "GraphQL"], description: "Full-featured social network with instant messaging capabilities.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "AI Feedback Loop", tags: ["Python", "React"], description: "Automated sentiment analysis for customer support tickets.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "Smart Home Hub", tags: ["IoT", "WebSockets"], description: "Centralized control for smart devices with custom routines.", image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "Learning Platform", tags: ["Typescript", "SQL"], description: "Gamified educational portal with progress tracking.", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "Crypto Wallet", tags: ["Solidity", "Web3"], description: "Secure, non-custodial wallet interface for assets.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800", liveLink: "#", codeLink: "#" },
    { title: "Portfolio V3", tags: ["Three.js", "GLSL"], description: "An immersive 3D portfolio experience with shaders.", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800", liveLink: "#", codeLink: "#" },
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
            Featured <span className="text-slate-500 not-italic">Works</span>
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