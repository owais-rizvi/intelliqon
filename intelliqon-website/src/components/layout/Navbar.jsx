'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoBold}>intelli</span>qon
          </Link>

          <div className={styles.navLinks}>
            <Link href="/" className={pathname === '/' ? styles.active : styles.link}>Home</Link>
            <Link href="/services" className={pathname.startsWith('/services') ? styles.active : styles.link}>Services</Link>
            <Link href="/philosophy" className={pathname === '/philosophy' ? styles.active : styles.link}>Our Philosophy</Link>
            <Link href="/products" className={styles.productButton}>Products</Link>
            <Link href="/contact" className={pathname === '/contact' ? styles.active : styles.link}>Contact</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}