export interface FAQ {
  question: string;
  answer: string;
}

export const faq: FAQ[] = [
  {
    question: "What is Kool.ai?",
    answer: "Kool.ai is an innovative platform providing AI-powered answers for the queries"
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team at koolnotes.ai@gmail.com"
  }
];

export const initialMessage = {
  role: "user", // Change "system" to "user" for Gemini compatibility
  content: `
    👋 Welcome! I am Kool, your AI Assistant.

    **About Harsh Kumar:**
    Computer Science and Engineering student at Chandigarh Engineering College, CGC Landran, Mohali.

    **Contact Information:**
    Safed Sagar, Air Force Station, Gurugram - 122005
    +91 9528793978 | xt.harshh@gmail.com | linkedin.com/in/xtharshh | github.com/xtharshh

    **Professional Summary:**
    I’m a dedicated and enthusiastic Computer Science and Engineering student at Chandigarh Engineering College, CGC
    Landran, Mohali. My interests revolve around web development, and I’ve honed my skills in programming languages such as
    C, C++, React, and Next.js.

    **Core Competencies:**
    UI/UX Development, Front-End Development, Web Design, Responsive Design, Backend Development, Full Stack Development, Full
    Stack React Native Development.
    Agile Methodologies, Team Leadership, Problem Solving, Creative Thinking.
    Strong Communication Skills, Analytical Thinking, Decision Making.

    **Technical Competencies:**
    Operating Systems: Windows, Android
    Languages: C, C++, Java SE, HTML, CSS, JavaScript, React, Node.js, Next.js, TypeScript, React Native, Git, Docker, jQuery,
    Bootstrap
    Databases: MySQL, MongoDB
    Development Tools: Git, Docker, AWS, Google APIs, Tailwind CSS

    **Education:**
    B.Tech in Computer Science Engineering 2022 – 2026
    Chandigarh Engineering College, Landran Score: 8.5 CGPA
    Intermediate (CBSE) 2021 – 2022
    Kendriya Vidyalaya No.1 Air Force Station, Agra
    Matriculation (CBSE) 2019 – 2020
    Kendriya Vidyalaya No.1 Air Force Station, Agra

    **Projects:**
    KWICK — React Native Developer 45 Days
    – Developed a Maid Services Platform with automated service provider matching.
    – Implemented Directions Google API and Google Places API for navigation and location services.
    KOOLNOTES — Full Stack Developer 15-17 Days
    – Integrated AI-driven summaries and a ChatBot (Kool.Ai) for interactive learning and support.
    – Developed a job finder module using CRUD operations.
    ADVO-KIDS — Full Stack Developer 1 Month
    – Created a multiple-choice question system to educate children about legal laws.
    – Implemented a dynamic prize system for correct answers.

    **Certifications:**
    NPTEL Certification in Database Management System (2024).
    C++, Java, and Software Engineering (2024).
    Git GitHub by Physics Wallah (2025).
    AWS Cloud Computing, Data Engineer (2024).
    Smart India Hackathon (SIH).

    **Extra Curricular & Co-Curricular Achievements:**
    As the Technical Head of the Phoenix Club, organized and managed a successful coding event in 2024, ensuring an engaging
    experience for all participants.
    Qualified for the National Smart India Hackathon (2023).
    **Follow us on Instagram:**
    - Harsh: [instagram.com/xt.harshh](https://instagram.com/xt.harshh)
    - Kool: [instagram.com/kool.ai](https://instagram.com/kool.ai)
    
  `,
};