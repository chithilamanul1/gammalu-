import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
  products: [
    { href: "/products/cinnamon", label: "Ceylon Cinnamon" },
    { href: "/products/pepper", label: "Black Pepper" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.gradientLine} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <span className={styles.logoIcon}>🌿</span>
              <div>
                <h3 className={styles.brandName}>Gammalu</h3>
                <span className={styles.brandTag}>Ceylon Foods (Pvt) Ltd</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Premium organic spices sourced directly from the lush plantations
              of Sri Lanka. From our farms to your table — pure, authentic,
              exceptional.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook" className={styles.socialLink} id="footer-facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink} id="footer-instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink} id="footer-linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Our Products</h4>
            <ul className={styles.linkList}>
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:info@gammalu.lk">info@gammalu.lk</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+94750512759">+94 75 051 2759</a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className={styles.certRow}>
          <span className={styles.certRowLabel}>Certified Quality Standards</span>
          <div className={styles.certLogos}>
            <div className={styles.miniCert} title="USDA Organic">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" fill="none" />
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <text x="50" y="44" fontFamily="var(--font-heading)" fontSize="16" fontWeight="700" letterSpacing="0.05em" textAnchor="middle">USDA</text>
                <line x1="20" y1="52" x2="80" y2="52" stroke="currentColor" strokeWidth="3" />
                <text x="50" y="70" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" letterSpacing="0.15em" textAnchor="middle">ORGANIC</text>
              </svg>
            </div>
            <div className={styles.miniCert} title="ISO 22000">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" fill="none" />
                <text x="50" y="44" fontFamily="var(--font-heading)" fontSize="20" fontWeight="700" letterSpacing="0.05em" textAnchor="middle">ISO</text>
                <text x="50" y="66" fontFamily="var(--font-heading)" fontSize="16" fontWeight="600" letterSpacing="0.05em" textAnchor="middle">22000</text>
              </svg>
            </div>
            <div className={styles.miniCert} title="GMP Certified">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" fill="none" />
                <text x="50" y="48" fontFamily="var(--font-heading)" fontSize="22" fontWeight="700" letterSpacing="0.05em" textAnchor="middle">GMP</text>
                <text x="50" y="68" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" letterSpacing="0.15em" textAnchor="middle">CERTIFIED</text>
              </svg>
            </div>
            <div className={styles.miniCert} title="HACCP Certified">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 C65 10, 80 18, 80 38 C80 62, 50 86, 50 86 C50 86, 20 62, 20 38 C20 18, 35 10, 50 10 Z" stroke="currentColor" strokeWidth="6" fill="none" />
                <text x="50" y="42" fontFamily="var(--font-heading)" fontSize="14" fontWeight="700" letterSpacing="0.05em" textAnchor="middle">HACCP</text>
                <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="3" />
                <text x="50" y="63" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" letterSpacing="0.15em" textAnchor="middle">CERTIFIED</text>
              </svg>
            </div>
            <div className={styles.miniCert} title="Fair Trade Certified">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" fill="none" />
                <text x="50" y="48" fontFamily="var(--font-heading)" fontSize="16" fontWeight="700" letterSpacing="0.05em" textAnchor="middle">FAIR</text>
                <text x="50" y="66" fontFamily="var(--font-heading)" fontSize="16" fontWeight="700" letterSpacing="0.05em" textAnchor="middle">TRADE</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Gammalu Ceylon Foods (Pvt) Ltd. All
            rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
