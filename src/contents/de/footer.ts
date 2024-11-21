import type { Content } from "../types/footer";

export default {
  contact: {
    title: "KONTAKT",
    subtitle: "Wir freuen uns über Nachrichten!",
    description: [
      "Möchten Sie Lernroutinen transformieren und dauerhafte Gewohnheiten für Teams in Ihrer Organisation oder Ihrem Unternehmen aufbauen? Fordern Sie einen Demo-Zugang an und erfahren Sie mehr über Gamification und Microlearning während Sie das vorbereitete Quiz spielen.",
      "Möchten Sie Ihren Inhalt in einem unserer Module sehen? Schreiben Sie uns und wir erörtern, wie wir gemeinsam ein Projekt umsetzen können.",
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
} satisfies Content;
