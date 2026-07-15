import { motion } from 'motion/react';
import { Github, ExternalLink, Code, Smartphone, Database, Scale, CloudSun, Briefcase, Bot } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'skycast':
        return <CloudSun className="w-10 h-10 text-sky-400" />;
      case 'employee-tracker':
        return <Briefcase className="w-10 h-10 text-emerald-400" />;
      case 'justicia-ai':
        return <Bot className="w-10 h-10 text-purple-400" />;
      default:
        return <Code className="w-10 h-10 text-brand-green" />;
    }
  };

  // Beautiful inline CSS UI mockups to replace ugly static stock photos
  const renderMockup = (id: string) => {
    switch (id) {
      case 'skycast':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-sky-950/40 to-indigo-950/20 relative flex flex-col justify-between p-4 font-sans select-none overflow-hidden">
            {/* Ambient cloud animation */}
            <div className="absolute -right-6 top-4 w-28 h-28 bg-sky-400/10 rounded-full blur-2xl"></div>
            
            {/* Header */}
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span className="font-semibold tracking-wider font-mono">SKYCAST WEATHER</span>
              <span className="bg-sky-500/15 text-sky-400 px-2 py-0.5 rounded-full text-[9px] font-bold">LIVE API</span>
            </div>

            {/* Core Stats */}
            <div className="flex items-center justify-between my-auto">
              <div>
                <span className="text-3xl font-extrabold text-white">34°C</span>
                <span className="text-zinc-300 text-xs font-semibold block mt-1">Sunny & Warm</span>
                <span className="text-zinc-500 text-[10px] block font-mono">Vadodara, India</span>
              </div>
              <div className="text-center flex flex-col items-center">
                <CloudSun className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)] animate-pulse" />
              </div>
            </div>

            {/* Weekly Forecast Blocks */}
            <div className="grid grid-cols-4 gap-1.5 mt-2">
              {['Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-1.5 rounded-lg text-center">
                  <span className="text-[9px] text-zinc-400 block">{day}</span>
                  <span className="text-white text-[10px] font-bold block mt-0.5">{32 - idx}°</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'employee-tracker':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-emerald-950/30 to-zinc-950 relative flex flex-col justify-between p-4 font-sans select-none overflow-hidden">
            <div className="absolute -left-6 bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
            
            {/* Header */}
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span className="font-semibold font-mono uppercase tracking-wider">TRACKEE RECORD ENGINE</span>
              <span className="bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full text-[9px] font-bold">ROOM SQL</span>
            </div>

            {/* Active records */}
            <div className="my-auto flex flex-col gap-1.5 mt-2">
              <div className="bg-zinc-900/80 border border-zinc-800 p-2 rounded-xl flex items-center justify-between text-[11px]">
                <div>
                  <span className="font-bold text-white block">Amit Sharma</span>
                  <span className="text-zinc-500 text-[9px]">DI Hilt setup</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-[8px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">COMPLETED</span>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 p-2 rounded-xl flex items-center justify-between text-[11px]">
                <div>
                  <span className="font-bold text-white block">Priya Patel</span>
                  <span className="text-zinc-500 text-[9px]">Material 3 Design Layout</span>
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-[8px] font-bold px-1.5 py-0.5 rounded border border-blue-500/20">ACTIVE</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex justify-between items-center border-t border-zinc-900 pt-2 text-[10px]">
              <span className="text-zinc-500">Database Status: <span className="text-emerald-400 font-bold font-mono">CONNECTED</span></span>
              <span className="text-zinc-500">Total Entries: <span className="text-white font-bold">12</span></span>
            </div>
          </div>
        );

      case 'justicia-ai':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-purple-950/30 to-zinc-950 relative flex flex-col justify-between p-4 font-sans select-none overflow-hidden">
            <div className="absolute right-4 bottom-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
            
            {/* Header */}
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span className="font-semibold font-mono uppercase tracking-wider">JUSTICIA AI CLIENT</span>
              <span className="bg-purple-500/15 text-purple-400 px-2 py-0.5 rounded-full text-[9px] font-bold">NLP BOT</span>
            </div>

            {/* Chat Sim */}
            <div className="my-auto flex flex-col gap-2 mt-3 text-[10.5px]">
              <div className="bg-zinc-900/80 border border-zinc-800 p-2 rounded-xl rounded-tl-none self-start max-w-[85%] text-zinc-300">
                What is the Consumer Protection Act?
              </div>
              <div className="bg-purple-900/30 border border-purple-500/10 p-2 rounded-xl rounded-tr-none self-end max-w-[85%] text-zinc-200">
                Protects buyers against hazardous products and mandates fast-track grievance...
              </div>
            </div>

            {/* Status strip */}
            <div className="text-[9px] text-zinc-500 flex items-center justify-between border-t border-zinc-900 pt-1.5">
              <span>Model: <span className="text-purple-400 font-mono font-bold">Justicia-NLP-V1</span></span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></span> AI Active</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background glow overlay */}
      <div className="absolute right-10 bottom-1/4 w-[350px] aspect-square bg-brand-blue/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-brand-green" /> Projects Showcase
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Custom Applications Build
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg">
            A showcase of production-ready mobile applications and intelligent agents that I have designed, compiled, and deployed.
          </p>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel border border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-700/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Visual Custom Mockup Header */}
                <div className="border-b border-zinc-900 bg-zinc-950">
                  {renderMockup(project.id)}
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col gap-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:scale-105 transition-transform">
                      {getProjectIcon(project.id)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-brand-green transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed text-justify mt-1">
                    {project.description}
                  </p>

                  {/* Bullet points summary details */}
                  <ul className="text-[11.5px] text-zinc-500 flex flex-col gap-1.5 list-disc pl-4 border-t border-zinc-900/60 pt-3 mt-1">
                    {project.details.slice(0, 2).map((det, index) => (
                      <li key={index} className="leading-normal">{det}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Badges & Actions Footer */}
              <div className="px-6 pb-6 pt-3 flex flex-col gap-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800/60 text-zinc-400 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-0.5 rounded-md bg-brand-green/5 border border-brand-green/10 text-brand-green text-[10px] font-mono">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Links row */}
                <div className="flex items-center gap-3 border-t border-zinc-900 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-200 border border-zinc-800 rounded-xl transition-all hover:scale-[1.02] focus:outline-none"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>

                  {/* Live Playground Anchor - Links to Hero phone simulator */}
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-brand-green/10 hover:bg-brand-green/20 text-xs font-semibold text-brand-green border border-brand-green/20 rounded-xl transition-all hover:scale-[1.02] focus:outline-none"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Run Simulator</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
