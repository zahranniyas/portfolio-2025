export const navLinks = [
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Work",
    href: "#work",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Clients",
    href: "#clients",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Azreen Zaheer",
    position: "CEO at Frontier Advisory",
    img: "assets/review1.png",
    review:
      "I have known Zaharan for years, as he was a former employee at Frontier Advisory. Hence, I had complete trust in his skills. He transformed my outdated company website into a modern, user-friendly platform with several additonal features",
  },
  {
    id: 2,
    name: "Nishama Kanchana",
    position: "Director at Ceylon Fruits & Spices",
    img: "assets/review2.png",
    review:
      "Zaharan's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "Ijaz Meezan",
    position: "Managing Director at Meezan Groups",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Zaharan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Thabassum Shakir",
    position: "Director at Elegant Charms",
    img: "assets/review4.png",
    review:
      "Zaharan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend & backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Windsor Castle Banquet - Booking System",
    desc: "Developed a comprehensive, responsive booking management system featuring role-based access, temporary bookings with automated reminders, integrated payments and discounts, post-event billing, VAT support, and a dashboard for real-time revenue and booking insights.",
    subdesc:
      "A modern web solution leveraging React (Vite), Tailwind, GSAP on the frontend, with Node.js (Express) and MongoDB powering the backend, hosted in a VPS hosting",
    href: "",
    github: "",
    texture: "/textures/project/windsor-vid.mp4",
    logo: "/assets/project-logo1-1.png",

    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap-logo.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb-icon.svg",
      },
    ],
  },

  {
    title: "Sincler 3x - a 3D Phone Website",
    desc: "Inspired by the iPhone 15 website, I created a concept site for Sincler featuring Blender-built 3D models for 360-degree views, instant color/size variations, and animated video carousels showcasing product features and specifications.",
    subdesc:
      "Developed with React (Vite), Tailwind, GSAP, Three.js for seamless 3D interactions, plus Blender and After Effects for stunning and integrated 3D animations.",
    href: "https://sincler-phone-3x.vercel.app/",
    github: "https://github.com/zahranniyas/sincler-phone-3x",
    texture: "/textures/project/sincler-vd.mp4",
    logo: "/assets/project-logo2-1.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap-logo.svg",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/logos/three-logo.png",
      },
      {
        id: 5,
        name: "Blender",
        path: "/assets/logos/blender-logo.png",
      },
    ],
  },
  {
    title: "Ceylon Fruits & Spices - E-Commerce",
    desc: "Ceylon Fruits and Spices is an e-commerce platform built with WordPress and WooCommerce, featuring announcement banners, product pages, categories, carts, featured products, user registration, wishlists, secure Sampath Bank payment gateway.",
    subdesc:
      "Built on WordPress, Elementor, WooCommerce, and WooCurrency, integrating Sampath Bank’s payment gateway for secure, seamless e-commerce transactions across multiple regions.",
    href: "https://ceylonfruitsandspices.lk/",
    github: "",
    texture: "/textures/project/cfs-vid.mp4",
    logo: "/assets/project-logo5-1.png",
    logoStyle: {
      backgroundColor: "#28010c",
      border: "0.2px solid #360811",
      boxShadow: "0px 0px 60px 0px #ff5b5b4d",
    },
    spotlight: "/assets/spotlight5-1.png",
    tags: [
      {
        id: 1,
        name: "Wordpress",
        path: "/assets/logos/wp-logo.webp",
      },
      {
        id: 2,
        name: "WooCommerce",
        path: "assets/logos/woo-logo.png",
      },
      {
        id: 3,
        name: "Elementor",
        path: "/assets/logos/elementor-logo.svg",
      },
      {
        id: 4,
        name: "Sampath Payment Gateway",
        path: "/assets/logos/sampath-logo.png",
      },
    ],
  },

  {
    title: "Meezan Bugalows - Hotel Website",
    desc: "A responsive website for Meezan Bungalows, featuring a main page with general info and a shared booking form, plus individual pages for each bungalow offering details of facilities, galleries, booking forms, and immersive animations.",
    subdesc:
      "Built using React, Tailwind, TypeScript, GSAP animations, and React Router for seamless navigation, ensuring responsive, dynamic, and engaging user experiences.",
    href: "https://www.meezanbungalows.com/",
    github: "",
    texture: "/textures/project/meez-vid.mp4",
    logo: "/assets/project-logo3-1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/assets/logos/gsap-logo.svg",
      },
    ],
  },
  {
    title: "Budget Buddy - Budget App",
    desc: "Budget Buddy, a cross-platform React Native app (iOS/Android), offers user registration, authenticated logins, budget creation, expense tracking (image uploads), and a customizable dashboard showing total budgets, spending, and remaining balances.",
    subdesc:
      "Developed with React Native, Expo Router, Reanimated animations, Kinde authentication, plus Async Storage and Supabase for robust, secure data management.",
    href: "",
    github: "https://github.com/zahranniyas/budget-buddy",
    texture: "/textures/project/project1_1.mp4",
    logo: "/assets/project-logo4-1.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/rn-logo.png",
      },
      {
        id: 2,
        name: "Expo",
        path: "assets/logos/expo-logo.png",
      },
      {
        id: 3,
        name: "Kinde",
        path: "/assets/logos/kinde-logo.jpg",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/logos/supabase-logo.svg",
      },
    ],
  },
  {
    title: "Frontier Advisory - Corporate Website",
    desc: "A visually engaging, user-friendly website featuring modern design and interactive elements, showcasing the company’s services, mission, staff profiles and portfolio, with dedicated sections for scheduling appointments, publishing blogs and job postings.",
    subdesc:
      "Built on WordPress using Elementor and custom CSS to create a responsive, modern design and sleek animations for an engaging and seamless user experience.",
    href: "https://frontierlk.com/",
    github: "",
    texture: "/textures/project/frontier-vd.mp4",
    logo: "/assets/project-logo-front.png",
    // logoStyle: {
    //   backgroundColor: "#60f5a1",
    //   background:
    //     "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
    //   border: "0.2px solid rgba(208, 213, 221, 1)",
    //   boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    // },
    // spotlight: "/assets/spotlight3.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Worpress",
        path: "/assets/logos/wp-logo.webp",
      },
      {
        id: 2,
        name: "Elementor",
        path: "assets/logos/elementor-logo.svg",
      },
    ],
  },
  {
    title: "Talent Hub - Culinary School Website",
    desc: "Built a responsive, dynamic website for Talent Hub Academy featuring slideshows, profile video, course carousel, pop-up application form, testimonials, events, FAQs, and a headless CMS via Strapi for client-managed content.",
    subdesc:
      "Built using React, Tailwind, and GSAP for smooth animations, with Strapi as a headless CMS for dynamic, client-managed content updates and seamless multi-device user experiences",
    href: "https://www.talenthublk.com/",
    github: "",
    texture: "/textures/project/talenthub-vid.mp4",
    logo: "/assets/project-logo-th.png",
    logoStyle: {
      backgroundColor: "#28010c",
      border: "0.2px solid #360811",
      boxShadow: "0px 0px 60px 0px #ff5b5b4d",
    },
    spotlight: "/assets/spotlight5-1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap-logo.svg",
      },
      {
        id: 4,
        name: "Strapi",
        path: "/assets/logos/strapi-logo.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0, -2.5, 0] : [0.25, -3.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-5, 5, 0]
      : isTablet
      ? [-9, 5, 0]
      : [-12, 5, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Animatist (Pvt) Ltd",
    pos: "Front-End Developer",
    duration: "2021 - Present",
    title:
      "Since 2021, I have worked as a Front-End Developer at Animatist (Pvt) Ltd, where I specialize in building engaging user interfaces and incorporating 3D elements. By leveraging modern front-end technologies and my 3D expertise, I ensure visually captivating and efficient solutions for a wide range of projects.",
    icon: "/assets/animatist.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Frontier Advisory (Pvt) Ltd",
    pos: "Head of Taxation",
    duration: "2017 - 2021",
    title:
      "I joined as a Junior Accountant, and was assigned to the tax department as a Tax Associate towards the end of my first year. After multiple promotions, I ultimately rose to the position of Head of Taxation before leaving the organization in 2021.",
    icon: "/assets/frontier.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "HasH 3 3",
    pos: "Digital Marketing Executive",
    duration: "2016 - 2017",
    title:
      "I began my professional journey at HasH 3 3, a digital marketing and design company based in Colombo 03. During my time there, I contributed to projects for high-profile clients, including Airtel, Domino’s, and ANC.",
    icon: "/assets/hash.svg",
    animation: "salute",
  },
];
