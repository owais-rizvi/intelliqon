import React from 'react'
import styles from './services.module.css'

const ServicesPage = () => {
      const products = [
    { id: 'ai-ml', title: 'AI & Machine Learning', icon: '🧠' },
    { id: 'business', title: 'Business Analysis', icon: '📈' },
    { id: 'chatbot', title: 'Chatbot Development', icon: '💬' },
    { id: 'cyber', title: 'Cybersecurity', icon: '🛡️' },
    { id: 'data', title: 'Data Analytics', icon: '📊' },
    { id: 'rpa', title: 'Robotic Process Automation', icon: '🤖' },
    { id: 'other', title: 'Other Solutions', icon: '⚙️' },
  ];
      return (
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>Our Protected Services</h1>
              <p className={styles.subtitle}>Select a service below.</p>
            </div>
    
            <div className={styles.grid}>
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={styles.card}
                >
                  <div className={styles.icon}>{product.icon}</div>
                  <h2 className={styles.cardTitle}>{product.title}</h2>
                  <p className={styles.actionText}>Click to authenticate &rarr;</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default ServicesPage