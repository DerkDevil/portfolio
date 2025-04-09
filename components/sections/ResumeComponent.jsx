"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaAngular, FaJava, FaAws, FaGithub, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiSharp, SiPython, SiPostgresql, SiMongodb, SiSonarqube, SiJest } from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


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
      icon: <FaJava />,
      name: 'Java'
    },
    {
      icon: <FaAngular />,
      name: 'Angular.js'
    },
    {
      icon: <FaAws />,
      name: 'AWS'
    },
    {
      icon: <FaReact />,
      name: 'React.js'
    },
    {
      icon: <SiSharp />,
      name: 'Sharp'
    },
    {
      icon: <SiPython />,
      name: 'Python'
    },

    {
      icon: <SiTypescript />,
      name: 'Typescript'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    },
    {
      icon: <FaGithub />,
      name: 'Github'
    },
    {
      icon: <FaDocker />,
      name: 'Docker'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      icon: <FaHtml5 />,
      name: 'HTML 5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3'
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL'
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB'
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-20 xl:py-20">
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full"> 
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full"> 
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
              </div>
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

export default ResumeSection