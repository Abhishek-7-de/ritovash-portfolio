import Container from "../components/layout/Container";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import About from "../components/sections/About";
import Expertise from "../components/sections/Expertise";
import CaseStudies from "../components/sections/CaseStudies";
import Process from "../components/sections/Process";
import ExperienceTimeline from "../components/sections/ExperienceTimeline";
import ToolsStack from "../components/sections/ToolsStack";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <CaseStudies />
        <Process />
        <ExperienceTimeline />
        <ToolsStack />
        <Contact />
      </Container>
    </main>
  );
}
