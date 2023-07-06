// import Hero from "@/components/sections/Hero";

import ArticleSection from "@/components/sections/articles";
import Hero from "@/components/sections/hero";
import InfoSection from "@/components/sections/info";
import ProjectSection from "@/components/sections/project";
import ChatBox from "./completion";
import ContactSection from "@/components/sections/contact";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="scrollbar-none">
      <Hero />
      <ProjectSection
        alignment="left"
        number="01"
        title="Blockchain based EHR System"
        description="A EHR management system that leverages the power of blockchain to handle sensitive health data."
        link="#"
        image="https://images.unsplash.com/photo-1583912268183-a34d41fe464a"
      />
      <ProjectSection
        alignment="right"
        number="02"
        title="Gamified Learning Platform"
        description="A Game that utilizes AI to understand the learning behavior of a person and teach them python accordingly"
        link="#"
        image="https://images.unsplash.com/photo-1553481187-be93c21490a9"
      />
      <ArticleSection />
      <InfoSection>
        <ChatBox />
      </InfoSection>
      <ContactSection />
    </main>
  );
}
