import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { brands, productsByBrand } from "@/data/catalog";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — Mindray, Phoenix & Shalya | JD Healthcares" },
      {
        name: "description",
        content:
          "JD Healthcares is an authorised Mindray dealer and partner for Phoenix neonatal care and Shalya electrosurgery, with in-house monitoring and accessories.",
      },
      { property: "og:title", content: "Our Brands — Mindray, Phoenix & Shalya" },
      {
        property: "og:description",
        content: "The manufacturers we represent and support across Rajasthan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">Our brands</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Trusted manufacturers, supported locally with installation, training and service.
            </p>
          </div>
        </section>
        <section className="container-page space-y-8 py-14">
          {brands.map((b) => (
            <article
              key={b.slug}
              className="grid gap-6 rounded-xl border border-border bg-card p-8 shadow-card md:grid-cols-[220px_1fr] md:items-center"
            >
              <div className="flex h-24 items-center justify-center rounded-lg bg-surface p-4">
                {b.logo ? (
                  <img src={b.logo} alt={`${b.name} logo`} loading="lazy" className="max-h-full w-auto object-contain" />
                ) : (
                  <span className="text-lg font-bold text-primary">{b.name}</span>
                )}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{b.role}</span>
                <h2 className="mt-1 text-2xl font-bold text-primary">{b.name}</h2>
                <p className="mt-3 text-muted-foreground">{b.blurb}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {productsByBrand(b.slug).length} products ·{" "}
                  <Link to="/products" className="font-medium text-accent hover:underline">
                    View catalogue
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
