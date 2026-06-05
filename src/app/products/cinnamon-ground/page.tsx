"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "../product-detail.module.css";

export default function CinnamonGroundDetailPage() {
  return (
    <main className={styles.detailContainer}>
      {/* Back Button */}
      <AnimatedSection direction="up" delay={0.05}>
        <Link href="/products" className={styles.backBtn} id="cinnamon-ground-back-link">
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
            src="/images/cinnamon-ground.jpg"
            alt="Premium Ceylon Cinnamon Ground"
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
            <span className={styles.originBadge}>Ceylon Ground Powder</span>
          </div>

          <h1 className={styles.title}>Ceylon Cinnamon Ground</h1>
          <p className={styles.scientificName}>Cinnamomum Zeylanicum (Powdered Bark)</p>

          <p className={styles.description}>
            Our Premium Ceylon Cinnamon Ground is crafted from selected true cinnamon quills, finely milled to retain its delicate sweet aroma and rich golden color. Unlike ordinary cassia powder, Ceylon Cinnamon Ground contains virtually no coumarin, making it safe for daily intake. It is the ultimate addition to premium baking, spiced beverages, porridge, and gourmet savory recipes.
          </p>

          {/* Highlights / Stats */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Ultra-Low</span>
              <span className={styles.highlightLbl}>Coumarin Safe</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Finely</span>
              <span className={styles.highlightLbl}>Milled Powder</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>100%</span>
              <span className={styles.highlightLbl}>Ceylon Spices</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact?subject=Cinnamon Ground Inquiry" className="btn btn-primary" id="cinnamon-ground-cta-quote">
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
            <span className={styles.detailIcon}>✨</span>
            <h3 className={styles.detailColTitle}>Aroma & Texture</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Fine consistency:</strong> Carefully milled to a uniform particle size, dispersing smoothly in liquids and batters.</p>
              <p style={{ marginBottom: "8px" }}><strong>Delicate flavor:</strong> Highly complex, warm, sweet notes without any bitter aftertaste.</p>
              <p><strong>Natural sweetness:</strong> Sweetness naturally inherent to Cinnamomum Zeylanicum reduces the need for added refined sugars.</p>
            </div>
          </AnimatedSection>

          {/* Column 2 */}
          <AnimatedSection direction="up" delay={0.2} className={styles.detailCol}>
            <span className={styles.detailIcon}>🥣</span>
            <h3 className={styles.detailColTitle}>Culinary Uses</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Baking Excellence:</strong> Essential for cookies, muffins, traditional breads, and pastry glazes.</p>
              <p style={{ marginBottom: "8px" }}><strong>Specialty Beverages:</strong> Elevates chai lattes, morning smoothies, coffees, and herbal infusions.</p>
              <p><strong>Savory Seasoning:</strong> Adds depth to authentic curries, spice rubs, and Middle Eastern pilafs.</p>
            </div>
          </AnimatedSection>

          {/* Column 3 */}
          <AnimatedSection direction="up" delay={0.3} className={styles.detailCol}>
            <span className={styles.detailIcon}>🛡️</span>
            <h3 className={styles.detailColTitle}>Pure & Safe</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Cassia-Free:</strong> 100% pure Ceylon Cinnamon with zero cassia or fillers blended in.</p>
              <p style={{ marginBottom: "8px" }}><strong>Daily wellness:</strong> High levels of antioxidants (polyphenols) that help maintain wellness.</p>
              <p><strong>Metabolic Support:</strong> Supports healthy digestion and balanced insulin sensitivity.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Journey Section */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyGrid}>
            <AnimatedSection direction="left" className={styles.journeyText}>
              <span className="subtitle">From Harvest to Fine Mill</span>
              <h2>Purity in Every Grain</h2>
              <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
              <p>
                Our ground cinnamon begins with selection of pristine cinnamon bark quills. We use advanced low-temperature milling processes to prevent heat degradation, ensuring that the volatile essential oils and aroma compounds are completely preserved.
              </p>
              <p style={{ marginTop: "16px" }}>
                Every bag of Gammalu ground cinnamon brings the fresh, warm fragrance of Ceylon plantations directly to your manufacturing kitchen, bakery, or culinary establishment.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className={styles.journeyImages}>
              <div className={styles.journeyImgItem}>
                <Image
                  src="/images/cina3.png"
                  alt="Traditional cinnamon quill peeling"
                  width={300}
                  height={220}
                  className={styles.journeyImage}
                />
                <span className={styles.journeyImgCap}>Select Quills</span>
              </div>
              <div className={styles.journeyImgItem}>
                <Image
                  src="/images/Cinnamon Toast.png"
                  alt="Culinary application of cinnamon toast"
                  width={300}
                  height={220}
                  className={styles.journeyImage}
                />
                <span className={styles.journeyImgCap}>Baking & Pastries</span>
              </div>
            </AnimatedSection>
          </div>
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
            <span className={styles.sourcingSubtitle}>Authentic Mark</span>
            <h2 className={styles.sourcingTitle}>Certified Ceylon Quality</h2>
            <p className={styles.sourcingText}>
              Our ground cinnamon is sourced directly from ethical plantation networks in Sri Lanka. Processed under strict GMP and ISO standards, we guarantee that our product is authentic, unadulterated, and of the highest grade.
            </p>
            <Link href="/about" className="btn btn-outline" id="cinnamon-ground-about-cta">
              Discover Our Heritage
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
