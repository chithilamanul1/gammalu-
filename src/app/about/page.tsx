'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/spices-dark-moody.png"
            alt="Premium Ceylon spices spread on dark surface"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection direction="up" delay={0.1}>
            <p className={styles.heroSubtitle}>Since 2020</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.25}>
            <h1 className={styles.heroTitle}>Our Heritage</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <div className={styles.heroDivider} />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.55}>
            <p className={styles.heroDesc}>
              From the lush highlands of Ceylon to your table — a legacy of purity, passion, and premium spices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyGrid}>
            <AnimatedSection direction="left">
              <div className={styles.storyImageWrap}>
                <Image
                  src="/images/cinnamon.png"
                  alt="Artisan harvesting cinnamon bark in Sri Lanka"
                  fill
                  className={styles.storyImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.storyImageDecor} />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className={styles.storyContent}>
                <span className={styles.storyLabel}>Our Story</span>
                <h2 className={styles.storyTitle}>
                  Rooted in Tradition, Refined by Excellence
                </h2>
                <p className={styles.storyText}>
                  Gammalu Ceylon Foods was born from a deep reverence for Sri Lanka&apos;s centuries-old spice heritage. Our founders grew up in the verdant hill country, where cinnamon trees line the valleys and pepper vines cling to ancient trees.
                </p>
                <p className={styles.storyText}>
                  Today, we partner directly with smallholder farmers across Sri Lanka&apos;s finest growing regions. Every spice is hand-selected, sun-dried using traditional methods, and processed with meticulous care to preserve its full aromatic profile and health-giving properties.
                </p>
                <div className={styles.storyHighlight}>
                  <p>
                    &ldquo;We don&apos;t just sell spices — we honour generations of artisans who perfected the craft of cultivating the world&apos;s finest flavours.&rdquo;
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <AnimatedSection direction="up">
            <div className={styles.missionHeader}>
              <p className={styles.missionLabel}>Purpose &amp; Promise</p>
              <h2 className={styles.missionHeaderTitle}>Mission &amp; Vision</h2>
              <div className={styles.missionHeaderDivider} />
            </div>
          </AnimatedSection>

          <div className={styles.missionGrid}>
            <AnimatedSection direction="left" delay={0.1}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className={styles.missionCardTitle}>Our Mission</h3>
                <p className={styles.missionCardText}>
                  To bring the authentic taste of Ceylon to kitchens around the world, while uplifting the farming communities who nurture these extraordinary spices. We are committed to sustainable sourcing, uncompromising quality, and preserving age-old harvesting traditions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className={styles.missionCardTitle}>Our Vision</h3>
                <p className={styles.missionCardText}>
                  To be recognised globally as the premier source of Ceylon spices — setting the benchmark for purity, sustainability, and flavour. We envision a world where every meal is elevated by the finest natural ingredients, ethically sourced and lovingly prepared.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <AnimatedSection direction="up">
            <div className={styles.valuesHeader}>
              <p className={styles.valuesLabel}>What Drives Us</p>
              <h2 className={styles.valuesHeaderTitle}>Our Core Values</h2>
              <div className={styles.valuesHeaderDivider} />
            </div>
          </AnimatedSection>

          <div className={styles.valuesGrid}>
            {/* Sustainability */}
            <AnimatedSection direction="up" delay={0}>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12Z" />
                    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </div>
                <h4 className={styles.valueTitle}>Sustainability</h4>
                <p className={styles.valueText}>
                  Earth-first practices from farm to shelf. We protect the land that gives us everything.
                </p>
              </div>
            </AnimatedSection>

            {/* Quality */}
            <AnimatedSection direction="up" delay={0.15}>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className={styles.valueTitle}>Quality</h4>
                <p className={styles.valueText}>
                  Uncompromising standards at every stage. Only the finest spices carry the Gammalu name.
                </p>
              </div>
            </AnimatedSection>

            {/* Community */}
            <AnimatedSection direction="up" delay={0.3}>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className={styles.valueTitle}>Community</h4>
                <p className={styles.valueText}>
                  Fair partnerships with local farmers, empowering the communities behind our spices.
                </p>
              </div>
            </AnimatedSection>

            {/* Innovation */}
            <AnimatedSection direction="up" delay={0.45}>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className={styles.valueTitle}>Innovation</h4>
                <p className={styles.valueText}>
                  Blending ancient wisdom with modern technique to unlock new dimensions of flavour.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section className={styles.certSection}>
        <div className={styles.certContainer}>
          <AnimatedSection direction="up">
            <div className={styles.certHeader}>
              <p className={styles.certLabel}>Trust &amp; Transparency</p>
              <h2 className={styles.certHeaderTitle}>Our Certifications</h2>
              <div className={styles.certHeaderDivider} />
              <p className={styles.certHeaderText}>
                Every product is rigorously tested and certified, so you can trust what you taste.
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.certGrid}>
            <AnimatedSection direction="scale" delay={0}>
              <div className={styles.certCard}>
                <div className={styles.certIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12Z" />
                    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </div>
                <h4 className={styles.certTitle}>Organic Certified</h4>
                <p className={styles.certText}>100% organic, free from synthetic pesticides and fertilisers.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="scale" delay={0.15}>
              <div className={styles.certCard}>
                <div className={styles.certIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                </div>
                <h4 className={styles.certTitle}>ISO 22000</h4>
                <p className={styles.certText}>International food safety management standard compliance.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="scale" delay={0.3}>
              <div className={styles.certCard}>
                <div className={styles.certIconWrap}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className={styles.certTitle}>Fair Trade</h4>
                <p className={styles.certText}>Ethically sourced, ensuring fair wages for farming communities.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
