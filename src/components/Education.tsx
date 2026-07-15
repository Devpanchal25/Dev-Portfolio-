import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationList } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background glow details */}
      <div className="absolute right-1/4 top-1/4 w-[280px] aspect-square bg-brand-green/5 blur-[90px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-brand-green" /> Academic Milestones
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Education Credentials
          </h2>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        {/* Credentials bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/85 hover:border-zinc-700/60 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Top Details */}
              <div>
                <div className="flex justify-between items-start gap-4 mb-5 border-b border-zinc-900 pb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-display text-white group-hover:text-brand-green transition-colors leading-tight">
                        {edu.degree}
                      </h3>
                      <span className="text-zinc-400 font-medium text-xs block mt-1">
                        {edu.field}
                      </span>
                    </div>
                  </div>

                  {/* CGPA display pill */}
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">Score</span>
                    <span className="text-brand-green font-bold text-sm sm:text-base font-mono mt-0.5">
                      {edu.cgpa} CGPA
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {edu.institution}
                  </h4>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed text-justify">
                    Rigorous curriculum focusing on Core Computer Science principles, Data Structures, Relational Database management, Web architectures, and Android mobile development.
                  </p>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="mt-6 pt-5 border-t border-zinc-900/60 flex flex-wrap justify-between items-center text-xs text-zinc-500 font-mono gap-y-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                  {edu.location}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
