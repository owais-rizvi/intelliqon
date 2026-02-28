import Link from 'next/link';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail({ service }) {
  return (
    <div className={styles.servicePage}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.subtitle}>{service.heading}</p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.description}>{service.content}</p>
          </div>

          <div className={styles.featuresGrid}>
            {service.features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.name}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}