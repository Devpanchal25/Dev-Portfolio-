import { motion } from 'motion/react';
import { Calendar, Briefcase, MapPin, Building2, CheckCircle2, Award } from 'lucide-react';
import { internships } from '../data';

export default function Internships() {
  return (
    <section id="internships" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background visual details */}
      <div className="absolute left-1/3 top-1/3 w-[300px] aspect-square bg-purple-500/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-brand-green" /> Professional Timeline
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Internships & Experience
          </h2>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        {/* Timeline Line Grid */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 flex flex-col gap-12 sm:gap-16">
          
          {internships.map((intern, idx) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Pulsing Connector Node */}
              <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center group-hover:border-brand-green transition-colors duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-brand-green transition-colors duration-300"></div>
              </div>

              {/* Card container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/85 hover:border-zinc-700/60 transition-all duration-300 shadow-sm relative overflow-hidden hover:-translate-y-0.5">
                
                {/* Visual Accent gradient bar on the side */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  idx === 0 ? 'bg-gradient-to-b from-brand-green to-emerald-600' : 'bg-gradient-to-b from-brand-blue to-purple-500'
                }`}></div>

                {/* Header Information Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5 border-b border-zinc-900 pb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform shadow-inner">
                      <Building2 className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-brand-green transition-colors leading-tight">
                        {intern.role}
                      </h3>
                      <span className="text-zinc-400 font-medium text-xs block mt-1">
                        {intern.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 md:gap-1.5 text-xs text-zinc-400 font-mono sm:items-center md:items-end">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                      {intern.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                      {intern.location}
                    </span>
                  </div>
                </div>

                {/* Bullets text details */}
                <div className="flex flex-col gap-3.5">
                  <ul className="flex flex-col gap-3">
                    {intern.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed text-justify">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Tech Stack list */}
                <div className="mt-6 pt-5 border-t border-zinc-900/60 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mr-2">Key Focus:</span>
                  {intern.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
