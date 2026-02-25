import React, { useState } from "react";
import Footer2 from "../../components/Footer2"; // adapte le chemin si besoin

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `
      mailto:roancyberhack@gmail.com
      ?subject=${encodeURIComponent(form.subject)}
      &body=${encodeURIComponent(
        `Name : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
      )}
    `;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>

        <p className="mb-10 text-center">
          You can contact us for any questions, partnerships, advertising, technical support, or professional inquiries.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-5"
        >
          <div>
            <label className="block mb-1 font-medium">Full name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Adresse email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Sujet</label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
              placeholder="Subject of the message"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send the message
          </button>
        </form>

        <p className="text-center mt-8 font-semibold">
          📧 roancyberhack@gmail.com
        </p>

        <p className="text-center mt-2 text-slate-500">
          Answer To Your Request Will Be Given From Monday - Saturday At 6Am - 6Pm
        </p>
      </div>

      {/* Footer */}
      <Footer2 />
    </>
  );
}
