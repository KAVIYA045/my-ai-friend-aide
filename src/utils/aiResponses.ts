import { profileData, getProfileSummary, getSkillsSummary, getExperienceSummary, getProjectsSummary } from "@/data/profileData";

export const generateAIResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Greetings
  if (message.match(/^(hi|hello|hey|greetings)/)) {
    return `Hello! I'm Kaviya's AI assistant. I can tell you about her background, skills, projects, and experience in Prompt Engineering and AI development. What would you like to know?`;
  }
  
  // About/Who questions
  if (message.match(/who are you|about (you|kaviya)|tell me about/)) {
    return getProfileSummary();
  }
  
  // Skills questions
  if (message.match(/skill|technical|what (can|do) you know|technologies|programming/)) {
    return `${getSkillsSummary()}\n\nI also have certifications in ${profileData.certifications.join(", ")}.`;
  }
  
  // Experience questions
  if (message.match(/experience|work|intern|job|worked/)) {
    return `Here's my professional experience:\n\n${getExperienceSummary()}`;
  }
  
  // Projects questions
  if (message.match(/project|built|created|developed|portfolio/)) {
    return `Here are some of my notable projects:\n\n${getProjectsSummary()}`;
  }
  
  // Education questions
  if (message.match(/education|study|college|university|degree|cgpa/)) {
    const edu = profileData.education[0];
    return `I'm currently pursuing ${edu.degree} at ${edu.institution} with a CGPA of ${edu.cgpa}. I completed my Higher Secondary Education at Sri Ramakrishna Matriculation Higher Secondary School with 64.8%.`;
  }
  
  // Prompt Engineering specific
  if (message.match(/prompt engineering|prompt|ai interact/)) {
    return `I'm passionate about Prompt Engineering! I've created an AI Prompt Practice Portfolio with optimized prompts for summarization, content generation, and code explanation. I understand AI prompt optimization and how to design effective AI interactions that enhance productivity. I work with tools like ChatGPT and Gemini to create better human-computer collaboration.`;
  }
  
  // Contact questions
  if (message.match(/contact|email|phone|reach|linkedin|github/)) {
    return `You can reach me at:\n📧 Email: ${profileData.personal.email}\n📞 Phone: ${profileData.personal.phone}\n🔗 LinkedIn: ${profileData.personal.linkedin}\n💻 GitHub: ${profileData.personal.github}`;
  }
  
  // Interests
  if (message.match(/interest|passion|hobby|like to do/)) {
    return `My interests include: ${profileData.interests.join(", ")}. I'm particularly excited about how AI can enhance developer workflows and create better user experiences!`;
  }
  
  // Certifications
  if (message.match(/certificate|certification|qualified/)) {
    return `I have the following certifications:\n${profileData.certifications.map(cert => `• ${cert}`).join("\n")}`;
  }
  
  // Location
  if (message.match(/where|location|from|live/)) {
    return `I'm based in ${profileData.personal.location}, India.`;
  }
  
  // Career goals
  if (message.match(/goal|future|career|aspir|looking for/)) {
    return `${profileData.careerObjective}\n\nI'm actively seeking opportunities in Prompt Engineering, AI application development, and roles where I can leverage my skills in creating effective AI interactions.`;
  }
  
  // Default response
  return `That's a great question! I can tell you about Kaviya's:\n• Skills and technical expertise\n• Work experience and internships\n• Projects and portfolio\n• Education background\n• Certifications\n• Contact information\n• Career goals and interests\n\nWhat would you like to know more about?`;
};
