import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Contact() {
  useEffect(() => {
    ScrollReveal().reveal(".contact-section", {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      interval: 100,
      reset: false,
    });
  }, []);

  return (
    <section
      id="contact"
      className="contact-section py-20 px-6 md:px-12 transition-colors duration-500
                 bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">📩  Contact us</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
           Want to collaborate, ask a question, or launch a project?
Feel free to send us a message; we'll get back to you quickly.
        </p>

        <form
          action="https://formspree.io/f/xvgvlzrg"
          method="POST"
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-6
                     border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600
                         bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600
                         bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600
                       bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700
                       transition w-full md:w-auto"
          >
            Send ✉️
          </button>
        </form>
      </div>
    </section>
  );
}
