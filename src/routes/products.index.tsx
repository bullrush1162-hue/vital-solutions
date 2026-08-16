import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { brands, categories, products } from "@/data/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Medical Equipment Products — JD Healthcares India" },
      {
        name: "description",
        content:
          "Browse ventilators, patient monitors, ECG, defibrillators, anaesthesia systems, surgical lights, neonatal care and electrosurgery from Mindray, Phoenix and Shalya.",
      },
      { property: "og:title", content: "Medical Equipment Products — JD Healthcares India" },
      {
        property: "og:description",
        content: "The full JD Healthcares equipment range for ICU, OT, NICU and labour rooms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [cat, setCat] = useState<string>("all");
  const [brand, setBrand] = useState<string>("all");

  const filtered = products.filter(
    (p) => (cat === "all" || p.category === cat) && (brand === "all" || p.brand === brand),
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">Products</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              {products.length} systems across critical care, operating room, neonatal care,
              electrosurgery and hospital accessories.
            </p>
          </div>
        </section>

        <section className="container-page py-12">
          <div className="flex flex-wrap gap-2">
            {[{ slug: "all", name: "All categories" }, ...categories].map((c) => (
              <button
                key={c.slug}
                onClick={() => setCat(c.slug)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  cat === c.slug
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[{ slug: "all", name: "All brands" }, ...brands].map((b) => (
              <button
                key={b.slug}
                onClick={() => setBrand(b.slug)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  brand === b.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {b.name}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-muted-foreground">No products match that combination.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
