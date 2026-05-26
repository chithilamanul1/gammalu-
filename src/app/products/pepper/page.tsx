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
            src="/images/peper.png"
            alt="Premium Sri Lankan Black Peppercorns"
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
            <span className={styles.originBadge}>King of the Spices</span>
          </div>

          <h1 className={styles.title}>Ceylon Black Pepper</h1>
          <p className={styles.scientificName}>Piper nigrum</p>

          <p className={styles.description}>
            Pepper is the most widely used spice in the world and known as the &quot;King of the Spices&quot;. Ceylon Black Pepper is a premium spice from Sri Lanka, prized worldwide for its high piperine content, rich aroma, and distinct floral-citrus notes. Cultivated mainly in Matale, Kandy, Kegalle, and Kurunegala, it commands a premium price in global markets due to its unique terroir and exceptional quality.
          </p>

          {/* Highlights / Stats */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>High</span>
              <span className={styles.highlightLbl}>Piperine Content</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Premium</span>
              <span className={styles.highlightLbl}>Quality Status</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>100%</span>
              <span className={styles.highlightLbl}>Authentic Origin</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact?subject=Black Pepper Inquiry" className="btn btn-primary" id="pepper-cta-quote">
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
            <span className={styles.detailIcon}>🌿</span>
            <h3 className={styles.detailColTitle}>Origin & Cultivation</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Botanical name:</strong> Piper nigrum</p>
              <p style={{ marginBottom: "8px" }}><strong>Growing method:</strong> Often intercropped with coconut and tea plantations, using live or dead supports.</p>
              <p><strong>Harvesting process:</strong> Berries are picked green and slightly immature, blanched, and sun-dried, resulting in a deep black color and high essential oil content.</p>
            </div>
          </AnimatedSection>

          {/* Column 2 */}
          <AnimatedSection direction="up" delay={0.2} className={styles.detailCol}>
            <span className={styles.detailIcon}>✨</span>
            <h3 className={styles.detailColTitle}>Flavor Profile</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Taste:</strong> Strong pungency with richly aromatic floral and citrus notes.</p>
              <p><strong>Aroma:</strong> Intensely fragrant, making it ideal for seasoning and finishing dishes.</p>
            </div>
          </AnimatedSection>

          {/* Column 3 */}
          <AnimatedSection direction="up" delay={0.3} className={styles.detailCol}>
            <span className={styles.detailIcon}>🩺</span>
            <h3 className={styles.detailColTitle}>Health Benefits</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Ayurvedic properties:</strong> Warming spice that aids digestion, appetite, and decongestion.</p>
              <p style={{ marginBottom: "8px" }}><strong>Bioavailability booster:</strong> Piperine enhances absorption of nutrients like selenium, beta-carotene, curcumin, and vitamins A & C.</p>
              <p><strong>Traditional medicine:</strong> Used in Ayurveda and Chinese medicine to treat colds, arthritis, digestive issues, and respiratory ailments.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Journey Section */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyGrid}>
            <AnimatedSection direction="left" className={styles.journeyText}>
              <span className="subtitle">From Farm to Seasoning</span>
              <h2>The Pungent Masterpiece</h2>
              <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
              <p>
                Harvested by hand in the volcanic soils of Matale and Kandy, our black pepper berries are picked at peak maturity when they are lush and green. They are then blanched and naturally sun-dried, transforming into deeply textured black peppercorns.
              </p>
              <p style={{ marginTop: "16px" }}>
                Our pepper retains maximum essential oils, delivering a rich, hot pungency with unique floral and citrus notes. Excellent as a finishing spice to elevate steaks, fresh fish, pasta, and gourmet dressings.
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
                <span className={styles.journeyImgCap}>Fresh Pepper Spikes</span>
              </div>
              <div className={styles.journeyImgItem}>
                <Image
                  src="/images/pexels-vignesh-vinod-174848166-16238699.jpg.jpeg"
                  alt="Harvested raw green pepper berries"
                  width={300}
                  height={220}
                  className={styles.journeyImage}
                />
                <span className={styles.journeyImgCap}>Sun-Drying Process</span>
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
            <span className={styles.sourcingSubtitle}>Global Demand & Exports</span>
            <h2 className={styles.sourcingTitle}>Premium Status Worldwide</h2>
            <p className={styles.sourcingText}>
              Favored for its high piperine content and unique terroir, our Ceylon Black Pepper is highly sought after. It commands higher prices compared to other varieties due to its exceptional quality and origin authenticity. Perfect for seasoning, finishing spice, and various food industry applications like spice blends and marinades.
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
