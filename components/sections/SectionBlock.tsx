import { ReactNode } from "react";

type SectionBlockProps = {
  children: ReactNode;
  /** 額外 class，例如用於深色區塊 */
  className?: string;
  /** 是否使用交替淺灰背景 */
  alt?: boolean;
};

export default function SectionBlock({
  children,
  className = "",
  alt = false,
}: SectionBlockProps) {
  return (
    <section
      className={`section-block ${alt ? "section-block--alt" : ""} ${className}`.trim()}
    >
      <div className="container">{children}</div>
    </section>
  );
}
