"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description: "I am a web developer with experience in developing web applications using modern technologies such as React, Next.js, TailwindCSS, and many more.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Doe"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+57) 322-384-1792"
    },
    {
      fieldName: "Experience",
      fieldValue: "6+"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Colombiano"
    },
    {
      fieldName: "Email",
      fieldValue: "munozderecksebastian@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish"
    }
  ]
}

const experience = {
  icon: '/assets/experience.svg',
  title: 'My experience',
  description: 'I have experience in developing web applications using modern technologies such as React, Next.js, TailwindCSS, and many more.',
  items: [
    {
      company: 'Company 1',
      position: 'Frontend Developer',
      duration: '2019 - 2022',
    },
    {
      company: 'Company 2',
      position: 'Frontend Developer 2',
      duration: '2019 - 2023',
    },
    {
      company: 'Company 3',
      position: 'Frontend Developer 3',
      duration: '2019 - 2024',
    },
    {
      company: 'Company 4',
      position: 'Frontend Developer 4',
      duration: '2019 - 2025',
    },
    {
      company: 'Company 2',
      position: 'Frontend Developer 2',
      duration: '2019 - 2023',
    },
    {
      company: 'Company 3',
      position: 'Frontend Developer 3',
      duration: '2019 - 2024',
    },
    {
      company: 'Company 4',
      position: 'Frontend Developer 4',
      duration: '2019 - 2025',
    }
  ]
}

const education = {
  icon: '/assets/experience.svg',
  title: 'My education',
  description: 'I have experience in developing web applications using modern technologies such as React, Next.js, TailwindCSS, and many more.',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Frontend Developer',
      duration: '2019 - 2022',
    },
    {
      institution: 'Online Course Platform',
      degree: 'Frontend Developer',
      duration: '2019 - 2022',
    },
    {
      institution: 'Online Course Platform',
      degree: 'Frontend Developer',
      duration: '2019 - 2022',
    },
    {
      institution: 'Online Course Platform',
      degree: 'Frontend Developer',
      duration: '2019 - 2022',
    },
    {
      institution: 'Online Course Platform',
      degree: 'Frontend Developer',
      duration: '2019 - 2022',
    }
  ]
}

const skills = {
  title: 'My skills',
  description: 'I have experience in developing web applications using modern technologies such as React, Next.js, TailwindCSS, and many more.',
  skillList: [
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      icon: <FaHtml5 />,
      name: 'HTML 5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript'
    },
    {
      icon: <FaReact />,
      name: 'React.js'
    },
    {
      icon: <FaAngular />,
      name: 'Angular.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.1, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full"> 
              experience
            </TabsContent>

            <TabsContent value="education" className="w-full"> 
              education
            </TabsContent>

            <TabsContent value="skills" className="w-full"> 
              skills
            </TabsContent>

            <TabsContent value="about" className="w-full"> 
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume