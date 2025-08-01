export type PostType = {
  title: string;
  date: Date;
  keyword: string;
  fileName: string; // TODO: Hadde vært Nice å kunne validere at filene eksisterer
  blurb: string;
  description: string;
  link: string;
  hidden?: boolean; // Optional, used for posts that are not yet published
};
