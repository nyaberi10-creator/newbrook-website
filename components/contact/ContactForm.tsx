"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    service: "Website Development",
    budget: "Under $1,000",
    message: "",
  });

  const trackFormStart = () => {
    if (!formStarted) {
      trackEvent("form_start", {
        form_name: "Strategy Session",
        page: window.location.pathname,
      });

      setFormStarted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      trackEvent("generate_lead", {
        form_name: "Strategy Session",
        service: formData.service,
        budget: formData.budget,
        page: window.location.pathname,
      });

      setSuccess(true);

      router.push("/thank-you");

      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        website: "",
        service: "Website Development",
        budget: "Under $1,000",
        message: "",
      });

      setFormStarted(false);

    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact-form"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Let's Grow Your Business
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Request Your Free Strategy Session
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Tell us about your business and we'll prepare a custom growth
            strategy designed specifically for your goals.
          </p>

        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Why businesses choose Newbrook Digital
            </h3>

            <div className="mt-10 space-y-8">

              {[
                "Free 30-minute strategy session",
                "Custom growth plan",
                "No long-term contracts",
                "Transparent reporting",
                "Fast communication",
                "Results-driven marketing",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />

                  <p className="text-lg text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-3xl bg-white p-10 shadow-2xl">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label className="mb-2 block font-semibold">
                  Full Name *
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={trackFormStart}
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Business Name
                </label>

                <input
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  onFocus={trackFormStart}
                  type="text"
                  placeholder="ABC Company"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold">
                    Email *
                  </label>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={trackFormStart}
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold">
                    Phone
                  </label>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={trackFormStart}
                    type="text"
                    placeholder="+1..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Website
                </label>

                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  onFocus={trackFormStart}
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold">
                    Service Needed
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={trackFormStart}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  >
                    <option>Website Development</option>
                    <option>Meta Ads Management</option>
                    <option>Google Ads Management</option>
                    <option>Klaviyo Email Marketing</option>
                    <option>AI Automation</option>
                    <option>Analytics & Reporting</option>
                  </select>

                </div>

                <div>

                  <label className="mb-2 block font-semibold">
                    Monthly Budget
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={trackFormStart}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  >
                    <option>Under $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>

                </div>

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Project Details
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={trackFormStart}
                  rows={6}
                  placeholder="Tell us about your business and your goals..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                onClick={() =>
                  trackEvent("book_strategy_click", {
                    location: "Contact Form",
                    page: window.location.pathname,
                  })
                }
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading
                  ? "Sending..."
                  : "Book My Free Strategy Session"}
              </button>

              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center font-medium text-green-700">
                  ✅ Thank you! Your message has been sent successfully. We'll
                  get back to you within one business day.
                </div>
              )}

              <p className="text-center text-sm text-slate-500">
                Your information is secure and will never be shared with third
                parties.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}