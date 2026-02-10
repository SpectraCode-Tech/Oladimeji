import React from 'react';

const ProjectCard = ({ title, tags = [], description, image, liveLink = "#", codeLink = "#" }) => (
  /* 1. Adjusted max-w for better proportions; added a slight shadow for depth */
  <div className="group relative flex flex-col h-full w-full max-w-85 sm:max-w-full mx-auto bg-card-bg/20 backdrop-blur-md border border-border-subtle rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary-glow/40 hover:-translate-y-1.5 cursor-pointer shadow-lg">
    
    {/* Image Container */}
    <div className="relative aspect-video overflow-hidden bg-slate-800">
      <img 
        src={image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800"} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-linear-to-t from-main-bg via-transparent to-transparent opacity-80" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      {/* Title: Increased to text-lg (18px) on mobile and text-xl (20px) on desktop */}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors duration-300 leading-tight line-clamp-1">
        {title}
      </h3>
      
      {/* Description: Increased to text-sm (14px) for baseline readability */}
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-5">
        {description}
      </p>

      {/* Tags: Bumped to text-xs (12px) and increased padding for better touch targets */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="text-[10px] sm:text-xs font-semibold py-1 px-2.5 bg-white/5 border border-white/10 rounded-md text-slate-300 uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Dual Action Buttons: Increased to text-xs (12px) with bolder font weight */}
      <div className="mt-auto pt-2 flex gap-3">
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-primary-glow hover:text-white transition-all duration-300 group/btn"
        >
          <span>Live Demo</span>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>

        <a 
          href={codeLink} 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>Source</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;