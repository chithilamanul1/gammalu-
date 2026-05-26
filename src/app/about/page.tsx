'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './about.module.css';

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
    name: "Fair Trade",
    subtitle: "Ethical Sourcing",
    description: "Empowering smallholder farmers, ensuring fair compensation and sustainable community development.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.certIconContainer} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.75" opacity="0.2" fill="none" />
        <path d="M50 20 C66.5 20, 80 33.5, 80 50 C80 66.5, 66.5 80, 50 80 C33.5 80, 20 66.5, 20 50 C20 33.5, 33.5 20, 50 20 Z" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" fill="none" />
        <path d="M50 28 C45 28 35 32 35 44 C35 55 50 64 50 72 C50 64 65 55 65 44 C65 32 55 28 50 28 Z" fill="currentColor" opacity="0.1" />
        <text x="50" y="44" fontFamily="var(--font-heading)" fontSize="13" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" fill="currentColor">FAIR</text>
        <text x="50" y="60" fontFamily="var(--font-heading)" fontSize="13" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" fill="currentColor">TRADE</text>
        <text x="50" y="72" fontFamily="var(--font-body)" fontSize="6" fontWeight="600" letterSpacing="0.1em" textAnchor="middle" fill="currentColor">CERTIFIED</text>
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroCircle} />
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/cinnamon-hero.png"
            alt="Cinnamon sticks and star anise"
            fill
            priority
            className={styles.heroImage}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection direction="up" delay={0.1}>
            <p className={styles.heroLabel}>Since 2020</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.25}>
            <h1 className={styles.heroTitle}>Our Heritage</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <p className={styles.heroSubtitle}>
              From the lush highlands of Ceylon to your table — a legacy of purity, passion, and premium spices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <AnimatedSection direction="left">
              <div className={styles.storyImageWrap}>
                <Image
                  src="/images/cina3.png"
                  alt="Artisan harvesting cinnamon bark in Sri Lanka"
                  fill
                  className={styles.storyImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className={styles.storyContent}>
                <span className="subtitle">Our Story</span>
                <h2>Rooted in Tradition, Refined by Excellence</h2>
                <div className="divider" style={{ margin: "24px 0", marginLeft: 0 }} />
                <p>
                  Gammalu Ceylon Foods was born from a deep reverence for Sri Lanka&apos;s centuries-old spice heritage. Our founders grew up in the verdant hill country, where cinnamon trees line the valleys and pepper vines cling to ancient trees.
                </p>
                <p>
                  Today, we partner directly with smallholder farmers across Sri Lanka&apos;s finest growing regions. Every spice is hand-selected, sun-dried using traditional methods, and processed with meticulous care to preserve its full aromatic profile and health-giving properties.
                </p>
                <p className="text-accent text-red" style={{ fontSize: "1.2rem", marginTop: "24px" }}>
                  &ldquo;We don&apos;t just sell spices — we honour generations of artisans who perfected the craft of cultivating the world&apos;s finest flavours.&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <span className="subtitle">Purpose & Promise</span>
              <h2>Mission & Vision</h2>
              <div className="divider" />
            </div>
          </AnimatedSection>

          <div className={styles.missionGrid}>
            <AnimatedSection direction="up" delay={0.1}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To bring the authentic taste of Ceylon to kitchens around the world, while uplifting the farming communities who nurture these extraordinary spices. We are committed to sustainable sourcing, uncompromising quality, and preserving age-old harvesting traditions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>👁️</div>
                <h3>Our Vision</h3>
                <p>
                  To be recognised globally as the premier source of Ceylon spices — setting the benchmark for purity, sustainability, and flavour. We envision a world where every meal is elevated by the finest natural ingredients, ethically sourced and lovingly prepared.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <span className="subtitle">What Drives Us</span>
              <h2>Our Core Values</h2>
              <div className="divider" />
            </div>
          </AnimatedSection>

          <div className={styles.valuesGrid}>
            {/* Sustainability */}
            <AnimatedSection direction="up" delay={0}>
              <div className={styles.valueItem}>
                <div className={styles.valueIconWrap}>🌱</div>
                <div className={styles.valueContent}>
                  <h4>Sustainability</h4>
                  <p>
                    Earth-first practices from farm to shelf. We protect the land that gives us everything.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Quality */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className={styles.valueItem}>
                <div className={styles.valueIconWrap}>⭐</div>
                <div className={styles.valueContent}>
                  <h4>Quality</h4>
                  <p>
                    Uncompromising standards at every stage. Only the finest spices carry the Gammalu name.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Community */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className={styles.valueItem}>
                <div className={styles.valueIconWrap}>🤝</div>
                <div className={styles.valueContent}>
                  <h4>Community</h4>
                  <p>
                    Fair partnerships with local farmers, empowering the communities behind our spices.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Innovation */}
            <AnimatedSection direction="up" delay={0.3}>
              <div className={styles.valueItem}>
                <div className={styles.valueIconWrap}>💡</div>
                <div className={styles.valueContent}>
                  <h4>Innovation</h4>
                  <p>
                    Blending ancient wisdom with modern technique to unlock new dimensions of flavour.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section className={`section ${styles.certSection}`}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-header">
              <span className="subtitle">Trust & Transparency</span>
              <h2>Our Certifications</h2>
              <div className="divider" />
              <p>
                Every product is rigorously tested and certified, so you can trust what you taste.
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
    </main>
  );
}
