import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, Calendar, Building2, CheckCircle2, X, ShieldCheck, ExternalLink, Sparkles, Smartphone } from 'lucide-react';
import { certificates, personalInfo } from '../data';
import { Certificate } from '../types';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background visual highlight */}
      <div className="absolute left-1/3 top-1/4 w-[280px] aspect-square bg-brand-green/5 blur-[95px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-brand-green" /> Verified Credentials
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Internships & Professional Certifications
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl text-center mt-2">
            Verified industry training certifications in Android development, AI, and Machine Learning.
          </p>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-col gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/85 hover:border-zinc-700/60 transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5"
            >
              {/* Subtle background shadow text */}
              <div className="absolute right-[-5%] bottom-[-10%] text-zinc-800/10 pointer-events-none uppercase font-black text-6xl tracking-widest select-none font-display">
                {cert.issuer.includes('MindMatrix') ? 'ANDROID' : 'IBM AI'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Badge Preview Container */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-zinc-900/60 rounded-xl border border-zinc-800 text-center relative overflow-hidden">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    cert.issuer.includes('MindMatrix')
                      ? 'bg-brand-green/10 border border-brand-green/30 text-brand-green'
                      : 'bg-brand-blue/10 border border-brand-blue/30 text-brand-blue'
                  }`}>
                    {cert.issuer.includes('MindMatrix') ? (
                      <Smartphone className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>
                  
                  <h4 className="text-xs font-bold font-display text-white uppercase tracking-wider">
                    {cert.issuer}
                  </h4>
                  {cert.partner && (
                    <span className="text-[10px] text-zinc-400 font-mono mt-1 max-w-[200px] leading-tight">
                      {cert.partner}
                    </span>
                  )}
                  <span className="text-[10px] text-zinc-500 font-mono mt-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-600" /> {cert.date}
                  </span>
                  
                  <button 
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="mt-5 flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-semibold rounded-lg border border-zinc-700 transition-colors focus:outline-none cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-brand-green" /> Preview Certificate
                  </button>
                </div>

                {/* Right Side: Certificate Content */}
                <div className="md:col-span-8 flex flex-col justify-between h-full gap-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-zinc-900 pb-3 mb-3">
                      <div>
                        <span className="text-[10px] font-mono text-brand-green uppercase tracking-wider font-semibold block mb-0.5">
                          {cert.issuer.includes('MindMatrix') ? '★ GTU Partner Internship' : '★ Capstone Certification'}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-brand-green transition-colors leading-tight">
                          {cert.title}
                        </h3>
                        <span className="text-zinc-400 font-semibold text-xs mt-0.5 block">
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="text-left sm:text-right font-mono text-[10px] text-zinc-500 shrink-0">
                        ID: {cert.credentialId}
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2 mt-3">
                      {cert.bullets?.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Seal & Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-900">
                    <div className="flex items-center gap-2 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] font-bold font-mono tracking-wider text-emerald-400 uppercase">
                        {cert.issuer.includes('MindMatrix') ? 'VERIFIED BY MINDMATRIX & GTU' : 'VERIFIED BY IBM ACADEMY'}
                      </span>
                    </div>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 text-brand-green" />
                        <span>Verify Online</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* HIGH FIDELITY DYNAMIC CERTIFICATE OVERLAY MODAL */}
        <AnimatePresence>
          {activeCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
            >
              <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveCert(null)}></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl bg-white text-zinc-900 border border-zinc-200 shadow-2xl p-6 sm:p-10 rounded-2xl flex flex-col gap-5 z-10 overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 p-1.5 hover:bg-zinc-100 rounded-full text-zinc-400 hover:text-zinc-900 transition-colors focus:outline-none cursor-pointer z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Classic Certificate Double-Border Framing */}
                <div className="absolute inset-3 border border-zinc-300 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-4 border-2 border-zinc-950 rounded-md pointer-events-none"></div>

                {/* Certificate Core Content Layout */}
                <div className="flex flex-col items-center text-center gap-3 relative z-10 pt-3 pb-1">
                  <span className="text-zinc-400 text-[10px] tracking-widest font-mono uppercase font-semibold">
                    OFFICIAL INTERNSHIP COMPLETION LETTER
                  </span>
                  
                  {/* Brand Header */}
                  <div className="flex items-center gap-2 border-b border-zinc-900 pb-2 w-full max-w-sm justify-center">
                    <span className="font-extrabold text-base tracking-widest uppercase font-display text-zinc-950">
                      {activeCert.issuer}
                    </span>
                  </div>

                  {activeCert.partner && (
                    <span className="text-[11px] text-zinc-500 font-mono -mt-1">
                      {activeCert.partner}
                    </span>
                  )}

                  <p className="text-zinc-500 font-sans text-xs italic mt-1">
                    This is to proudly certify that
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight font-display uppercase border-b border-zinc-300 pb-1.5 px-6">
                    {personalInfo.name}
                  </h3>

                  {activeCert.enrollmentNo && (
                    <div className="flex flex-wrap justify-center gap-4 text-[11px] font-mono text-zinc-600 bg-zinc-100 px-3 py-1 rounded-md">
                      <span>Enrollment: <strong>{activeCert.enrollmentNo}</strong></span>
                      {activeCert.collegeName && (
                        <span>College: <strong>{activeCert.collegeName}</strong></span>
                      )}
                    </div>
                  )}

                  <p className="text-zinc-600 text-xs max-w-md leading-relaxed mt-1">
                    has successfully completed the hands-on industry internship program titled
                  </p>

                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wider font-display bg-zinc-100 py-2 px-4 rounded-lg border border-zinc-200">
                    "{activeCert.title}"
                  </h4>

                  <p className="text-zinc-500 text-[11px] leading-relaxed max-w-md mt-1">
                    {activeCert.period ? `Duration: ${activeCert.period}. ` : ''}
                    Covers application development with Kotlin, Jetpack Compose, Google AI Studio, Google Cloud Labs, and Firebase integration workflows.
                  </p>

                  <div className="grid grid-cols-2 gap-6 w-full max-w-md border-t border-zinc-200 pt-4 mt-2 text-left">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-zinc-400 text-[9px] font-mono uppercase">Issue Date</span>
                      <span className="text-zinc-800 text-xs font-semibold font-mono">{activeCert.date}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 text-right">
                      <span className="text-zinc-400 text-[9px] font-mono uppercase">Certificate ID</span>
                      <span className="text-zinc-800 text-xs font-semibold font-mono">{activeCert.credentialId}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-zinc-100 pt-4 w-full justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Verification Status: <span className="text-emerald-600 font-bold">100% VERIFIED</span>
                    </span>
                    <button 
                      type="button"
                      onClick={() => setActiveCert(null)}
                      className="text-xs font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 py-1.5 px-4 rounded-lg transition-colors focus:outline-none cursor-pointer"
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

