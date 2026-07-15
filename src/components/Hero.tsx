import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowUpRight, ArrowRight, MessageSquare, Briefcase, Github, Linkedin, Smartphone, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data';
import AndroidPhoneMockup from './AndroidPhoneMockup';

interface HeroProps {
  onOpenResume: () => void;
  theme: 'dark' | 'light';
}

export default function Hero({ onOpenResume, theme }: HeroProps) {
  const nameToType = "Panchal Dev Ghanshyambhai";
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(nameToType.slice(0, index + 1));
      index++;
      if (index >= nameToType.length) {
        clearInterval(timer);
      }
    }, 85); // elegant typing speed (85ms per character)
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const firstPart = typedText.slice(0, 11);
  const secondPart = typedText.slice(11);
  const isTypingFirst = typedText.length < 11;
  const isTypingComplete = typedText.length === nameToType.length;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-zinc-950 text-white">
      
      {/* Dynamic Background mesh & Glowing Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Neon Green Blob */}
        <div className="absolute top-[10%] left-[5%] w-[300px] sm:w-[450px] aspect-square rounded-full bg-brand-green/10 dark:bg-brand-green/10 light:bg-emerald-500/5 blur-[100px] sm:blur-[130px] animate-glow-1"></div>
        {/* Material Blue Blob */}
        <div className="absolute bottom-[15%] right-[8%] w-[250px] sm:w-[400px] aspect-square rounded-full bg-brand-blue/10 dark:bg-brand-blue/10 light:bg-blue-500/5 blur-[90px] sm:blur-[120px] animate-glow-2"></div>
        
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] light:bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            
            {/* Status indicator tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs shadow-md font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span>Available for Android Roles</span>
              <span className="text-zinc-600">•</span>
              <MapPin className="w-3 h-3 text-brand-green" />
              <span>Gujarat, India</span>
            </motion.div>

            {/* Giant display title */}
            <div className="flex flex-col gap-1.5 w-full">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-green font-mono"
              >
                Hi, my name is
              </motion.span>
              
              <h1 
                className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-display leading-tight text-white dark:text-white light:text-zinc-950 min-h-[2.4em] sm:min-h-[2.2em] flex flex-col justify-end"
              >
                <span>
                  {firstPart}
                  {isTypingFirst && cursorVisible && (
                    <span className="inline-block w-[3px] h-[0.8em] ml-1.5 bg-brand-green align-middle animate-pulse" />
                  )}
                </span>
                {typedText.length >= 11 && (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 dark:from-white dark:to-zinc-400 light:from-zinc-900 light:to-zinc-950">
                    {secondPart}
                    {!isTypingFirst && !isTypingComplete && cursorVisible && (
                      <span className="inline-block w-[3px] h-[0.8em] ml-1.5 bg-brand-green align-middle animate-pulse" />
                    )}
                    {isTypingComplete && cursorVisible && (
                      <span className="inline-block w-[3px] h-[0.8em] ml-1.5 bg-brand-green/70 align-middle animate-pulse" />
                    )}
                  </span>
                )}
              </h1>

              {/* Title tag with material spark */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-brand-blue flex items-center justify-center lg:justify-start gap-2"
              >
                Android Developer <Sparkles className="w-5 h-5 text-brand-green animate-pulse" />
              </motion.h2>
            </div>

            {/* Introduction paragraphs */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl text-justify lg:text-left"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs Button Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mt-2"
            >
              {/* Primary action: Resume viewer */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-green hover:bg-brand-green/95 text-black font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-brand-green/10 hover:scale-[1.02] active:scale-95 duration-150 cursor-pointer focus:outline-none"
              >
                <FileText className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume</span>
              </button>

              {/* View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-200 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none"
              >
                <Briefcase className="w-4 h-4 text-zinc-500" />
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 ml-1" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3.5 bg-transparent hover:bg-zinc-900/40 text-xs font-medium text-zinc-400 hover:text-white rounded-xl transition-all duration-200 focus:outline-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Profiles Social indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-4 mt-4 text-zinc-500 text-xs font-mono"
            >
              <a 
                href={personalInfo.github} 
                target="_blank" 
                referrerPolicy="no-referrer" 
                className="hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <Github className="w-4 h-4 group-hover:text-brand-green transition-colors" />
                <span>/Devpanchal25</span>
              </a>
              <span className="text-zinc-800">|</span>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                referrerPolicy="no-referrer" 
                className="hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-brand-blue transition-colors" />
                <span>/dev-panchal-302636384</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Android Phone Mockup Simulator */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4 lg:py-0">
            {/* Interactive Badge indicator above the phone for usability discovery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute -top-1.5 right-[10%] z-30 bg-gradient-to-r from-brand-green to-emerald-500 text-black font-extrabold text-[10px] px-3 py-1 rounded-full shadow-lg border border-brand-green/20 uppercase tracking-widest flex items-center gap-1"
            >
              <Smartphone className="w-3 h-3 animate-bounce" /> Interactive App Playroom
            </motion.div>

            {/* Background glowing rings for depth */}
            <div className="absolute -inset-10 rounded-full bg-brand-green/5 blur-3xl -z-10 animate-pulse"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.3 }}
              className="relative w-full flex justify-center"
            >
              <AndroidPhoneMockup />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
