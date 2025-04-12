"use client";

import { CalendarIcon, Building2Icon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const experiences = [
  {
    company: "Periferia IT Group",
    client: "Banco de Bogotá",
    position: "Senior | Fullstack Cloud",
    period: "29/01/2024 - Actual",
    description: "Responsable del diseño e implementación de sistema para la gestión de contratación de corresponsalía bancaria.",
    technologies: ["Angular", "TypeScript", "SpringBoot", "Java", "AWS", "Node.js", "GitHub", "Postman", "SonarCloud", "PostgreSQL", "Jira"],
  },
  {
    company: "Assist Consultores",
    client: "Banco de Bogotá",
    position: "Consultant | Fullstack Cloud",
    period: "24/06/2023 - 11/01/2024",
    description: "Responsable del diseño e implementación de sistema para la gestión de contratación de corresponsalía bancaria.",
    technologies: ["Angular", "SpringBoot", "Java", "AWS", "Node.js", "GitHub", "Postman", "SonarCloud", "PostgreSQL", "Jira", "Scrum"],
  },
  {
    company: "Indra Company",
    client: "Novaventa",
    position: "Software Engineer 2",
    period: "27/04/2022 - 21/07/2023",
    description: "Contribuí al desarrollo de una plataforma de gestión de ventas, integrando APIs y servicios distribuidos para mejorar la comunicación entre áreas comerciales.",
    technologies: ["Angular", "Micronaut", "Java", "Kafka", "Jenkins", "Docker", "Jira", "Scrum"],
  },
  {
    company: "Grupo CMC Colombia",
    client: "BBVA",
    position: "Programador Middle",
    period: "29/04/2021 - 22/04/2022",
    description: "Participé en el desarrollo de productos Fintech, construyendo servicios backend robustos y componentes frontend reutilizables bajo arquitectura propia del banco.",
    technologies: ["Thymeleaf", "Java", "Spring", "JUnit", "Kafka", "Jenkins", "Docker", "PostgreSQL", "Jira", "Scrum"],
  },
  {
    company: "Aportes en Línea",
    client: "No aplicable",
    position: "Analista II | Semi-Senior",
    period: "01/01/2021 - 24/03/2021",
    description: "Desarrollé e integré módulos web internos, mejorando procesos administrativos mediante la automatización de reportes y validaciones.",
    technologies: ["JavaScript", "TypeScript", ".NET", "Node.js", "SQL Server", "SSIS", "React", "Angular"],
  },
  {
    company: "Aportes en Línea",
    client: "No aplicable",
    position: "Analista I | Junior",
    period: "01/11/2019 - 31/12/2020",
    description: "Encargado de construir interfaces funcionales y servicios REST para proyectos internos, colaborando activamente en la detección y resolución de errores.",
    technologies: [".NET", "Node.js", "JavaScript", "TypeScript", "SQL Server", "SSIS", "React", "Angular"],
  },
  {
    company: "Mareigua Ltda",
    client: "Aportes en Línea",
    position: "Analista I | Junior",
    period: "08/07/2019 - 31/10/2019",
    description: "Diseñé soluciones a medida en proyectos de integración con Excel y participé en el mantenimiento de sistemas legados.",
    technologies: [".NET", "JavaScript", "ASP.NET", "SQL Server"],
  }
];


const WorkComponent = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-5 xl:pt-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-accent inline-block text-white">
          Mi Experiencia
        </h2>

        <Carousel
          orientation="horizontal"
          opts={{ align: "start", loop: false }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {experiences.map((exp, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6 py-6">
                <div className="h-full">
                  <Card className="h-full bg-[#232327] border border-accent text-white p-6 rounded-lg flex flex-col">
                    <CardContent className="p-0 flex flex-col justify-items-start h-full">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{exp.company}</h3>
                            <p className="text-sm text-muted-foreground">{exp.position}</p>
                          </div>
                        </div>

                        <div className="flex items-center text-muted-foreground text-sm">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>

                        {exp.client && (
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Building2Icon className="w-4 h-4 mr-2" />
                            Cliente: {exp.client}
                          </div>
                        )}

                        <p className="text-sm text-white/80 md:min-h-[140px] lg:min-h-[160px] xl:min-h-[120px]">{exp.description}</p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 min-h-[72px] items-end">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex justify-center gap-4">
            <CarouselPrevious className="static transform-none text-accent border-accent hover:bg-accent hover:text-black" />
            <CarouselNext className="static transform-none text-accent border-accent hover:bg-accent hover:text-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WorkComponent;
