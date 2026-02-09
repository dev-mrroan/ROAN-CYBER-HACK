import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Github } from "lucide-react";

export default function Projects({ projects, author }) {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 150,
      reset: false,
    });
    sr.reveal(".project-card");
  }, []);

  return (
    <section
      id="projects"
      className="mt-16 max-w-6xl mx-auto px-6 transition-colors duration-500
                 bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="project-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all
                       bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {p.title}
              </a>
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded border text-slate-500 dark:text-slate-300 
                             border-slate-300 dark:border-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Link to the website */}
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded border border-slate-400 dark:border-slate-600
                           hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                View the project
              </a>

              {/* GitHub button (only if open source) */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-4 py-2 rounded flex items-center gap-2
                             border border-slate-400 dark:border-slate-600
                             hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  <Github size={16} />
                  Open Source
                </a>
              )}

              {/* Contact */}
              <a
                href={`mailto:${author.email}?subject=À propos de: ${encodeURIComponent(
                  p.title
                )}`}
                className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Contact me
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
