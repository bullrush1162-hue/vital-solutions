import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site, telLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JD Healthcares (India) Pvt. Ltd. — Jodhpur" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email JD Healthcares in Jodhpur for medical equipment quotations, demos and service support across Rajasthan.",
      },
      { property: "og:title", content: "Contact JD Healthcares (India) Pvt. Ltd." },
      {
        property: "og:description",
        content: "Pal Road, Jodhpur — quotations, demos and service support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">Contact us</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Quotations, product demonstrations and service requests — we respond quickly.
            </p>
          </div>
        </section>

        <section className="container-page grid gap-10 py-14 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <MapPin className="h-5 w-5 text-accent" /> Office
              </h2>
              <p className="mt-2 text-muted-foreground">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Phone className="h-5 w-5 text-accent" /> Phone
              </h2>
              <ul className="mt-2 space-y-1">
                {site.phones.map((p) => (
                  <li key={p}>
                    <a href={telLink(p)} className="text-muted-foreground hover:text-accent">
                      {p}
                    </a>
                  </li>
                ))}
                <li className="pt-1 text-sm text-muted-foreground">
                  Customer care:{" "}
                  <a href={telLink(site.customerCare)} className="hover:text-accent">
                    {site.customerCare}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Mail className="h-5 w-5 text-accent" /> Email
              </h2>
              <a href={`mailto:${site.email}`} className="mt-2 block text-muted-foreground hover:text-accent">
                {site.email}
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold text-primary">Send an enquiry</h2>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
