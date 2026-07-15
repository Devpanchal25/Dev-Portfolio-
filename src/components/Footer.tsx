import { Heart, Github, Linkedin, Smartphone, Calendar, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-500 font-mono text-[11px] relative overflow-hidden print:hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 font-bold text-white text-xs tracking-tight">
            <span>{personalInfo.firstName}</span>
            <span className="text-brand-green">.dev</span>
            <span className="text-zinc-700">•</span>
            <span className="text-zinc-500 font-normal text-[10px]">Android Portfolio</span>
          </div>
          <p className="text-zinc-600 font-mono text-[10px]">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Interactive technology stack attribution tags */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-600">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse inline" />
          <span>using</span>
          <span className="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">React 19</span>
          <span className="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">TypeScript</span>
          <span className="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">Tailwind CSS</span>
          <span className="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">Motion</span>
        </div>

        {/* Right Side: Back to Top & Profile quicklinks */}
        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            referrerPolicy="no-referrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-800">|</span>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            referrerPolicy="no-referrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-800">|</span>
          
          {/* Back to top button */}
          <button
            onClick={handleScrollTop}
            className="p-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
