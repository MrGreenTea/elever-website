import type { Content } from "../types/footer";

export default {
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
} satisfies Content;
