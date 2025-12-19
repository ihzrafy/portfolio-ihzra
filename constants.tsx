
import { Experience, Education, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: 'Ihzra Fahrullizian Yusuf',
  title: 'Full Stack Developer',
  email: 'ihzrafahrullizian@gmail.com',
  phone: '+6285724182324',
  linkedin: 'https://www.linkedin.com/in/ihzra-fahrullizian-8a054420b',
  github: 'https://github.com/ihzrafy',
  location: 'Bogor, West Java, Indonesia',
  bio: 'Fresh graduate in Software Engineering Technology from IPB University with hands-on experience in real-world web development. Proficient in React, Next.js, Laravel, and Express.js.',
  profileImage: '/assets/profile/me.png', // Organized path
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'PT Amerta Indah Otsuka',
    location: 'Sukabumi, Indonesia',
    period: 'Jan 2025 - Present',
    role: 'Full Stack Developer',
    logo: '/assets/logos/otsuka.png',
    description: 'AIO is a multinational manufacturing company producing health products such as Pocari Sweat and SOYJOY. Participated in developing various internal applications.',
    projects: [
      {
        title: 'SiSuka AI Chatbot',
        description: 'Built with React TypeScript and Express.js, designed to help employees quickly access internal info.',
        tech: ['React', 'TypeScript', 'Express.js', 'AI'],
        images: [
          'https://picsum.photos/seed/sisuka1/800/600',
          'https://picsum.photos/seed/sisuka2/800/600'
        ]
      },
      {
        title: 'AI Management System',
        description: 'Platform developed using Angular and Express.js to centrally manage various AI solutions.',
        tech: ['Angular', 'Express.js'],
        images: [
          'https://picsum.photos/seed/aims1/800/600',
          'https://picsum.photos/seed/aims2/800/600'
        ]
      },
      {
        title: 'Canteen App',
        description: 'Managing employee food consumption via tap system for ordering and attendance.',
        tech: ['Angular', 'Express.js'],
        images: ['https://picsum.photos/seed/canteen/800/600']
      },
      {
        title: 'Transportation Famday App',
        description: 'Management system for company events featuring participant registration and bus assignment.',
        tech: ['React', 'Vite', 'Express.js'],
        images: ['https://picsum.photos/seed/famday/800/600']
      },
      {
        title: 'Otsuka Quizz App',
        description: 'Mobile quiz application for factory visitors to enhance learning during tours.',
        tech: ['Flutter', 'Mobile'],
        images: ['https://picsum.photos/seed/quiz/800/600']
      },
    ],
  },
  {
    company: 'Badan Pangan Nasional (BAPANAS)',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2024 - Dec 2024',
    role: 'Web Developer',
    logo: '/assets/logos/bapanas.png',
    description: 'Government agency responsible for national food security policies. Developed various internal applications using Laravel.',
    projects: [
      {
        title: 'SIJADIN',
        description: 'Web-based application to manage digital submissions and reporting of employee business trips.',
        tech: ['Laravel', 'PHP', 'PostgreSQL'],
        images: ['https://picsum.photos/seed/sijadin/800/600']
      },
      {
        title: 'Short Link & Microsite',
        description: 'Platform for creating short URLs and microsites to support public communication.',
        tech: ['Laravel', 'PHP'],
        images: ['https://picsum.photos/seed/shortlink/800/600']
      },
      {
        title: 'Official Letter Revision',
        description: 'Internal application facilitating efficient revision and management of official letters.',
        tech: ['Laravel', 'PHP'],
        images: ['https://picsum.photos/seed/letter/800/600']
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Institut Pertanian Bogor (IPB)',
    location: 'Bogor, Indonesia',
    period: 'Aug 2021 - Jul 2025',
    degree: 'Bachelor of Applied Software Engineering',
    grade: '3.58 / 4.00',
  },
  {
    institution: 'SMAN 1 Cikembar',
    location: 'Sukabumi, Indonesia',
    period: 'Jun 2018 - Jun 2021',
    degree: 'High School Science',
  },
];

export const SKILLS = {
  hard: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'React JS', 'Next JS', 'Angular', 'Node JS', 'Express.js', 'Laravel', 'Flutter', 'MySql', 'PostgreSql', 'Git'],
  soft: ['Team collaboration', 'Problem Solving', 'Critical Thinking'],
  achievements: ['BNSP Certified Software Engineering Competency (2025)'],
};
