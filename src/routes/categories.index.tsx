import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { categories, productsByCategory } from "@/data/catalog";

export const Route = createFileRoute("/categories/")({
  head: () => ({
    meta: [
      { title: "Equipment Categories — JD Healthcares India" },
      {
        name: "description",
        content:
          "Critical care, operating room, neonatal and maternal care, electrosurgery and hospital accessories supplied and serviced across Rajasthan.",
      },
      { property: "og:title", content: "Equipment Categories — JD Healthcares India" },
      {
        property: "og:description",
        content: "Explore our medical equipment categories for ICU, OT, NICU and labour rooms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">Categories</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Department-wise equipment lines, each backed by installation, training and service.
            </p>
          </div>
        </section>
        <section className="container-page grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categories/$category"
              params={{ category: c.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex h-48 items-center justify-center bg-surface p-6">
                <img src={c.image} alt={c.name} loading="lazy" className="max-h-full w-auto object-contain" />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-primary">{c.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <p className="mt-4 text-sm font-medium text-accent">
                  {productsByCategory(c.slug).length} products
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
