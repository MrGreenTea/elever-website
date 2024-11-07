export type Content = {
  title: string;
  navigation: {
    home: string;
    modules: string;
    usecases: string;
    login: string;
    openMenu: string;
  };
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
  contact: {
    title: string;
    subtitle: string;
    description: string[];
    fields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
    };
    button: string;
  };
  footer: {
    productBy: string;
    address: string[];
  };
};
