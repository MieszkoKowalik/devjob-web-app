export interface IJob {
  id: string;
  company: string;
  logoBackground: { hex: string };
  logo: { url: string };
  jobPosition: string;
  postedAt: string;
  contract: string;
  location: string;
}

export interface IFullJob extends IJob {
  description: string;
  requirementsContent: string;
  requirementsList: {
    element: string;
  }[];
  roleContent: string;
  roleList: {
    element: string;
  }[];
  website: string;
}
