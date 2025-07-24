import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Najiullah Rao",
  tagline: "Building scalable and impactful digital experiences",
  headline: "Full-Stack Web Developer & Mobile App Developer",
  avatar: "/images/avatar-placeholder.jpeg",
  contactEmail: "najiullahrao@gmail.com", // change if needed
  robotAnimationPath: "/animations/robot-waving.json",
  
  aboutMe: [
    "I'm a passionate full-stack developer experienced in building modern web and mobile applications. I specialize in React, Next.js, and React Native, with strong expertise in Firebase, PostgreSQL, and Stripe integrations.",
    "I love exploring new technologies, contributing to open-source projects, and continuously improving my development skills. My focus is on creating clean, maintainable code and delivering exceptional user experiences.",
    "Currently, I'm building real-world projects like WeatherDesk and PocketTrack, and I'm always excited to take on new challenges and collaborate with innovative teams."
  ],
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/najiullahrao",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/najiullah-rao/",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://x.com/RaoNaji11536", 
      icon: "twitter"
    }
  ],
  
  skills: [
    // Frontend
    { name: "React", proficiency: 90, category: "Frontend" },
    { name: "Next.js", proficiency: 88, category: "Frontend" },
    { name: "JavaScript", proficiency: 95, category: "Frontend" },
    { name: "Tailwind CSS", proficiency: 90, category: "Frontend" },
    { name: "HTML/CSS", proficiency: 95, category: "Frontend" },
    
    // Backend
    { name: "Node.js", proficiency: 85, category: "Backend" },
    { name: "Express.js", proficiency: 80, category: "Backend" },
    { name: "Nest.js", proficiency: 75, category: "Backend" },
    { name: "REST APIs", proficiency: 90, category: "Backend" },
    
    // Mobile
    { name: "React Native", proficiency: 80, category: "Mobile" },
    { name: "Expo", proficiency: 75, category: "Mobile" },
    
    // Databases
    { name: "PostgreSQL", proficiency: 80, category: "Databases" },
    { name: "MongoDB", proficiency: 70, category: "Databases" },
    { name: "Firebase", proficiency: 85, category: "Databases" },
    
    // Tools & DevOps
    { name: "Git", proficiency: 95, category: "Tools" },
    { name: "Vercel", proficiency: 90, category: "DevOps" },
    { name: "Figma", proficiency: 75, category: "Tools" }
  ],
  
  projects: [
    {
      title: "WeatherDesk",
      description: "A weather analytics dashboard with current forecasts, 5-day trends, Stripe subscription plans, and premium features like alerts and historical data.",
      image: "/images/projects/weatherdesk.jpg",
      techStack: ["Next.js", "Stripe", "OpenWeather API", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/najiullahrao/weatherdesk", // update if repo public
      // liveUrl: "https://weatherdesk.vercel.app"
    },
    {
      title: "PocketTrack (Expense Tracker App)",
      description: "A cross-platform mobile app to track expenses and income with charts, filters, and local data storage using AsyncStorage. Firebase sync planned.",
      image: "/images/projects/pockettrack.jpg",
      techStack: ["React Native", "Expo", "AsyncStorage", "react-native-chart-kit"],
      githubUrl: "https://github.com/najiullahrao/pockettrack", // update if repo public
    },
    {
      title: "Bluesky Video & Image Downloader",
      description: "A Next.js app that allows users to download videos and images from Bluesky using custom OAuth (atproto) authentication.",
      image: "/images/projects/bluesky-downloader.jpg",
      techStack: ["Next.js", "OAuth", "atproto", "Tailwind CSS"],
      githubUrl: "https://github.com/najiullahrao/bluesky-downloader"
    },
    {
      title: "Fiverr Clone (Full-Stack)",
      description: "A Fiverr-like freelancing platform built with Next.js and PostgreSQL, featuring user authentication, gig listings, and secure payment integration.",
      image: "/images/projects/fiverr-clone.jpg",
      techStack: ["Next.js", "PostgreSQL", "Firebase Auth", "Tailwind CSS"],
      githubUrl: "https://github.com/najiullahrao/fiverr-clone"
    }
  ]
};
