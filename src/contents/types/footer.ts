export type Content = {
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
