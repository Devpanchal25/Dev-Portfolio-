import { Project, Education, Skill, Certificate, Internship } from './types';

export const personalInfo = {
  name: 'Panchal Dev Ghanshyambhai',
  firstName: 'Dev',
  title: 'Android Developer',
  location: 'Vadodara, Gujarat, India',
  email: 'devit250705@gmail.com',
  phone: '+91 8866081024',
  github: 'https://github.com/Devpanchal25',
  linkedin: 'https://www.linkedin.com/in/dev-panchal-302636384',
  credly: 'https://www.credly.com/users/dev_25', // from Dev_25 on Credly
  birthDate: '25/07/2005',
  hobbies: ['Cricket', 'Travelling', 'Movies'],
  languages: ['English', 'Hindi', 'Gujarati'],
  bio: 'Android Developer passionate about building scalable Android applications using modern Android technologies including Kotlin, Jetpack Compose, MVVM, Hilt, Retrofit, Coroutines, and Firebase. I enjoy solving real-world problems through clean architecture, intuitive UI, and high-performance mobile applications.'
};

export const internships: Internship[] = [
  {
    id: 'mindmatrix',
    role: 'Android App Development Intern',
    company: 'MindMatrix.io (CL Infotech Pvt. Ltd.)',
    companyDetail: 'MoU Partner of Gujarat Technological University (GTU)',
    period: '8th Jan 2026 – 25th Apr 2026',
    location: 'Online / Bengaluru, India',
    bullets: [
      'Engineered native Android applications using Kotlin, Jetpack Compose, and Android Studio in accordance with industry best practices.',
      'Hands-on development with Android Studio, Google Cloud Labs, and Google AI Studio.',
      'Designed intuitive UI/UX components, built application prototypes, and conducted iterative debugging and feature enhancements.',
      'Implemented Firebase backend services, authentication flows, testing suites, and standard Android release workflows.'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Google AI Studio', 'Google Cloud Labs', 'Firebase']
  },
  {
    id: 'ibm-skillsbuild',
    role: 'Artificial Intelligence Intern',
    company: 'IBM SkillsBuild / CSRBOX',
    companyDetail: 'CSRBOX Industry Partnership Program',
    period: 'June 2025 – July 2025',
    location: 'Online',
    bullets: [
      'Completed an intensive training program on Natural Language Processing (NLP), AI Ethics, and Prompt Engineering.',
      'Researched, designed, and deployed "Justicia AI" as a capstone project aimed at digital legal accessibility.'
    ],
    technologies: ['Python', 'NLP', 'AI Ethics', 'Prompt Engineering', 'JavaScript', 'Google AI Studio']
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'Kotlin', level: 'Expert', category: 'languages' },
  { name: 'Java', level: 'Expert', category: 'languages' },
  { name: 'Python', level: 'Advanced', category: 'languages' },
  { name: 'C', level: 'Intermediate', category: 'languages' },
  { name: 'JavaScript', level: 'Advanced', category: 'languages' },

  // Android
  { name: 'Jetpack Compose', level: 'Expert', category: 'android' },
  { name: 'MVVM Architecture', level: 'Expert', category: 'android' },
  { name: 'Dagger Hilt', level: 'Expert', category: 'android' },
  { name: 'Retrofit', level: 'Expert', category: 'android' },
  { name: 'Coroutines', level: 'Expert', category: 'android' },
  { name: 'StateFlow', level: 'Expert', category: 'android' },
  { name: 'Navigation Compose', level: 'Expert', category: 'android' },
  { name: 'Room Database', level: 'Expert', category: 'android' },
  { name: 'Firebase', level: 'Advanced', category: 'android' },
  { name: 'Material Design 3', level: 'Expert', category: 'android' },

  // Web
  { name: 'React', level: 'Advanced', category: 'web' },
  { name: 'HTML5', level: 'Expert', category: 'web' },
  { name: 'CSS3', level: 'Expert', category: 'web' },
  { name: 'Tailwind CSS', level: 'Expert', category: 'web' },

  // Tools
  { name: 'Android Studio', level: 'Expert', category: 'tools' },
  { name: 'Git', level: 'Expert', category: 'tools' },
  { name: 'GitHub', level: 'Expert', category: 'tools' },
  { name: 'Postman', level: 'Expert', category: 'tools' },
  { name: 'VS Code', level: 'Advanced', category: 'tools' },
  { name: 'Google AI Studio', level: 'Advanced', category: 'tools' },

  // Concepts
  { name: 'REST APIs', level: 'Expert', category: 'concepts' },
  { name: 'Dependency Injection', level: 'Expert', category: 'concepts' },
  { name: 'Repository Pattern', level: 'Expert', category: 'concepts' },
  { name: 'SQLite', level: 'Advanced', category: 'concepts' },
  { name: 'MySQL', level: 'Intermediate', category: 'concepts' },
  { name: 'NLP & AI concepts', level: 'Advanced', category: 'concepts' }
];

export const projects: Project[] = [
  {
    id: 'skycast',
    title: 'SkyCast – Weather Forecast App',
    description: 'Modern Android weather application developed using Kotlin and Jetpack Compose following MVVM architecture. Uses WeatherAPI with Retrofit to display real-time weather, city search, and responsive Material Design 3 UI.',
    details: [
      'Developed a weather application using Kotlin and Jetpack Compose with MVVM architecture.',
      'Integrated WeatherAPI using Retrofit to display real-time weather, 7-day forecast, wind speed, humidity, and UV Index.',
      'Implemented offline-first capabilities or caching mechanisms using StateFlow.',
      'Designed a sleek Material 3 UI with beautiful glassmorphism weather cards and localized search features.'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Retrofit', 'Coroutines', 'StateFlow', 'Material Design 3'],
    githubUrl: 'https://github.com/Devpanchal25/SkyCast',
    demoUrl: '#demo',
    type: 'android',
    featured: true
  },
  {
    id: 'employee-tracker',
    title: 'Employee Performance Tracker',
    description: 'Android application to manage employee records, assign tasks, and track employee performance using Room Database and Jetpack Compose.',
    details: [
      'Built an Android application to manage employee records, tasks, and historical performance.',
      'Implemented robust CRUD operations using Room Database with MVVM architecture and Repository Pattern.',
      'Designed a modern, highly interactive dashboard with tasks categorized by status (To Do, In Progress, Completed).',
      'Optimized application performance and memory usage through asynchronous Room queries via Flow.'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'MVVM', 'StateFlow', 'Material 3'],
    githubUrl: 'https://github.com/Devpanchal25',
    demoUrl: '#demo',
    type: 'android',
    featured: true
  },
  {
    id: 'justicia-ai',
    title: 'Justicia AI – Legal Rights Assistant',
    description: 'AI-powered legal rights assistant designed to provide legal guidance through intelligent conversations and automated email responses.',
    details: [
      'Developed Justicia AI, an AI-powered legal rights assistant to provide instant guidance on statutory rights.',
      'Implemented automated email-based query handling and AI-generated responses using natural language models.',
      'Applied NLP (Natural Language Processing) concepts and prompt engineering to improve conversation accuracy and relevance.',
      'Designed a dual Python & JavaScript backend architecture to optimize processing speed and accuracy.'
    ],
    technologies: ['Python', 'JavaScript', 'NLP', 'AI', 'Email Automation', 'Google AI Studio'],
    githubUrl: 'https://github.com/Devpanchal25',
    demoUrl: '#demo',
    type: 'ai',
    featured: true
  }
];

export const educationList: Education[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Information Technology',
    institution: 'Sardar Patel College of Engineering and Technology',
    period: '2023 – 2026',
    location: 'Anand, Gujarat, India',
    cgpa: '7.44'
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Information Technology',
    institution: 'Parul University',
    period: '2020 – 2023',
    location: 'Vadodara, Gujarat, India',
    cgpa: '7.46'
  }
];

export const certificates: Certificate[] = [
  {
    title: 'Android App Development',
    issuer: 'MindMatrix.io (CL Infotech Pvt. Ltd.)',
    partner: 'MoU Partner of Gujarat Technological University (GTU)',
    date: '25th April 2026',
    credentialId: 'Mx25INT00216',
    enrollmentNo: '231243116007',
    collegeName: 'Sardar Patel College of Engineering',
    period: '8th Jan 2026 – 25th Apr 2026',
    verifyUrl: 'https://lms.mindmatrix.io/',
    bullets: [
      'Successfully completed an intensive 3.5-month internship in Android App Development.',
      'Developed native Android applications using Kotlin, Jetpack Compose, and Android Studio following industry standards.',
      'Hands-on experience with Google Cloud Labs, Google AI Studio, and Firebase workflows.',
      'Mastered UI/UX prototyping, feature development, debugging, and iterative release processes.'
    ]
  },
  {
    title: 'IBM SkillsBuild AI Internship Certificate',
    issuer: 'IBM SkillsBuild / CSRBOX',
    partner: 'CSRBOX Industry Partnership Program',
    date: 'July 2025',
    credentialId: 'CSRBOX-IBM-AI-2025-9824',
    verifyUrl: 'https://skillsbuild.org/',
    bullets: [
      'Completed a rigorous 4-week structured internship on Artificial Intelligence concepts and NLP.',
      'Successfully developed and presented "Justicia AI" as a capstone project aimed at digital legal equity.',
      'Certified in Prompt Engineering, AI Ethics, Chatbot Design, and Agile workflows.'
    ]
  }
];

