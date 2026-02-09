import React from "react";
import Footer2 from "../../components/Footer2";

export default function Legal() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

      <ul className="space-y-4">
        <li>
          <strong>Site name :</strong> ROAN CYBER HACK
        </li>

        <li>
          <strong>URL :</strong>{" "}
          <a
            href="https://lordobitotech.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://lordobitotech.xyz
          </a>
        </li>

        <li>
          <strong>Responsible :</strong> MR ROAN
        </li>

        <li>
          <strong>Email :</strong>{" "}
          <a
            href="mailto:roancyberhack@gmail.com"
            className="text-blue-600 hover:underline"
          >
           roancyberhack@gmail.com
          </a>
        </li>

        <li>
          <strong>Country :</strong> Cameroon
        </li>

        <li>
          <strong>Host :</strong>{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Vercel
          </a>
        </li>

        <li>
          <strong>Activity :</strong> cybersecurity threats, hacking techniques, web development, autoamtion of bot whatsapp and telegram
        </li>
      </ul>

      <p className="mt-6">
        The website administrator strives to provide accurate information.

However, no guarantee is given as to its accuracy or completeness.
      </p>
      {/* Footer */}
      <Footer2 />
    </div>
  );
}
