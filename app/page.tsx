import AboutMe from "./_components/AboutMe";
import ClientProjects from "./_components/ClientProjects";
import Experience from "./_components/Experience";
import HeroSection from "./_components/HeroSection";
import MyProjects from "./_components/MyProjects";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      <ClientProjects />
      <MyProjects />
      <Contact />
    </>
  );
}
