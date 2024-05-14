import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  kotlin,
  meta,
  threejs,
  starbucks,
  upwork,
  tesla,
  amdocs,
  HU,
  shopify,
  education,
  carrent,
  jobit,
  tripguide,
  zoom,
  chatgpt,
  dalle,
  flipkart,
  aiflix,
  spotify,
  YT,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work & Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
];

const experiences = [
  {
    title: "Bachelor of Computer Science",
    company_name: "ATSS-CBSCA college",
    icon: education,
    iconBg: "#383E56",
    date: "March 2018 - April 2021",
    points: [
      "Programming Proficiency:Developed strong programming skills in lan guages such as Java, C, and C++, gaining proficiency in algorithm design, data structures, and problem-solving techniques.",
      "Software Development: Acquired knowledge in software engineering principles, including software design, development methodologies (e.g., Agile), and version control systems (e.g., Git), ",
      "Computer Science Fundamentals: Studied core computer science concepts such as computer architecture, operating systems, database management",
    ],
  },
  {
    title: "Android App Developer ",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designed intuitive and user-friendly wireframes for various Android applications, ensuring optimal user experience and functionality",
      "Collaborated closely with clients to understand their requirements and translate them into visually appealing and functional designs",
      "Utilized industry-standard tools and best practices to create wireframes that met client expectations and project deadlines",
    ],
  },
  {
    title: "Technical Business Operation Analyst",
    company_name: "AMDOCS pvt ltd.",
    icon: amdocs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Contributed to the pre-existed Architecture Designs leading to faster and smoother performance in Overall Software System",
      "Enhanced the Code as per the Calibration needs of the Software",
      "Collaborate with stakeholders to understand business requirements and translate them into technical specifications and system architecture designs",
      "Conduct in-depth analysis of existing systems eg. telegence system, identifying areas for improvement, and recommending solutions to enhance performance, scalability, and reliability",
    ],
  },
  {
    title: "Bachelor of Computer Science",
    company_name: "Harvard University",
    icon: HU,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Studied a wide range of programming languages, including Java, Python, C++, and JavaScript, gaining proficiency in each.",
      "Completed in-depth projects that involved developing web applications, mobile applications, and software solutions.",
      "Acquired skills in problem-solving, algorithm design, and data structures, applying theoretical knowledge to practical programming tasks.",
    ],
  },
];

const projects = [
  {
    name: "DALL-E",
    description:
      "DALL-E is an AI model developed by OpenAI that generates images from textual descriptions. It is capable of creating realistic and detailed images of objects, scenes, and creatures based on the provided text input. ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/thesumitsuryawanshi/DALL-E",
    project_Real_Time_Link: "https://github.com/thesumitsuryawanshi/DALL-E",
  },
  {
    name: "Zoom",
    description:
      "Zoom is a video conferencing platform that enables users to host and join virtual meetings, webinars, and online events. It offers features like screen sharing, chat, and recording, making it popular for remote work and virtual gatherings.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Stream",
        color: "pink-text-gradient",
      },
    ],
    image: zoom,
    source_code_link: "https://github.com/thesumitsuryawanshi/zoom",
    project_Real_Time_Link: "https://zoom-virid-two.vercel.app/",
  },
  {
    name: "ChatGPT ",
    description:
      "ChatGPT is an AI-powered chatbot that engages in natural language conversations. It uses deep learning to understand and generate human-like text responses, making interactions feel more human. ChatGPT can be used for customer support, content creation, and more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/thesumitsuryawanshi/ChatGPT",

    project_Real_Time_Link: "https://chat-gpt-phi-virid-93.vercel.app",
  },
  {
    name: "Flipkart Clone ",
    description:
      "Flipkart is an Indian e-commerce company founded in 2007. It offers a wide range of products including electronics, fashion, home essentials, and more. Acquired by Walmart in 2018, Flipkart is known for its competitive pricing and extensive product selection.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "Google Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: flipkart,
    source_code_link:
      "https://github.com/thesumitsuryawanshi/Flipkart_Clone_App",
    project_Real_Time_Link:
      "https://github.com/thesumitsuryawanshi/Flipkart_Clone_App",
  },
  {
    name: "Ai-Flix",
    description:
      "Introducing a cutting-edge React.js video player integrated with Firebase for secure authentication and seamless data storage. This innovative platform serves as a dynamic movie rating system where AI-generated movies are curated and rated based on their content.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Google Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: aiflix,
    source_code_link: "https://github.com/thesumitsuryawanshi/Ai-FliX",
    project_Real_Time_Link: "https://ai-flix-678f3.web.app/login",
  },
  {
    name: "Youtube",
    description:
      "YouTube is a video-sharing platform where users can watch, like, share, comment, and upload videos. It has a wide variety of content, including music videos, tutorials, vlogs, and more. ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: YT,
    source_code_link: "https://github.com/thesumitsuryawanshi/Youtube",
    project_Real_Time_Link: "https://github.com/thesumitsuryawanshi/Youtube",
  },
];

export { services, technologies, experiences, projects };
