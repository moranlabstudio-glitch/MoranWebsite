import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

