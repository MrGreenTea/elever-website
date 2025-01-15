import type { Content } from "../types/home.ts";

export default {
  meta: {
    title: "Elever",
    description:
      "Interagieren Sie mit Modulen, die effektives Lernen, Teamarbeit und Wissenstransfer fördern.",
  },
  hero: {
    title: "Die Elever App",
    subtitle: "Transformieren Sie Lernroutinen",
    description:
      "Etablieren Sie dauerhafte Gewohnheiten.\nSpielerisch und mit einer mobilen App.",
    callToAction: "Demo Zugang anfragen",
  },
  valueProposition: {
    title: "Unser Versprechen",
    sections: {
      ourAim: {
        title: "Unser Ziel ist es, die Lern-Motivation zu fördern",
        description: [
          "Was uns Menschen seit der Kindheit verbindet, ist, dass wir gerne spielen und durch spielen lernen. Bei Elever glauben wir an die Möglichkeiten des Spiels auch im professionellen Umfeld.",
          "Wir respektieren, dass verschiedene Lerntypen unterschiedliche Quellen der Motivation haben. Diese können wir grösstenteils mit unserem System adressieren. Elever ermöglicht es Ihnen und Ihrer Organisation im Bereich der Aus- und Weiterbildung, Lernspiele zu erstellen und verschiedene Motivationsfaktoren in einem „Gamification Management System“ zu verwalten.",
          "Die Lernpfade, die Sie erstellen, basieren auf der individuellen Situation der Gruppe. Micro - Learning - Aktivitäten helfen ihnen, eine regelmässige wöchentliche Gewohnheit zu entwickeln. Dies hält die Engagement - Raten noch, wirkt der Vergessenskurve entgegen und sorgt für den Transfer des Gelernten.",
        ],
      },
      personalizedLearning: {
        title:
          "Personalisierte und emotionale Lernerlebnisse machen einen großen Unterschied",
        description: [
          'Die Interaktionen mit für sie relevanten Inhalten und "ihren Leuten", die Sie mit den Mini-Spielen ermöglichen, werden für Lernende aus jeder Generation zu einem angenehmen Lernerlebnis. Mitarbeitende, Auszubildende und Studierende, die mit Elever lernen, entwickeln ein vermehrtes Interesse am Lernen. Die Lernerlebnisse fördern ein Gefühl der Integration, der Gemeinschaft und des Zusammenhalts.',
          "Als Ergebnis entwickeln Lernende eine emotionale und dauerhafte Verbindung zum Thema und zum Inhalt. Sie identifizieren sich mehr mit ihrem Arbeitgeber und vernetzen sich mit den anderen Teilnehmenden. Darüber hinaus erzielen sie bessere Noten, wenn sie sich mit der Elever-App auf eine Prüfung vorbereiten.",
        ],
      },
    },
    forgettingCurveTitle: "Der Vergessenskurve entgegenwirken",
  },
  modules: {
    title: "Das sind unsere Module",
    description: [
      "Im Laufe der letzten Jahre haben wir ein leistungsstarkes System aufgebaut. Es enthält eine umfangreiche Sammlung von Modulen und Funktionen, um umfassende spielerische Bildung zu organisieren. Damit ist es möglich, Motivation durch kurze, mobile und personalisierte Lerneinheiten zu unterstützen. Das Elever-System automatisiert ausserdem die Abläufe für Admins. Es besteht aus einer mobilen App, einer Web-App und einem Content-Management-System, das ein Autorensystem beinhaltet. Jedes Modul ist über das CMS zugänglich.",
      "Es unterstützt Sie dabei, Ihre kreativen Ideen umzusetzen. Unser Tipp: Wecken Sie Neugier bei den Lernenden, übertreiben Sie ruhig mal und setzen Sie auch Komik ein. Auf Grund unserer Erfahrung und der Auswertungen können wir sagen, dass die Lernenden sich an kollaborativen, relevanten und angemessen herausfordernden Aufgaben rege beteiligen. Dabei erwerben sie das notwendige Wissen, um in der Entwicklung und Anwendung ihrer Fähigkeiten und Kompetenzen zu glänzen und ihr volles Potential aus zu schöpfen.",
    ],
    subtitle: "Beispiele unserer Module",
    callToAction: "Weitere Informationen erhalten",
  },
  cms: {
    title: "CMS - Unser Content Management System",
    sections: [
      {
        title: "Content-Automatisierung in seiner besten Form",
        description: [
          "Bereiten Sie ein personalisiertes Lernerlebnis vor, das die Bedürfnisse Ihrer Organisation erfüllt. Bestimmen Sie die Zeiten für Aktivitäten, bieten Sie Punkte und Belohnungen an oder fordern Sie Teilnehmende heraus, die Spitzenpositionen in der Rangliste zu erreichen.",
          "Sind die Regeln einmal festgelegt, lassen sich die Abläufe automatisieren und wiederholen. Ihnen bleibt (nur) noch die Auswertung der Ergebnisse und Beteiligung im CMS.",
        ],
      },
      {
        title:
          "Verfolgen und bewerten Sie jederzeit den Fortschritt ihrer Lernenden",
        description: [
          "Sie können Elever im Flipped Classroom Format, als Stand-alone Lösung, Kurs-begleitenden Lösung oder als Transfer-Lösung einsetzen. In jedem Format können Sie mit den Auswertungen Bereiche identifizieren, die Aufmerksamkeit benötigen. Besonders in Flipped Classroom settings, die auf einen einheitlichen Vorbereitungsstand angewiesen sind, geben die Auswertungen relevante Hinweise für etwaige Schwachpunkte und fehlende Beteiligung.",
          "Falls erforderlich, können Kurs-Verantwortliche ein Gespräch mit den Teilnehmenden über die integrierte Chat Funktion starten.",
          "Mit Elever können Ausbilder, Trainer, HR-Abteilungen und ihre relevanten Stakeholder analysieren, welche Lernende, Gruppen oder Bereiche Aufmerksamkeit benötigen, und die Strategie in Echtzeit anpassen oder Kursaktivitäten verstärken.",
        ],
      },
    ],
  },
} satisfies Content;
