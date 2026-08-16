import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoJd from "@/assets/logo-jd.jpg.asset.json";
import { categories, productsByCategory } from "@/data/catalog";
import { site, telLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/brands", label: "Brands" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-page flex items-center justify-between py-1.5 text-xs">
          <p>Authorised Mindray Dealer · Serving hospitals across Rajasthan since 2017</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="hover:underline" href={telLink(site.customerCare)}>
              Customer Care: {site.customerCare}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoJd.url}
            alt="JD Healthcares India Pvt. Ltd. logo"
            className="h-9 w-auto shrink-0 md:h-11"
          />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.label === "Products" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMega(true)}
                  onMouseLeave={() => setMega(false)}
                >
                  <Link
                    to={link.to}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                    activeProps={{ className: "text-accent" }}
                  >
                    Products
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {mega && (
                    <div className="absolute left-1/2 top-full w-[62rem] max-w-[90vw] -translate-x-1/2 pt-2">
                      <div className="grid grid-cols-3 gap-6 rounded-xl border border-border bg-popover p-6 shadow-lift">
                        {categories.map((cat) => (
                          <div key={cat.slug}>
                            <Link
                              to="/categories/$category"
                              params={{ category: cat.slug }}
                              className="text-sm font-semibold text-primary hover:text-accent"
                            >
                              {cat.name}
                            </Link>
                            <ul className="mt-2 space-y-1.5">
                              {productsByCategory(cat.slug)
                                .slice(0, 5)
                                .map((p) => (
                                  <li key={p.slug}>
                                    <Link
                                      to="/products/$product"
                                      params={{ product: p.slug }}
                                      className="text-sm text-muted-foreground hover:text-accent"
                                    >
                                      {p.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <Button asChild size="sm" className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex">
            <a href={telLink(site.phones[0])}>
              <Phone className="mr-2 h-4 w-4" /> {site.phones[0]}
            </a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-border lg:hidden", open ? "block" : "hidden")}>
        <nav className="container-page flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium text-foreground/85"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={telLink(site.phones[0])}
            className="mt-2 rounded-md bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-foreground"
          >
            Call {site.phones[0]}
          </a>
        </nav>
      </div>
    </header>
  );
}
