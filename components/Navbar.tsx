"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const links = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我們" },
  { href: "/services", label: "AI 解決方案" },
  { href: "/solutions", label: "產品方案" },
  { href: "/method", label: "導入流程" },
  { href: "/contact", label: "免費諮詢", primary: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <div className={`nav ${scrolled ? "nav--scrolled" : ""} ${!isHome ? "nav--inner" : ""}`}>
      <div className="navBar">
        <div className="container navInner">
          <Link href="/" className="brand" aria-label="MORAN Home">
            <span className="logo" aria-hidden="true">
              <Image
                src="/images/Logo.png"
                alt=""
                width={34}
                height={34}
                priority
                className="logoImg"
              />
            </span>
            <span>
              沐苒資訊 MORAN
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="navLinks">
            {links.map((l) => (
              <Link
                key={l.href}
                className={`chip${l.primary ? " primary" : ""}${pathname === l.href ? " chip--active" : ""}`}
                href={l.href}
                style={l.href === "/" ? { paddingInline: "calc(14px + 1em)" } : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobileMenu${menuOpen ? " mobileMenu--open" : ""}`}>
        <nav className="mobileMenu__nav">
          {links.map((l) => (
            <Link
              key={l.href}
              className={`mobileMenu__link${l.primary ? " mobileMenu__link--primary" : ""}${
                pathname === l.href ? " mobileMenu__link--active" : ""
              }`}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
