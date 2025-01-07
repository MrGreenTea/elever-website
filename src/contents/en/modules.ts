import type { Content } from "../types/modules";

export default {
  title: "Modules",
  description: [
    "Micro learning and gamification enhance learning habits by breaking down content into small, digestible segments and making it interactive and fun. This is the Elever philosophy.",
    "We have developed game sequences and modules that can be adapted to specific content. These are designed to provide learners with a dynamic yet impactful learning experience.",
  ],
  gamesTitle: "Games & challenges",
  games: [
    {
      title: "Adventures",
      illustration: "adventures",
      description:
        "Our adventures, in the form of quiz-based interactions such as multiple-choice, true/false, and others, are a core module that reinforces relevant knowledge and enables learners to independently test and expand their knowledge.",
    },
    {
      title: "Question of the Week",
      illustration: "qotw",
      description:
        "The Question of the Week is intended to motivate learners to dive deeper into a subtopic. Words, phrases or images are partially revealed every day of the week, inviting players to collaboratively solve a fun riddle.",
    },
    {
      title: "Photo Event",
      illustration: "photoevent",
      description:
        "This activity allows participants to get to know each other better and to show a more personal side. They upload photos and text that capture the essence of a given theme.",
    },
    {
      title: "Reflection",
      illustration: "reflection",
      description:
        "Learners are presented with a text and/or image to encourage deeper reflection on a topic and to express it in their own words. In this metacognitive activity, they particularly benefit from recognizing the perspectives of others.",
    },
    {
      title: "Tip Game",
      illustration: "tipgame",
      description:
        "The Tip Game is a special activity that leverages the excitement of real sports events, such as the Football European or World Championship. The focus is on shared enthusiasm during this event and enhancing forecasting and research skills.",
    },
  ],
  toolsTitle: "Tools",
  toolsDescription:
    "It is possible to enhance the learning experiences by complementing the available games with specially designed elements. This allows for even more deeply personalized learning. Create your own combinations!",
  tools: [
    {
      title: "Fitness Check",
      illustration: "assessment",
      description:
        "The Fitness Check has a test-like character. It documents the status before, during, or after a learning unit. Based on the results, it generates a comprehensive radar chart (spider diagram). Particularly exciting for learners is the comparison with a prior self-assessment for each topic block. Each topic block concludes with suggestions for further learning resources.",
    },
    {
      title: "Chat",
      illustration: "chat",
      description:
        "This feature gives trainers the ability to provide timely feedback, answer questions quickly, and offer targeted guidance, especially in environments where typical chat programs are not established. For example, a pre-onboarding program for new employees can be supported through chat even before they officially join the company.",
    },
    {
      title: "Leaderboard",
      illustration: "leaderboard",
      description:
        "Adding a leaderboard and a team leaderboard can significantly enhance students' participation from a didactical perspective. This feature transforms individual learning efforts into a motivating collective experience.",
    },
    {
      title: "Store",
      illustration: "store",
      description:
        "Integrate a store with customizable exchange options into the learning experience to motivate learners, especially at the beginning. It can be filled with symbolic achievements, such as badges, to tangible items, aligned with the preferences and regulations of your organization.",
    },
    {
      title: "Library",
      illustration: "library",
      description:
        "This is a collection of audiovisual materials, typically provided by clients, aimed at promoting self-directed learning and supplementing knowledge. The library can contain documents such as scripts, reference works, videos, audio recordings, or links to external or internal sources.",
    },
    {
      title: "Badges",
      illustration: "achievements",
      description:
        "Learners who have accomplished certain milestones receive badges, such as exclusive avatars, as recognition for their efforts and to foster a sense of achievement and progress. They can collect these badges and complete a special set.",
    },
  ],
} satisfies Content;
