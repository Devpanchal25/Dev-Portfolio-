import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, MessageSquare, Copy, Check, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'activation' | 'error' | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyMessage = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2500);
  };

  const getGmailComposeUrl = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Dev,\n\n${formData.message || ''}\n\n---\nSender Name: ${formData.name || ''}\nSender Email: ${formData.email || ''}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.includes('Activate')) {
        setSubmitStatus('activation');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 text-brand-green" />,
      label: 'Direct Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      id: 'email-btn',
      copyable: true
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-blue" />,
      label: 'Phone Call / WA',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      id: 'phone-btn',
      copyable: false
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      label: 'Location coordinates',
      value: personalInfo.location,
      href: 'https://maps.google.com/?q=Vadodara,+Gujarat,+India',
      id: 'location-btn',
      copyable: false
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
                Have a job opening, project query, or simply want to chat about Android architectures, Jetpack Compose, or legal AI models? Send a direct email or use the form below.
              </p>
            </div>

            {/* Methods lists */}
            <div className="flex flex-col gap-3 mt-2">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className="glass-panel p-4 rounded-xl border border-zinc-800 flex items-center justify-between hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 group"
                >
                  <a
                    id={method.id}
                    href={method.href}
                    target={method.id === 'location-btn' ? '_blank' : undefined}
                    referrerPolicy={method.id === 'location-btn' ? 'no-referrer' : undefined}
                    className="flex items-center gap-4 flex-1 min-w-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {method.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-zinc-500 text-[9px] font-mono uppercase block">{method.label}</span>
                      <span className="text-white text-xs sm:text-sm font-semibold tracking-tight block mt-0.5 group-hover:text-brand-green transition-colors font-mono truncate">
                        {method.value}
                      </span>
                    </div>
                  </a>

                  {method.copyable && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-400 hover:text-brand-green transition-all focus:outline-none shrink-0 ml-2 cursor-pointer"
                      title="Copy email address"
                    >
                      {emailCopied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
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

          {/* Right Column: Instant Live Email Dispatcher Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Direct Email Dispatch Form
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  To: {personalInfo.email}
                </span>
              </div>

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
                    Your Email Address <span className="text-brand-green">*</span>
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

                {/* Submit Action Buttons */}
                <div className="flex flex-col gap-2 mt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                    className="w-full py-3.5 bg-brand-green disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed hover:bg-brand-green/95 text-black font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] focus:outline-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending message to {personalInfo.email}...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  <div className="flex gap-2">
                    <a
                      href={getGmailComposeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-red-400" />
                      <span>Send via Gmail</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      title="Copy typed details"
                    >
                      {messageCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Form</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Banner Feedback */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4"
                  >
                    {submitStatus === 'success' && (
                      <div className="bg-emerald-950/90 border border-emerald-500/40 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div className="flex-1">
                          <span className="text-white text-xs font-bold block leading-none">Email Dispatched!</span>
                          <span className="text-zinc-300 text-[11px] block mt-1 leading-relaxed font-mono">
                            Your message has been sent directly to <strong>{personalInfo.email}</strong>. Dev will write back soon!
                          </span>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'activation' && (
                      <div className="bg-amber-950/90 border border-amber-500/40 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
                        <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                        <div className="flex-1">
                          <span className="text-white text-xs font-bold block leading-none">First-Time Email Sent!</span>
                          <span className="text-zinc-300 text-[11px] block mt-1 leading-relaxed font-mono">
                            The message was sent to FormSubmit service. If this is the first submission to <strong>{personalInfo.email}</strong>, a confirmation link was emailed to verify the inbox. You can also click <strong>"Send via Gmail"</strong> above to send directly from your Gmail account!
                          </span>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-950/90 border border-red-500/40 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                        <div className="flex-1">
                          <span className="text-white text-xs font-bold block leading-none">Transmission Notice</span>
                          <span className="text-zinc-300 text-[11px] block mt-1 leading-relaxed font-mono">
                            Could not dispatch directly via HTTP. Please click <strong>"Send via Gmail"</strong> or <strong>"Default Mail App"</strong> above to send to <strong>{personalInfo.email}</strong> instantly!
                          </span>
                        </div>
                        <a
                          href={getGmailComposeUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-400 transition-colors flex items-center gap-1 shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Gmail</span>
                        </a>
                      </div>
                    )}
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


