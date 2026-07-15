import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Clock, 
  Search, 
  Sun, 
  CloudRain, 
  CloudLightning, 
  Cloud, 
  ArrowLeft, 
  Briefcase, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  MessageSquare,
  Compass, 
  Cpu, 
  Scale, 
  ChevronRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface PhoneApp {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

export default function AndroidPhoneMockup() {
  const [currentTime, setCurrentTime] = useState('09:41');
  const [activeApp, setActiveApp] = useState<string | null>(null);
  
  // Weather App State
  const [selectedCity, setSelectedCity] = useState('Vadodara');
  const [weatherSearchQuery, setWeatherSearchQuery] = useState('');
  const weatherData: Record<string, { temp: number; condition: string; humidity: number; wind: string; icon: React.ReactNode; bg: string }> = {
    'Vadodara': { temp: 34, condition: 'Sunny', humidity: 45, wind: '12 km/h', icon: <Sun className="w-12 h-12 text-yellow-400" />, bg: 'from-amber-500/20 to-orange-600/10' },
    'Bangalore': { temp: 24, condition: 'Cloudy & Cool', humidity: 75, wind: '18 km/h', icon: <Cloud className="w-12 h-12 text-sky-300" />, bg: 'from-sky-500/20 to-indigo-600/10' },
    'Ahmedabad': { temp: 36, condition: 'Hot & Humid', humidity: 40, wind: '10 km/h', icon: <Sun className="w-12 h-12 text-yellow-500" />, bg: 'from-orange-500/20 to-red-600/10' },
    'Mumbai': { temp: 29, condition: 'Heavy Rain', humidity: 95, wind: '28 km/h', icon: <CloudRain className="w-12 h-12 text-blue-400" />, bg: 'from-blue-500/20 to-slate-800/10' }
  };

  // Employee Tracker State
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Amit Sharma', role: 'Kotlin Developer', task: 'Hilt DI Setup', status: 'Completed', rating: 4.8 },
    { id: 2, name: 'Priya Patel', role: 'UI/UX Designer', task: 'M3 Design Token Kit', status: 'In Progress', rating: 4.5 },
    { id: 3, name: 'Rohan Shah', role: 'QA Engineer', task: 'Compose Snapshot Testing', status: 'Pending', rating: 4.2 }
  ]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeTask, setNewEmployeeTask] = useState('');

  // Justicia AI State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Hello! I am Justicia AI. Ask me about basic legal rights or select a common inquiry below:' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const legalPrompts = [
    'What are basic employee rights in India?',
    'What is the Consumer Protection Act?',
    'What should I do in case of tenant disputes?'
  ];

  // Live time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const strMinutes = minutes < 10 ? '0' + minutes : minutes;
      const strHours = hours < 10 ? '0' + hours : hours;
      setCurrentTime(`${strHours}:${strMinutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Phone Apps definitions
  const apps: PhoneApp[] = [
    { 
      id: 'skycast', 
      name: 'SkyCast', 
      icon: <Sun className="w-6 h-6 text-white" />, 
      color: 'bg-sky-500', 
      gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)' 
    },
    { 
      id: 'tracker', 
      name: 'TrackEE', 
      icon: <Briefcase className="w-6 h-6 text-white" />, 
      color: 'bg-emerald-500', 
      gradient: 'linear-gradient(135deg, #10b981, #059669)' 
    },
    { 
      id: 'justicia', 
      name: 'Justicia', 
      icon: <Scale className="w-6 h-6 text-white" />, 
      color: 'bg-purple-500', 
      gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)' 
    }
  ];

  // Weather App handler
  const handleWeatherSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weatherSearchQuery.trim()) return;
    const matchedCity = Object.keys(weatherData).find(
      c => c.toLowerCase() === weatherSearchQuery.trim().toLowerCase()
    );
    if (matchedCity) {
      setSelectedCity(matchedCity);
    } else {
      // Mock new city
      const temp = Math.floor(Math.random() * 15) + 20;
      const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Windy'];
      const icons = [
        <Sun className="w-12 h-12 text-yellow-400" />,
        <Cloud className="w-12 h-12 text-slate-300" />,
        <CloudRain className="w-12 h-12 text-blue-400" />,
        <CloudLightning className="w-12 h-12 text-purple-400" />
      ];
      const randomIndex = Math.floor(Math.random() * conditions.length);
      weatherData[weatherSearchQuery] = {
        temp,
        condition: conditions[randomIndex],
        humidity: Math.floor(Math.random() * 50) + 40,
        wind: `${Math.floor(Math.random() * 15) + 5} km/h`,
        icon: icons[randomIndex],
        bg: 'from-slate-700/20 to-slate-900/10'
      };
      setSelectedCity(weatherSearchQuery);
    }
    setWeatherSearchQuery('');
  };

  // Employee App handler
  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeName.trim() || !newEmployeeTask.trim()) return;
    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name: newEmployeeName,
        role: 'App Intern',
        task: newEmployeeTask,
        status: 'Pending',
        rating: 4.0
      }
    ]);
    setNewEmployeeName('');
    setNewEmployeeTask('');
  };

  const toggleTaskStatus = (id: number) => {
    setEmployees(employees.map(emp => {
      if (emp.id === id) {
        let nextStatus = 'In Progress';
        let nextRating = emp.rating;
        if (emp.status === 'Pending') {
          nextStatus = 'In Progress';
        } else if (emp.status === 'In Progress') {
          nextStatus = 'Completed';
          nextRating = Math.min(5.0, Number((emp.rating + 0.3).toFixed(1)));
        } else {
          nextStatus = 'Pending';
        }
        return { ...emp, status: nextStatus, rating: nextRating };
      }
      return emp;
    }));
  };

  // Justicia AI App handler
  const handleJusticiaPromptClick = (promptText: string) => {
    setChatMessages(prev => [...prev, { sender: 'user', text: promptText }]);
    simulateAIResponse(promptText);
  };

  const handleJusticiaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const msg = userInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: msg }]);
    setUserInput('');
    simulateAIResponse(msg);
  };

  const simulateAIResponse = (query: string) => {
    setIsTyping(true);
    let reply = "Justicia AI is processing your legal query. Under basic statutory provisions, your interests are protected by standard codes. Please seek certified counsel.";
    
    const lowercaseQuery = query.toLowerCase();
    if (lowercaseQuery.includes('employee') || lowercaseQuery.includes('worker') || lowercaseQuery.includes('job')) {
      reply = "In India, basic labor rights guarantee: 1) Minimum Wages, 2) Safe Working Environments, 3) Maternity Leave protections, 4) Limits on working hours, and 5) Severance notice terms under the Industrial Disputes Act.";
    } else if (lowercaseQuery.includes('consumer') || lowercaseQuery.includes('shop') || lowercaseQuery.includes('buyer')) {
      reply = "The Consumer Protection Act (2019) guarantees rights against marketing of hazardous goods, right to be informed of quality/standards, right to competitive pricing, and a fast-track 3-tier grievance council.";
    } else if (lowercaseQuery.includes('tenant') || lowercaseQuery.includes('rent') || lowercaseQuery.includes('house')) {
      reply = "Tenant rights typically safeguard you against arbitrary eviction without proper notice (usually 30 days), outline landlord obligations for structural maintenance, and mandate security deposit returns.";
    }

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/18.5] bg-zinc-950 rounded-[48px] p-3.5 shadow-2xl border-4 border-zinc-800 ring-1 ring-zinc-700/50 flex flex-col overflow-hidden group">
      
      {/* Speaker and Camera Cutout */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-zinc-950 rounded-b-2xl z-50 flex items-center justify-center gap-1.5 px-3">
        <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
        <div className="w-12 h-1 bg-zinc-800 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full ml-auto"></div>
      </div>

      {/* Internal Phone Canvas Screen */}
      <div className="w-full h-full bg-zinc-900 rounded-[34px] overflow-hidden flex flex-col relative text-zinc-100 select-none text-xs font-sans">
        
        {/* Status Bar */}
        <div className="h-7 pt-1 px-5 flex items-center justify-between text-[11px] font-medium bg-transparent z-40 text-zinc-400">
          <span className="flex items-center gap-0.5">
            <Clock className="w-3 h-3 mr-0.5 inline-block opacity-70" />
            {currentTime}
          </span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Dynamic App Area */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          <AnimatePresence mode="wait">
            {!activeApp ? (
              /* HOME SCREEN */
              <motion.div 
                key="home"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col p-5 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"
              >
                {/* Google Search Pill */}
                <div className="mt-4 mb-8 bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/30 rounded-full px-4 py-2 flex items-center gap-2.5 text-zinc-400 shadow-lg">
                  <Search className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-light">Search Dev's Projects...</span>
                </div>

                {/* Android Welcome Greeting */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 bg-brand-green/20 text-brand-green text-[9px] font-bold rounded uppercase tracking-wider">
                      OS 14
                    </span>
                    <span className="text-zinc-500">• Ready</span>
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-white flex items-center gap-1">
                    Compose Workspace <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-zinc-400 text-[10px] mt-0.5">
                    Click any application below to launch a live responsive simulator.
                  </p>
                </div>

                {/* App Grid */}
                <div className="grid grid-cols-3 gap-y-6 gap-x-4">
                  {apps.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setActiveApp(app.id)}
                      className="flex flex-col items-center justify-center gap-1.5 group/app focus:outline-none"
                    >
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transform active:scale-90 transition-all duration-150 relative"
                        style={{ background: app.gradient }}
                      >
                        {app.icon}
                        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover/app:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-[10px] font-medium text-zinc-300 group-hover/app:text-white transition-colors">
                        {app.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Bottom navigation pill */}
                <div className="mt-auto text-center">
                  <div className="inline-block px-3 py-1 bg-zinc-800/40 rounded-full text-zinc-500 text-[9px] border border-zinc-800/40">
                    Kotlin / Jetpack Compose
                  </div>
                </div>
              </motion.div>
            ) : (
              /* APP SCREENS */
              <motion.div 
                key="app"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="absolute inset-0 flex flex-col bg-zinc-950"
              >
                {/* App Custom Header */}
                <div className="h-11 px-4 border-b border-zinc-800/60 bg-zinc-900/40 flex items-center gap-2">
                  <button 
                    onClick={() => setActiveApp(null)}
                    className="p-1.5 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-white capitalize text-xs">
                    {apps.find(a => a.id === activeApp)?.name}
                  </span>
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
                </div>

                {/* APP 1: SKYCAST WEATHER */}
                {activeApp === 'skycast' && (
                  <div className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-4">
                    {/* Weather Search bar */}
                    <form onSubmit={handleWeatherSearch} className="relative">
                      <input 
                        type="text" 
                        placeholder="Search City (e.g. Bangalore)..." 
                        value={weatherSearchQuery}
                        onChange={(e) => setWeatherSearchQuery(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-1.5 pl-3 pr-8 text-[11px] text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                      <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-sky-400">
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </form>

                    {/* Main Temperature Card */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-b ${weatherData[selectedCity]?.bg || 'from-zinc-800/50 to-zinc-900/50'} border border-white/5 shadow-md flex flex-col items-center text-center relative overflow-hidden`}>
                      <div className="absolute top-2 right-2 text-[8px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded border border-sky-500/20">
                        MVVM Bind
                      </div>
                      <span className="text-zinc-400 text-[10px] font-medium uppercase tracking-wider">{selectedCity}</span>
                      <div className="my-2">{weatherData[selectedCity]?.icon || <Sun className="w-12 h-12 text-yellow-400" />}</div>
                      <span className="text-3xl font-bold text-white tracking-tight">{weatherData[selectedCity]?.temp || 30}°C</span>
                      <span className="text-zinc-300 font-medium text-[11px] mt-0.5">{weatherData[selectedCity]?.condition || 'Clear'}</span>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-zinc-900/60 border border-zinc-800 p-2.5 rounded-xl text-center">
                        <span className="text-zinc-500 text-[9px] block">Humidity</span>
                        <span className="text-white text-xs font-semibold">{weatherData[selectedCity]?.humidity || 50}%</span>
                      </div>
                      <div className="bg-zinc-900/60 border border-zinc-800 p-2.5 rounded-xl text-center">
                        <span className="text-zinc-500 text-[9px] block">Wind Speed</span>
                        <span className="text-white text-xs font-semibold">{weatherData[selectedCity]?.wind || '10 km/h'}</span>
                      </div>
                    </div>

                    {/* 3 Day Forecast Preview */}
                    <div className="bg-zinc-900/30 border border-zinc-800/40 rounded-xl p-3">
                      <span className="text-zinc-400 text-[9px] font-medium uppercase tracking-wider mb-2 block">Weekly State (Flow)</span>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-zinc-400">Thu (Tomorrow)</span>
                          <span className="flex items-center gap-1 text-white">
                            <Sun className="w-3 h-3 text-yellow-400" /> 33° / 24°
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-zinc-400">Fri (Weekend)</span>
                          <span className="flex items-center gap-1 text-white">
                            <CloudRain className="w-3 h-3 text-sky-400" /> 28° / 22°
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-zinc-400">Sat (Holiday)</span>
                          <span className="flex items-center gap-1 text-white">
                            <CloudLightning className="w-3 h-3 text-purple-400" /> 26° / 21°
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* APP 2: TRACKEE (EMPLOYEE TRACKER) */}
                {activeApp === 'tracker' && (
                  <div className="flex-1 overflow-y-auto no-scrollbar p-3.5 flex flex-col gap-3">
                    
                    {/* Statistics header */}
                    <div className="bg-emerald-950/20 border border-emerald-500/15 rounded-xl p-3 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] text-zinc-400 block uppercase">Active Task-Flow</span>
                        <span className="text-emerald-400 text-sm font-bold">
                          {employees.filter(e => e.status === 'Completed').length} / {employees.length} Done
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>

                    {/* Employee list */}
                    <div className="flex flex-col gap-2">
                      <span className="text-zinc-400 text-[9px] uppercase tracking-wider font-semibold block">Room Db Records</span>
                      <div className="flex flex-col gap-2">
                        {employees.map(emp => (
                          <div 
                            key={emp.id}
                            onClick={() => toggleTaskStatus(emp.id)}
                            className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-2.5 rounded-xl cursor-pointer transition-all flex items-start justify-between relative group"
                          >
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="font-semibold text-white text-[11px]">{emp.name}</span>
                                <span className="text-zinc-500 text-[9px]">• {emp.role}</span>
                              </div>
                              <span className="text-zinc-400 text-[10px] block line-clamp-1">Task: {emp.task}</span>
                              
                              <div className="flex items-center gap-1.5 mt-1">
                                <span className="text-[9px] text-zinc-500">Rating:</span>
                                <span className="text-amber-400 text-[10px] font-bold">★ {emp.rating}</span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-1.5">
                              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                                emp.status === 'Completed' ? 'bg-emerald-500/15 text-emerald-400' :
                                emp.status === 'In Progress' ? 'bg-blue-500/15 text-blue-400' :
                                'bg-zinc-800 text-zinc-400'
                              }`}>
                                {emp.status}
                              </span>
                              <span className="text-[8px] text-zinc-600 group-hover:text-emerald-400 transition-colors">
                                Toggle State
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Add Employee Form */}
                    <form onSubmit={handleAddEmployee} className="mt-2 p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/60 flex flex-col gap-2">
                      <span className="text-zinc-400 text-[9px] uppercase">Add Record (Local DB)</span>
                      <input 
                        type="text" 
                        placeholder="Employee Name..." 
                        value={newEmployeeName}
                        onChange={(e) => setNewEmployeeName(e.target.value)}
                        className="bg-zinc-900 border border-zinc-800 rounded-lg py-1 px-2.5 text-[10px] text-white focus:outline-none focus:border-emerald-500"
                        required
                      />
                      <input 
                        type="text" 
                        placeholder="Task Assignment..." 
                        value={newEmployeeTask}
                        onChange={(e) => setNewEmployeeTask(e.target.value)}
                        className="bg-zinc-900 border border-zinc-800 rounded-lg py-1 px-2.5 text-[10px] text-white focus:outline-none focus:border-emerald-500"
                        required
                      />
                      <button 
                        type="submit" 
                        className="bg-emerald-500 hover:bg-emerald-600 text-black text-[10px] font-bold py-1 px-3 rounded-lg transition-all flex items-center justify-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3 animate-spin" /> Insert Record
                      </button>
                    </form>
                  </div>
                )}

                {/* APP 3: JUSTICIA AI */}
                {activeApp === 'justicia' && (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto no-scrollbar p-3.5 flex flex-col gap-3">
                      {chatMessages.map((msg, idx) => (
                        <div 
                          key={idx} 
                          className={`max-w-[85%] rounded-2xl p-2.5 text-[10.5px] leading-relaxed ${
                            msg.sender === 'user' 
                              ? 'bg-purple-600 text-white self-end rounded-tr-none' 
                              : 'bg-zinc-900 text-zinc-200 self-start rounded-tl-none border border-zinc-800'
                          }`}
                        >
                          {msg.text}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="bg-zinc-900 text-zinc-400 self-start rounded-2xl rounded-tl-none p-2.5 text-[10.5px] border border-zinc-800 max-w-[85%] flex items-center gap-1.5">
                          <span className="text-[10px] italic">Justicia NLP is typing</span>
                          <span className="flex gap-0.5">
                            <span className="w-1 h-1 bg-purple-500 rounded-full animate-bounce"></span>
                            <span className="w-1 h-1 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-1 h-1 bg-purple-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Pre-suggested Prompts */}
                    <div className="px-3 pb-1 flex flex-col gap-1.5 border-t border-zinc-900/60 pt-2 bg-zinc-950">
                      <span className="text-[8.5px] text-zinc-500 font-semibold uppercase tracking-wider">Suggested Inquiries</span>
                      <div className="flex flex-col gap-1">
                        {legalPrompts.map((prompt, idx) => (
                          <button 
                            key={idx}
                            onClick={() => handleJusticiaPromptClick(prompt)}
                            className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/40 text-[9.5px] py-1 px-2.5 rounded-lg text-left transition-colors truncate focus:outline-none"
                          >
                            {prompt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chat Input form */}
                    <form onSubmit={handleJusticiaSubmit} className="p-3 bg-zinc-950 border-t border-zinc-900 flex gap-1.5">
                      <input 
                        type="text" 
                        placeholder="Ask Justicia AI..." 
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl py-1 px-3 text-[10.5px] text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                      />
                      <button 
                        type="submit" 
                        className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 rounded-xl transition-all flex items-center justify-center focus:outline-none"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                )}

                {/* Back to Home Button at bottom of app screen */}
                <div className="h-10 bg-zinc-900/20 border-t border-zinc-800/40 flex items-center justify-center">
                  <button 
                    onClick={() => setActiveApp(null)}
                    className="w-20 h-1 bg-zinc-700 hover:bg-zinc-500 rounded-full transition-colors focus:outline-none"
                  ></button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Bar/Gestures space (Simulates standard Android pill) */}
        <div className="h-5 flex items-center justify-center pb-1">
          <div className="w-28 h-1 bg-zinc-700/80 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
