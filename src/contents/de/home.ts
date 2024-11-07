import type { Content } from "../types/home.ts";

const content: Content = {
  title: "Startseite",
  navigation: {
    home: "Startseite",
    modules: "Module",
    usecases: "Use cases",
    login: "Login",
    openMenu: "Menü öffnen",
  },
  hero: {
    title: "Die Elever App",
    subtitle: "Transformieren Sie Lernroutinen",
    description:
      "Etablieren Sie dauerhafte Gewohnheiten. Spielerisch und mit einer mobilen App.",
  },
  valueProposition: {
    title: "WERTVERSPRECHEN",
    sections: [
      {
        title: "Unser Ziel ist es, die Motivation zum Lernen zu fördern",
        description: [
          "Wir respektieren, dass jeder Lernende unterschiedliche Motivationsquellen hat. Was die meisten von uns Menschen seit unserer Kindheit verbindet, ist, dass wir gerne spielen und durch Spiel lernen.",
          "Das Elever-System ermöglicht es Ihnen, Weiterbildungsorganisationen und Trainern, Lernspiele zu erstellen und mehrere Motivatoren in einem 'Gamification Management System' zu verwalten. Die von Ihnen erstellten Lernerfahrungen basieren auf der individuellen Situation Ihrer Kohorte. Mikro-Lernaktivitäten helfen ihnen, eine gesunde wöchentliche Gewohnheit aufzubauen. Dies hält die Engagement- und Retentionsraten hoch.",
        ],
      },
      {
        title:
          "Personalisiertes und emotionales Lernen machen einen großen Unterschied",
        description: [
          "Mit der Elever App können Sie Mini-Spiele basierend auf Ihren spezifischen Inhalten, Themen und Lernergruppen erstellen. Die Interaktion mit diesen Spielen wird für Lernende jeder Generation zu einem angenehmen Lernakt. Mitarbeiter, Auszubildende und Studenten, die mit Elever lernen, teilen ein Interesse am Lernen und fördern ein Gefühl der Integration und Gemeinschaft.",
          "Als Ergebnis entwickeln die Lernenden eine emotionale und dauerhafte Verbindung zum Lernthema und -inhalt. Sie arbeiten gerne mehr für ihren Arbeitgeber und engagieren sich mit ihren Kollegen. Darüber hinaus erzielen sie bessere Noten, wenn sie sich mit der Elever App auf eine Prüfung vorbereiten.",
        ],
      },
    ],
  },
  modules: {
    title: "MODULE",
    description: [
      "In den letzten Jahren haben wir ein leistungsfähiges System aufgebaut und eine Sammlung von Spielen und Funktionen erstellt, um die Funktionalität bereitzustellen, die Motivation und personalisiertes Lernen unterstützt. Das Elever-System besteht aus einer Mobile App, einer Web App und einem Content Management System, das ein Autorensystem umfasst.",
      "Jedes Modul ist über das CMS zugänglich und darauf ausgelegt, die Neugier der Lernenden zu wecken. Sie engagieren sich in kollaborativen, relevanten und angemessen herausfordernden Aufgaben, die es ihnen ermöglichen, das notwendige Wissen zu erwerben, um in der Entwicklung ihrer Kompetenzen und Fähigkeiten zu gedeihen.",
    ],
    subtitle: "Lernen Sie die Module kennen",
    callToAction: "Weitere Informationen erhalten",
  },
  cms: {
    title: "CMS",
    sections: [
      {
        title:
          "Automatisieren und verteilen Sie Ihre Inhalte in Minuten mit unserem CMS",
        description: [
          "Bereiten Sie eine Lernerfahrung vor und passen Sie sie an die Bedürfnisse Ihres Unternehmens an. Legen Sie die Zeit für Aktivitäten fest, bieten Sie Punkte und Belohnungen an oder fordern Sie Ihre Studenten heraus, in den Spitzenpositionen der Bestenliste zu erscheinen.",
          "Bei Bedarf kann ein Trainer über unseren Chat ein Einzelgespräch mit den Studenten führen.",
        ],
      },
      {
        title:
          "Verfolgen und bewerten Sie den Fortschritt der Studenten, wann immer Sie möchten",
        description: [
          "Metriken sind entscheidend, um Lernergebnisse zu verstehen und zu verbessern, Bereiche zu identifizieren, die Aufmerksamkeit benötigen, und sicherzustellen, dass jeder Student sein volles Potenzial ausschöpft.",
          "Mit unserem System können Trainer, Personalabteilungen, Unternehmensmanager, Schulpädagogen und andere diagnostizieren, welche Studenten oder Gruppen von Studenten Aufmerksamkeit benötigen, und die Strategie anpassen oder die Kursaktivitäten in Echtzeit verstärken.",
        ],
      },
    ],
  },
  contact: {
    title: "KONTAKT",
    subtitle: "Kontaktieren Sie uns",
    description: [
      "Möchten Sie Lernroutinen transformieren und dauerhafte Gewohnheiten für die Teams in einer Organisation oder einem Unternehmen aufbauen? Fordern Sie unsere Demo an und lernen Sie von Experten über Gamification, während Sie das Quiz spielen, das wir für Sie vorbereitet haben.",
      "Möchten Sie Ihre Inhalte in einem unserer Spiele sehen? Schreiben Sie uns und entdecken Sie, wie wir gemeinsam ein Projekt durchführen können.",
    ],
    fields: {
      name: "Ihr Name",
      company: "Ihr Unternehmen",
      email: "E-Mail",
      phone: "Ihre Telefonnummer",
      message: "Nachricht",
    },
    button: "Senden",
  },
  footer: {
    productBy: "Ein Produkt von",
    address: [
      "Altus Forge GmbH",
      "Heinrichstrasse 267a",
      "8005 Zürich, Schweiz",
    ],
  },
};

export default content;
