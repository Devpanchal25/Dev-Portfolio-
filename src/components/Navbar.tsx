import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Compass, MessageSquare, Terminal } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { personalInfo } from '../data';

interface NavbarProps {
  onOpenResume: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenResume, theme, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Bar Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internships', href: '#internships' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 border-b print:hidden ${
          scrolled 
            ? theme === 'dark'
              ? 'bg-zinc-950/85 backdrop-blur-md border-zinc-800/80 shadow-lg'
              : 'bg-white/85 backdrop-blur-md border-zinc-200/80 shadow-md'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="h-[3px] bg-gradient-to-r from-brand-green via-brand-blue to-purple-500 origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-gradient-to-tr from-brand-green to-emerald-600 flex items-center justify-center text-zinc-950 shadow-md transform group-hover:rotate-12 transition-transform duration-300">
              <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-black stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white dark:text-white light:text-zinc-900 flex items-center gap-1.5 leading-none">
                {personalInfo.firstName}
                <span className="text-brand-green">.dev</span>
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mt-1 font-mono leading-none">
                Android & Compose
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 rounded-lg hover:bg-zinc-900/30 dark:hover:bg-zinc-900/40 light:hover:bg-zinc-100 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls Area (Theme toggle & Resume & Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-xl hover:scale-105 transition-all focus:outline-none"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-800" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-zinc-950 light:from-zinc-100 light:to-zinc-200 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 text-xs font-semibold text-white dark:text-white light:text-zinc-800 rounded-xl hover:border-brand-green/40 dark:hover:border-brand-green/40 light:hover:border-brand-green/40 hover:shadow-md hover:scale-[1.02] transition-all duration-200 focus:outline-none"
            >
              <FileText className="w-3.5 h-3.5 text-brand-green" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-xl focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-80 md:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300 print:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 bottom-0 right-0 w-72 z-85 md:hidden bg-zinc-950 dark:bg-zinc-950 light:bg-white border-l border-zinc-800 dark:border-zinc-800 light:border-zinc-200 p-6 flex flex-col justify-between transition-transform duration-300 ease-out print:hidden ${
          mobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex items-center gap-2 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-100 pb-4">
            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-zinc-950">
              <Terminal className="w-4 h-4 text-black stroke-[2.5]" />
            </div>
            <span className="font-bold text-white dark:text-white light:text-zinc-900 text-sm">
              {personalInfo.firstName}.dev
            </span>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 text-sm font-medium text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 hover:bg-zinc-900/40 dark:hover:bg-zinc-900/40 light:hover:bg-zinc-100 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pb-8">
          {/* Resume button for mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-3 bg-gradient-to-r from-brand-green to-emerald-500 text-zinc-950 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transform active:scale-95 transition-transform"
          >
            <FileText className="w-4 h-4 stroke-[2.5]" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </>
  );
}
