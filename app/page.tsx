import AboutMe from "./_components/AboutMe";
import ClientProjects from "./_components/ClientProjects";
import HeroSection from "./_components/HeroSection";
import MyProjects from "./_components/MyProjects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ClientProjects />
      <MyProjects />
    </>
  );
}
