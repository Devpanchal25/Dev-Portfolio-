import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, CheckCircle2, Sparkles, Smartphone, Code } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

// Fast, zero-re-render GPU cursor glow
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let requestRef: number = 0;
    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!requestRef) {
        requestRef = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(61, 220, 132, 0.08), transparent 80%)`;
          }
          requestRef = 0;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className="hidden md:block pointer-events-none fixed inset-0 z-0 select-none opacity-45 transition-opacity duration-300"
    />
  );
}

export default function App() {
  // Page Loading state (Simulates specialized Android apk compilation)
  const [loading, setLoading] = useState(true);
  const [loadingLogs, setLoadingLogs] = useState<string[]>([]);
  
  // Theme state: default to dark, support light
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  // Modals state
  const [resumeOpen, setResumeOpen] = useState(false);

  // Fast terminal compilation logs simulator
  useEffect(() => {
    const logs = [
      'Initializing Android Runtime environment (OS 14)...',
      'Mounting Virtual Machine (ART) on port 3000...',
      'Resolving Kotlin compiler and standard library dependencies...',
      'Injecting Dagger Hilt modules and MVVM state flows...',
      'Compiling Panchal_Dev_Portfolio.apk [100% completed]...',
      'Successfully compiled! Booting Compose Workspace UI...'
    ];

    let currentLogIndex = 0;
    const addLog = () => {
      if (currentLogIndex < logs.length) {
        setLoadingLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
        setTimeout(addLog, 45);
      } else {
        // Fast dismiss for instant site opening
        setTimeout(() => setLoading(false), 120);
      }
    };

    addLog();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-zinc-950 text-zinc-100 selection:bg-brand-green/30 selection:text-brand-green' 
        : 'bg-zinc-50 text-zinc-900 selection:bg-brand-green/40 selection:text-black'
    }`}>
      
      {/* Loading compilation terminal overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-101 bg-zinc-950 flex flex-col items-center justify-center p-4 text-zinc-200 select-none font-mono"
          >
            <div className="w-full max-w-lg bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col gap-5">
              
              {/* Header decorations */}
              <div className="flex items-center justify-between border-b border-zinc-850 pb-3 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green/80"></span>
                </div>
                <span className="text-[10px] tracking-wider text-brand-green uppercase font-bold flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 inline text-brand-green" /> Gradle Build Terminal
                </span>
              </div>

              {/* Simulation Logging space */}
              <div className="flex-1 flex flex-col gap-2.5 min-h-[160px] text-[11px] text-zinc-400">
                {loadingLogs.map((log, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span className="text-zinc-600 select-none">$&gt;</span>
                    <span className={index === loadingLogs.length - 1 ? 'text-brand-green font-bold' : ''}>
                      {log}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between border-t border-zinc-850 pt-4 text-xs">
                <span className="text-zinc-500 flex items-center gap-1.5 font-sans">
                  <Cpu className="w-3.5 h-3.5 animate-spin text-brand-green" /> Running Gradle Tasks...
                </span>
                <span className="text-brand-green font-bold font-mono tracking-wider">
                  {Math.min(100, Math.floor((loadingLogs.length / 6) * 100))}%
                </span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Layout - Rendered only when loaded */}
      {!loading && (
        <div className={`flex flex-col min-h-screen relative overflow-hidden ${theme === 'light' ? 'light-mode-override' : ''}`}>
          
          {/* Custom Cursor Glow (Desktop only, zero re-renders) */}
          <CursorGlow />

          {/* Nav header */}
          <Navbar 
            onOpenResume={() => setResumeOpen(true)} 
            theme={theme} 
            onToggleTheme={toggleTheme} 
          />

          {/* Theme custom styles inject to body if light mode to guarantee visual quality */}
          {theme === 'light' && (
            <style>{`
              .light-mode-override {
                background-color: #f4f4f5 !important;
                color: #18181b !important;
              }
              .light-mode-override section {
                background-color: #ffffff !important;
                color: #18181b !important;
                border-color: #e4e4e7 !important;
              }
              .light-mode-override .glass-panel {
                background: rgba(255, 255, 255, 0.75) !important;
                border-color: rgba(0, 0, 0, 0.08) !important;
                color: #18181b !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.03) !important;
              }
              .light-mode-override h1, 
              .light-mode-override h2, 
              .light-mode-override h3, 
              .light-mode-override h4 {
                color: #09090b !important;
              }
              .light-mode-override p,
              .light-mode-override span:not(.text-brand-green):not(.no-light-override):not(.bg-brand-green),
              .light-mode-override li {
                color: #3f3f46 !important;
              }
              .light-mode-override input,
              .light-mode-override textarea {
                background-color: #ffffff !important;
                border-color: #d4d4d8 !important;
                color: #18181b !important;
              }
              .light-mode-override input:focus,
              .light-mode-override textarea:focus {
                border-color: #3DDC84 !important;
              }
              .light-mode-override .text-brand-green {
                color: #15803d !important; /* Darker green for accessibility contrast */
              }
              .light-mode-override .bg-brand-green {
                background-color: #22c55e !important;
                color: #ffffff !important;
              }
              .light-mode-override .bg-brand-green\\/20 {
                background-color: rgba(34, 197, 94, 0.1) !important;
                color: #15803d !important;
              }
              .light-mode-override .text-zinc-500 {
                color: #71717a !important;
              }
              .light-mode-override .text-zinc-400 {
                color: #52525b !important;
              }
              .light-mode-override .text-zinc-200 {
                color: #27272a !important;
              }
              .light-mode-override .border-zinc-800 {
                border-color: #e4e4e7 !important;
              }
              .light-mode-override .border-zinc-900 {
                border-color: #f4f4f5 !important;
              }
              .light-mode-override .bg-zinc-900\\/40 {
                background-color: #f4f4f5 !important;
                border-color: #e4e4e7 !important;
              }
              .light-mode-override .bg-zinc-900 {
                background-color: #e4e4e7 !important;
                color: #18181b !important;
                border-color: #d4d4d8 !important;
              }
              .light-mode-override .bg-zinc-950 {
                background-color: #fafafa !important;
              }
              .light-mode-override footer {
                background-color: #f4f4f5 !important;
                border-color: #e4e4e7 !important;
                color: #71717a !important;
              }
            `}</style>
          )}

          {/* Main sections */}
          <main className="flex-grow">
            <Hero onOpenResume={() => setResumeOpen(true)} theme={theme} />
            <About />
            <TechStack />
            <Projects />
            <Education />
            <Certificates />
            <Contact />
          </main>

          {/* Footer coordinates */}
          <Footer />

          {/* Resume Viewer Modal Overlay Portal */}
          <AnimatePresence>
            {resumeOpen && (
              <ResumeModal 
                isOpen={resumeOpen} 
                onClose={() => setResumeOpen(false)} 
              />
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
