export type Content = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string[];
  };
  gamesTitle: string;
  games: {
    title: string;
    illustration: string;
    description: string;
  }[];
  toolsTitle: string;
  toolsDescription: string;
  tools: {
    title: string;
    illustration: string;
    description: string;
  }[];
};
