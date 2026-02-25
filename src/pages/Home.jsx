import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";
import Parcours from "../components/Parcours";
import Skills from "../components/Skills";

export default function Home() {
  const author = {
    name: "MR ROAN",
    email: "roancyberhack@gmail.com",
    phone: "+237656274406",
  };

  const projects = [
    {
      id: 1,
      title: "BLOG ROAN CYBER HACK",
      desc: "Blog of my project and personal business ROAN CYBER HACK",
      link: "https://whatsapp.com/channel/0029VbB8P8WLCoWwr0nDDc0n",
      tags: ["React", "Vite", "Tailwind"],
    },
    {
      id: 2,
      title: "ROAN CYBER HACK",
      desc: "The safety company is a center where problems discorve are directly maintained and repair..",
      link: "https://whatsapp.com/channel/0029VbB8P8WLCoWwrOnDDcOn",
      github: "https://github.com/dev-mrroan",
      tags: ["React", "Tailwind", "Vite"],
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
    });

    sr.reveal("section");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 transition-colors duration-500">
      {/* Hero */}
      <Hero />

      {/* Parcours */}
      <Parcours />

      {/* Skills */}
      <Skills />

      {/* Our Projects*/}
      <Projects projects={projects} author={author} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
