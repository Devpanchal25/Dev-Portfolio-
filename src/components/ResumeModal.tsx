import { motion } from 'motion/react';
import { X, Printer, FileText, Mail, Phone, MapPin, Github, Linkedin, Award } from 'lucide-react';
import { personalInfo } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    // Standard print call
    const resumeEl = document.getElementById('resume-document');
    if (!resumeEl) {
      window.print();
      return;
    }

    try {
      // Create hidden iframe for isolated print preview
      const printIframe = document.createElement('iframe');
      printIframe.id = 'print-frame';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);

      const printDoc = printIframe.contentWindow?.document;
      if (printDoc) {
        printDoc.open();
        printDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Panchal_Dev_Resume</title>
              <meta charset="utf-8" />
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                  font-family: 'Inter', system-ui, -apple-system, sans-serif;
                  background: #ffffff;
                  color: #000000;
                  padding: 20px;
                  margin: 0;
                  -webkit-print-color-adjust: exact;
                  print-color-adjust: exact;
                }
                @page {
                  size: A4 portrait;
                  margin: 10mm;
                }
                a { color: inherit; text-decoration: none; }
                .border-b { border-bottom: 1px solid #000000; }
                .border-t { border-top: 1px solid #000000; }
                .list-disc { list-style-type: disc; }
                .pl-4 { padding-left: 1rem; }
                .font-bold { font-weight: 700; }
                .font-semibold { font-weight: 600; }
                .italic { font-style: italic; }
              </style>
              <link rel="stylesheet" href="${window.location.origin}/src/index.css" />
            </head>
            <body>
              ${resumeEl.innerHTML}
            </body>
          </html>
        `);
        printDoc.close();

        setTimeout(() => {
          try {
            printIframe.contentWindow?.focus();
            printIframe.contentWindow?.print();
          } catch (err) {
            window.print();
          }
          setTimeout(() => {
            if (document.body.contains(printIframe)) {
              document.body.removeChild(printIframe);
            }
          }, 1000);
        }, 300);
      } else {
        window.print();
      }
    } catch (e) {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      
      {/* Click backdrop to dismiss */}
      <div className="absolute inset-0 cursor-pointer print:hidden" onClick={onClose}></div>

      {/* Main Modal Window */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] z-10 overflow-hidden print:border-none print:shadow-none print:max-h-none print:bg-white print:relative print:overflow-visible print:w-full print:max-w-none"
      >
        {/* Top Floating Control Bar */}
        <div className="flex flex-wrap items-center justify-between p-3.5 sm:p-4 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur print:hidden gap-3">
          
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-brand-green/10 border border-brand-green/30 rounded-lg text-brand-green">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight font-display">
                Dev Panchal — Official Resume
              </h2>
              <span className="text-[10px] text-zinc-400 font-mono block">
                Verified 2-Page Executive Document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Print / Save PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-brand-green/90 active:scale-95 text-black text-xs font-bold rounded-lg transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close Modal */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Container Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-zinc-900 text-zinc-900 print:p-0 print:bg-white print:overflow-visible">
          
          {/* EXACT REPLICA OF THE UPLOADED 2-PAGE RESUME PDF */}
          <div id="resume-document" className="max-w-[790px] mx-auto flex flex-col gap-8 print:gap-0 font-sans leading-snug">
              
              {/* PAGE 1 */}
              <div className="bg-white text-black p-8 sm:p-10 shadow-xl border border-zinc-200 print:shadow-none print:border-none print:p-0 print:m-0 print:page-break-after-always">
                
                {/* Header */}
                <div className="mb-4">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black font-sans">
                    Panchal Dev Ghanshyambhai
                  </h1>
                  <h2 className="text-sm sm:text-base font-semibold text-zinc-800 mt-0.5">
                    B.E Information Technology
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-800 mt-2 font-sans">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-zinc-700" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-zinc-700" />
                      <a href={`tel:${personalInfo.phone}`} className="hover:underline">{personalInfo.phone}</a>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-700" />
                      <span>{personalInfo.location}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-800 mt-2">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <Linkedin className="w-3.5 h-3.5 text-zinc-800" />
                      <span>Devpanchal_25</span>
                    </a>
                    <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <Award className="w-3.5 h-3.5 text-zinc-800" />
                      <span>Dev_25</span>
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <Github className="w-3.5 h-3.5 text-zinc-800" />
                      <span>Devpanchal_25</span>
                    </a>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Professional Summary
                  </h3>
                  <p className="text-xs text-zinc-800 leading-relaxed text-justify">
                    Android Developer with hands-on experience building modern mobile applications using Kotlin, Jetpack Compose, MVVM, Hilt, Retrofit, Coroutines, and Firebase. Passionate about building scalable mobile applications and continuously improving software engineering skills.
                  </p>
                </div>

                {/* Internship & Training */}
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Internship & Training
                  </h3>

                  <div className="flex flex-col gap-3.5 text-xs text-zinc-900">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-semibold text-black">
                        <span>Android App Development Intern | MindMatrix (CL Infotech Pvt. Ltd.)</span>
                        <span className="text-zinc-700 text-[11px] font-normal">Jan 2026 – Apr 2026 | Bangalore</span>
                      </div>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 text-zinc-800 text-[11px]">
                        <li>Developed Android applications using Kotlin and Jetpack Compose.</li>
                        <li>Worked with Firebase, Android Studio, Google Cloud Labs, and Google AI Studio to implement features and improve applications.</li>
                        <li>Contributed to UI development, testing, debugging, and application optimization.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-semibold text-black">
                        <span>Artificial Intelligence Intern | IBM SkillsBuild (CSRBOX)</span>
                        <span className="text-zinc-700 text-[11px] font-normal">Jul 2025 | Ahmedabad</span>
                      </div>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 text-zinc-800 text-[11px]">
                        <li>Developed Justicia AI, an AI-powered legal rights assistant using AI and automation concepts.</li>
                        <li>Applied NLP concepts and prompt engineering to improve user interaction and response generation.</li>
                        <li>Completed technology-focused internship aimed at social impact initiatives. Gained exposure to professional work culture, teamwork, and application of technology to solve real-world problems.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Projects
                  </h3>

                  <div className="flex flex-col gap-3 text-xs text-zinc-900">
                    <div>
                      <h4 className="font-bold text-black">Justicia AI – Legal Rights Assistant</h4>
                      <p className="italic text-zinc-700 text-[11px]">Technologies: Python, JavaScript, NLP, Email Automation</p>
                      <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-zinc-800 text-[11px]">
                        <li>Developed an AI-powered legal rights assistant to provide guidance on legal queries.</li>
                        <li>Implemented email-based query handling and automated AI-generated responses.</li>
                        <li>Applied NLP concepts to improve conversation flow and user interaction.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-black">SkyCast – Weather Forecast App</h4>
                      <p className="italic text-zinc-700 text-[11px]">Technologies: Kotlin, Jetpack Compose, MVVM, Hilt, Retrofit, Coroutines</p>
                      <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-zinc-800 text-[11px]">
                        <li>Developed a weather application using Kotlin and Jetpack Compose with MVVM architecture.</li>
                        <li>Integrated WeatherAPI using Retrofit to display real-time weather and forecasts.</li>
                        <li>Implemented location-based weather, city search, and responsive Material 3 UI.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-black">Employee Performance Tracker</h4>
                      <p className="italic text-zinc-700 text-[11px]">Technologies: Kotlin, Jetpack Compose, Room Database, MVVM</p>
                      <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-zinc-800 text-[11px]">
                        <li>Built an Android application to manage employee records, tasks, and performance.</li>
                        <li>Implemented CRUD operations using Room Database with MVVM architecture.</li>
                        <li>Designed a modern Jetpack Compose UI and optimized app performance.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              {/* PAGE 2 */}
              <div className="bg-white text-black p-8 sm:p-10 shadow-xl border border-zinc-200 print:shadow-none print:border-none print:p-0 print:m-0">
                
                {/* Technical Skills */}
                <div>
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Technical Skills
                  </h3>
                  <div className="text-xs text-zinc-900 space-y-1">
                    <p><strong className="font-semibold text-black">Android:</strong> Jetpack Compose, MVVM, Coroutines, StateFlow, Hilt, Retrofit, Room, Firebase</p>
                    <p><strong className="font-semibold text-black">Languages:</strong> Kotlin, Java, Python, C, JavaScript</p>
                    <p><strong className="font-semibold text-black">Web:</strong> HTML, CSS, JavaScript (Basic)</p>
                    <p><strong className="font-semibold text-black">Database:</strong> SQLite, Firebase Firestore, MySQL</p>
                    <p><strong className="font-semibold text-black">Tools:</strong> Android Studio, Git/GitHub, Postman</p>
                    <p><strong className="font-semibold text-black">Concepts:</strong> REST APIs, Dependency Injection, Repository Pattern</p>
                  </div>
                </div>

                {/* Personal Profile */}
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Personal Profile
                  </h3>
                  <div className="text-xs text-zinc-900 space-y-1">
                    <p><strong className="font-semibold text-black">Name:</strong> Panchal Dev Ghanshyambhai</p>
                    <p><strong className="font-semibold text-black">Address:</strong> 861, Suthar Faliyu, Bhayli, Vadodara, Gujarat, 391410</p>
                    <p><strong className="font-semibold text-black">Birth Date:</strong> 25/07/2005</p>
                    <p><strong className="font-semibold text-black">Gender:</strong> Male</p>
                    <p><strong className="font-semibold text-black">Nationality:</strong> Indian</p>
                    <p><strong className="font-semibold text-black">Hobbies:</strong> Cricket, Travelling, Movies</p>
                  </div>
                </div>

                {/* Academic Qualification */}
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Academic Qualification
                  </h3>

                  <div className="flex flex-col gap-3 text-xs text-zinc-900">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-black">
                        <span>Bachelor of Engineering (B.E.) in information Technology</span>
                        <span className="text-zinc-800 text-xs font-normal">2023-2026</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-zinc-700 text-[11px]">
                        <span>Sardar Patel College of Engineering and Technology</span>
                        <span>Anand, Gujarat</span>
                      </div>
                      <p className="text-[11px] font-semibold text-black mt-0.5">CGPA: 7.44</p>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-black">
                        <span>Diploma in information Technology</span>
                        <span className="text-zinc-800 text-xs font-normal">2020-2023</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-zinc-700 text-[11px]">
                        <span>Parul University</span>
                        <span>Vadodara, Gujarat</span>
                      </div>
                      <p className="text-[11px] font-semibold text-black mt-0.5">CGPA: 7.46</p>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-black border-b border-black pb-0.5 mb-2 font-sans uppercase tracking-wide">
                    Languages
                  </h3>
                  <div className="text-xs text-zinc-900 flex items-center gap-8">
                    <span>• English</span>
                    <span>• Hindi</span>
                    <span>• Gujarati</span>
                  </div>
                </div>

                {/* Declaration */}
                <div className="mt-8 pt-4 border-t border-black">
                  <h3 className="text-sm font-bold text-black mb-1 font-sans uppercase tracking-wide">
                    Declaration
                  </h3>
                  <p className="text-xs text-zinc-800 italic">
                    I declare that above information is true to the best of my knowledge.
                  </p>
                </div>

              </div>

            </div>

        </div>

        {/* Footer Bar */}
        <div className="p-3 bg-zinc-900 border-t border-zinc-800 text-center text-xs text-zinc-400 print:hidden flex justify-between items-center">
          <span className="font-mono text-[11px]">Exact 2-Page Resume • Click "Print / Save PDF" to download</span>
          <button 
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors focus:outline-none cursor-pointer text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
}
