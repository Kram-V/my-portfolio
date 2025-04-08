export type NavLink = {
  title: string;
  link: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type Project = {
  image: Image;
  demoLiveLink: string;
  srcCodeLink: string;
  techStacks: string[];
};
