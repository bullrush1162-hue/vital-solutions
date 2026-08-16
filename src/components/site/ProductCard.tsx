import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { brandName, type Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$product"
      params={{ product: product.slug }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="flex aspect-4/3 items-center justify-center bg-surface p-6">
        <img
          src={product.image}
          alt={`${product.name} — ${product.type}`}
          loading="lazy"
          className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {brandName(product.brand)}
        </span>
        <h3 className="text-base font-semibold text-primary">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.type}</p>
        <p className="mt-auto flex items-center gap-1 pt-3 text-sm font-medium text-accent">
          View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
