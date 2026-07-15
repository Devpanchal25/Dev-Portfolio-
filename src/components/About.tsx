import { motion } from 'motion/react';
import { Award, Code2, Cpu, User, BookOpen, Lightbulb, MapPin, Milestone } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const cards = [
    {
      icon: <Award className="w-5 h-5 text-brand-green" />,
      title: 'Professional Experience',
      value: '2 Internships',
      desc: 'Android development at MindMatrix & AI focus at IBM SkillsBuild.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-brand-blue" />,
      title: 'Active Projects',
      value: '3 Apps Built',
      desc: 'Weather SDK client, Room Database performance manager & Legal AI.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: 'Expertise Tech',
      value: '30+ Technologies',
      desc: 'Kotlin expert, Jetpack Compose UI, MVVM, and Material Design 3.'
    }
  ];

  const characterBadges = [
    { icon: <BookOpen className="w-3.5 h-3.5" />, text: 'Information Technology Student' },
    { icon: <Code2 className="w-3.5 h-3.5" />, text: 'Android Core Specialist' },
    { icon: <Lightbulb className="w-3.5 h-3.5" />, text: 'Interested in AI integrations' },
    { icon: <Cpu className="w-3.5 h-3.5" />, text: 'Passionate about clean architecture' },
    { icon: <Milestone className="w-3.5 h-3.5" />, text: 'Continuous learner' }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background visual element */}
      <div className="absolute right-0 top-1/4 w-[350px] aspect-square bg-brand-blue/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-brand-green" /> Profile Narrative
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            About My Engineering Journey
          </h2>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative description */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-400">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Student of Information Technology & Android Developer.
            </h3>
            
            <p className="text-justify leading-relaxed text-sm sm:text-base">
              I am an Information Technology student and an Android Developer, deep in my element when designing fluid, performant client-side flows for the Android ecosystem. Over the course of my coursework and internships, I have focused heavily on Kotlin, Jetpack Compose, state-management frameworks, and structured architectures.
            </p>

            <p className="text-justify leading-relaxed text-sm sm:text-base">
              My core engineering focus is building modular, easily testable mobile apps. I believe a good mobile app is a blend of atomic architectures (MVVM, Hilt Dependency Injection) and absolute visual discipline (Material Design 3, micro-animations). I am also deeply interested in AI-powered native features and love learning new libraries to improve software standards.
            </p>

            {/* Structured badge chips list */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {characterBadges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 text-xs font-mono hover:border-brand-green/30 hover:bg-zinc-900 transition-colors duration-250"
                >
                  <span className="text-brand-green">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-zinc-900 pt-6">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-xs uppercase font-mono">Current Status</span>
                <span className="text-white text-sm font-semibold mt-1">Seeking Software Engineering Roles</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-zinc-500 text-xs uppercase font-mono">Located In</span>
                <span className="text-white text-sm font-semibold mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-green" /> {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics Bento grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass-panel p-5.5 rounded-2xl border border-zinc-800/80 flex items-start gap-4 hover:border-zinc-700/60 transition-all duration-300 group hover:translate-x-1"
              >
                <div className="w-11 h-11 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-md transform group-hover:scale-105 group-hover:rotate-3 transition-transform">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider block">
                    {card.title}
                  </span>
                  <span className="text-white font-bold text-lg font-display tracking-tight block mt-0.5">
                    {card.value}
                  </span>
                  <span className="text-zinc-400 text-xs mt-1 block leading-relaxed">
                    {card.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
