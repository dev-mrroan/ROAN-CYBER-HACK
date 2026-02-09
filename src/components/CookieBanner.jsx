import React, { useEffect, useState } from "react";

/**
 * CookieBanner
 * - stores an object in localStorage {accepted: boolean, ts: number}
 * - The banner is no longer displayed if ts + 3 weeks > now
 * - expose loadConsentScript(callback) to load third-party scripts conditionally
 */

const STORAGE_KEY = "lob_cookie_consent";
const THREE_WEEKS_MS = 21 * 24 * 60 * 60 * 1000;

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveConsent(accepted) {
  const payload = { accepted: !!accepted, ts: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  return payload;
}

export default function CookieBanner({ onAccept }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const c = readConsent();
    if (!c) {
      setVisible(true);
      return;
    }
    const expired = (c.ts + THREE_WEEKS_MS) <= Date.now();
    if (expired) setVisible(true);
  }, []);

  const handleAccept = () => {
    const payload = saveConsent(true);
    setVisible(false);
    if (typeof onAccept === "function") onAccept(payload);
  };

  const handleDecline = () => {
    const payload = saveConsent(false);
    setVisible(false);
    if (typeof onAccept === "function") onAccept(payload);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:bottom-8 z-50">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 border rounded-lg shadow-lg p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex-1 text-slate-800 dark:text-slate-100">
          <strong>We use cookies</strong>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            We use cookies to improve your experience and display ads. By accepting, you authorize the loading of third-party scripts.
            You can refuse if you wish.
          </p>
        </div>

        <div className="flex-shrink-0 flex gap-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-md border text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"
          >
            Refuse
          </button>

          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            Accept and continue
          </button>
        </div>
      </div>
    </div>
  );
}

/* export util if you want to load scripts elsewhere */
export { readConsent, saveConsent, STORAGE_KEY, THREE_WEEKS_MS };
