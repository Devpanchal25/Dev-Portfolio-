import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, RefreshCw, MessageSquare, Settings, Globe } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [accessKey, setAccessKey] = useState(() => localStorage.getItem('portfolio_contact_key') || '');
  const [showConfig, setShowConfig] = useState(false);
  const [isSuccessWeb3, setIsSuccessWeb3] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    if (accessKey.trim()) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Portfolio Message from ${formData.name}`,
            from_name: 'Android Portfolio'
          })
        });

        const result = await response.json();
        if (result.success) {
          setIsSuccessWeb3(true);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setIsSubmitted(false);
            setIsSuccessWeb3(false);
          }, 5000);
        } else {
          alert(`Submission error: ${result.message || 'Please verify your access key.'}`);
        }
      } catch (err) {
        console.error('Contact submission error:', err);
        alert('API transmission failed. Please check your internet connection or use direct email link.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulate API transport latency
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset success banner after 4 seconds
        setTimeout(() => setIsSubmitted(false), 4000);
      }, 1500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 text-brand-green" />,
      label: 'Email Developer',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      id: 'email-btn'
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-blue" />,
      label: 'Phone Call / WA',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      id: 'phone-btn'
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      label: 'Location coordinates',
      value: personalInfo.location,
      href: 'https://maps.google.com/?q=Vadodara,+Gujarat,+India',
      id: 'location-btn'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-zinc-950 text-white relative border-t border-zinc-900">
      
      {/* Background glowing mesh */}
      <div className="absolute right-1/4 top-1/2 w-[320px] aspect-square bg-brand-green/5 blur-[105px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-3 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-brand-green" /> Contact Terminal
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight">
            Let's Build Something Amazing Together.
          </h2>
          <div className="w-12 h-1 bg-brand-green mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold font-display text-white">Get In Touch</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed text-justify">
                Have a job opening, project query, or simply want to chat about Android architectures, Jetpack Compose, or legal AI models? Drop a message, and I will write back.
              </p>
            </div>

            {/* Methods lists */}
            <div className="flex flex-col gap-3 mt-2">
              {contactMethods.map((method) => (
                <a
                  key={method.id}
                  id={method.id}
                  href={method.href}
                  target={method.id === 'location-btn' ? '_blank' : undefined}
                  referrerPolicy={method.id === 'location-btn' ? 'no-referrer' : undefined}
                  className="glass-panel p-4 rounded-xl border border-zinc-800 flex items-center gap-4 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[9px] font-mono uppercase block">{method.label}</span>
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-tight block mt-0.5 group-hover:text-brand-green transition-colors font-mono">
                      {method.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct profiles row */}
            <div className="flex gap-3 border-t border-zinc-900 pt-6 mt-2 items-center">
              <span className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider mr-2">Digital footprint:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-6">
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                  Secure SSL Gateway Form
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono text-brand-green bg-brand-green/10 hover:bg-brand-green/20 rounded-lg transition-colors border border-brand-green/20 focus:outline-none cursor-pointer"
                  title="Configure live email notification setup"
                >
                  <Settings className={`w-3 h-3 ${showConfig ? 'animate-spin' : ''}`} />
                  <span>{accessKey ? 'Live: Web3Forms Active' : '⚡ Enable Live Emails'}</span>
                </button>
              </div>

              {/* Expandable Web3Forms settings block */}
              <AnimatePresence>
                {showConfig && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="bg-zinc-900/50 border border-zinc-850 rounded-xl p-4 flex flex-col gap-3 text-xs">
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-200 font-bold flex items-center gap-1.5 font-sans">
                          <Globe className="w-3.5 h-3.5 text-brand-green" /> Receive Real Emails for Free:
                        </span>
                        <p className="text-zinc-400 text-[11px] leading-relaxed">
                          Since this is a client-side React app, we have integrated <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Web3Forms</a>. To receive real-time messages directly to your email inbox:
                        </p>
                        <ol className="list-decimal list-inside text-zinc-400 text-[10px] pl-1 leading-normal flex flex-col gap-0.5 mt-1 font-mono">
                          <li>Go to <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">web3forms.com</a></li>
                          <li>Enter your personal email to get a free <strong>Access Key</strong></li>
                          <li>Paste it below — we'll save it in your local browser storage!</li>
                        </ol>
                      </div>

                      <div className="flex flex-col gap-1.5 mt-1">
                        <label htmlFor="access-key" className="text-zinc-400 text-[10px] font-mono font-semibold">
                          Web3Forms Access Key Token:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="password"
                            id="access-key"
                            value={accessKey}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAccessKey(val);
                              localStorage.setItem('portfolio_contact_key', val);
                            }}
                            placeholder="e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-[11px] text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green font-mono"
                          />
                          {accessKey && (
                            <button
                              type="button"
                              onClick={() => {
                                setAccessKey('');
                                localStorage.removeItem('portfolio_contact_key');
                              }}
                              className="px-3 py-2 bg-red-950/40 hover:bg-red-950/60 border border-red-900/40 text-red-400 text-[10px] font-mono rounded-lg transition-colors cursor-pointer"
                            >
                              Disconnect
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name-input" className="text-zinc-400 text-xs font-medium font-mono">
                    Full Name <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-input" className="text-zinc-400 text-xs font-medium font-mono">
                    Email Address <span className="text-brand-green">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                  />
                </div>

                {/* Message Body */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message-input" className="text-zinc-400 text-xs font-medium font-mono">
                    Message Body <span className="text-brand-green">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your product requirements..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  className="w-full py-3.5 bg-brand-green disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed hover:bg-brand-green/95 text-black font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] focus:outline-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>{accessKey ? 'Transmit Live Message' : 'Send Secure Message'}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Alert Banner - Styled like a premium Android Material Snack toast */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-4 left-4 right-4 bg-emerald-950 border border-emerald-500/30 p-3.5 rounded-xl flex items-center gap-3 shadow-2xl z-30"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-white text-xs font-bold block leading-none">Message Sent Successfully!</span>
                      <span className="text-zinc-400 text-[10px] block mt-1 leading-none font-mono">
                        {isSuccessWeb3 
                          ? "Real message sent! An email notification is in transit." 
                          : "Simulated transit complete. Thank you!"}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
