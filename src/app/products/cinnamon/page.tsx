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
            alt="Premium Ceylon Cinnamon"
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
            <span className={styles.originBadge}>True Taste of Sri Lanka</span>
          </div>

          <h1 className={styles.title}>Ceylon Cinnamon</h1>
          <p className={styles.scientificName}>Cinnamomum Zeylanicum (True Cinnamon)</p>

          <p className={styles.description}>
            Pure Ceylon Cinnamon – True Taste of Sri Lanka. Indigenous to Sri Lanka, it is the world&apos;s finest and most authentic cinnamon. Revered as true cinnamon or sweet cinnamon, it is distinct from Cassia, offering unmatched purity, delicate sweetness, and a refined aroma.
          </p>

          {/* Highlights / Stats */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Global</span>
              <span className={styles.highlightLbl}>Leadership</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>Pure</span>
              <span className={styles.highlightLbl}>Ceylon Cinnamon</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightVal}>100%</span>
              <span className={styles.highlightLbl}>Authentic</span>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact?subject=Cinnamon Inquiry" className="btn btn-primary" id="cinnamon-cta-quote">
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
            <span className={styles.detailIcon}>🏛️</span>
            <h3 className={styles.detailColTitle}>Heritage & Craftsmanship</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Authentic origin:</strong> Grown exclusively in Sri Lanka, where cinnamon has been cultivated for centuries.</p>
              <p style={{ marginBottom: "8px" }}><strong>Generational skill:</strong> The art of handcrafting cinnamon quills is unique to Sri Lanka, passed down through generations.</p>
              <p><strong>Geographical indication:</strong> The name &quot;Ceylon Cinnamon&quot; is protected, symbolizing authenticity and heritage.</p>
            </div>
          </AnimatedSection>

          {/* Column 2 */}
          <AnimatedSection direction="up" delay={0.2} className={styles.detailCol}>
            <span className={styles.detailIcon}>✨</span>
            <h3 className={styles.detailColTitle}>Flavor & Versatility</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Distinctive aroma:</strong> Sweet, subtle, and sophisticated compared to the harsher Cassia.</p>
              <p style={{ marginBottom: "8px" }}><strong>Culinary excellence:</strong> Enhances bakery goods, desserts, teas, hot cocoa, liqueurs, and spicy candies.</p>
              <p><strong>Global demand:</strong> Preferred worldwide as a natural flavoring agent amid rising concerns over synthetic additives.</p>
            </div>
          </AnimatedSection>

          {/* Column 3 */}
          <AnimatedSection direction="up" delay={0.3} className={styles.detailCol}>
            <span className={styles.detailIcon}>🩺</span>
            <h3 className={styles.detailColTitle}>Health & Wellness</h3>
            <div style={{ textAlign: "left", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "8px" }}><strong>Rich in antioxidants:</strong> Supporting overall health and vitality.</p>
              <p><strong>Therapeutic properties:</strong> Widely used in pharmaceuticals and cosmetics for its therapeutic and aromatic properties.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Journey Section */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyGrid}>
            <AnimatedSection direction="left" className={styles.journeyText}>
              <span className="subtitle">From Plantation to Table</span>
              <h2>A Sensory Masterpiece</h2>
              <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
              <p>
                Our Ceylon Cinnamon undergoes a meticulous handcrafting process. Skilled artisans peel the inner bark of the Cinnamomum Zeylanicum tree to form thin, multi-layered quills, which are then naturally sun-dried. 
              </p>
              <p style={{ marginTop: "16px" }}>
                Whether freshly ground into fine powder for gourmet baking, steeped in hot morning tea, or infused into sophisticated desserts, true cinnamon brings a delicate, sweet warmth that cannot be replicated.
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
                <span className={styles.journeyImgCap}>Handcrafted Quills</span>
              </div>
              <div className={styles.journeyImgItem}>
                <Image
                  src="/images/Cinnamon Toast.png"
                  alt="Culinary application of cinnamon toast"
                  width={300}
                  height={220}
                  className={styles.journeyImage}
                />
                <span className={styles.journeyImgCap}>Gourmet Culinary Use</span>
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
            <span className={styles.sourcingSubtitle}>Global Leadership</span>
            <h2 className={styles.sourcingTitle}>The Most Valuable Spice of Sri Lanka</h2>
            <p className={styles.sourcingText}>
              Cinnamon is deeply tied to Sri Lanka&apos;s culture and economy. Recognized globally under the Pure Ceylon Cinnamon brand, established by the Sri Lanka Export Development Board (SLEDB). You can find this mark of true authenticity on our products.
            </p>
            <Link href="/about" className="btn btn-outline" id="cinnamon-about-cta">
              Discover Our Heritage
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
