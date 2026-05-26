"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SpiceCard from "@/components/SpiceCard";
import styles from "./page.module.css";

const featuredProducts = [
  {
    name: "Ceylon Cinnamon",
    origin: "Sri Lanka",
    description:
      "Pure Ceylon Cinnamon – True Taste of Sri Lanka. The world's finest and most authentic cinnamon, distinct from Cassia.",
    imageSrc: "/images/cina5.png",
    imageAlt: "Premium Ceylon cinnamon sticks",
    slug: "/products/cinnamon",
  },
  {
    name: "Ceylon Black Pepper",
    origin: "Sri Lanka",
    description:
      "Known as the \"King of the Spices\", prized worldwide for its high piperine content, rich aroma, and distinct floral-citrus notes.",
    imageSrc: "/images/peper.png",
    imageAlt: "Premium Sri Lankan black peppercorns",
    slug: "/products/pepper",
  },
];

const certifications = [
  {
    name: "USDA Organic",
    subtitle: "Organic Certified",
    description: "Certified organic farming practices, free from synthetic chemicals and pesticides.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.certIconContainer} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <text x="50" y="42" fontFamily="var(--font-heading)" fontSize="13" fontWeight="700" letterSpacing="0.05em" textAnchor="middle" fill="currentColor">USDA</text>
        <line x1="25" y1="49" x2="75" y2="49" stroke="currentColor" strokeWidth="1.25" />
        <text x="50" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="0.15em" textAnchor="middle" fill="currentColor">ORGANIC</text>
        <path d="M44 74 C44 74, 46 71, 50 71 C54 71, 56 74, 56 74 C56 74, 52 76, 50 76 C48 76, 44 74, 44 74 Z" fill="currentColor" opacity="0.7" />
      </svg>
    )
  },
  {
    name: "ISO 22000",
    subtitle: "Food Safety System",
    description: "Strict safety management systems from harvesting to packaging, meeting global export guidelines.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.certIconContainer} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
        <path d="M14 50 H86" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
        <path d="M50 14 V86" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
        <path d="M22 32 C30 36, 70 36, 78 32" stroke="currentColor" strokeWidth="0.75" opacity="0.15" fill="none" />
        <path d="M22 68 C30 64, 70 64, 78 68" stroke="currentColor" strokeWidth="0.75" opacity="0.15" fill="none" />
        <text x="50" y="40" fontFamily="var(--font-heading)" fontSize="17" fontWeight="700" letterSpacing="0.05em" textAnchor="middle" fill="currentColor">ISO</text>
        <text x="50" y="58" fontFamily="var(--font-heading)" fontSize="13" fontWeight="600" letterSpacing="0.05em" textAnchor="middle" fill="currentColor">22000</text>
        <text x="50" y="72" fontFamily="var(--font-body)" fontSize="6.5" fontWeight="600" letterSpacing="0.12em" textAnchor="middle" fill="currentColor">FOOD SAFETY</text>
      </svg>
    )
  },
  {
    name: "GMP Certified",
    subtitle: "Quality Assurance",
    description: "Consistent quality control, hygienic handling, and operational excellence at all stages.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.certIconContainer} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
        <path d="M50 17 L52.5 22 L57.5 22 L53.5 25 L55 30 L50 27 L45 30 L46.5 25 L42.5 22 L47.5 22 Z" fill="currentColor" />
        <text x="50" y="51" fontFamily="var(--font-heading)" fontSize="19" fontWeight="700" letterSpacing="0.05em" textAnchor="middle" fill="currentColor">GMP</text>
        <text x="50" y="67" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" letterSpacing="0.15em" textAnchor="middle" fill="currentColor">CERTIFIED</text>
        <text x="50" y="78" fontFamily="var(--font-body)" fontSize="6" fontWeight="500" letterSpacing="0.08em" textAnchor="middle" fill="currentColor" opacity="0.8">EXCELLENT QUALITY</text>
      </svg>
    )
  },
  {
    name: "HACCP Certified",
    subtitle: "Hazard Prevention",
    description: "Systematic prevention of biological, chemical, and physical hazards in food safety processing.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.certIconContainer} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 C65 10, 80 18, 80 38 C80 62, 50 86, 50 86 C50 86, 20 62, 20 38 C20 18, 35 10, 50 10 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M50 15 C62 15, 75 22, 75 38 C75 58, 50 79, 50 79 C50 79, 25 58, 25 38 C25 22, 38 15, 50 15 Z" stroke="currentColor" strokeWidth="0.75" opacity="0.2" fill="none" />
        <text x="50" y="44" fontFamily="var(--font-heading)" fontSize="15" fontWeight="700" letterSpacing="0.05em" textAnchor="middle" fill="currentColor">HACCP</text>
        <line x1="32" y1="52" x2="68" y2="52" stroke="currentColor" strokeWidth="1.25" />
        <text x="50" y="67" fontFamily="var(--font-body)" fontSize="8.5" fontWeight="600" letterSpacing="0.15em" textAnchor="middle" fill="currentColor">CERTIFIED</text>
      </svg>
    )
  }
];

const values = [
  {
    icon: "⭐",
    title: "Uncompromising Quality",
    description: "We believe true value lies in purity and authenticity. Every batch of Ceylon cinnamon and black pepper we supply is carefully selected, processed, and tested to meet the highest standards.",
  },
  {
    icon: "🏛️",
    title: "Heritage & Authenticity",
    description: "Our products are not just commodities — they are cultural treasures. We honor centuries-old traditions while ensuring modern quality assurance.",
  },
  {
    icon: "🤝",
    title: "Customer Trust",
    description: "Our promise is reliability. By prioritizing quality over mass production, we build lasting relationships with clients who value premium standards.",
  },
  {
    icon: "🏆",
    title: "Excellence Over Expansion",
    description: "Unlike companies chasing volume, we focus on delivering fewer but superior products — because excellence is our measure of success.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero-section">
        <div className={styles.heroCircle} />
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/cinnamon-hero.png"
            alt="Premium floating Sri Lankan spices"
            fill
            className={styles.heroImage}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <AnimatedSection direction="up" delay={0.1}>
            <span className={styles.heroSubtitle}>
              Premium Ceylon Spices · Sri Lanka
            </span>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.25}>
            <h1 className={styles.heroTitle}>
              Gammalu
              <br />
              <span className={styles.heroAccent}>Ceylon Foods</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <p className={styles.heroDesc}>
              At Gammalu Ceylon Foods, we bring the world the finest treasures of Sri Lanka — premium Ceylon cinnamon and handpicked black pepper.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.55}>
            <div className={styles.heroCtas}>
              <Link href="/products" className="btn btn-primary" id="hero-cta-explore">
                Explore Collection
              </Link>
              <Link href="/about" className="btn btn-outline" id="hero-cta-story">
                Our Story
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className={`section ${styles.introSection}`} id="intro-section">
        <div className="container">
          <div className={styles.introGrid}>
            <AnimatedSection direction="left" className={styles.introImageWrap}>
              <div className={styles.introImageContainer}>
                <Image
                  src="/images/cina1.png"
                  alt="Authentic Ceylon spices"
                  fill
                  className={styles.introImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.introDot} />
            </AnimatedSection>
            <AnimatedSection direction="right" className={styles.introText}>
              <span className="subtitle">Brand Introduction</span>
              <h2>Custodians of Sri Lanka&apos;s Spice Heritage</h2>
              <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
              <p>
                Rooted in centuries of tradition and nurtured by the island&apos;s fertile soil, our products embody purity, authenticity, and unmatched flavor.
              </p>
              <p style={{ marginTop: "16px" }}>
                We are more than a trading company; we are custodians of Sri Lanka&apos;s spice heritage. Every batch we supply is carefully sourced, meticulously processed, and quality-checked to meet international standards. Our commitment is simple yet profound: to deliver premium quality spices that elevate culinary experiences and promote wellness naturally.
              </p>
              <p style={{ marginTop: "16px", fontWeight: 600, color: "var(--accent-red)" }}>
                With Gammalu, you don&apos;t just taste spices — you taste the story of Sri Lanka&apos;s rich culture, its lush landscapes, and its dedication to excellence.
              </p>
              <Link href="/about" className="btn btn-outline" style={{ marginTop: "32px" }} id="intro-cta">
                Discover Our Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className={`section ${styles.productsSection}`} id="featured-products-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="subtitle">Our Collection</span>
              <h2>Flagship Spices</h2>
              <div className="divider" />
              <p>
                Hand-selected from the finest plantations, our signature
                products represent the pinnacle of Ceylon&apos;s spice heritage.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.productsGrid}>
            {featuredProducts.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.15}>
                <SpiceCard {...product} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className={styles.productsCtaWrap} style={{ marginTop: "40px" }}>
              <Link href="/products" className="btn btn-primary" id="products-cta-view-all">
                View All Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US / BUSINESS VALUES ===== */}
      <section className={`section ${styles.valuesSection}`} id="values-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="subtitle">Our Foundation</span>
              <h2>Business Values</h2>
              <div className="divider" />
              <p>
                At Gammalu Ceylon Foods, our foundation is built on values that reflect Sri Lanka&apos;s proud spice heritage and our unwavering commitment to excellence.
              </p>
            </div>
          </AnimatedSection>
          
          <div className={styles.valuesGrid} style={{ marginBottom: "60px" }}>
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1} direction="scale">
                <div className={styles.valueCard}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up">
            <div style={{ background: "var(--bg-primary)", padding: "40px", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--text-primary)" }}>Sustainability & Responsibility</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
                We work with trusted partners who share our respect for the environment, ensuring ethical sourcing and long-term sustainability. At Gammalu Ceylon Foods, sustainability means empowering people and preserving tradition. We intentionally rely on low machinery and instead partner with skilled industry experts who bring generations of knowledge to spice cultivation and processing. By prioritizing human expertise over automation, we not only ensure authentic quality but also expand job opportunities within local communities. This approach strengthens livelihoods, supports artisanal craftsmanship, and builds a responsible supply chain that values people as much as products.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== QUALITY EXCELLENCES ===== */}
      <section className={`section ${styles.productsSection}`} id="quality-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="subtitle">Global Standards</span>
              <h2>Quality Excellences</h2>
              <div className="divider" />
              <p>
                We proudly supply products that meet the highest international standards. Through our trusted partners, our spices are certified with the following credentials:
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.name} direction="scale" delay={i * 0.1}>
                <div className={styles.certCard}>
                  {cert.icon}
                  <h4 className={styles.certCardTitle}>{cert.name}</h4>
                  <span className={styles.certCardSubtitle}>{cert.subtitle}</span>
                  <p className={styles.certCardDesc}>{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner} id="cta-section">
        <div className={styles.ctaCircle} />
        <div className={`container ${styles.ctaContent}`}>
          <AnimatedSection>
            <span className="subtitle">Partner With Us</span>
            <h2 className={styles.ctaTitle}>
              Ready to Experience Ceylon&apos;s Finest?
            </h2>
            <p className={styles.ctaDesc}>
              Whether you&apos;re a retail buyer, restaurant, or distributor
              — let us bring the authentic taste of Sri Lanka to your
              business.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary" id="cta-contact">
                Request a Quote
              </Link>
              <Link href="/products" className="btn btn-outline" id="cta-catalog">
                View Catalog
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
