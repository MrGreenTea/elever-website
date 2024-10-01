import type { Content } from "../types/home.ts";

const content: Content = {
  title: "Home",
  hero: {
    title: "The Elever App",
    subtitle: "Transform learning routines",
    description: "Build lasting habits with the touch of one finger",
  },
  valueProposition: {
    title: "VALUE PROPOSITION",
    sections: [
      {
        title: "Our aim is to foster motivation for learning",
        description: [
          "We respect that every learner has different sources for motivation. What unites most of us humans since our childhood, is that we like to play and that we learn through play.",
          "The Elever system enables you, Learning & Development organizations and trainers, to create learning games and manage multiple motivators in one “Gamification Management System”. The learning experiences you create are based on the individual situation of your cohort. Micro learning activities help them to build a healthy weekly habit. This keeps engagement and retention rates high.",
        ],
      },
      {
        title: "Personalized and emotional learning make a big difference",
        description: [
          "With the Elever App you can create mini games based on your specific content, topics and group of learners. Interacting with those games becomes an enjoyable act of learning for learners from every generation. Employees, apprentices and students who learn with Elever share an interest in learning, fostering a sense of integration and community.",
          "As a result, learners develop an emotional and lasting connection with the study topic and content. They enjoy working more for their employer and engaging with their peers. Furthermore,they achieve better grades when they prepare for an exam with the Elever App.",
        ],
      },
    ],
  },
  modules: {
    title: "MODULES",
    description: [
      "Over the past few years, we have built a powerful system and created a collection of games and features, to provide the functionality that supports motivation and personalized learning. The Elever system consists of a Mobile App, a Web App, and a Content Management System that includes an authoring system.",
      "Each module is accessible via the CMS and is designed to foster curiosity among learners. They engage in collaborative, relevant, and appropriately challenging tasks that enable them to acquire the knowledge necessary to thrive in developing their competencies and skills development.",
    ],
    subtitle: "Meet the modules",
    callToAction: "Get more information",
  },
  cms: {
    title: "CMS",
    sections: [
      {
        title: "Automate and distribute your content in minutes with our CMS",
        description: [
          "Prepare and customize an educational experience that fulfills your company’s needs. Set the time for activities, offer points and rewards, or challenge your students to appear in the top positions on the leaderboard.",
          "If needed, a trainer can have a one-on-one conversation with students via our chat.",
        ],
      },
      {
        title: "Track and evaluate student progress whenever you want",
        description: [
          "Metrics are crucial for understanding and improving learning outcomes, identifying areas needing attention, and ensuring every student reaches their full potential.",
          "With our system, trainers, HR departments, company’s managers, school educators, and others can diagnose which students or groups of students need attention and adjust the strategy or reinforce the course activities in real time.",
        ],
      },
    ],
  },
  contact: {
    title: "CONTACT",
    subtitle: "Get in touch",
    description: [
      "Do you want to transform learning routines and build lasting habits for the teams in an organization or company? Request our demo and learn about gamification with the experts while playing the quiz we have prepared for you.",
      "Would you like to see your content within one of our games? Drop us a line and discover how we can run a project together.",
    ],
    fields: {
      name: "Your name",
      company: "Your company",
      email: "Email",
      phone: "Your phone",
      message: "Message",
    },
    button: "Send",
  },
  footer: {
    productBy: "A product by",
    address: [
      "Altus Forge GmbH",
      "Heinrichstrasse 267a",
      "8005 Zürich, Switzerland",
    ],
  },
};

export default content;
