import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SkillTabContent = ({ title, description, skillList }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="w-full text-white/60 mx-auto xl:mx-0">{description}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
        {skillList.map((skill, index) => (
          <li key={index} className="group">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  aria-label={skill.name}
                  className="w-full h-[120px] bg-[#232329] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                  <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
              </Tooltip>
              <p className="mt-2 text-sm text-white/80 text-center">{skill.name}</p>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillTabContent