import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ProductCard } from "@/components/site/ProductCard";
import { brandName, categoryName, getProduct, productsByCategory } from "@/data/catalog";

export const Route = createFileRoute("/products/$product")({
  loader: ({ params }) => {
    const product = getProduct(params.product);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — JD Healthcares" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `${p.name} — ${p.type} | JD Healthcares India`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.product}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.product}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container-page pt-6 text-sm text-muted-foreground">
          <Link to="/products" className="hover:text-accent">
            Products
          </Link>{" "}
          /{" "}
          <Link
            to="/categories/$category"
            params={{ category: product.category }}
            className="hover:text-accent"
          >
            {categoryName(product.category)}
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </div>

        <section className="container-page grid gap-10 py-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-center rounded-2xl border border-border bg-surface p-10">
              <img src={product.image} alt={`${product.name} ${product.type}`} className="max-h-96 w-auto object-contain" />
            </div>
            {product.gallery && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((g) => (
                  <figure key={g.src} className="rounded-xl border border-border bg-surface p-3">
                    <img src={g.src} alt={g.caption} loading="lazy" className="mx-auto h-24 w-auto object-contain" />
                    <figcaption className="mt-2 text-center text-xs text-muted-foreground">{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {brandName(product.brand)} · {categoryName(product.category)}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">{product.name}</h1>
            <p className="mt-1 text-lg text-muted-foreground">{product.type}</p>
            <p className="mt-4 text-base font-medium text-accent">{product.tagline}</p>
            <p className="mt-4 text-muted-foreground">{product.summary}</p>

            <h2 className="mt-8 text-lg font-semibold text-primary">Key features</h2>
            <ul className="mt-3 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {product.variants && (
              <>
                <h2 className="mt-8 text-lg font-semibold text-primary">Variants</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <span key={v} className="rounded-full bg-surface-strong px-3 py-1 text-sm text-primary">
                      {v}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold text-primary">Request a quotation</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your requirement and our team will respond with pricing and availability.
              </p>
              <div className="mt-5">
                <EnquiryForm product={product.name} />
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="container-page pb-6">
            <h2 className="text-2xl font-bold text-primary">Related equipment</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
