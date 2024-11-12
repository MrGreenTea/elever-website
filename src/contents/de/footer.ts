import type { Content } from "../types/footer";

export default {
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
} satisfies Content;
