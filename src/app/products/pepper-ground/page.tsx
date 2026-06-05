"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "../product-detail.module.css";

export default function PepperGroundDetailPage() {
  return (
    <main className={styles.detailContainer}>
      {/* Back Button */}
      <AnimatedSection direction="up" delay={0.05}>
        <Link href="/products" className={styles.backBtn} id="pepper-ground-back-link">
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
            src="/images/pepper-ground.jpg"
            alt="Premium Ceylon Black Pepper Ground"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AnimatedSection>

        {/* Right Column: Info */}
        <AnimatedSection direction="right" className={styles.infoWrap}>
          <div className={styles.badgeRow}>
            <span className={styles.categoryBadge}>Black Pepper</span>
            <span className={styles.originBadge}>Ceylon Ground Pepper</span>
          </div>

          <h1 className={styles.title}>Ceylon Black Pepper Ground</h1>
          <p className={styles.scientificName}>Piper nigrum (Powdered Peppercorns)</p>

          <p className={styles.description}>
            Our Ceylon Black Pepper Ground is milled from top-tier whole peppercorns harvested across Sri Lanka&apos;s tropical highlands. Celebrated for its high piperine content, this ground black pepper delivers a robust pungency, deep earthy flavor, and signature citrus-floral undertones. Perfectly ground for immediate culinary use, industrial spice blending, and gourmet seasoning.
          </p>

          {/* Highlights / Stats */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>High</span>
              <span className={styles.highlightLbl}>Piperine Content</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Aromatic</span>
              <span className={styles.highlightLbl}>Citrus-Floral Notes</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>100%</span>
              <span className={styles.highlightLbl}>Pure Origin</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact?subject=Black Pepper Ground Inquiry" className="btn btn-primary" id="pepper-ground-cta-quote">
              Request B2B Quote
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Product Details Columns */}
      <section className={styles.detailsSection}>
        <AnimatedSection direction="up">
          <h2 className={styles.sectionTitle}>Characteristics</h2>
        </AnimatedSection>

        <div className={styles.detailsGrid}>
          {/* Column 1 */}
          <AnimatedSection direction="up" delay={0.1} className={styles.detailCol}>
            <span className={styles.detailIcon}>🌶️</span>
            <h3 className={styles.detailColTitle}>Pungency & Flavor</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Strong Heat:</strong> Elevated piperine levels deliver a sharp, lingering bite compared to standard black pepper.</p>
              <p style={{ marginBottom: "8px" }}><strong>Complex Profile:</strong> Layered with subtle notes of citrus, wood, and forest floors.</p>
              <p><strong>Freshly milled:</strong> Milled in controlled batches to preserve volatile piperine oil levels.</p>
            </div>
          </AnimatedSection>

          {/* Column 2 */}
          <AnimatedSection direction="up" delay={0.2} className={styles.detailCol}>
            <span className={styles.detailIcon}>🍳</span>
            <h3 className={styles.detailColTitle}>Culinary Magic</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Gourmet Seasoning:</strong> Ideal for rubs, marinades, meat preparation, and soup broths.</p>
              <p style={{ marginBottom: "8px" }}><strong>Snack Seasonings:</strong> Popular for chips, dry nuts, and savory cracker overlays.</p>
              <p><strong>Spice Blends:</strong> Forms the robust flavor backbone of curry powders and garam masalas.</p>
            </div>
          </AnimatedSection>

          {/* Column 3 */}
          <AnimatedSection direction="up" delay={0.3} className={styles.detailCol}>
            <span className={styles.detailIcon}>🩺</span>
            <h3 className={styles.detailColTitle}>Health & Digestion</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Digestive Enzyme Support:</strong> Stimulates secretion of hydrochloric acid to aid digestion.</p>
              <p style={{ marginBottom: "8px" }}><strong>Absorption Booster:</strong> Naturally increases the bioavailability of crucial nutrients and herbal compounds.</p>
              <p><strong>Antioxidant Rich:</strong> Fights cell inflammation and aids respiratory relief.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Journey Section */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyGrid}>
            <AnimatedSection direction="left" className={styles.journeyText}>
              <span className="subtitle">Sun-Dried & Clean Milled</span>
              <h2>A Legacy of Pungency</h2>
              <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
              <p>
                Our peppercorns are hand-harvested by local farming communities from high-altitude vines in Sri Lanka. After natural sun-drying on clean platforms, the berries undergo triple-stage cleaning and are milled under low heat.
              </p>
              <p style={{ marginTop: "16px" }}>
                This preserves the essential oils that give Ceylon pepper its world-renowned punchy heat and complex citrusy aroma.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className={styles.journeyImages}>
              <div className={styles.journeyImgItem}>
                <Image
                  src="/images/pexels-hatdieubaokhanh-com-2155729267-36292685.jpg.jpeg"
                  alt="Fresh green pepper spikes on vine"
                  width={300}
                  height={220}
                  className={styles.journeyImage}
                />
                <span className={styles.journeyImgCap}>Fresh Pepper Vine</span>
              </div>
              <div className={styles.journeyImgItem}>
                <Image
                  src="/images/pexels-vignesh-vinod-174848166-16238699.jpg.jpeg"
                  alt="Harvested raw green pepper berries"
                  width={300}
                  height={220}
                  className={styles.journeyImage}
                />
                <span className={styles.journeyImgCap}>Clean Sun Drying</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sourcing & Sustainability Banner */}
      <section className={styles.sourcingBanner}>
        <div className={styles.sourcingBg}>
          <Image
            src="/images/pexels-ravikant-35459274.jpg.jpeg"
            alt="Spice plantation landscape overlay"
            fill
            className={styles.sourcingBgImage}
            sizes="100vw"
          />
        </div>
        <div className={styles.sourcingOverlay} />
        <div className={styles.sourcingContent}>
          <AnimatedSection direction="up">
            <span className={styles.sourcingSubtitle}>Highland Harvest</span>
            <h2 className={styles.sourcingTitle}>100% Pure Ceylon Pepper</h2>
            <p className={styles.sourcingText}>
              Gammalu Ceylon Foods works directly with highland growers to ensure fair trade and complete chemical-free traceability. Taste the authentic distinction of single-origin ground pepper.
            </p>
            <Link href="/about" className="btn btn-outline" id="pepper-ground-about-cta">
              Read Our Sourcing Story
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
