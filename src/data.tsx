interface Meta {
    title: string;
    description: string;
  }
  
  interface IntroData {
    title: string;
    animated: {
      first: string;
      second: string;
      third: string;
    };
    description: string;
    your_img_url: string;
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
    YOUR_EMAIL: string;
    YOUR_FONE: string;
    description: string;
    YOUR_SERVICE_ID: string;
    YOUR_TEMPLATE_ID: string;
    YOUR_USER_ID: string;
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
      second: "I code cool websites",
      third: "I develop with React",
    },
    description: "Computer scientist, full-stack developer, creating user-friendly and easy-to-handle websites.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
  };
  
  const dataabout: DataAbout = {
    title: "A bit about myself",
    aboutme:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
  };
  
  const worktimeline: WorkTimeline[] = [
    { jobtitle: "Designer of the Week", where: "YAdfi", date: "2020" },
    { jobtitle: "Designer of the Week", where: "Jamalya", date: "2019" },
    { jobtitle: "Designer of the Week", where: "ALquds", date: "2019" },
  ];
  
  const skills: Skill[] = [
    { name: "Python", value: 90 },
    { name: "Django", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 60 },
    { name: "jQuery", value: 85 },
  ];
  
  const services: Service[] = [
    {
      title: "UI & UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
      title: "Mobile Apps",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
      title: "WordPress Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
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
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555) 123-4567",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
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
  