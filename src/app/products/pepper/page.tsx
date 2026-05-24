"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "../product-detail.module.css";

export default function PepperDetailPage() {
  return (
    <main className={styles.detailContainer}>
      {/* Back Button */}
      <AnimatedSection direction="up" delay={0.05}>
        <Link href="/products" className={styles.backBtn} id="pepper-back-link">
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
            src="/images/pepper.png"
            alt="Premium Sri Lankan Black Peppercorns close-up"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AnimatedSection>

        {/* Right Column: Info */}
        <AnimatedSection direction="right" className={styles.infoWrap}>
          <div className={styles.badgeRow}>
            <span className={styles.categoryBadge}>Pepper</span>
            <span className={styles.originBadge}>High-Grown Ceylon</span>
          </div>

          <h1 className={styles.title}>Ceylon Black Pepper</h1>
          <p className={styles.scientificName}>Piper nigrum (King of Spices)</p>

          <p className={styles.description}>
            Ceylon Black Pepper is celebrated globally for its high piperine content, giving it a characteristic intense heat, deep pungency, and citrusy aroma. Grown in the mid-country and highland spice gardens of Sri Lanka, our peppercorns are hand-harvested when fully mature, sun-dried on clean bamboo mats, and graded to deliver premium quality, high-density pepper grains.
          </p>

          {/* Highlights / Stats */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>&gt; 6.5%</span>
              <span className={styles.highlightLbl}>Piperine Content</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>550 g/l</span>
              <span className={styles.highlightLbl}>Minimum Density</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>100%</span>
              <span className={styles.highlightLbl}>Sun Dried</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact?subject=Pepper Inquiry" className="btn btn-primary" id="pepper-cta-quote">
              Request B2B Quote
            </Link>
            <Link href="/contact" className="btn btn-outline" id="pepper-cta-sample">
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
            <span className={styles.detailIcon}>🔥</span>
            <h3 className={styles.detailColTitle}>Aroma & Heat</h3>
            <p className={styles.detailColText}>
              Extremely pungent and complex. Starts with a rich woody and pine aroma, followed by notes of citrus and lime, finishing with a deep, lingering, clean peppery heat.
            </p>
          </AnimatedSection>

          {/* Column 2 */}
          <AnimatedSection direction="up" delay={0.2} className={styles.detailCol}>
            <span className={styles.detailIcon}>🌟</span>
            <h3 className={styles.detailColTitle}>High Piperine Advantage</h3>
            <p className={styles.detailColText}>
              Ceylon Pepper has nearly twice the piperine level of general origin pepper. Piperine enhances nutrient absorption, aids digestion, and serves as a powerful antioxidant.
            </p>
          </AnimatedSection>

          {/* Column 3 */}
          <AnimatedSection direction="up" delay={0.3} className={styles.detailCol}>
            <span className={styles.detailIcon}>📦</span>
            <h3 className={styles.detailColTitle}>Packaging & Grades</h3>
            <p className={styles.detailColText}>
              Offered as Grade 1 Whole Black Peppercorns (FAQ/ASTA standard), light berries, cracked pepper, and ground powder. Packed in vacuum sealed multi-ply kraft bags.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sourcing & Sustainability Banner */}
      <section className={styles.sourcingBanner}>
        <div className={styles.sourcingBg}>
          <Image
            src="/images/spices-clean-white.png"
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
            <h2 className={styles.sourcingTitle}>Empowering Smallholder Farmers</h2>
            <p className={styles.sourcingText}>
              Our peppercorns are grown in traditional home gardens, known locally as &quot;Kandyan Forest Gardens.&quot; These biodiverse, organic ecosystems require no artificial irrigation. We buy directly from smallholder farming families, paying premium rates above the market price to support sustainable farming practices and rural communities.
            </p>
            <Link href="/about" className="btn btn-outline" id="pepper-about-cta">
              Read Our Sourcing Story
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
