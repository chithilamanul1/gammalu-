import Image from "next/image";
import Link from "next/link";
import styles from "./SpiceCard.module.css";

interface SpiceCardProps {
  name: string;
  origin: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  slug?: string;
  delay?: number;
}

export default function SpiceCard({
  name,
  origin,
  description,
  imageSrc,
  imageAlt,
  slug,
}: SpiceCardProps) {
  const CardContent = (
    <>
      <div className={styles.imageWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.origin}>{origin}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.learnMore}>
          <span>Learn More</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className={styles.glowBorder} />
    </>
  );

  if (slug) {
    return (
      <Link href={slug} className={styles.card} id={`spice-card-${name.toLowerCase().replace(/\s+/g, '-')}`} style={{ display: 'block', textDecoration: 'none' }}>
        {CardContent}
      </Link>
    );
  }

  return (
    <div className={styles.card} id={`spice-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      {CardContent}
    </div>
  );
}
