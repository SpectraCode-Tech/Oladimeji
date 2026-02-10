import React from 'react'

const Experience = () => {
  const jobs = [
    {
      company: "Freelancer",
      role: "Fullstack Developer",
      period: "2021 — Present",
      desc: "Architecting scalable systems and performance optimization for high-traffic platforms.",
      skills: ["React", "Node Js", "Django",]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            My <span className="text-primary-glow">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-primary-glow to-secondary-glow mx-auto rounded-full" />
        </div>
        
        <div className="relative">
          {/* Vertical Timeline Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-linear-to-b from-transparent via-border-subtle to-transparent" />

          {jobs.map((job, index) => (
            <div key={index} className="mb-16 last:mb-0 relative group">
              
              {/* Animated Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                <div className="h-3 w-3 rounded-full bg-main-bg border-2 border-primary-glow shadow-[0_0_15px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-transform duration-300" />
              </div>
              
              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:text-right'}`}>
                <div className="relative p-6 rounded-2xl bg-card-bg/20 backdrop-blur-xl border border-border-subtle hover:border-primary-glow/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-xl hover:shadow-glow-purple/10">
                  
                  {/* Period Tag */}
                  <span className="inline-block text-[10px] font-bold tracking-widest text-primary-glow uppercase mb-3 bg-primary-glow/10 px-2 py-1 rounded">
                    {job.period}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                    {job.role}
                  </h3>
                  
                  <p className="text-slate-300 font-semibold mb-3 tracking-wide">{job.company}</p>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {job.desc}
                  </p>

                  {/* Micro-skills tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {job.skills.map(skill => (
                      <span key={skill} className="text-[10px] text-slate-500 font-mono border border-border-subtle px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;