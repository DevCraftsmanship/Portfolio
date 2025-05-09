// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import eclipse from './assets/tech_logo/eclipse.png'
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import boschlogo from './assets/company_logo/bosch_logo.png';
import trlogo from './assets/company_logo/Thonson_Resuters_logo.png';
import adplogo from './assets/company_logo/adp_logo.png';

// Education Section Logo's
import igitlogo from './assets/education_logo/igit_logo.png';
import kvsLogo from './assets/education_logo/kvs_logo.png';

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Eclipse RCP', logo: eclipse }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: boschlogo,
      role: "Senior Software Engineer",
      company: "Bosch Global SOftware Technologies (BGSW)",
      date: "JANUARY 2022 - Present",
      desc: "At BGSW, I specialize in developing Eclipse-based tools to optimize data handling, calibration, and resource management within the automotive software domain. My work focuses on A2L generation, memory optimization in ECUs, and simplifying AUTOSAR configurations using DSL tools. Leveraging technologies such as Eclipse RCP, Core Java, Python, and Xtext, I ensure robust software solutions that enhance efficiency and data consistency. Additionally, I contribute as a rotational Scrum Master and drive test automation using frameworks like GTF and JUnit.",
      skills: [
        "JAVA",
        "ECLIPSE RCP",
        "Xtext",
        "Xtend",
        "Python",
        "AUTOSAR"
      ],
    },
    {
      id: 1,
      img: trlogo,
      role: "Software Engineer",
      company: "Thomson Reuters",
      date: "August 2021 - December 2021",
      desc: "Contributed to the Technology - Product Engineering Content Platform with a focus on the Judicial Domain,specifically supporting 'Westlaw Next.' Specialized in data acquisition by extracting legal data from US County Courts using Shell Scripting and transforming it with Java and SQL to meet platform standards.",
      skills: [
        "Java",
        "SQL",
        "Shell Scripting"
      ],
    },
    {
      id: 2,
      img: adplogo,
      role: "Member Technical",
      company: "ADP Pvt Ltd",
      date: "August 2018 - July 2021",
      desc: "Worked as a Full Stack Developer on a Digital Transformation initiative, automating the processing of Wage Garnishment Orders in compliance with US Federal and State regulations. Achieved over 90% accuracy through end-to-end implementation using Java, Spring Boot, Hibernate, and Oracle SQL.",
      skills: [
        "Java",
        "SQL",
        "Javascript",
        "Bootstrap",
        "HTML",
        "CSS",
        "Spring",
        "Hibernate",
        "Spring Boot"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: igitlogo,
      school: "Indira Gandhi Institute of Technology,Sarang",
      date: "Sept 2014 - Aug 2018",
      grade: "78.6%",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering (B.Tech) from IGIT,Sarang. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IGIT Sarang allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Sc. & Engg.)",
    },
    {
      id: 1,
      img: kvsLogo,
      school: "Kendriya Vidyalaya No.1 Bhubaneswar",
      date: "Apr 2013 - March 2014",
      grade: "91%",
      desc: "I completed my class 12 education from Kendriya Vidyalaya No.1 Bhubaneswar, under the CBSE board, where I studied Physics, Chemistry, Mathematics, English (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: kvsLogo,
      school: "Kendriya Vidyalaya No.1 Bhubaneswar",
      date: "Apr 2011 - March 2012",
      grade: "CGPA 10",
      desc: "I have completed my class 10 education from Kendriya Vidyalaya No.1 Bhubaneswar, under the CBSE board, where I studied Mathematics,Science,Social Science, Hindi and English.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio Webpage",
      description:
        "A modern, fully responsive portfolio webpage designed to showcase personal projects, skills, and experience. The page features a clean and intuitive layout, ensuring an optimal viewing experience across various devices. With interactive sections, smooth navigation, and eye-catching design elements, this portfolio effectively highlights your work and expertise in a visually appealing and user-friendly manner.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/DevCraftsmanship/Portfolio",
      webapp: "https://devcraftsmanship.github.io/Portfolio/",
    },
  ];  