"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="main-navigation"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <div className={styles.logoImageWrap}>
            <Image
              src="/images/logo.png"
              alt="Gammalu Ceylon Foods"
              width={160}
              height={60}
              style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
              priority
            />
          </div>
        </Link>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              }`}
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
              <span className={styles.linkUnderline} />
            </Link>
          ))}
          <Link href="/contact" className={`btn btn-primary ${styles.cta}`} id="nav-cta">
            Get a Quote
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.mobileLinks}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${
                pathname === link.href ? styles.active : ""
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
              id={`mobile-nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            id="mobile-nav-cta"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
