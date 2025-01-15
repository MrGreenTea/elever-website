export type Content = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    callToAction: string;
  };
  valueProposition: {
    title: string;
    sections: {
      ourAim: {
        title: string;
        description: string[];
      };
      personalizedLearning: {
        title: string;
        description: string[];
      };
    };
    forgettingCurveTitle: string;
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
