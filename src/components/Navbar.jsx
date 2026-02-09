import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Détecte le thème du système ou localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Change le thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Nom */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://files.catbox.moe/nyu5po.png"
            alt="JEAN - STEPH TECH"
            onError={(e) => (e.target.style.display = "none")}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              ROAN CYBER HACK
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">DIGITAL SOLUTIONS</p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {["/", "/blog"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-700 dark:text-slate-200"
                }`
              }
            >
              {path === "/" ? "Home" : "Blog"}
            </NavLink>
          ))}
          <a
            href="#projects"
            className="hover:text-blue-500 text-slate-700 dark:text-slate-200 transition"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Contact me
          </a>
          {/* Toggle Theme */}
          
        </nav>

        {/* Bouton Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-blue-50 dark:hover:bg-slate-800 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6 text-slate-700 dark:text-slate-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Mobile Animé */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-4 flex flex-col gap-3">
          <Link to="/" className="hover:text-blue-500 dark:text-slate-200" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/blog" className="hover:text-blue-500 dark:text-slate-200" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <a href="#projects" className="hover:text-blue-500 dark:text-slate-200" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a
            href="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition text-center"
          >
            Contact me
          </a>
          {/* Toggle Theme Mobile */}
         
        </div>
      </div>
    </header>
  );
}
