import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    image: { src: "/projects/flameguard.png", alt: "Flameguard" },
    demoLiveLink: "https://flameguardph.com/",
    srcCodeLink: "#",
    techStacks: ["Nuxt JS for SEO", "Tailwind CSS", "Mobile Responsive"],
  },
  {
    image: { src: "/projects/flameguard-cms.png", alt: "Flameguard CMS" },
    demoLiveLink: "#",
    srcCodeLink: "#",
    techStacks: ["Laravel", "MySQL", "Vue 3", "Tailwind CSS"],
  },
  {
    image: { src: "/projects/heroes-connect.png", alt: "Heroes Connect" },
    demoLiveLink: "https://heroesconnect.site/login",
    srcCodeLink: "#",
    techStacks: [
      "React JS",
      "React Hook Form",
      "Material UI",
      "Laravel",
      "MySQL",
    ],
  },
  {
    image: { src: "/projects/ayuda-app.png", alt: "Ayuda App" },
    demoLiveLink: "#",
    srcCodeLink: "#",
    techStacks: ["Next JS", "Tailwind CSS", "Laravel"],
  },
];
