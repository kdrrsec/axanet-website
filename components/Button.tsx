import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none disabled:translate-y-0";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/90 hover:translate-y-0.5 hover:shadow-md",
  secondary:
    "bg-white text-primary border border-border hover:bg-bg-light hover:translate-y-0.5 hover:shadow-md",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
