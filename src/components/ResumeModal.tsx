import { motion } from 'motion/react';
import { X, Printer, Copy, FileText, Check, Download } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, educationList, projects, skills } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.title}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.bio}

PROJECTS
${projects.map(proj => `
- ${proj.title}
  Technologies: ${proj.technologies.join(', ')}
  Description: ${proj.description}
  Details:
  ${proj.details.map(d => `* ${d}`).join('\n  ')}
`).join('\n')}

EDUCATION
${educationList.map(edu => `
- ${edu.degree} in ${edu.field}
  ${edu.institution} | Period: ${edu.period} | CGPA: ${edu.cgpa}
`).join('\n')}

TECHNICAL SKILLS
- Android: ${skills.filter(s => s.category === 'android').map(s => s.name).join(', ')}
- Languages: ${skills.filter(s => s.category === 'languages').map(s => s.name).join(', ')}
- Tools: ${skills.filter(s => s.category === 'tools').map(s => s.name).join(', ')}
- Concepts: ${skills.filter(s => s.category === 'concepts').map(s => s.name).join(', ')}
`;

    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      
      {/* Background container click closes modal */}
      <div className="absolute inset-0 cursor-pointer print:hidden" onClick={onClose}></div>

      {/* Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden print:border-none print:shadow-none print:max-h-none print:bg-white print:relative print:overflow-visible"
      >
        {/* Header - Hidden on Print */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-green" />
            <h2 className="text-sm font-semibold text-white tracking-tight">Professional Resume Viewer</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 rounded-lg transition-all focus:outline-none"
              title="Copy plain text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-green hover:bg-brand-green/95 text-black text-xs font-bold rounded-lg transition-all shadow-md focus:outline-none"
              title="Open system print wizard to save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-all focus:outline-none ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Document */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white text-zinc-900 no-scrollbar print:p-0 print:overflow-visible print:bg-white">
          <div id="resume-document" className="max-w-[760px] mx-auto flex flex-col gap-6 text-sm leading-relaxed text-zinc-800 print:text-black">
            
            {/* CV Header */}
            <div className="border-b-2 border-zinc-900 pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 print:border-black">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-display uppercase print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-brand-green text-sm font-semibold tracking-wide mt-0.5 uppercase print:text-zinc-600">
                  B.E. Information Technology | {personalInfo.title}
                </p>
              </div>
              
              <div className="flex flex-col text-xs text-zinc-600 text-right sm:items-end gap-1 font-mono print:text-zinc-700">
                <span className="hover:underline">{personalInfo.email}</span>
                <span>{personalInfo.phone}</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Profiles strip */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600 font-mono border-b border-zinc-200 pb-2 print:border-zinc-300">
              <span className="font-semibold">GitHub: <span className="font-normal text-zinc-800">github.com/Devpanchal_25</span></span>
              <span className="font-semibold">LinkedIn: <span className="font-normal text-zinc-800">linkedin.com/in/Devpanchal_25</span></span>
              <span className="font-semibold">Credly: <span className="font-normal text-zinc-800">credly.com/users/dev_25</span></span>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-800 pb-1 mb-2 print:border-black">
                Professional Summary
              </h3>
              <p className="text-zinc-700 text-xs leading-relaxed text-justify print:text-zinc-800">
                {personalInfo.bio}
              </p>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-800 pb-1 mb-3 print:border-black">
                Projects
              </h3>
              <div className="flex flex-col gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="flex flex-col gap-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <span className="font-bold text-zinc-950 text-xs">{proj.title}</span>
                      <span className="text-zinc-500 font-mono text-[10px] bg-zinc-100 px-1.5 py-0.5 rounded print:bg-white print:border print:border-zinc-300">
                        {proj.technologies.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <p className="text-zinc-700 text-xs italic mt-0.5 print:text-zinc-800">
                      {proj.description}
                    </p>
                    <ul className="list-disc pl-4 text-xs text-zinc-600 mt-1 flex flex-col gap-0.5 print:text-zinc-700">
                      {proj.details.slice(0, 3).map((det, idx) => (
                        <li key={idx}>{det}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-800 pb-1 mb-2 print:border-black">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-zinc-800 print:text-zinc-900">
                <div>
                  <span className="font-bold">Android:</span>{' '}
                  <span className="text-zinc-600 print:text-zinc-800">
                    {skills.filter(s => s.category === 'android').map(s => s.name).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Languages:</span>{' '}
                  <span className="text-zinc-600 print:text-zinc-800">
                    {skills.filter(s => s.category === 'languages').map(s => s.name).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Database:</span>{' '}
                  <span className="text-zinc-600 print:text-zinc-800">
                    SQLite, Firebase Firestore, MySQL
                  </span>
                </div>
                <div>
                  <span className="font-bold">Tools:</span>{' '}
                  <span className="text-zinc-600 print:text-zinc-800">
                    {skills.filter(s => s.category === 'tools').map(s => s.name).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Concepts:</span>{' '}
                  <span className="text-zinc-600 print:text-zinc-800">
                    {skills.filter(s => s.category === 'concepts').slice(0, 5).map(s => s.name).join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Qualification */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-800 pb-1 mb-2 print:border-black">
                Academic Qualification
              </h3>
              <div className="flex flex-col gap-2.5">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs">
                    <div>
                      <span className="font-bold text-zinc-950">{edu.degree} in {edu.field}</span>
                      <p className="text-zinc-500 text-[11px] mt-0.5">{edu.institution} • {edu.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-500 font-mono text-[11px] block">{edu.period}</span>
                      <span className="font-bold text-zinc-950 text-xs">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Profile & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-200 pt-3 print:border-zinc-300">
              <div>
                <span className="font-bold text-xs uppercase block text-zinc-950 mb-1">Personal Details</span>
                <div className="text-[11px] text-zinc-600 flex flex-col gap-0.5 print:text-zinc-800">
                  <span>Name: {personalInfo.name}</span>
                  <span>Birth Date: {personalInfo.birthDate}</span>
                  <span>Hobbies: {personalInfo.hobbies.join(', ')}</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-xs uppercase block text-zinc-950 mb-1">Languages Spoken</span>
                <p className="text-[11px] text-zinc-600 print:text-zinc-800">
                  {personalInfo.languages.join(' • ')}
                </p>
              </div>
            </div>

            {/* Declaration */}
            <div className="text-[10px] text-zinc-400 italic text-center mt-4 print:text-zinc-600">
              "I declare that the above information is true to the best of my knowledge."
            </div>
          </div>
        </div>

        {/* Footer - Hidden on Print */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-center text-xs text-zinc-400 print:hidden flex justify-between items-center">
          <span>Close or press ESC to dismiss.</span>
          <button 
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors focus:outline-none"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
}
