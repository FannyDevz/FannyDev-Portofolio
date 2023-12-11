import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Classroom from "../public/classroom.png";
import Karir from "../public/karirku.png";
import Malnutition from "../public/malnutition.png";
import Homepage from "../public/homepage.png";
import { Experience, List, Project, Social } from "./model";

export const list: List[] = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Work",
    link: "work",
  },
  {
    title: "Contact",
    link: "contact",
  },
];
export const social: Social[] = [
  {
    icon: FiGithub,
    link: "https://github.com/FannyDevz",
    title: "Github",
  },
  {
    icon: TbBrandTelegram,
    link: "https://t.me/fannydev",
    title: "Telegram",
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/fanny-bagus-ramadhan",
    title: "Linkedin",
  },
  {
    icon: AiOutlineMail,
    email: "fannybagus9f@gmail.com",
    link: "mailto:fannybagus9f@gmail.com",
    title: "Email",
  },
];

export const project: Project[] = [
  {
    title: "Homepage",
    desc: "I have developed a customized homepage that enhances user experience by incorporating various features. The design reflects the client's brand and style preferences. Users can save their favorite websites using the bookmark functionality for easy access. A weather widget displays real-time weather conditions. Additionally, a Google search engine is integrated for convenient web searching directly from the homepage. These features combine to create a personalized and user-friendly browsing experience.",
    tech: "Laravel, PHP, Javascript, Bootstrap CSS",
    link: "https://github.com/FannyDevz/HomepageWithBookmark",
    image: Homepage,
  },
  {
    title: "Absent System And Web Landing Page",
    desc: "In my project, I have developed an attendance system that incorporates geolocation and photo features, accompanied by a landing page. This system allows users to clock in and out using geolocation technology, automatically recording their attendance location. Additionally, users can take a photo for further verification. The well-designed landing page provides easy access to the attendance features and important information related to the attendance process.",
    tech: "PHP, JavaScript, VueJs, Bootstrap CSS",
    link: "https://github.com/FannyDevz/",
    image: Karir,
  },
  {
    title: "Decision Support System (Malnutrition)",
    desc: "I have developed a Laravel-based decision support system for infant malnutrition. It utilizes various factors such as weight, height, age, and dietary information to accurately assess and diagnose malnutrition in infants. This system aids healthcare professionals in making informed decisions and creating personalized treatment plans. With efficient data management and a user-friendly interface, the system enables effective monitoring and intervention for addressing infant malnutrition.",
    tech: "Laravel, VueJS, PHP, Bootstrap CSS, Javascript",
    link: "https://github.com/FannyDevz/Sistem-Pakar-Malnutrisi",
    image: Malnutition,
  },
  {
    title: "Classroom System",
    desc: "I have developed an online learning system using Laravel. It provides a platform for educational institutions and individuals to deliver and manage online courses. With features like user registration, course enrollment, and progress tracking, it offers a flexible and interactive learning environment. The system utilizes the Laravel framework for secure authentication and efficient data management, enhancing the overall online learning experience.",
    tech: "Laravel, PHP, Javascript, Bootstrap CSS",
    link: "https://github.com/FannyDevz/Classroom",
    image: Classroom,
  },
];

export const otherProject: Project[] = [
  {
    id: 0,
    title: "Anime List",
    desc: "I created a system for an anime forum by utilizing public A.P.I. available, making it easier for me to mark the anime I watch and discuss with my friends about existing anime",
    tech: "NextJS ,ReactJS",
    link: "https://github.com/FannyDevz",
  },
  {
    id: 1,
    title: "Anime Streaming",
    desc: "I created a system for streaming anime by utilizing public A.P.I. available, making it easier to watch anime that I like",
    tech: "NodeJS",
    link: "https://github.com/FannyDevz",
  },
  {
    id: 2,
    title: "Chat App",
    desc: "I have developed a web-based chatbot that utilizes AI and natural language processing. It provides automated assistance and real-time responses to user inquiries. The chatbot improves user experience and customer service by offering efficient solutions and information.",
    tech: "VueJS, JavaScript, PHP",
    link: "https://github.com/FannyDevz",
  },
  {
    id: 3,
    title: "Billing System",
    desc: "I have developed a billing system that automates invoice generation, payment tracking, and financial management. It streamlines billing processes, reduces errors, and improves efficiency for businesses. With features like invoice customization and payment reminders, the system ensures accurate and timely financial control.",
    tech: "PHP, JavaScript, CSS",
    link: "https://github.com/FannyDevz",
  },
  {
    id: 4,
    title: "Pharmacy Management",
    desc: "I have developed a web-based pharmacy management system. It simplifies pharmacy operations with features like inventory management, prescription handling, and sales tracking. The system improves efficiency, inventory control, and customer service. With a user-friendly interface and secure data management, it supports effective pharmacy management.",
    tech: "PHP, JS, CSS",
    link: "https://github.com/FannyDevz",
  },
  {
    id: 5,
    title: "SIMRS For Hospital",
    desc: "I have developed a Java-based hospital information system. It manages patient registration, appointment scheduling, medical records, billing, and reporting. The system improves operational efficiency and patient care coordination within the hospital.",
    tech: "Java, Javascript, PHP, CSS",
    link: "https://github.com/FannyDevz",
  },
];
export const experience: Experience[] = [
  {
    id: 0,
    title: "Jayahost",
    date: "May 2023 - Now",
    story:
        "At Jayahost, I am a programmer responsible for managing multiple applications, with a particular focus on employee attendance management in a business setting. One of these applications is Karirku, a comprehensive business management tool. Within Karirku, I contribute to the development and enhancement of features related to employee attendance tracking. This includes designing and implementing functionalities such as clock-in/out systems, shift scheduling, leave management, and generating attendance reports.Additionally, I also work on other applications like WHMCS, where I customize and extend its functionality for smooth web hosting management, and Chatku, where I develop chat functionalities integrated with features like chatbots and encryption.",
  },
  {
    id: 1,
    title: "Freelance",
    date: "June 2020 - Now",
    story:
        "I work as a freelance programmer and designer, specializing in two distinct roles. As a programmer, I utilize my expertise in various programming languages and frameworks to develop robust and efficient software solutions. I write clean and scalable code to meet the specific requirements of each project. On the other hand, as a designer, I bring a creative flair to my work, focusing on visual aesthetics, user experience, and interface design. I craft visually appealing graphics, create engaging user interfaces, and ensure a seamless user experience across different platforms.",
  },
  {
    id: 2,
    title: "RSULirboyo",
    date: "December 2022 - April 2023",
    story:
      "As an IT support and programmer at a hospital, my role involves providing technical assistance and support to ensure the smooth operation of IT systems and infrastructure within the healthcare setting. I handle a wide range of tasks, including troubleshooting hardware and software issues, setting up and configuring computer systems, and assisting staff with IT-related problems. Additionally, I utilize my programming skills to develop custom software solutions tailored to the specific needs of the hospital, such as patient management systems, appointment scheduling applications, or data analysis tools. By combining my expertise in IT support and programming, I contribute to the efficient functioning of technology in the hospital environment, supporting healthcare professionals in delivering quality care to patients.",
  },
  {
    id: 3,
    title: "Yoisoweb",
    date: "October 2021 - November 2022",
    story:
        "As a designer at Yoisoweb, my primary focus is on social media design. I specialize in creating captivating and visually engaging graphics and content for various social media platforms. I work closely with clients to understand their branding, target audience, and messaging goals. Using my creativity and knowledge of design principles, I develop compelling visual assets such as social media posts, banners, ads, and profile graphics that effectively communicate the client's message and capture the attention of their audience. I stay updated with the latest social media trends and best practices to ensure that the designs are optimized for each platform. With a keen eye for aesthetics and a deep understanding of social media marketing, I help Yoisoweb's clients make a strong impact on their social media presence and drive engagement with their target audience.",
  },
  {
    id: 4,
    title: "RuangDigital",
    date: "October 2020 - December 2020",
    story:
        "As a web developer at RuangDigital, I have been actively involved in a project focused on building a WordPress website for showcasing the city of Batu, Malang. My role revolves around leveraging the power and flexibility of WordPress to create a dynamic and visually appealing online platform. I collaborate closely with the project team to understand the specific requirements and objectives, and then utilize my expertise in WordPress development to design and implement custom themes and plugins. I ensure seamless navigation, user-friendly interfaces, and effective content management through the WordPress platform. By harnessing the capabilities of WordPress, I aim to deliver a compelling website that effectively showcases the attractions, landmarks, and unique features of Batu, Malang, contributing to its promotion as a vibrant tourist destination.",
  },
];
