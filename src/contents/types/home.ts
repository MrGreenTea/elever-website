export type Content = {
  title: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  valueProposition: {
    title: string;
    sections: {
      title: string;
      description: string[];
    }[];
  };
  modules: {
    title: string;
    description: string[];
    subtitle: string;
    callToAction: string;
  };
  cms: {
    title: string;
    sections: {
      title: string;
      description: string[];
    }[];
  };
};
