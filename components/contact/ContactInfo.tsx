import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Business Email",
    value: "newbrooksdigital@gmail.com",
    description: "General business inquiries and project consultations.",
  },
  {
    icon: Mail,
    title: "Alternative Email",
    value: "nictonly@gmail.com",
    description: "Alternative contact email.",
  },
  {
    icon: Phone,
    title: "Kenya Office",
    value: "+254 729 178 171",
    description: "Available Monday – Friday (EAT).",
  },
  {
    icon: Phone,
    title: "US Business Line",
    value: "+1 (417) 342-3311",
    description: "For international clients.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Wyoming, US",
    description: "Serving clients across Kenya and worldwide.",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Contact Information
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            We'd love to hear from you
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Reach out using the details below or complete the contact form, and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-blue-600">
                  {item.value}
                </p>

                <p className="mt-2 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}