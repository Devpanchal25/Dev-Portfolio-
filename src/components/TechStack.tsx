import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Smartphone, Globe, Wrench, BrainCircuit, Sparkles } from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'android' | 'languages' | 'web' | 'tools' | 'concepts'>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'android', name: 'Android SDK', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'languages', name: 'Languages', icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'web', name: 'Web Frameworks', icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'tools', name: 'Tools & IDES', icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'concepts', name: 'Concepts & DBs', icon: <BrainCircuit className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'android': return 'border-brand-green/30 text-brand-green bg-brand-green/5';
      case 'languages': return 'border-brand-blue/30 text-brand-blue bg-brand-blue/5';
      case 'web': return 'border-orange-500/30 text-orange-400 bg-orange-500/5';
      case 'tools': return 'border-teal-500/30 text-teal-400 bg-teal-500/5';
      case 'concepts': return 'border-purple-500/30 text-purple-400 bg-purple-500/5';
      default: return 'border-zinc-800 text-zinc-400';
    }
  };

  const getProficiencyStyle = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-brand-green/10 text-brand-green border-brand-green/20';
      case 'Advanced': return 'bg-brand-blue/10 text-brand-blue border-brand-blue/20';
      case 'Intermediate': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-zinc-800/40 text-zinc-400 border-zinc-700/30';
    }
  };

  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background visual asset */}
      <div className="absolute left-1/4 bottom-1/4 w-[300px] aspect-square bg-brand-green/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <BrainCircuit className="w-3.5 h-3.5 text-brand-green" /> Skills Radar
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Comprehensive Tech Stack
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg">
            A granular overview of frameworks, languages, databases, and architectural structures that I actively work with.
          </p>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-brand-green text-black border-brand-green font-semibold shadow-lg shadow-brand-green/15 scale-[1.02]'
                  : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className={`p-3.5 sm:p-4 bg-zinc-900/40 rounded-xl border flex flex-col justify-between gap-3.5 group hover:bg-zinc-900/80 hover:-translate-y-0.5 transition-all duration-200 shadow-sm ${getCategoryColor(skill.category)}`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-white tracking-tight text-xs sm:text-sm group-hover:text-brand-green transition-colors duration-150">
                    {skill.name}
                  </span>
                  
                  {/* Small category tag */}
                  <span className="text-[8px] uppercase tracking-wider opacity-40 font-mono">
                    {skill.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  {/* Proficiency pills */}
                  <span className={`px-2 py-0.5 rounded text-[8.5px] font-bold tracking-wider uppercase border ${getProficiencyStyle(skill.level)}`}>
                    {skill.level}
                  </span>

                  {/* Micro aesthetic dots */}
                  <div className="flex gap-1">
                    <span className={`w-1 h-1 rounded-full ${skill.level === 'Expert' ? 'bg-brand-green' : skill.level === 'Advanced' ? 'bg-brand-blue' : 'bg-purple-400'}`}></span>
                    <span className={`w-1 h-1 rounded-full ${skill.level === 'Expert' || skill.level === 'Advanced' ? 'bg-brand-green/40' : 'bg-zinc-800'}`}></span>
                    <span className={`w-1 h-1 rounded-full ${skill.level === 'Expert' ? 'bg-brand-green/20' : 'bg-zinc-800'}`}></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Concept / Architecture Spotlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-zinc-900 pt-16">
          <div className="p-5 bg-zinc-900/20 border border-zinc-900 rounded-2xl flex flex-col gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/10 flex items-center justify-center text-brand-green text-xs font-mono font-bold">
              01
            </span>
            <h4 className="text-sm font-semibold text-white">MVVM & StateFlow</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Adhering tightly to native Android guidelines. Consistently separating views and logic with clean ViewModels, emitting immutable data flows to Compose layers via StateFlow/Flow.
            </p>
          </div>

          <div className="p-5 bg-zinc-900/20 border border-zinc-900 rounded-2xl flex flex-col gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/10 flex items-center justify-center text-brand-blue text-xs font-mono font-bold">
              02
            </span>
            <h4 className="text-sm font-semibold text-white">Dagger Hilt DI</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Establishing rock-solid DI structures to keep codebases modular, decoupling interface definitions from client implementations to build mockable, scalable test-driven architectures.
            </p>
          </div>

          <div className="p-5 bg-zinc-900/20 border border-zinc-900 rounded-2xl flex flex-col gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-purple-400 text-xs font-mono font-bold">
              03
            </span>
            <h4 className="text-sm font-semibold text-white">Room DB Local Caching</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Implementing offline-first capabilities using Room DB with SQL SQLite, keeping applications stable, fast, and secure by caching remote payload responses seamlessly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
