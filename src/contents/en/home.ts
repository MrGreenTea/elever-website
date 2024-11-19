import type { Content } from "../types/home.ts";

export default {
  title: "Home",
  hero: {
    title: "The Elever App",
    subtitle: "Transform learning routines",
    description: "Establish lasting habits. Playfully and with a mobile app.",
    callToAction: "Request demo access",
  },
  valueProposition: {
    title: "VALUE PROPOSITION",
    sections: {
      ourAim: {
        title: "Our aim is to foster motivation for learning",
        description: [
          "What has united most of us since childhood is that we like to play and learn through play. At Elever, we believe in the possibilities of games also in a professional environment.",
          'We respect the fact that different types of learners have different sources of motivation. For the most part, we can address these with our system. Elever makes it possible for you and your organization in the area of training and further education, to create learning games and manage multiple motivators in one "Gamification Management System". The learning experiences you create are based on the individual situation of the cohort. Micro learning activities help them to build a healthy weekly habit. This maintains engagement rates, counteracts the forgetting curve and ensures the transfer of what has been learned.',
        ],
      },
      personalizedLearning: {
        title: "Personalized and emotional learning make a big difference",
        description: [
          'The interactions with relevant content and "their people" that you enable with the mini-games becomes an enjoyable learning experience for learners from every generation. Employees, trainees and students who learn with Elever develop an increased interest in learning. The learning experiences foster a sense of inclusion, community and cohesion.',
          "As a result, learners develop an emotional and lasting connection to the subject and content. They identify more with their employer and network with other employees. In addition, they achieve better grades when they prepare for an exam with the Elever app.",
        ],
      },
    },
    forgettingCurveTitle: "Counteract the forgetting curve",
  },
  modules: {
    title: "Meet the Modules",
    description: [
      "Over the past few years, we have built a powerful system. It contains a collection of modules and features to organize gamified education. Those support motivation via mobile and personalized learning. Furthermore automates the Elever system the processes for admins. It consists of a Mobile App, a Web App, and a Content Management System that includes an authoring system. Each module is accessible via the CMS.",
      "It helps you to implement your creative ideas. Our tip: Awaken the curiosity of the learners, exaggerate and use humor. Based on our experience and evaluations, we can say that learners actively engage in collaborative, relevant and appropriately challenging tasks. In this way, they acquire the necessary knowledge to develop and apply their skills and competencies and realize their full potential.",
    ],
    subtitle: "Examples of our modules",
    callToAction: "Get more information",
  },
  cms: {
    title: "CMS - Our Content Management System",
    sections: [
      {
        title: "Content automation at its best",
        description: [
          "Prepare and customize an educational experience that fulfills your organization's needs. Set the time for activities, offer points and rewards, or challenge your students to appear in the top positions on the leaderboard. Once the rules have been defined, the processes can be automated and repeated. All that remains for you to do is to evaluate the results and participation in the CMS.",
        ],
      },
      {
        title: "Track and evaluate student progress at any time",
        description: [
          "You can use Elever in a flipped classroom format, as a stand-alone solution, a course-accompanying solution or as a transfer solution. In any format, you can use the evaluations to identify areas that need attention. Particularly in flipped classroom settings, which rely on a uniform level of preparation, the evaluations provide relevant indications of any weak points and lack of participation.",
          "If necessary, course leaders can start a conversation with participants via the integrated chat function.",
          "With Elever, instructors, trainers, HR departments and their relevant stakeholders can analyze which learners, groups or areas need attention and adjust the strategy or reinforce course activities in real time.",
        ],
      },
    ],
  },
} satisfies Content;
