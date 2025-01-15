import type { Content } from "../types/use-cases";

export default {
  meta: {
    title: "Elever Anwendungsfälle",
    description:
      "Interagieren Sie mit Modulen, die effektives Lernen, Teamarbeit und Wissenstransfer fördern.",
  },
  hero: {
    title: "Anwendungsfälle",
    description:
      "Elever hat fast ein Jahrzehnt lang mit über 30 Institutionen zusammengearbeitet und das Lernen von 150.000 Lernenden beeinflusst. Hier sind einige unserer jüngsten Anwendungsfälle.",
  },
  sectionLabels: {
    participants: "Teilnehmende",
    modules: "Module",
    results: "Ergebnisse",
    fullUsecaseButton: "Den vollständigen Use case lesen",
  },
  leadershipTraining: {
    title: "Führungskräftetraining in einem Konzern",
    participants:
      "16 Teilnehmende pro Kurs x 25 Kurse pro Jahr, ca. 400 pro Jahr.",
    modules: [
      "Abenteuer",
      "Frage der Woche",
      "Reflexion",
      "Bibliothek",
      "Ranglisten",
      "Abzeichen",
    ],
    results:
      "69% der aktiven Teilnehmenden haben 68% der Inhalte bearbeitet. Dies stellt sicher, dass die Mehrheit der Teilnehmenden an den Seminartagen gut vorbereitet ist, die wesentlichen Inhalte verinnerlicht und regelmäßig wiederholt hat. Dies ermöglicht das Flipped-Classroom-Konzept und macht die Teilnahme effektiver.",
  },
  vocationalTraining: {
    title: "Begleitung von Lernenden in der Berufsausbildung",
    description: "Dieser Anwendungsfall ist in A und B unterteilt",
    A: {
      title:
        "Prüfungsvorbereitung für das 3. Lehrjahr der Ausbildung „Kauffrau/Kaufmann EFZ“",
      participants: "Ca. 90 Lernende pro Jahr",
      modules: ["Abenteuer", "Reflexion", "Foto-Event", "Ranglisten", "Shop"],
      results:
        "95% der aktiven Lernenden haben 79% der versendeten Inhalte bearbeitet. Verbesserungen bei den Abschlussnoten insgesamt, weniger Lernende mussten wiederholen. Die Attraktivität der Ausbildung wird durch diese mobile Lernmöglichkeit gesteigert und die Prüfungsvorbereitung unterstützt.",
    },
    B: {
      title:
        "Begleitung von Lernenden in ihren überbetrieblichen Kursen während der gesamten Lehrzeit („Kauffrau/Kaufmann EFZ“)",
      participants: "ca. 220 Lernende pro Jahr",
      modules: [
        "Abenteuer",
        "Frage der Woche",
        "Foto-Event",
        "Ranglisten",
        "Fitness Check",
        "Abzeichen",
      ],
      results:
        "Dieser zweite use-case wurdein 2022/23 vorbereitet und startete im Sommer 2023. Bis Anfang November haben 88% der 215 Lernenden in den ersten warm-up Monaten 80% der Fragen beantwortet und 570 Kurz-Reflexionenz zu aktuellen Themen verfasst, gelesen und bewertet. Damit ist dasSystem bei den Lernenden etabliert und die Lernenden haben durch Freude und Emotionen Sicherheit in einem System gewonnen, das ihnen hilft, (spielerisch) ihre Kompetenznachweise und ihren Notendurchschnitt zu verbessern. Auch wird die Attraktivität der Ausbildung durch dieses zeitgemässe und mobile eLearning Verfahren gesteigert.",
    },
  },
  university: {
    title: "Begleitung von Studierenden in Universitätskursen",
    participants: "Ca. 3.000 Studierende",
    modules: ["Abenteuer", "Reflexion", "Shop", "Ranglisten"],
    results:
      "Die Abbruchquote wurde um etwa 4% reduziert, die Noten verbesserten sich spürbar, die Kurse wurden akademisch intensiver, und die effektive Teilnahmequote der im System aktiven Studierenden lag bei 70%.",
  },
} satisfies Content;
