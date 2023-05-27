import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    mongodb,
    git,
    threejs,
    java,
    c,
    python,
    dart,
    flutter,
    firebase,
    postman,
    patientist,
    scheduler,
    scribex,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience"
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "NUS CS Undergraduate",
      icon: web,
    },
    {
      title: "Rhythm Gamer",
      icon: mobile,
    },
    {
      title: "Tech Enthusiast",
      icon: backend,
    },
    {
      title: "Matcha Brewer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java
    },
    {
      name: "C",
      icon: c
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Dart",
      icon: dart
    },
    {
      name: "Flutter",
      icon: flutter
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  
  const experiences = [
    {
      title: "Summer Internship - DSTA",
      date: "June 2018",
      body: "During the June holidays of my 6th year at Dunman High School (JC2), I applied and was selected for a tech exposure internship at the Defense Science and Technology Agency. This was my first formal introduction to the tech sector, during which I was introduced to fundamental techniques in Natural Language Processing. This was the beginning of my interest in the tech sector and is the reason I applied to NUS School of Computing."
    },
    {
      title: "National Service",
      date: "Jan 2019 to Nov 2020",
      body: "I was posted to the Republic of Singapore Navy (RSN) to fulfil my National Service obligations. During this time, I continued building on the interest in coding and tech I had developed during my summer program. I had a lot of free time in this period, which afforded me time to begin honing my coding literacy and other relevant skills ahead of matriculation. I mostly spent my time doing free online courses in this period relating to programming."
    },
    {
      title: "Undergraduate Year 1",
      date: "August 2021 to July 2022",
      body: "Some courses I found particularly noteworthy and enjoyable in my first year were Discrete Mathematics (CS1231S) and Data Structures and Algorithms (CS2040S). I discovered my interest in computation theory and formal methods through my coursework, an area of study that I had not taken notice of before. I also enjoyed Digital Logic and Computer Organisation (CS2100), which is another area of study that was made much more accessible to me with the help of my professors and tutors."
    },
    {
      title: "Undergraduate Year 2",
      date: "August 2022 to July 2023",
      body: "In my second year, I had greater liberty to explore computer science in breadth. I particularly liked Algorithms Design and Analysis (CS3230), the continuation of CS2040 I took the previous year. I also found an interest in Operating Systems (CS2106) and Information Security (CS2107). Although the CTF-styled assignments in CS2107 were challenging, I found them to be refreshing as they were different from any other module I had taken. This also sparked my interest in going deeper into cryptography."
    },
  ];
  
  const testimonials = [];
  
  const projects = [
    {
      id: 'project-1',
      name: "Patientist",
      description:
        "GUI based hospital management system",
      image: patientist,
      source_code_link: "https://github.com/AY2223S2-CS2103T-T12-1/tp",
    },
    {
      id: 'project-2',
      name: "Postman",
      description:
        "Messenger clone app with end to end encryption",
      image: postman,
      source_code_link: "https://github.com/euph00/postman",
      live_page_link: "https://postman-euph00.vercel.app/",
    },
    {
      id: 'project-3',
      name: "Scheduler",
      description:
        "Web/mobile app for youtube livestream tracking",
      image: scheduler,
      source_code_link: "https://github.com/euph00/StreamScheduler",
      live_page_link: "https://euph00.github.io/StreamScheduler/",
    },
    {
      id: 'project-4',
      name: "ScribeX",
      description:
        "OCR app for Android devices",
      image: scribex,
      source_code_link: "https://github.com/euph00/Orbital-team-5243",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};