import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Intelliqon. All rights reserved.</p>
        <p className={styles.contactInfo}>
          support@intelliqon.com | +91-91670-88519
        </p>
      </div>
    </footer>
  );
}