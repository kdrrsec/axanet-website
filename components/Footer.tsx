import Link from "next/link";
import { Container } from "./Container";
import { footer } from "@/lib/content";
import { contact } from "@/lib/content";
import { nav } from "@/lib/content";

const navLinks = [
  { href: "/", label: nav.home },
  { href: "/diensten", label: nav.diensten },
  { href: "/over", label: nav.over },
  { href: "/contact", label: nav.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-primary">Axanet</p>
            <p className="mt-2 max-w-xs text-sm text-text-muted">
              {footer.tagline}
            </p>
          </div>
          <div>
            <p className="font-semibold text-primary">{footer.navigatie}</p>
            <ul className="mt-2 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-muted hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-primary">{footer.contact}</p>
            <ul className="mt-2 space-y-1 text-sm text-text-muted">
              <li>
                <a
                  href={`mailto:${contact.gegevens.email}`}
                  className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition"
                >
                  {contact.gegevens.email}
                </a>
              </li>
              <li>{contact.gegevens.phone}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">{footer.copyright}</p>
          <p className="text-sm text-text-muted">
            <Link
              href="/privacy"
              className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition"
            >
              {footer.links.privacy}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
