import { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** Light gray background when true */
  alt?: boolean;
  /** Larger vertical padding when true */
  large?: boolean;
};

export function Section({ children, className = "", alt, large }: SectionProps) {
  const bg = alt ? "bg-white" : "bg-bg-light";
  const py = large ? "py-16" : "py-10";
  return (
    <section className={`${bg} ${py} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
