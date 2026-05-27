'use client';

import { FormEvent } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './contact.module.css';

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const formattedCompany = company ? `\n*Company:* ${company}` : '';
    const subjectLabel = {
      general: 'General Inquiry',
      wholesale: 'Wholesale & Distribution',
      export: 'Export & B2B Partnership',
      product: 'Product Information',
      feedback: 'Feedback & Suggestions',
      other: 'Other'
    }[subject] || subject;

    const text = `*New Gammalu Ceylon Foods Inquiry*
*Name:* ${name}
*Email:* ${email}${formattedCompany}
*Subject:* ${subjectLabel}

*Message:*
${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/94750512759?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
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
                    <span className={styles.submitText}>Send via WhatsApp</span>
                    <svg
                      className={styles.submitIcon}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.796-4.385 9.799-9.789.002-2.617-1.012-5.078-2.857-6.927C16.32 1.994 13.864 1.01 11.245 1.01 5.845 1.01 1.455 5.4 1.451 10.8c-.001 1.517.409 2.998 1.187 4.303l-1.055 3.855 3.957-1.037c1.3.708 2.658 1.085 4.307 1.086zm10.74-7.25c-.29-.144-1.71-.844-1.975-.94-.266-.096-.46-.144-.652.144-.19.288-.74.94-.906 1.133-.167.19-.334.215-.623.072-.29-.145-1.223-.45-2.33-1.44-.86-.767-1.443-1.716-1.61-2.005-.168-.29-.018-.445.127-.588.13-.13.29-.337.435-.506.145-.169.193-.289.29-.482.096-.193.048-.362-.024-.506-.072-.144-.652-1.573-.893-2.152-.236-.57-.478-.49-.652-.5l-.556-.01c-.19 0-.5.072-.76.362-.262.29-1 .977-1 2.387 0 1.41 1.026 2.774 1.17 2.968.145.19 2.02 3.084 4.895 4.325.684.295 1.218.472 1.635.604.688.22 1.314.19 1.81.116.55-.082 1.71-.698 1.95-1.37.24-.674.24-1.253.17-1.372-.07-.12-.26-.192-.55-.337z"/>
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
                        Pahalagama Road,<br />
                        Weweldeniya, Sri Lanka
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
                      <a href="tel:+94750512759" className={styles.infoValue}>
                        +94 75 051 2759
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
                      <a href="mailto:info@gammalu.lk" className={styles.infoValue}>
                        info@gammalu.lk
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
