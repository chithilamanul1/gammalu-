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
    imageSrc: "/images/cinnamon-card.png",
    imageAlt: "Premium Ceylon cinnamon sticks",
    slug: "/products/cinnamon",
  },
  {
    name: "Ceylon Black Pepper",
    origin: "Sri Lanka",
    description:
      "Known as the \"King of the Spices\", prized worldwide for its high piperine content, rich aroma, and distinct floral-citrus notes.",
    imageSrc: "/images/pepper-card.jpg",
    imageAlt: "Premium Sri Lankan black peppercorns",
    slug: "/products/pepper",
  },
];

const certifications = [
  {
    name: "GMP Certified",
    subtitle: "Quality Assurance",
    description: "Consistent quality control, hygienic handling, and operational excellence at all stages.",
    icon: (
      <Image
        src="/images/gmp.jpg"
        alt="GMP Certified Logo"
        width={80}
        height={80}
        className={styles.certIconContainer}
        style={{ objectFit: 'contain' }}
      />
    )
  },
  {
    name: "HACCP Certified",
    subtitle: "Hazard Prevention",
    description: "Systematic prevention of biological, chemical, and physical hazards in food safety processing.",
    icon: (
      <Image
        src="/images/haccp.png"
        alt="HACCP Certified Logo"
        width={80}
        height={80}
        className={styles.certIconContainer}
        style={{ objectFit: 'contain' }}
      />
    )
  },
  {
    name: "ISO 22000",
    subtitle: "Food Safety System",
    description: "Strict safety management systems from harvesting to packaging, meeting global export guidelines.",
    icon: (
      <Image
        src="/images/iso-22000.svg"
        alt="ISO 22000 Logo"
        width={80}
        height={80}
        className={styles.certIconContainer}
        style={{ objectFit: 'contain' }}
      />
    )
  },
  {
    name: "USDA Organic",
    subtitle: "Organic Certified",
    description: "Certified organic farming practices, free from synthetic chemicals and pesticides.",
    icon: (
      <Image
        src="/images/usda-organic.svg"
        alt="USDA Organic Logo"
        width={80}
        height={80}
        className={styles.certIconContainer}
        style={{ objectFit: 'contain' }}
      />
    )
  }
];

const values = [
  {
    iconPath: "/images/value-search.png",
    title: "Uncompromising Quality",
    description: "We believe true value lies in purity and authenticity. Every batch of Ceylon cinnamon and black pepper we supply is carefully selected, processed, and tested to meet the highest standards.",
  },
  {
    iconPath: "/images/value-building.png",
    title: "Heritage & Authenticity",
    description: "Our products are not just commodities — they are cultural treasures. We honor centuries-old traditions while ensuring modern quality assurance.",
  },
  {
    iconPath: "/images/value-hands.png",
    title: "Customer Trust",
    description: "Our promise is reliability. By prioritizing quality over mass production, we build lasting relationships with clients who value premium standards.",
  },
  {
    iconPath: "/images/value-chart.png",
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
            src="/images/pepper-hero.jpg"
            alt="Premium Sri Lankan spices and peppercorns"
            fill
            className={`${styles.heroImage} ${styles.desktopImage}`}
            priority
            sizes="100vw"
          />
          <Image
            src="/images/pepper-hero-mobile.jpg"
            alt="Premium Sri Lankan spices and cinnamon coffee"
            fill
            className={`${styles.heroImage} ${styles.mobileImage}`}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
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
                  src="/images/cinnamon-intro.jpg"
                  alt="Authentic premium Ceylon cinnamon sticks"
                  fill
                  className={styles.introImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
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
                  <div className={styles.valueIconContainer}>
                    <Image
                      src={value.iconPath}
                      alt={`${value.title} Icon`}
                      width={64}
                      height={64}
                      className={styles.valueIconImage}
                    />
                  </div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up">
            <div style={{ background: "#93d894", padding: "40px", border: "1px solid rgba(40, 90, 45, 0.2)", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--text-primary)" }}>Sustainability & Responsibility</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
                At Gammalu Ceylon Foods, sustainability means empowering people and preserving tradition. We intentionally rely on low machinery and instead partner with skilled industry experts who bring generations of knowledge to spice cultivation and processing. By prioritizing human expertise over automation, we not only ensure authentic quality but also expand job opportunities within local communities. This approach strengthens livelihoods, supports artisanal craftsmanship, and builds a responsible supply chain that values people as much as products, partnering with those who share our respect for the environment to ensure ethical sourcing and long-term sustainability.
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
                We proudly supply products that meet the highest international standards. Through our trusted manufacturing partners, our spices are certified with the following credentials:
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.name} direction="scale" delay={i * 0.1}>
                <div className={styles.certCard}>
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
