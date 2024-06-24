export type ProjectItem = {
  name: string;
  description: string;
  url: string;
  video: string;
  techStack: string[];
};

export interface WorkExperienceItem {
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string;
}
