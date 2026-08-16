import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JD Healthcares (India) Pvt. Ltd. — Jodhpur" },
      {
        name: "description",
        content:
          "Since 2017, JD Healthcares has supplied and serviced advanced medical equipment across Rajasthan, led by Director Dinesh Kumawat.",
      },
      { property: "og:title", content: "About JD Healthcares (India) Pvt. Ltd." },
      {
        property: "og:description",
        content: "Trust, innovation, commitment and care — our story, values and leadership.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">About us</h1>
            <p className="mt-3 max-w-3xl text-primary-foreground/80">{site.intro}</p>
          </div>
        </section>

        <section className="container-page grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {site.values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold text-primary">{v.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </section>

        <section className="bg-surface py-14">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary">Why choose us</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {site.whyChooseUs.map((w) => (
                  <li key={w} className="rounded-lg bg-card px-4 py-3 shadow-card">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h2 className="text-2xl font-bold text-primary">Director's message</h2>
              <blockquote className="mt-4 border-l-4 border-accent pl-4 text-muted-foreground">
                “{site.director.quote}”
              </blockquote>
              <p className="mt-5 font-semibold text-primary">{site.director.name}</p>
              <p className="text-sm text-muted-foreground">
                {site.director.role} · {site.director.experience}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
