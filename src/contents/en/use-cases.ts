import type { Content } from "../types/use-cases";

export default {
  title: "Use Cases",
  description:
    "Elever has collaborated with over 30 institutions for nearly a decade, impacting the learning of 150,000 learners. Here are some of our more recent use cases.",
  sectionLabels: {
    participants: "Participants",
    modules: "Modules",
    results: "Results",
    fullUsecaseButton: "Read the full use case (currently in German only)",
  },
  leadershipTraining: {
    title: "Leadership training in a Corporation",
    participants:
      "16 participants per course x 25 courses per year, approx. 400 per year.",
    modules: [
      "Adventures",
      "Question of the Week",
      "Reflexion",
      "Library",
      "Leaderboard",
      "Badges",
    ],
    results:
      "69% of active participants have worked through 68% of the content. This ensures that the majority of participants come to the seminar days well prepared and have internalized the critical content and repeated it regularly. This makes the flipped classroom concept possible and participation powerful.",
  },
  vocationalTraining: {
    title: "Accompanying learners in vocational training",
    description: "This use case is divided in A and B",
    A: {
      title:
        'A) Examination preparation for the 3rd year of the apprenticeship "Kauffrau/Kaufmann EFZ"',
      participants: "Approx. 90 learners per year",
      modules: [
        "Adventures",
        "Reflexion",
        "Photo Event",
        "Leaderboard",
        "Store",
      ],
      results:
        "95% of active learners have worked through 79% of the content sent. Improvement in final grades overall, fewer learners had to repeat. Increasing the attractiveness of the training through this mobile learning opportunity and support in exam preparation.",
    },
    B: {
      title:
        'B) Accompanying apprentices in their intercompany courses throughout their apprenticeship ("Kauffrau/Kaufmann EFZ")',
      participants: "approx. 220 learners per year",
      modules: [
        "Adventures",
        "Question of the Week",
        "Photo Event",
        "Leaderboard",
        "Assessment",
        "Badges",
      ],
      results:
        "This second use case was prepared in 2022/23 and started in summer 2023. By the beginning of November, 88% of the 215 learners had answered 80% of the questions in the first warm-up months and written, read and evaluated 570 short reflections on current topics. The system has thus been established among the learners and the learners have gained security through joy and emotions in a system that helps them to (playfully) improve their competency certificates and their grade point average. The attractiveness of the training is also increased by this modern and mobile eLearning process.",
    },
  },
  university: {
    title: "Accompanying students in university courses",
    participants: "Approx. 3,000 students",
    modules: ["Adventures", "Reflexion", "Store", "Leaderboard"],
    results:
      "The dropout rate was reduced by about 4%, grades improved noticeably, courses became more academically intensive, and the effective participation rate of students active in the system was 70%.",
  },
} satisfies Content;
