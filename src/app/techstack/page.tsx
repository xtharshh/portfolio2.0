import "../../styles/techstack.css";
import { RiReactjsFill } from "react-icons/ri";
import { MdApi } from "react-icons/md";
import { IoLogoVercel } from "react-icons/io5";
import { SiMui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiExpress, SiMysql } from "react-icons/si";
import {
  DiJsBadge,
  DiHtml5,
  DiMongodb,
  DiCss3,
  DiBootstrap,
  DiNodejsSmall,
  DiGit,
  DiJqueryLogo,
} from "react-icons/di";
import { 
  SiAndroidstudio, 
  SiFirebase, 
  SiGoogleplay,
  SiRedux,
  SiNextdotjs,
  SiShadcnui
} from "react-icons/si";
import { TbBrandGoogleAnalytics, TbBrandReactNative } from "react-icons/tb";
import { SiAmazon } from "react-icons/si";

const frontendSkills = [
  { 
    name: "HTML", 
    logo: <DiHtml5 size={40} className="text-orange-500 dark:text-orange-400" /> 
  },
  { 
    name: "CSS", 
    logo: <DiCss3 size={40} className="text-blue-500 dark:text-blue-400" /> 
  },
  {
    name: "Tailwind CSS",
    logo: <SiTailwindcss size={40} className="text-cyan-500 dark:text-cyan-400" />,
  },
  { 
    name: "JavaScript",
    logo: <DiJsBadge size={40} className="text-yellow-500 dark:text-yellow-400" />
  },
  { 
    name: "jQuery", 
    logo: <DiJqueryLogo size={40} className="text-blue-500 dark:text-blue-400" /> 
  },
  { 
    name: "React.js", 
    logo: <RiReactjsFill size={40} className="text-cyan-500 dark:text-cyan-400" /> 
  },
  {
    name: "React Native",
    logo: <TbBrandReactNative size={40} className="text-cyan-500 dark:text-cyan-400" />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript size={40} className="text-blue-600 dark:text-blue-500" />,
  },
  {
    name: "Material UI",
    logo: <SiMui size={40} className="text-blue-600 dark:text-blue-500" />,
  },
  {
    name: "BootStrap",
    logo: <DiBootstrap size={40} color="purple" />,
  },
  {
    name: "Shadcn UI",
    logo: <SiShadcnui size={40} className="text-gray-800 dark:text-gray-200" />,
  },
  {
    name: "React Bits",
    logo: <RiReactjsFill size={40} className="text-[#ff4d8d] dark:text-[#ff4d8d]" />,
  },
  {
    name: "EJS",
    logo: <DiJsBadge size={40} className="text-green-600 dark:text-green-500" />,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    logo: <DiNodejsSmall size={40} className="text-green-600 dark:text-green-500" />,
  },
  { 
    name: "Express.js", 
    logo: <SiExpress size={40} className="text-gray-800 dark:text-gray-200" /> 
  },
  {
    name: "Next.js",
    logo: <SiNextdotjs size={40} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "MongoDB",
    logo: <DiMongodb size={40} className="text-green-600 dark:text-green-500" />,
  },
  {
    name: "SQL",
    logo: <SiMysql size={40} className="text-blue-800 dark:text-blue-600" />,
  },
  { 
    name: "Git", 
    logo: <DiGit size={40} className="text-orange-600 dark:text-orange-500" /> 
  },
  { 
    name: "API", 
    logo: <MdApi size={40} className="text-gray-800 dark:text-gray-200" /> 
  },
  { 
    name: "Vercel", 
    logo: <IoLogoVercel size={40} className="text-gray-900 dark:text-white" /> 
  },
  {
    name: "AWS",
    logo: <SiAmazon size={40} className="text-orange-500 dark:text-orange-400" />,
  },
];

const androidSkills = [
  {
    name: "React Native",
    logo: <TbBrandReactNative size={40} className="text-cyan-500 dark:text-cyan-400" />,
  },
  {
    name: "Android Studio",
    logo: <SiAndroidstudio size={40} className="text-green-500 dark:text-green-400" />,
  },
  {
    name: "Redux",
    logo: <SiRedux size={40} className="text-purple-600 dark:text-purple-500" />,
  },
  {
    name: "Firebase",
    logo: <SiFirebase size={40} className="text-yellow-500 dark:text-yellow-400" />,
  },
  {
    name: "Google Analytics",
    logo: <TbBrandGoogleAnalytics size={40} className="text-orange-500 dark:text-orange-400" />,
  },
  {
    name: "Play Console",
    logo: <SiGoogleplay size={40} className="text-green-600 dark:text-green-500" />,
  },
];

export default function TechStack() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#1A1625] dark:to-[#1A1625] py-20">
      <div className="tech-stack-container max-w-7xl mx-auto px-4">
        <span className="block text-2xl text-gray-600 dark:text-gray-400 text-center font-mono font-bold mb-8 animate-fade-in">
          Explore
        </span>
        
        <header className="mb-12">
          <h1 className="title animate-slide-up">My Skills</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="section frontend zoom bg-white/50 dark:bg-[#2a2438]/50 backdrop-blur-md rounded-2xl p-8
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
                        hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                        transition-all duration-300">
            <h2 className="text-center mb-8 text-2xl font-cursive bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text">
              Frontend Development
            </h2>
            <ul className="skill-list">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="skill-item font-mono text-xl group">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {skill.logo}
                  </div>
                  <span className="skill-name text-gray-700 dark:text-gray-200 group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] transition-colors">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section backend zoom bg-white/50 dark:bg-[#2a2438]/50 backdrop-blur-md rounded-2xl p-8
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
                        hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                        transition-all duration-300">
            <h2 className="text-center mb-8 text-2xl font-cursive bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text">
              Backend Development
            </h2>
            <ul className="skill-list">
              {backendSkills.map((skill, index) => (
                <li key={index} className="skill-item font-mono text-xl group">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {skill.logo}
                  </div>
                  <span className="skill-name text-gray-700 dark:text-gray-200 group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] transition-colors">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section android zoom bg-white/50 dark:bg-[#2a2438]/50 backdrop-blur-md rounded-2xl p-8
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
                        hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                        transition-all duration-300
                        md:col-span-2">
            <h2 className="text-center mb-8 text-2xl font-cursive bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text">
              Android Development
            </h2>
            <ul className="skill-list grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {androidSkills.map((skill, index) => (
                <li key={index} className="skill-item font-mono text-xl group">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {skill.logo}
                  </div>
                  <span className="skill-name text-gray-700 dark:text-gray-200 group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] transition-colors">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
