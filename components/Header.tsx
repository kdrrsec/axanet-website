"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Container } from "./Container";

const links = [
  { href: "/diensten", label: nav.diensten },
  { href: "/over", label: nav.over },
];

const RING_OFFSET = "focus-visible:ring-offset-[#0B1220]";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 h-16 shrink-0 border-b border-white/10 bg-[#0B1220]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="-ml-2 mt-1.5 flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
            aria-label="Axanet - naar homepage"
          >
            <img
              src="/logo.png"
              alt="Axanet"
              width={675}
              height={162}
              className="h-auto w-[140px] object-contain object-left sm:w-[180px] md:w-[220px]"
            />
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-7" aria-label="Hoofdnavigatie">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium text-white/80 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 hover:bg-white/10 hover:text-white hover:scale-105 ${RING_OFFSET} ${
                  isActive(href) ? "bg-white/10 text-white" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-out hover:border-accent hover:bg-accent hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            >
              Plan kennismaking
            </Link>
          </nav>

          <button
            type="button"
            className="rounded p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-white/10 py-4 md:hidden">
            <ul className="flex flex-col gap-0.5">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block rounded px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-inset ${
                      isActive(href) ? "text-white" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-2">
                <Link
                  href="/contact"
                  className="mx-3 block rounded-lg border border-white/20 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  Plan kennismaking
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
