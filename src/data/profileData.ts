export const profileData = {
  personal: {
    name: "Kaviya R",
    location: "Coimbatore, Tamil Nadu",
    email: "22cs045@dmngpt.ac.in",
    phone: "+91 70949703960",
    linkedin: "linkedin.com/in/kaviya-r-05b82742",
    github: "github.com/KAVIYA045"
  },
  
  careerObjective: "Enthusiastic and analytical Computer Science Engineering student aspiring to start a career in Prompt Engineering and AI-based application development. Strong understanding of programming logic, AI prompt optimization, and automation workflows. Eager to design effective AI interactions that enhance productivity and human–computer collaboration.",
  
  education: [
    {
      institution: "Dr. N. G. P Institute of Technology, Coimbatore",
      degree: "B.E. Computer Science and Engineering",
      cgpa: "7.7",
      period: "Current"
    },
    {
      institution: "Sri Ramakrishna Matriculation Higher Secondary School, Coimbatore",
      degree: "Higher Secondary Education",
      percentage: "64.8%",
      period: "Jan 2021 – Dec 2022"
    }
  ],
  
  experience: [
    {
      title: "Web Development Intern",
      company: "Frenzo Technologies",
      location: "Coimbatore, Tamil Nadu",
      period: "Jul 2024 – Aug 2024",
      responsibilities: [
        "Built web modules using structured programming concepts and object-oriented principles",
        "Worked on data communication between frontend and backend using API calls",
        "Learned to apply prompt-based documentation and automation ideas for developer workflows"
      ]
    }
  ],
  
  projects: [
    {
      name: "OrphanConnect (Cloud Platform)",
      date: "Jan 2024",
      description: "Developed a centralized web platform for orphanage management integrating AI-assisted chat guidance, user dashboards, and cloud data storage."
    },
    {
      name: "AI Prompt Practice Portfolio",
      date: "Nov 2025",
      description: "Created a mini portfolio of optimized AI prompts for summarization, content generation, and code explanation tasks.",
      type: "Personal Learning Project"
    },
    {
      name: "Smart Safety System for Rail Tracks",
      date: "Dec 2024",
      description: "Designed an IoT-enabled system to detect obstacles on train tracks using sensors and automated alert logic."
    }
  ],
  
  certifications: [
    "Microsoft Certified — Application Development Foundations",
    "NPTEL — Cloud Computing",
    "HackerRank — Problem Solving (Basic)"
  ],
  
  skills: {
    programming: ["Object-Oriented Programming", "Data Structures", "Java", "Logical Problem Solving"],
    tools: ["ChatGPT", "Gemini", "Postman", "GitHub", "VS Code", "Google Colab"],
    coreAreas: ["Prompt Engineering", "Generative AI"],
    softSkills: ["Critical Thinking", "Teamwork", "Adaptability", "Time Management"]
  },
  
  interests: [
    "Prompt Engineering & AI Interaction Design",
    "Chatbot Development",
    "AI-based Content & Code Automation"
  ]
};

export const getProfileSummary = () => {
  return `I am ${profileData.personal.name}, a Computer Science Engineering student from ${profileData.personal.location}. ${profileData.careerObjective}`;
};

export const getSkillsSummary = () => {
  return `My core skills include: ${profileData.skills.coreAreas.join(", ")}. I'm proficient in ${profileData.skills.programming.join(", ")}, and experienced with tools like ${profileData.skills.tools.join(", ")}.`;
};

export const getExperienceSummary = () => {
  return profileData.experience.map(exp => 
    `${exp.title} at ${exp.company} (${exp.period}): ${exp.responsibilities.join("; ")}`
  ).join("\n\n");
};

export const getProjectsSummary = () => {
  return profileData.projects.map(proj => 
    `${proj.name} (${proj.date}): ${proj.description}`
  ).join("\n\n");
};
