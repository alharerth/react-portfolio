import profileImage from "./images/profile.jpeg";
interface Meta {
    title: string;
    description: string;
  }
  
  interface IntroData {
    title: string;
    animated: {
      first: string;
      second: string;
    };
    description: string;
    img_url: string;
  }
  
  interface DataAbout {
    title: string;
    aboutme: string;
  }
  
  interface WorkTimeline {
    jobtitle: string;
    where: string;
    date: string;
  }
  
  interface Skill {
    name: string;
    value: number;
  }
  
  interface Service {
    title: string;
    description: string;
  }
  
  interface PortfolioItem {
    img: string;
    description: string;
    link: string;
  }
  
  interface ContactConfig {
    EMAIL: string;
    FONE: string;
    description: string;
    SERVICE_ID: string;
    TEMPLATE_ID: string;
    USER_ID: string;
  }
  
  interface SocialProfiles {
    github: string;
    facebook: string;
    linkedin: string;
    twitter: string;
  }

  const logotext = "alhareth";
  
  const meta: Meta = {
    title: "alhareth anmar",
    description: "I’m alhareth anmar, a computer scientist and full-stack developer.",
  };

  const introdata: IntroData = {
    title: "I’m alhareth anmar",
    animated: {
      first: "I love coding",
      second: "I code cool websites"
    },
    description: "Computer scientist, front-end developer, creating user-friendly and easy-to-handle websites.",
    img_url: profileImage,
  };
  
  const dataabout: DataAbout = {
    title: "Who am I?",
    aboutme:
      "I am Alhareth Anmar, a passionate and driven individual on a journey of growth and learning. My story began after graduating from KASSE with a GPA that taught me an important life lesson: being smart alone is not enough. This realization marked a turning point, and I chose IT->CS as my major at AABU, determined to put in real effort this time. Starting with C++ as my first programming language, I dove into the world of programming through Codeforces, mastering the basics before advancing to STL, OOP, data structures, and algorithm design and analysis. Once I built a solid foundation, I focused on specialization, choosing web development as my path. Recently, I completed the first phase of this journey—frontend development using React and TypeScript—and I am now preparing to delve into backend development. The journey is far from over, and I am excited to continue exploring and growing in this field.",
  };
  
  const worktimeline: WorkTimeline[] = [
    { jobtitle: "full-stack trainee", where: "SDK", date: "2024-2025" },
    { jobtitle: "###", where: "###", date: "20##" },
    { jobtitle: "###", where: "###", date: "20##" },
  ];
  
  const skills: Skill[] = [
    { name: "javascript & typescript", value: 70 },
    { name: "raect", value: 70 },
    { name: "c++", value: 60 },
    { name: "english", value: 80 },
    { name: "team work", value: 75 },
  ];
  
  const services: Service[] = [
    {
      title: "front-end development",
      description: "Creating a user-facing part of a website or application—the portion that users interact with directly.",
    }
  ];
  
  const dataportfolio: PortfolioItem[] = [
    { img: "https://i.pinimg.com/736x/9f/9f/59/9f9f597d1788ff3b1be00d61a9392bd4.jpg", description: "Musk-Pal online store dedicated for perfumes.", link: "https://github.com/alharerth/MUSK_PAL" },
    { img: "https://picsum.photos/400/800/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/600/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/300/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/700/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/600/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/300/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/550/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
    { img: "https://picsum.photos/400/700/?grayscale", description: "The wisdom of life consists in the elimination of non-essentials.", link: "#" },
  ];
  
  const contactConfig: ContactConfig = {
    EMAIL: "harethanmar24@gmail.com",
    FONE: "(+962)788-264-899",
    description:
      "Feel free to reach out! Whether you have a question, a project idea, or just want to connect, I’d love to hear from you.",
    SERVICE_ID: "service_id",
    TEMPLATE_ID: "template_id",
    USER_ID: "user_id",
  };
  
  const socialprofils: SocialProfiles = {
    github: "https://github.com/alharerth",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/alhareth-tahtamouni-a57288335/",
    twitter: "https://twitter.com",
  };
  
  export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
  };
  