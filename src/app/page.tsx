"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SpiceCard from "@/components/SpiceCard";
import styles from "./page.module.css";

const stats = [
  { number: "50+", label: "Years of Heritage" },
  { number: "45+", label: "Countries Served" },
  { number: "2", label: "Premium Products" },
  { number: "100%", label: "Organic Certified" },
];

const featuredProducts = [
  {
    name: "Ceylon Cinnamon",
    origin: "Sri Lanka",
    description:
      "The world's finest true cinnamon, hand-harvested from the bark of Cinnamomum verum trees.",
    imageSrc: "/images/cinnamon.png",
    imageAlt: "Premium Ceylon cinnamon sticks",
    slug: "/products/cinnamon",
  },
  {
    name: "Black Pepper",
    origin: "Sri Lanka",
    description:
      "Bold and aromatic peppercorns, sun-dried to perfection in the highlands.",
    imageSrc: "/images/pepper.png",
    imageAlt: "Premium Sri Lankan black peppercorns",
    slug: "/products/pepper",
  },
];

const values = [
  {
    icon: "🌱",
    title: "100% Organic",
    description: "Certified organic farming practices, free from synthetic chemicals and pesticides.",
  },
  {
    icon: "🤝",
    title: "Fair Trade",
    description: "Direct partnerships with local farmers ensuring fair wages and sustainable livelihoods.",
  },
  {
    icon: "✨",
    title: "Premium Quality",
    description: "Rigorous quality control from plantation to packaging, meeting global export standards.",
  },
  {
    icon: "🌍",
    title: "Direct Source",
    description: "Farm-to-table supply chain eliminating middlemen for the freshest, purest spices.",
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
            src="/images/hero-spices.png"
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
              The finest organic spices sourced directly from the lush
              plantations of Sri Lanka. Discover centuries of flavor
              tradition, refined for the modern world.
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

      {/* ===== STATS BAR ===== */}
      <section className={styles.statsBar} id="stats-section">
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className={`section ${styles.introSection}`} id="intro-section">
        <div className="container">
          <div className={styles.introGrid}>
            <AnimatedSection direction="left" className={styles.introImageWrap}>
              <div className={styles.introImageContainer}>
                <Image
                  src="/images/spices-dark-moody.png"
                  alt="Authentic Ceylon spices"
                  fill
                  className={styles.introImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.introDot} />
            </AnimatedSection>
            <AnimatedSection direction="right" className={styles.introText}>
              <span className="subtitle">Our Heritage</span>
              <h2>A Legacy of Ceylon&apos;s Finest Spices</h2>
              <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
              <p>
                For over half a century, Gammalu Ceylon Foods has been the
                trusted custodian of Sri Lanka&apos;s most prized spice
                traditions. Our journey began in the misty highlands of
                Ceylon, where ancient spice gardens have flourished for
                generations.
              </p>
              <p style={{ marginTop: "16px" }}>
                Today, we bring these exceptional flavors to the world —
                maintaining the same artisanal quality and sustainable
                practices that have defined our family&apos;s legacy.
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
            <div className={styles.productsCtaWrap}>
              <Link href="/products" className="btn btn-primary" id="products-cta-view-all">
                View All Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`section ${styles.valuesSection}`} id="values-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="subtitle">Why Choose Us</span>
              <h2>The Gammalu Promise</h2>
              <div className="divider" />
              <p>
                We don&apos;t just export spices — we share a piece of Sri
                Lanka&apos;s soul with every shipment.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.valuesGrid}>
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
