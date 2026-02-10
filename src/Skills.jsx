import React from 'react'

const Skills = () => {
  const skillGroups = [
    { category: "Frontend", skills: ["React", "Tailwind Css", "Bootstrap"], color: "from-blue-500" },
    { category: "Backend", skills: ["Node.js", "PostgreSQL", "MongoDB", "Django"], color: "from-emerald-500" },
    { category: "Tools", skills: ["Git", "Github"], color: "from-purple-500" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="group relative">
              {/* Glow backdrop */}
              <div className={`absolute -inset-px bg-linear-to-r ${group.color} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-card-bg/40 backdrop-blur-md border border-border-subtle p-8 rounded-2xl hover:border-white/20 transition-all">
                <h3 className="text-xl font-semibold text-white mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills
