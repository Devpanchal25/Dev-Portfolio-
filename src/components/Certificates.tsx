import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, Calendar, Building2, CheckCircle2, X, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { certificates, personalInfo } from '../data';

export default function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const cert = certificates[0]; // IBM SkillsBuild Certificate

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background visual highlight */}
      <div className="absolute left-1/3 top-1/4 w-[250px] aspect-square bg-brand-blue/5 blur-[85px] pointer-events-none rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-brand-green" /> Verified Credentials
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Professional Certifications
          </h2>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        {/* Certificate Card layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 sm:p-10 rounded-2xl border border-zinc-800/85 hover:border-zinc-700/60 transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5"
        >
          {/* Subtle logo background shadow */}
          <div className="absolute right-[-10%] bottom-[-10%] text-zinc-800/10 pointer-events-none uppercase font-black text-6xl tracking-widest select-none font-display">
            IBM AI
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Brief Iconography / Certificate cover preview */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-zinc-900/60 rounded-xl border border-zinc-800 text-center relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-brand-blue" />
              </div>
              <h4 className="text-xs font-bold font-display text-white uppercase tracking-wider">IBM SKILLSBUILD</h4>
              <span className="text-[10px] text-zinc-500 font-mono mt-1">July 2025</span>
              
              <button 
                onClick={() => setModalOpen(true)}
                className="mt-6 flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-semibold rounded-lg border border-zinc-700 transition-colors focus:outline-none cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-brand-green" /> Preview Credentials
              </button>
            </div>

            {/* Right Side: Details & Highlights */}
            <div className="md:col-span-8 flex flex-col justify-between h-full gap-5">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-zinc-900 pb-4 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-brand-green transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <span className="text-zinc-400 font-semibold text-xs mt-1 block">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="text-left sm:text-right font-mono text-[10px] text-zinc-500">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                  Completed a comprehensive collaborative capstone project integrating Natural Language Processing concepts, prompt parsing frameworks, and python automated pipeline models to deliver the "Justicia AI" legal assistant app.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {cert.bullets?.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-zinc-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Badge seal */}
              <div className="flex items-center gap-2 bg-emerald-950/20 border border-emerald-500/15 p-3 rounded-xl max-w-fit mt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-bold font-mono tracking-wider text-emerald-400 uppercase">
                  VERIFIED BY IBM ACADEMY PARTNERS
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* HIGH FIDELITY CERTIFICATE OVERLAY MODAL */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
            >
              <div className="absolute inset-0 cursor-pointer" onClick={() => setModalOpen(false)}></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl bg-white text-zinc-900 border border-zinc-200 shadow-2xl p-8 sm:p-12 rounded-2xl flex flex-col gap-6 z-10 relative overflow-hidden"
              >
                {/* Close Button top corner */}
                <button 
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 hover:bg-zinc-100 rounded-full text-zinc-400 hover:text-zinc-900 transition-colors focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Classic Certificate Border Framing */}
                <div className="absolute inset-4 border border-zinc-300 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-5 border-2 border-zinc-950 rounded-md pointer-events-none"></div>

                {/* Certificate Core Content Layout */}
                <div className="flex flex-col items-center text-center gap-4 relative z-10 pt-4 pb-2">
                  <span className="text-zinc-400 text-[10px] tracking-widest font-mono uppercase">INTERNSHIP CREDENTIAL</span>
                  
                  {/* IBM SkillsBuild Header Brand */}
                  <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 w-full max-w-xs justify-center">
                    <span className="font-extrabold text-sm tracking-widest uppercase font-display text-zinc-950">IBM SkillsBuild</span>
                  </div>

                  <p className="text-zinc-500 font-sans text-xs italic mt-2">
                    This is to proudly certify that
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-display uppercase border-b border-zinc-200 pb-2 px-6">
                    {personalInfo.name}
                  </h3>

                  <p className="text-zinc-600 text-xs max-w-md leading-relaxed mt-1">
                    has successfully completed the intensive professional credentials course and capstone deployment during the
                  </p>

                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider font-display bg-zinc-100 py-1.5 px-4 rounded-lg">
                    Artificial Intelligence Internship Program
                  </h4>

                  <p className="text-zinc-500 text-[11px] leading-relaxed max-w-sm mt-1">
                    Facilitated by <strong>CSRBOX (CL Infotech partners)</strong>. The recipient successfully researched and built <strong>"Justicia AI"</strong>, showing proficiency in NLP Models, Prompt Chains, and Automation.
                  </p>

                  <div className="grid grid-cols-2 gap-8 w-full max-w-md border-t border-zinc-200 pt-6 mt-4 text-left">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-zinc-400 text-[9px] font-mono uppercase">Award Date</span>
                      <span className="text-zinc-800 text-xs font-semibold font-mono">July 2025</span>
                    </div>
                    <div className="flex flex-col gap-0.5 text-right">
                      <span className="text-zinc-400 text-[9px] font-mono uppercase">Credential Serial</span>
                      <span className="text-zinc-800 text-xs font-semibold font-mono">{cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 border-t border-zinc-100 pt-5 w-full justify-between">
                    <span className="text-[10px] text-zinc-400 font-mono">Verify Status: <span className="text-emerald-600 font-bold">100% SECURE</span></span>
                    <button 
                      onClick={() => setModalOpen(false)}
                      className="text-xs font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 py-1.5 px-4 rounded-lg transition-colors focus:outline-none"
                    >
                      Dismiss Preview
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
