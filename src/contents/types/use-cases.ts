type UseCase = {
  title: string;
  participants: string;
  modules: string[];
  results: string;
};

export type Content = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  sectionLabels: {
    participants: string;
    modules: string;
    results: string;
    fullUsecaseButton: string;
  };
  leadershipTraining: UseCase;
  vocationalTraining: {
    title: string;
    description: string;
    A: UseCase;
    B: UseCase;
  };
  university: UseCase;
};
