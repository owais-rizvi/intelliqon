import Link from 'next/link';
import styles from './MainBanner.module.css';

export default function MainBanner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Empowering Growth through <span className={styles.highlight}>Expert Consulting</span>
          </h1>
          <p className={styles.subtitle}>
            Unlock your potential with tailored Artificial Intelligence, Machine Learning, and automation strategies to drive your business forward.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/services" className={styles.primaryButton}>
              Explore Solutions
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}