import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m a passionate full-stack developer with 3.5 years of experience building robust and scalable web applications. Over the years, I’ve worked extensively with front-end technologies like React and Next.js, and back-end tools such as Node.js, MySQL, PostgreSQL, and MongoDB. I enjoy turning ideas into practical, efficient solutions that not only solve problems but also provide smooth and engaging user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Frontend Developer",
    company: "Tata Consultancy Service",
    description: `Designed and developed user interfaces for web applications using JavaScript and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "Jest", "Cypress"],
  }
];

export const PROJECTS = [
  {
    title: "Dr. Resume",
    liveURL:"https://ai-resume-analyzer-omega-eight.vercel.app/",
    image: project1,
    description:
      "A fully functional resume analyzer website with features like ATS score, resume feedback, and user authentication.",
    technologies: ["React", "Redux", "Typescript", "Puter.js"],
  },
  {
    title: "Video Chat Application",
    liveURL:"https://vchat-poll.vercel.app/",
    image: project2,
    description:
      "An application for real-time video calling with one-on-one.",
    technologies: ["React", "NodeJs", "Socket.io", "WebRTC"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: [ "React", "TailwindCSS"],
  // },
  {
    title: "PayTm Mini Clone",
    liveURL : "https://cohort-neon.vercel.app" 
    image: project4,
    description:
      "A mini paytm clone with user authentication and mangement, enabling users to register,login and manage their accoutns securely and also with features like fake money transfer.",
    technologies: ["React","Express", "NodeJs", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Hyderabad, India",
  phoneNo: "+91 7013938988 ",
  email: "shaikfayazuddin18@gmail.com",
};
