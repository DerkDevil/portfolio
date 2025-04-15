"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { skillsSections } from "@/app/data/skillsData";
import SkillTabContent from "@/components/SkillTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={ref} className="min-h-[90vh] flex items-center justify-center pt-10 xl:pt-20">
      <div className="container mx-auto">
        {inView && (
          <>
            {isMobile ? (
              <Accordion
                type="multiple"
                defaultValue={["lenguajes"]}
                className="w-full flex flex-col gap-4"
              >
                {skillsSections.map(({ key, title, description, skillList }) => (
                  <AccordionItem key={key} value={key} className="border-none">
                    <AccordionTrigger className="w-full px-4 py-3 text-center font-bold rounded-md bg-[#232329] text-white hover:bg-accent/80 transition-all data-[state=open]:bg-accent data-[state=open]:text-white flex justify-between items-center">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <SkillTabContent
                        title={title}
                        description={description}
                        skillList={skillList}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Tabs defaultValue="lenguajes" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                  {skillsSections.map(({ key, title }) => (
                    <TabsTrigger key={key} value={key}>
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="min-h-[70vh] w-full">
                  {skillsSections.map(({ key, title, description, skillList }) => (
                    <TabsContent key={key} value={key} className="w-full">
                      <SkillTabContent
                        title={title}
                        description={description}
                        skillList={skillList}
                      />
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SkillsSection; 
