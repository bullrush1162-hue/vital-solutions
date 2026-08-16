import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoJd from "@/assets/logo-jd.jpg.asset.json";
import { categories } from "@/data/catalog";
import { site, telLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="inline-flex rounded-md bg-background px-3 py-2">
            <img src={logoJd.url} alt="JD Healthcares logo" className="h-9 w-auto" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">{site.intro}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categories/$category"
                  params={{ category: c.slug }}
                  className="hover:text-primary-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/about" className="hover:text-primary-foreground">
                About us
              </Link>
            </li>
            <li>
              <Link to="/brands" className="hover:text-primary-foreground">
                Brands we represent
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary-foreground">
                Services & support
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary-foreground">
                All products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-foreground">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            {site.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={telLink(p)} className="hover:text-primary-foreground">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-primary-foreground">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>* Optional features. Product features vary; specifications subject to confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
