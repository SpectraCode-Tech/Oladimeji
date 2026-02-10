import React from 'react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-mesh overflow-hidden">
      {/* Central Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-primary-glow/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary-glow/20 bg-primary-glow/5 text-primary-glow text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
          Available for Work
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
          Building digital <span className="text-slate-500">experiences</span> that matter.
        </h1>

        <p className="text-sm md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed opacity-80">
          Full-stack developer specializing in modern React interfaces and high-performance web applications.
        </p>

        {/* Changed from button to anchor tag */}
        <a 
          href="#projects"
          className="inline-block cursor-pointer px-7 py-3.5 bg-white text-black text-sm font-bold rounded-full 
          hover:bg-primary-glow hover:text-white 
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
          hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:-translate-y-1 active:scale-95"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;