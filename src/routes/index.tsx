import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Headset, ShieldCheck, Wrench } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { brands, categories, featuredProducts } from "@/data/catalog";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import hero from "@/assets/umec.jpg.asset.json";
import heroB from "@/assets/sv300.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JD Healthcares India — Medical Equipment in Rajasthan" },
      {
        name: "description",
        content:
          "Authorised Mindray dealer in Jodhpur. ICU ventilators, patient monitors, anaesthesia systems, neonatal care and electrosurgery, with installation, training and service across Rajasthan.",
      },
      { property: "og:title", content: "JD Healthcares India — Medical Equipment in Rajasthan" },
      {
        property: "og:description",
        content:
          "Advanced medical equipment from Mindray, Phoenix and Shalya, backed by sales, installation, training and service across Rajasthan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy text-primary-foreground">
          <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Authorised Mindray Dealer
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                Delivering advanced <span className="text-cyan">healthcare solutions</span> across
                Rajasthan
              </h1>
              <p className="mt-5 max-w-xl text-base text-primary-foreground/80">{site.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan text-primary hover:bg-cyan/90">
                  <Link to="/products">
                    Explore products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6 text-sm">
                <div>
                  <dt className="text-2xl font-bold">2017</dt>
                  <dd className="text-primary-foreground/70">Serving hospitals since</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold">15+</dt>
                  <dd className="text-primary-foreground/70">Years of industry experience</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold">Pan-RJ</dt>
                  <dd className="text-primary-foreground/70">Service coverage</dd>
                </div>
              </dl>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl bg-background p-6 shadow-lift">
                <img src={hero.url} alt="Mindray uMEC patient monitors" className="mx-auto max-h-64 w-auto" />
              </div>
              <div className="col-span-2 rounded-2xl bg-background/95 p-6 shadow-lift sm:col-span-1">
                <img src={heroB.url} alt="Mindray SV300 ICU ventilator" className="mx-auto max-h-48 w-auto" />
              </div>
              <ul className="col-span-2 space-y-3 rounded-2xl border border-primary-foreground/15 p-6 text-sm sm:col-span-1">
                {["Sales", "Installation", "Training", "Service"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container-page py-16">
          <h2 className="text-3xl font-bold text-primary">Product categories</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Equipment for every critical department — chosen, installed and supported by our team.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/categories/$category"
                params={{ category: c.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex h-44 items-center justify-center bg-surface p-6">
                  <img src={c.image} alt={c.name} loading="lazy" className="max-h-full w-auto object-contain" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="container-page">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
              <div className="min-w-0">
                <h2 className="text-3xl font-bold text-primary">Featured equipment</h2>
                <p className="mt-2 text-muted-foreground">Popular systems from our brochure range.</p>
              </div>
              <Link to="/products" className="shrink-0 text-sm font-medium text-accent hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-16">
          <h2 className="text-3xl font-bold text-primary">Trusted brands we represent</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to="/brands"
                className="flex h-28 items-center justify-center rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                {b.logo ? (
                  <img src={b.logo} alt={`${b.name} logo`} loading="lazy" className="max-h-12 w-auto" />
                ) : (
                  <span className="text-lg font-semibold text-primary">{b.name}</span>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container-page grid gap-8 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Authorised & accountable", body: "Genuine equipment, documented installation and warranty-backed support." },
              { icon: Wrench, title: "On-ground service", body: "Preventive maintenance and breakdown response across Rajasthan." },
              { icon: Headset, title: "Training that sticks", body: "Clinical and biomedical training, with refreshers whenever your team changes." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-primary-foreground/15 p-6">
                <Icon className="h-6 w-6 text-cyan" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
