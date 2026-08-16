import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { getCategory, productsByCategory, type CategorySlug } from "@/data/catalog";

export const Route = createFileRoute("/categories/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category, items: productsByCategory(params.category as CategorySlug) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category not found — JD Healthcares" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name} Equipment — JD Healthcares India`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.blurb.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.blurb.slice(0, 155) },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/categories/${params.category}` },
      ],
      links: [{ rel: "canonical", href: `/categories/${params.category}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-navy py-14 text-primary-foreground">
          <div className="container-page">
            <h1 className="text-4xl font-extrabold">{category.name}</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">{category.blurb}</p>
          </div>
        </section>
        <section className="container-page grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
