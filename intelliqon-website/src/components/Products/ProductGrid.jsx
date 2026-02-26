'use client';

import { useState } from 'react';
import styles from './ProductGrid.module.css';
import AuthModal from './AuthModal';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unlockedProduct, setUnlockedProduct] = useState(null);

  // All solutions listed together side-by-side as requested
  const products = [
    { id: 'financial', title: 'Financial Automation', icon: '🏦' },
    { id: 'police', title: 'Police', icon: '🚓' },
    { id: 'ai-ml', title: 'AI & Machine Learning', icon: '🧠' },
    { id: 'business', title: 'Business Analysis', icon: '📈' },
    { id: 'chatbot', title: 'Chatbot Development', icon: '💬' },
    { id: 'cyber', title: 'Cybersecurity', icon: '🛡️' },
    { id: 'data', title: 'Data Analytics', icon: '📊' },
    { id: 'rpa', title: 'Robotic Process Automation', icon: '🤖' },
    { id: 'other', title: 'Other Solutions', icon: '⚙️' },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAuthSuccess = (product) => {
    setIsModalOpen(false);
    setUnlockedProduct(product);
  };

  // --- THE UNLOCKED VIEW ---
  if (unlockedProduct) {
    return (
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <button 
            className={styles.backButton}
            onClick={() => setUnlockedProduct(null)}
          >
            &larr; Back to Products
          </button>
          
          <div className={styles.unlockedContent}>
            <div className={styles.unlockedHeader}>
              <span className={styles.largeIcon}>{unlockedProduct.icon}</span>
              <h1 className={styles.unlockedTitle}>{unlockedProduct.title} Dashboard</h1>
            </div>
            <div className={styles.secureBadge}>
              🔒 Secure Session Active
            </div>
            <p className={styles.mockDataText}>
              Authentication successful. This is where the highly detailed, proprietary specifications for <strong>{unlockedProduct.title}</strong> will be displayed once the backend API is connected.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // --- THE MAIN GRID VIEW ---
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Protected Solutions</h1>
          <p className={styles.subtitle}>Select a product below. Secure authentication (MFA & CAPTCHA) is required to view detailed specifications.</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className={styles.card}
              onClick={() => handleProductClick(product)}
            >
              <div className={styles.icon}>{product.icon}</div>
              <h2 className={styles.cardTitle}>{product.title}</h2>
              <p className={styles.actionText}>Click to authenticate &rarr;</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <AuthModal 
          product={selectedProduct} 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={handleAuthSuccess} 
        />
      )}
    </section>
  );
}