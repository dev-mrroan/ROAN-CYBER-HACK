import React from "react";

export default function Footer2() {
  const socials = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", url: "https://github.com/dev-mrroan" },
    { name: "YouTube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg", url: "https://youtube.com/@RoanCyberHack" },
    { name: "Telegram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg", url: "https://t.me/RoanCyberHack"},
    { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg", url: "https://whatsapp.com/channel/0029VbB8WLCoWwrOnDDcOn" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t mt-16 py-10 text-center text-slate-700 dark:text-slate-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-8"> 
        
        {/* Social networks */}
        <div>
          <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-3">Retrouvez-moi sur</h3>
          <div className="flex justify-center flex-wrap gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition"
              >
                <img src={s.icon} alt={s.name} className="w-5 h-5" />
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t pt-6 text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} <strong>ROAN CYBER HACK</strong>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm mt-6">
            <a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-600">Terms of Use</a>
            <a href="/legal" className="hover:text-blue-600">Legal notice</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
      </div>
      </div>
    </footer>
  );
   }

          
