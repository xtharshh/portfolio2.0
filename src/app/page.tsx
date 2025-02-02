"use client";

import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css';
import  Footer  from "@/components/Footer";
import  Hero  from "@/app/home/page";
import  Introduction  from "@/app/introduction/page";
// import { Projects } from "@/app/projects/page";
import  TechStack  from "@/app/techstack/page";
import Contact from "@/app/contact/page";
// import FallingText from "@/components/ui/FallingText";
import KrishnaQuote from "./krishna/page";
import ScrollSection from "@/components/ScrollSection";
import  Projects from "./projects/page";
import Certifications from "./certifications/page";
// import Navbar from "@/components/Navbar";


export default function Page() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      const neon = document.getElementById("neon");
      const x = event.clientX;
      const y = event.clientY;
      if (neon) {
        neon.style.left = `${x}px`;
        neon.style.top = `${y}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    return null // or a loading spinner
  }

  return (
    <main className="no-fouc">
      <div className={styles.container}>
        <div id="neon" className={styles.neon}></div>
        
        <ScrollSection>
          <Hero />
        </ScrollSection>

        <ScrollSection>
          <Introduction />
        </ScrollSection>

        <ScrollSection>
          <TechStack />
        </ScrollSection>

        <ScrollSection>
          <Projects />
        </ScrollSection>

        <ScrollSection>
          <KrishnaQuote />
        </ScrollSection>
        <ScrollSection>
          <Certifications/>
        </ScrollSection>
        <ScrollSection>
          <Contact />
        </ScrollSection>


          <Footer />

      </div>
@    </main>
  );
}
