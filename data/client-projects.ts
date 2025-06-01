import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    image: {
      src: "/projects/management-report-system.png",
      alt: "Report Management System",
    },
    demoLiveLink: "/app-confidential",
    srcCodeLink: "#",
    techStacks: [
      "React JS",
      "Redux Toolkit",
      "React Hook Form",
      "Laravel",
      "MySQL",
    ],
  },
  {
    image: { src: "/projects/osd-event-cam.png", alt: "OSD Event Cam" },
    demoLiveLink: "/app-confidential",
    srcCodeLink: "#",
    techStacks: ["React Native", "Laravel", "MySQL"],
  },
  {
    image: { src: "/projects/flameguard.png", alt: "Flameguard" },
    demoLiveLink: "https://flameguardph.com/",
    srcCodeLink: "#",
    techStacks: ["Nuxt JS for SEO", "Tailwind CSS", "Mobile Responsive"],
  },
  {
    image: { src: "/projects/flameguard-cms.png", alt: "Flameguard CMS" },
    demoLiveLink: "/app-confidential",
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
    demoLiveLink: "/app-confidential",
    srcCodeLink: "#",
    techStacks: ["Next JS", "Tailwind CSS", "Laravel"],
  },
];
