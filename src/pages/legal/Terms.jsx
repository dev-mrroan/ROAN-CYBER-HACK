import React from "react";
import Footer2 from "../../components/Footer2";
import { Link } from "react-router-dom"; // si tu utilises react-router

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <h1 className="text-3xl font-bold mb-8">
          General Terms of Use
        </h1>

        <p className="mb-4">
          By accessing the site{" "}
          <strong>
            <a
              href="https://lordobitotech.xyz"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              ROAN CYBER HACK 
            </a>
          </strong>
          , You fully accept these terms of use.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Purpose of the site</h2>
        <p className="mb-4">
          The site offers informative content, tutorials, articles,

technological projects and digital services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Access to the site</h2>
        <p className="mb-4">
          Access to the site is free, excluding any costs related to your internet connection.

The publisher reserves the right to interrupt access at any time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Responsibility</h2>
        <p className="mb-4">
          The publisher cannot be held responsible for any direct or indirect damages resulting from the use of the site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Intellectual property
        </h2>
        <p className="mb-4">
          All content on this site is protected by copyright.

Any reproduction without authorization is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. External links</h2>
        <p className="mb-4">
          This site may contain links to other websites. We are not responsible for their content.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Modification</h2>
        <p className="mb-4">
          These terms and conditions may be modified at any time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Applicable law</h2>
        <p>
          These conditions are governed by the laws of Cameroon, France, US, DRC, Congo Brazzaville, Gabon, Haiti.
        </p>

        {/* Bouton retour */}
        <div className="mt-6">
          <Link
            to="/blog"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Retour aux articles
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}
