'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SpiceCard from '@/components/SpiceCard';
import styles from './products.module.css';

/* ── Product Data ── */
const products = [
  {
    name: 'Ceylon Cinnamon',
    origin: 'Sri Lanka',
    imageSrc: '/images/cinnamon.png',
    description:
      "The world's finest true cinnamon, hand-harvested from the bark of Cinnamomum verum trees native to Sri Lanka.",
    category: 'Cinnamon',
    slug: '/products/cinnamon',
  },
  {
    name: 'Black Pepper',
    origin: 'Sri Lanka',
    imageSrc: '/images/pepper.png',
    description:
      'Bold and aromatic peppercorns, sun-dried to perfection in the highlands of Sri Lanka.',
    category: 'Pepper',
    slug: '/products/pepper',
  },
];

const categories = [
  'All',
  'Cinnamon',
  'Pepper',
  'Turmeric',
  'Exotic Blends',
  'Whole Spices',
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/hero-spices.png"
            alt="Curated collection of premium Ceylon spices"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection direction="up" delay={0.1}>
            <p className={styles.heroSubtitle}>Hand-Selected Excellence</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.25}>
            <h1 className={styles.heroTitle}>Our Premium Collection</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <div className={styles.heroDivider} />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.55}>
            <p className={styles.heroDesc}>
              Discover single-origin spices sourced directly from Sri Lanka&apos;s finest growing regions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Products Section ── */}
      <section className={styles.productsSection}>
        <div className={styles.productsContainer}>
          {/* Filter Tabs */}
          <AnimatedSection direction="up">
            <div className={styles.filterWrap}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${
                    activeFilter === cat ? styles.filterTabActive : ''
                  }`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product Grid */}
          <div className={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <AnimatedSection key={product.name} direction="up" delay={idx * 0.1}>
                  <SpiceCard
                    name={product.name}
                    origin={product.origin}
                    description={product.description}
                    imageSrc={product.imageSrc}
                    imageAlt={`${product.name} — premium Ceylon spice`}
                    slug={product.slug}
                  />
                </AnimatedSection>
              ))
            ) : (
              <div className={styles.noResults}>
                <p className={styles.noResultsText}>
                  No products found in this category. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Quality Promise ── */}
      <section className={styles.promiseSection}>
        <div className={styles.promiseContainer}>
          <AnimatedSection direction="up">
            <div className={styles.promiseContent}>
              <p className={styles.promiseLabel}>Our Guarantee</p>
              <h2 className={styles.promiseTitle}>The Gammalu Quality Promise</h2>
              <div className={styles.promiseDivider} />
              <p className={styles.promiseText}>
                Every spice that bears our name has been hand-inspected, laboratory tested, and
                packed with care. From soil to seal, we control the entire journey so you
                receive nothing but the absolute finest.
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.promiseGrid}>
            <AnimatedSection direction="up" delay={0}>
              <div className={styles.promiseItem}>
                <div className={styles.promiseIconWrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className={styles.promiseItemTitle}>Purity Tested</h4>
                <p className={styles.promiseItemText}>
                  Every batch is lab-verified for purity, free from additives and contaminants.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <div className={styles.promiseItem}>
                <div className={styles.promiseIconWrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12Z" />
                    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </div>
                <h4 className={styles.promiseItemTitle}>Direct Source</h4>
                <p className={styles.promiseItemText}>
                  Sourced directly from smallholder farms — no middlemen, full traceability.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className={styles.promiseItem}>
                <div className={styles.promiseIconWrap}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h4 className={styles.promiseItemTitle}>Fresh Packed</h4>
                <p className={styles.promiseItemText}>
                  Nitrogen-flushed packaging locks in flavour and freshness from origin to kitchen.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
