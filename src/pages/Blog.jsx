import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import Footer2 from "../components/Footer2";
import { format } from "date-fns";

const articlesData = [
  {
    id: 1,
    date: new Date("06-02-2026"),
    category: "Bots",
    title: "Crée ton propre Bot WhatsApp – Tutoriel Complet !",
    excerpt:
      "Tu veux créer ton bot WhatsApp mais tu ne sais pas par où commencer ? Cette vidéo te montre tout ce qu’il faut — les fichiers, l’installation, et même des modèles de commandes prêts à l’emploi si tu ne sais pas coder !",
    content: (
      <>
        <p>
          📹 Regarde le tuto complet ici 👉{" "}
          <a
            href="https://youtu.be/-24iwWriOCc"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </p>
        <p>
          📦 Fichiers du bot ➡️{" "}
          <a
            href="https://whatsapp.com/channel/0029VbB8P8WLCoWwrOnDDcOn"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger ici
          </a>
        </p>
      </>
    ),
  },
  {
    id: 2,
    date: new Date("2025-11-11"),
    category: "Bots",
    title: "Automatiser WhatsApp avec ton bot",
    excerpt:
      "Découvre comment automatiser tes conversations WhatsApp et gérer les tâches répétitives grâce à ton bot personnalisé.",
    content: (
      <p>
        Ce guide te montrera comment configurer les commandes automatiques,
        envoyer des réponses programmées et gérer tes contacts efficacement. 🔥
      </p>
    ),
  },
  {
    id: 3,
    date: new Date("2025-11-13"),
    category: "Bots",
    title: "Top 5 des projets pour débuter avec un bot",
    excerpt:
      "Tu veux te lancer dans le développement de bots mais tu ne sais pas quoi créer en premier ?",
    content: (
      <ul className="list-disc ml-6">
        <li>Bot de notifications WhatsApp</li>
        <li>Bot de rappels</li>
        <li>Bot quiz</li>
        <li>Bot de sondages</li>
        <li>Bot de téléchargement</li>
      </ul>
    ),
  },
  {
    id: 4,
    date: new Date("2025-11-15"),
    category: "Sites",
    title: "Créer un site web avec HTML & CSS",
    excerpt: "Apprends les bases du web.",
    content: <p>Structure HTML et styles CSS de base.</p>,
  },
];

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("All");
  const articleRefs = useRef([]);

  useEffect(() => {
    ScrollReveal().reveal(articleRefs.current, {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      interval: 200,
      scale: 0.95,
      opacity: 0,
    });
  }, []);

  const categories = ["All", ...new Set(articlesData.map(a => a.category))];

  const filteredArticles =
    filter === "All"
      ? articlesData
      : articlesData.filter(a => a.category === filter);

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 space-y-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          BLOG
        </h1>

        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded font-semibold ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredArticles.map((article, idx) => (
            <div
              key={article.id}
              ref={el => (articleRefs.current[idx] = el)}
              className="border rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(
                    expandedId === article.id ? null : article.id
                  )
                }
                className="w-full px-6 py-4 bg-blue-50 flex justify-between font-semibold"
              >
                {article.title}
                <span>{expandedId === article.id ? "▲" : "▼"}</span>
              </button>

              {expandedId === article.id && (
                <div className="px-6 py-4 space-y-3">
                  <p className="text-sm text-gray-500">
                    Publié le {format(article.date, "dd/MM/yyyy")}
                  </p>
                  <p>{article.excerpt}</p>
                  <div>{article.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
