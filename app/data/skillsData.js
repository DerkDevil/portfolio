// app/data/skillsData.js
import {
    SiTypescript, SiSharp, SiPython, SiJavascript, SiSpringboot, SiDotnet,
    SiNestjs, SiExpress, SiAngular, SiReact, SiNextdotjs, SiTailwindcss,
    SiThymeleaf, SiSonarcloud, SiDocker, SiJenkins, SiGithubactions,
    SiGit, SiTerraform, SiBitbucket, SiJira, SiConfluence, SiPostgresql,
    SiOracle, SiMongodb, SiJasmine, SiJest, SiJunit5, SiPostman, SiSwagger,
    SiSelenium
  } from "react-icons/si";
  
  import {
    FaJava, FaNode, FaHtml5, FaCss3, FaAws
  } from "react-icons/fa";
  
  import {
    MdDiversity2, MdFreeCancellation, MdHandshake, MdHearing,
    MdWorkspacePremium, MdVolunteerActivism, MdSelfImprovement, MdOutlineChangeCircle
  } from "react-icons/md";
  
  
  export const skillsSections = [
    {
      key: "lenguajes",
      title: "Lenguajes",
      description: "Experiencia sólida en lenguajes de programación modernos, aplicando buenas prácticas de desarrollo para construir soluciones eficientes y escalables.",
      skillList: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSharp />, name: "Sharp" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiJavascript />, name: "Javascript" },
        { icon: <SiTypescript />, name: "Typescript" },
      ]
    },
    {
      key: "backend",
      title: "BackEnd",
      description: "He trabajado en el desarrollo de servicios backend robustos, utilizando frameworks modernos y aplicando principios de arquitectura limpia y mantenimiento.",
      skillList: [
        { icon: <SiSpringboot />, name: "Springboot" },
        { icon: <SiDotnet />, name: ".NET" },
        { icon: <SiNestjs />, name: "Nestjs" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <FaNode />, name: "Nodejs" },
      ]
    },
    {
      key: "frontend",
      title: "FrontEnd",
      description: "Diseño y desarrollo de interfaces modernas, responsivas y accesibles con tecnologías de vanguardia centradas en la experiencia de usuario.",
      skillList: [
        { icon: <SiAngular />, name: "Angular" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Nextjs" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
        { icon: <SiThymeleaf />, name: "Thymeleaf" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
      ]
    },
    {
      key: "cloud_devops",
      title: "Cloud - DevOps - Gestión",
      description: "Conocimientos en herramientas de integración, despliegue continuo, automatización, gestión de versiones y plataformas en la nube como AWS.",
      skillList: [
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <SiGithubactions />, name: "Github Actions" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <SiSonarcloud />, name: "SonarCloud" },
        { icon: <SiBitbucket />, name: "Bitbucket" },
        { icon: <SiJira />, name: "Jira" },
        { icon: <SiConfluence />, name: "Confluence" },
      ]
    },
    {
      key: "testing_bd",
      title: "Testing - BD - Otros",
      description: "Experiencia en pruebas automatizadas, documentación de APIs, y trabajo con bases de datos relacionales y NoSQL para garantizar calidad y rendimiento.",
      skillList: [
        { icon: <SiJest />, name: "Jest" },
        { icon: <SiJunit5 />, name: "JUnit" },
        { icon: <SiSelenium />, name: "Selenium" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiSwagger />, name: "Swagger" },
        { icon: <SiJasmine />, name: "Jasmine" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiOracle />, name: "Oracle" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ]
    },
    {
      key: "habilidades_blandas",
      title: "Habilidades blandas",
      description: "Fortalezas personales que potencian mi perfil profesional, permitiéndome colaborar, liderar, adaptarme al cambio y aprender de forma continua.",
      skillList: [
        { icon: <MdDiversity2 />, name: "Trabajo en equipo" },
        { icon: <MdFreeCancellation />, name: "Gestión del tiempo" },
        { icon: <MdHandshake />, name: "Negociación efectiva" },
        { icon: <MdHearing />, name: "Escucha activa" },
        { icon: <MdWorkspacePremium />, name: "Competitividad" },
        { icon: <MdVolunteerActivism />, name: "Liderazgo" },
        { icon: <MdSelfImprovement />, name: "Autoaprendizaje" },
        { icon: <MdOutlineChangeCircle />, name: "Adaptabilidad" },
      ]
    }
  ];
  