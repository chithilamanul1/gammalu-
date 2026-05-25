"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "../product-detail.module.css";

export default function CinnamonDetailPage() {
  return (
    <main className={styles.detailContainer}>
      {/* Back Button */}
      <AnimatedSection direction="up" delay={0.05}>
        <Link href="/products" className={styles.backBtn} id="cinnamon-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Collection
        </Link>
      </AnimatedSection>

      {/* Main Grid */}
      <div className={styles.mainGrid}>
        {/* Left Column: Image */}
        <AnimatedSection direction="left" className={styles.imageContainer}>
          <Image
            src="/images/cina5.png"
            alt="Premium Ceylon Cinnamon Sticks close-up"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AnimatedSection>

        {/* Right Column: Info */}
        <AnimatedSection direction="right" className={styles.infoWrap}>
          <div className={styles.badgeRow}>
            <span className={styles.categoryBadge}>Cinnamon</span>
            <span className={styles.originBadge}>Ceylon Pure</span>
          </div>

          <h1 className={styles.title}>Ceylon Cinnamon</h1>
          <p className={styles.scientificName}>Cinnamomum verum (True Cinnamon)</p>

          <p className={styles.description}>
            Unlike common Cassia cinnamon, authentic Ceylon Cinnamon is hand-rolled from the delicate inner bark of the Cinnamomum verum tree. Known as &quot;True Cinnamon,&quot; it boasts a highly complex, sweet, and subtle flavor profile with citrus and woody notes. It contains negligible levels of coumarin, making it the safest and healthiest choice for daily wellness and culinary luxury.
          </p>

          {/* Highlights / Stats */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Alba</span>
              <span className={styles.highlightLbl}>Highest Export Grade</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>&lt; 0.004%</span>
              <span className={styles.highlightLbl}>Coumarin Content</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>100%</span>
              <span className={styles.highlightLbl}>Organic Certified</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact?subject=Cinnamon Inquiry" className="btn btn-primary" id="cinnamon-cta-quote">
              Request B2B Quote
            </Link>
            <Link href="/contact" className="btn btn-outline" id="cinnamon-cta-sample">
              Request Sample
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Product Details Columns */}
      <section className={styles.detailsSection}>
        <AnimatedSection direction="up">
          <h2 className={styles.sectionTitle}>Product Characteristics</h2>
        </AnimatedSection>

        <div className={styles.detailsGrid}>
          {/* Column 1 */}
          <AnimatedSection direction="up" delay={0.1} className={styles.detailCol}>
            <span className={styles.detailIcon}>✨</span>
            <h3 className={styles.detailColTitle}>Flavor Profile</h3>
            <p className={styles.detailColText}>
              Delicately sweet, warm, and highly aromatic. It exhibits fine citrusy notes, woody undertones, and a smooth finish that does not overpower other ingredients in culinary applications.
            </p>
          </AnimatedSection>

          {/* Column 2 */}
          <AnimatedSection direction="up" delay={0.2} className={styles.detailCol}>
            <span className={styles.detailIcon}>🩺</span>
            <h3 className={styles.detailColTitle}>Health Benefits</h3>
            <p className={styles.detailColText}>
              Rich in powerful antioxidants and polyphenols. Supports healthy blood sugar levels, promotes digestion, and offers anti-inflammatory properties with trace, completely safe coumarin levels.
            </p>
          </AnimatedSection>

          {/* Column 3 */}
          <AnimatedSection direction="up" delay={0.3} className={styles.detailCol}>
            <span className={styles.detailIcon}>📦</span>
            <h3 className={styles.detailColTitle}>Packaging & Form</h3>
            <p className={styles.detailColText}>
              Available in whole quills (Alba, C5-Special, C5, C4 grades), cut quills, and premium fine powder. Packaged in moisture-resistant barrier bags to preserve pure essential oils.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sourcing & Sustainability Banner */}
      <section className={styles.sourcingBanner}>
        <div className={styles.sourcingBg}>
          <Image
            src="/images/cina2.png"
            alt="Spice plantation landscape overlay"
            fill
            className={styles.sourcingBgImage}
            sizes="100vw"
          />
        </div>
        <div className={styles.sourcingOverlay} />
        <div className={styles.sourcingContent}>
          <AnimatedSection direction="up">
            <span className={styles.sourcingSubtitle}>Direct Sourcing</span>
            <h2 className={styles.sourcingTitle}>Sustainable Spice Gardens</h2>
            <p className={styles.sourcingText}>
              Our Ceylon Cinnamon is harvested from organic family-owned estates in southern Sri Lanka. Through sustainable peeling techniques handed down over generations, the tree bark regenerates naturally. This fair-trade process ensures that the local peelers receive sustainable livelihoods while protecting our island&apos;s natural bio-diversity.
            </p>
            <Link href="/about" className="btn btn-outline" id="cinnamon-about-cta">
              Read Our Sourcing Story
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
