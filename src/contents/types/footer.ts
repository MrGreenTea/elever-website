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
    success: {
      title: string;
      message: string;
      closeButton: string;
    };
    error: {
      message: string;
    };
  };
  footer: {
    productBy: string;
    address: string[];
    handelsRegisterLabel: string;
  };
};
