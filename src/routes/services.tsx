import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services, Installation & AMC — JD Healthcares India" },
      {
        name: "description",
        content:
          "Sales consultation, installation and commissioning, clinical training and AMC/CMC service support for medical equipment across Rajasthan.",
      },
      { property: "og:title", content: "Services, Installation & AMC — JD Healthcares" },
      {
        property: "og:description",
        content: "End-to-end support from selection to preventive maintenance and spares.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">Services & support</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Equipment is only as good as the support behind it. Our team covers the full lifecycle.
            </p>
          </div>
        </section>

        <section className="container-page grid gap-6 py-14 sm:grid-cols-2">
          {site.services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h2 className="text-xl font-semibold text-primary">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </section>

        <section className="bg-surface py-14">
          <div className="container-page max-w-2xl rounded-xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold text-primary">Request service or an AMC quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us the equipment and site, and we will get back with a service plan.
            </p>
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
