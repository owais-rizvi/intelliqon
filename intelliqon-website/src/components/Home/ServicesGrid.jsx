import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
  const services = [
    { title: "AI & ML Services", desc: "Transform data into actionable insights and drive innovation with tailored predictive models." },
    { title: "Robotic Process Automation", desc: "Increase efficiency and streamline complex operational workflows securely." },
    { title: "Cybersecurity Solutions", desc: "Protect your critical assets with robust security measures against evolving threats." },
    { title: "Data Analytics", desc: "Unlock the power of your database architecture to enhance performance." },
    { title: "Chatbot Development", desc: "Elevate customer engagement with intelligent, natural language processing bots." },
    { title: "Business Consulting", desc: "Tailored strategies to optimize your overall operational efficiency." }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Innovative Business Solutions</h2>
          <p className={styles.sectionSubtitle}>End-to-end technology services tailored to your unique needs.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <span className={styles.learnMore}>See more &rarr;</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}