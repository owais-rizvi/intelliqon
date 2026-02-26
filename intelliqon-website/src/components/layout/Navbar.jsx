import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Intelliqon
          </Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/services" className={styles.link}>Services</Link></li>
          <li><Link href="/philosophy" className={styles.link}>Our Philosophy</Link></li>
          {/* The Required Products Tab */}
          <li><Link href="/products" className={styles.highlightLink}>Products</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}