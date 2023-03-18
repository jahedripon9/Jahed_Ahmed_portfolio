// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Jahed",
    LastName: "Ahmed",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Web programming language for interactivity.",
        logo: python,
      },
      {
        name: "MongoDB",
        para: "NoSQL database for modern applications.",
        logo: sketch,
      },
      {
        name: "Express js",
        para: "Node.js web application framework.",
        logo: ps,
      },
      {
        name: "React js",
        para: "JavaScript library for building interfaces.",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "JavaScript runtime for server-side.",
        logo: nodejs,
      },
      {
        name: "Figma",
        para: "Design tool for collaborative wireframing.",
        logo: figma,
      },
      
      
      
      
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "web development services including website design, front-end and back-end development, e-commerce solutions, and website maintenance to create modern and functional websites.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "UX/UI design services, including user research, wireframing, prototyping, and visual design, to create engaging and intuitive digital experiences that meet users' needs",
        logo: services_logo2,
      },
      {
        title: "MERN Stack",
        para: "MERN stack development services, including MongoDB, Express.js, React, and Node.js, to create robust and scalable web applications with a seamless user experience",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "DJI Official Demo Site",
        image: project1,
        link: 'https://dji-official-website.web.app/',
      },
      {
        title: "Food Wagon",
        image: project2,
      },
      {
        title: "Ibn Sina Hospital Limited",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with the MERN stack was seamless. The website is fast, responsive and easy to use. Would definitely recommend!”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Great job on the MERN Stack project! The team was communicative, responsive, and delivered a high-quality product on time.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“I'm impressed with the MERN Stack application you developed for my business. It's scalable, user-friendly and has exceeded my expectations. Thank you!”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“I couldn't be happier with the MERN Stack project. The developers were skilled, professional, and went above and beyond to meet my needs. Highly recommend!”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "React Developer | Building Scalable and User-Friendly Web Applications",
    btnText: "Resume",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "jahedahmed3170@gmail.com",
        icon: GrMail,
        link: "mailto:jahedahmed3170@gmail.com",
      },
      {
        text: "+880 1726 308 391",
        icon: MdCall,
        link: "#",
      },
      {
        text: "jahedripon9",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/jahedripon9/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
