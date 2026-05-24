'use client';

import { FormEvent } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './contact.module.css';

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  return (
    <main className={styles.contactPage}>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrain} />
        <div className={styles.heroContent}>
          <AnimatedSection direction="up">
            <span className={styles.heroLabel}>Contact Us</span>
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <div className={styles.heroDivider} />
            <p className={styles.heroSubtitle}>
              Whether you&apos;re a retailer, distributor, or spice enthusiast — we&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>

            {/* ── Left Column: Contact Form ── */}
            <AnimatedSection direction="left" className={styles.formColumn}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Send Us a Message</h2>
                  <p className={styles.formDescription}>
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.label}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your company (optional)"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>
                        Subject <span className={styles.required}>*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className={styles.select}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="general">General Inquiry</option>
                        <option value="wholesale">Wholesale &amp; Distribution</option>
                        <option value="export">Export &amp; B2B Partnership</option>
                        <option value="product">Product Information</option>
                        <option value="feedback">Feedback &amp; Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <span className={styles.submitText}>Send Message</span>
                    <svg
                      className={styles.submitIcon}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* ── Right Column: Info Cards ── */}
            <AnimatedSection direction="right" className={styles.infoColumn}>

              {/* Contact Info Card */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Contact Information</h3>
                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className={styles.infoText}>
                      <span className={styles.infoLabel}>Address</span>
                      <span className={styles.infoValue}>
                        No. 42, Spice Garden Road,<br />
                        Colombo 05, Sri Lanka
                      </span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className={styles.infoText}>
                      <span className={styles.infoLabel}>Phone</span>
                      <a href="tel:+94112345678" className={styles.infoValue}>
                        +94 11 234 5678
                      </a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className={styles.infoText}>
                      <span className={styles.infoLabel}>Email</span>
                      <a href="mailto:info@gammaluceylon.com" className={styles.infoValue}>
                        info@gammaluceylon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className={styles.hoursCard}>
                <h3 className={styles.infoCardTitle}>Office Hours</h3>
                <div className={styles.hoursList}>
                  <div className={styles.hoursRow}>
                    <span className={styles.hoursDay}>Monday – Friday</span>
                    <span className={styles.hoursTime}>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className={styles.hoursSeparator} />
                  <div className={styles.hoursRow}>
                    <span className={styles.hoursDay}>Saturday</span>
                    <span className={styles.hoursTime}>9:00 AM – 1:00 PM</span>
                  </div>
                  <div className={styles.hoursSeparator} />
                  <div className={styles.hoursRow}>
                    <span className={styles.hoursDay}>Sunday</span>
                    <span className={styles.hoursClosed}>Closed</span>
                  </div>
                </div>
              </div>

              {/* B2B Export Inquiry CTA Card */}
              <div className={styles.b2bCard}>
                <div className={styles.b2bGlow} />
                <div className={styles.b2bContent}>
                  <div className={styles.b2bBadge}>B2B Partnership</div>
                  <h3 className={styles.b2bTitle}>Export &amp; Wholesale Inquiries</h3>
                  <p className={styles.b2bDescription}>
                    Looking to bring authentic Ceylon spices to your market? Our export team 
                    is ready to discuss bulk orders, private labeling, and distribution partnerships.
                  </p>
                  <a href="mailto:exports@gammaluceylon.com" className={styles.b2bButton}>
                    <span>Contact Export Team</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
