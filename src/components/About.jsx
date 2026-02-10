import React from 'react';

const About = () => {
  const stats = [
    { label: 'Experience', value: '5 Years' },
    { label: 'Projects', value: '50+' },
    { label: 'Clients', value: '20+' },
    { label: 'Availability', value: 'Freelance / Remote' }, // Updated
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Visual/Profile Terminal */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-glow/10 rounded-3xl blur-2xl group-hover:bg-primary-glow/20 transition-all duration-700" />
          
          <div className="relative bg-card-bg/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <span className="ml-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">profile.json</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-[11px] md:text-xs leading-relaxed">
              <p className="text-primary-glow">const <span className="text-white">developer</span> = {'{'}</p>
              <div className="pl-4 space-y-1">
                <p><span className="text-slate-500">name:</span> <span className="text-secondary-glow">'Faisal Oladimeji Rasaq'</span>,</p>
                <p><span className="text-slate-500">role:</span> <span className="text-secondary-glow">'Fullstack Web Developer'</span>,</p>
                <p><span className="text-slate-500">focus:</span> <span className="text-secondary-glow">['Scalability', 'Performance', 'UX']</span>,</p>
                <p><span className="text-slate-500">status:</span> <span className="text-secondary-glow">'Freelance'</span>,</p>
                <p><span className="text-slate-500">location:</span> <span className="text-secondary-glow">'Worldwide / Remote'</span></p>
              </div>
              <p className="text-primary-glow">{'}'};</p>
              
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-slate-400 italic">// Currently building high-performance web engines and modern digital experiences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-glow mb-4">
              Overview
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
              Crafting digital tools with <span className="text-slate-500">precision & purpose.</span>
            </h3>
          </div>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            I specialize in bridging the gap between complex backend logic and intuitive frontend design. My approach is centered on writing clean, maintainable code that doesn't just work—it scales.
          </p>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border border-white/5 bg-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;