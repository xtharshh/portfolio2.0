"use client";

import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import  Footer  from "@/components/Footer";
import  Hero  from "@/app/home/page";
import  Introduction  from "@/app/introduction/page";
// import { Projects } from "@/app/projects/page";
import  TechStack  from "@/app/techstack/page";
import Contact from "@/app/contact/page";
import FallingText from "@/components/ui/FallingText";
import KrishnaQuote from "./krishna/page";
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
        <Hero />
        <Introduction />
        <TechStack />
        <div style={{ width: "100%", height: "200px" }}> {" "} {/* Adjust width and height as needed */} 
          <FallingText 
          text='React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.'
          highlightWords={[ "React", "Bits", "animated", "components", "simplify", ]} 
          highlightClass="highlighted" 
          trigger="hover" 
          backgroundColor="transparent" 
          wireframes={false} 
          gravity={0.56} 
          fontSize="2rem" 
          mouseConstraintStiffness={0.9} /> 
        </div>
        <Contact />
        <KrishnaQuote />
        <Footer />
      </div>
    </main>
  );
}
