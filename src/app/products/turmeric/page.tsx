import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '../product-detail.module.css';

export const metadata = {
  title: 'Organic Turmeric – Gammalu Ceylon Foods',
  description: 'Vibrant golden turmeric with high curcumin content, grown in rich volcanic soil.',
};

export default function TurmericDetail() {
  return (
    <main className={styles.detailPage}>
      <section className={styles.hero}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/turmeric.png"
            alt="Organic Turmeric"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className={styles.title}>Organic Turmeric</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.25}>
            <p className={styles.tagline}>Vibrant golden turmeric from Sri Lanka</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.descriptionSection}>
        <AnimatedSection direction="up" delay={0.1}>
          <p className={styles.description}>
            Vibrant golden turmeric with high curcumin content, grown in rich volcanic soil. Our
            organic turmeric is carefully cultivated, harvested, and sun‑dried to preserve its
            potent flavor and health benefits. Perfect for curries, teas, and wellness recipes.
          </p>
        </AnimatedSection>
      </section>
    </main>
  );
}
