import type { Content } from "../types/footer";

export default {
  contact: {
    title: "CONTACT",
    subtitle: "We look forward to hearing from you!",
    description: [
      "Do you want to transform learning routines and build lasting habits for the teams in your organization or your company? Request a demo access and learn about gamification and microlearning - while playing the quiz we have prepared for you.",
      "Would you like to see your content within one of our modules? Drop us a line and discover how we can run a project together.",
    ],
    fields: {
      name: "Your name",
      company: "Your company",
      email: "Email",
      phone: "Your phone",
      message: "Message",
    },
    button: "Send",
    success: {
      title: "Thank You!",
      message: "Your message has been sent",
      closeButton: "Close",
    },
    error: {
      message:
        "Something went wrong, please try again. Please refresh the page if the problem persists.",
    },
  },
  footer: {
    productBy: "A product by",
    address: [
      "Altus Forge GmbH",
      "Heinrichstrasse 267a",
      "8005 Zürich, Switzerland",
    ],
    handelsRegisterLabel: "Commercial Register Entry",
  },
} satisfies Content;
