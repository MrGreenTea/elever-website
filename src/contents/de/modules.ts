import type { Content } from "../types/modules";

export default {
  title: "Module",
  description: [
    "Microlearning und Gamification verändern Lerngewohnheiten auf positive Weise, indem Inhalte in kleine, leicht verdauliche Einheiten unterteilt und interaktiv sowie unterhaltsam gestaltet werden. Das ist die Philosophie von Elever.",
    "Wir haben Spiele und Module entwickelt, die sich an spezifische Inhalte anpassen lassen. Jedes Spiel ist darauf ausgelegt, den Lernenden ein dynamisches und zugleich wirkungsvolles Lernerlebnis zu bieten.",
  ],
  gamesTitle: "Spiele & Herausforderungen",
  games: [
    {
      title: "Abenteuer",
      illustration: "adventures",
      description:
        "Unsere Abenteuer in Form von Quiz-basierten Interaktioinen wie Multiple-Choice, Wahr-Falsch und weiteren, sind ein zentrales Modul, das relevantes Wissen verankert und es den Lernenden ermöglicht, ihr Wissen eigenständig zu testen und zu erweitern.",
    },
    {
      title: "Frage der Woche",
      illustration: "qotw",
      description:
        "Die Frage der Woche soll Teilnehmende motivieren, in ein Themengebiet tiefer ein zu tauchen. Wörter, Phrasen oder Bilder werden täglich teilweise enthüllt und laden dazu ein, ein Rätsel kollaborativ zu lösen.",
    },
    {
      title: "Foto-Event",
      illustration: "photoevent",
      description:
        "Auch das Foto-Event dient zur Auflockerung. Diese Aktivität ermöglicht es, andere Teilnehmende besser kennen zu lernen und sich auch von seiner privaten Seite zu zeigen. Sie laden Fotos und einen kurzen Text hoch, die das Wesentliche eines vorgegebenen Themas einfangen.",
    },
    {
      title: "Reflexion",
      illustration: "reflection",
      description:
        "Den Lernenden wird ein Text und/oder Bild präsentiert, um tiefer über ein Thema nachzudenken und dieses mit eigenen Worten zu reflektieren. Bei dieser metakognitiven Aktivität profitieren sie insbesondere auch davon, die Sichtweisen der anderen zu erkennen.",
    },
    {
      title: "Tipp-Spiel",
      illustration: "tipgame",
      description:
        "Das Tipp-Spiel ist eine besondere Aktivität, die die Spannung während eines realen Sportereignisses wie der Fussball Europa- oder Weltmeisterschaft nutzt. Im Mittelpunkt steht das gemeinsame Mitfiebern während dieses Events und das Verbessern von Vorhersage- und Recherchefähigkeiten.",
    },
  ],
  toolsTitle: "Tools",
  toolsDescription:
    "Es ist möglich, die Lernerlebnisse zu erweitern, indem die verfügbaren Spiele durch speziell entworfene Elemente ergänzt werden. Dadurch wird ein noch tiefer individualisiertes Lernen möglich. Erstellen Sie Ihre eigenen Kombinationen!",
  tools: [
    {
      title: "Fitness Check",
      illustration: "assessment",
      description:
        "Der Fitness Check ist eine andere Art Quiz, das eher einen Test-Charakter hat. Er dokumentiert den Anfangsstand vor einer Lerneinheit, das Zwischenergebnis oder schliesst eine Lerneinheit mit einer Bewertung ab. Basierend auf den Ergebnissen der Lernenden generiert er ein umfassendes Radar-Chart-Diagramm (Spinnen-Diagramm), das visuell Stärken und Bereiche mit Entwicklungsbedarf aufzeigt. Besonders spannend ist für Lernende der Vergleich zu einer vorher abgefragten Selbsteinschätzung zu jedem Themenblock. Jeder Themenblock schliesst mit Hinweisen für weitere Lernangebote ab. So können Teilnehmende gezielt für sie besonders interessante oder weniger starke Themen vertiefen.",
    },
    {
      title: "Chat",
      illustration: "chat",
      description:
        "Diese Funktion gibt den Ausbildenden die Möglichkeit, rechtzeitiges Feedback zu geben, Fragen schnell zu beantworten und gezielte Anleitungen zu geben. Insbesondere in einem Umfeld, in dem typische Chat-Programme nicht etabliert sind. Z.B. kann ein Pre-Onboarding Programm für neue Mitarbeitende noch vor dem Eintritt in die Unternehmung mit dem Chat begleitet werden.",
    },
    {
      title: "Ranglisten & Team Ranglisten",
      illustration: "leaderboard",
      description:
        "Das Hinzufügen der individuellen Rangliste und der Team Rangliste kann die Teilnahme der Lernenden aus didaktischer Sicht erheblich steigern. Diese Funktion verwandelt individuelle Lernanstrengungen in ein motivierendes gemeinschaftliches Erlebnis.",
    },
    {
      title: "Shop",
      illustration: "store",
      description:
        "Integrieren Sie einen Shop mit anpassbaren Tauschoptionen in das Lernerlebnis, um die Lernenden besonders zum Beginn zu motivieren. Er kann mit symbolischen Erfolgen wie Abzeichen bis hin zu greifbaren Elementen entsprechend den Vorstellungen und Regularien in Ihrer Organisation gefüllt werden.",
    },
    {
      title: "Bibliothek",
      illustration: "library",
      description:
        "Dies ist eine Sammlung audiovisueller Materialien, die typischerweise von Kunden bereitgestellt werden und darauf abzielt, selbstgesteuertes Lernen zu fördern und das Wissen zu ergänzen. Das können Dokumente sein wie Skripte und Nachschlagewerke oder Videos, Tonaufnahmen und Links zu externen oder internen Quellen. Idealerweise werden diese gestaffelt veröffentlicht, um Prokrastination zu vermeiden.",
    },
    {
      title: "Abzeichen",
      illustration: "achievements",
      description:
        "Lernende, die gewisse Meilensteine erreicht haben, erhalten Abzeichen wie z.B. exklusive Avatare als Anerkennung für ihre Anstrengungen und zur Förderung eines Gefühls des Fortschritts. Sie können diese Abzeichen sammeln und ein spezielles Set vervollständigen.",
    },
  ],
} satisfies Content;
