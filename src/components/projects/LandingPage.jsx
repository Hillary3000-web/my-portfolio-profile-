import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, ArrowRight, Sparkles, Zap, Shield,
    Globe, Rocket, Code, Play, Users, Star, Award
} from 'lucide-react';
import styles from './LandingPage.module.css';

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built with modern technologies for optimal performance and blazing fast load times."
    },
    {
        icon: Shield,
        title: "Secure by Design",
        description: "Enterprise-grade security with end-to-end encryption and data protection."
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Deploy anywhere in the world with our edge-optimized infrastructure."
    },
    {
        icon: Code,
        title: "Developer First",
        description: "Beautiful APIs and comprehensive documentation for seamless integration."
    },
    {
        icon: Sparkles,
        title: "Modern UI/UX",
        description: "Stunning interfaces crafted with attention to detail and user experience."
    },
    {
        icon: Rocket,
        title: "Ship Faster",
        description: "Accelerate your development cycle with our powerful tooling and features."
    }
];

const stats = [
    { number: "10K+", label: "Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "Countries" },
    { number: "24/7", label: "Support" }
];

export default function LandingPage() {
    return (
        <div className={styles.landingPage}>
            {/* Back Button */}
            <Link to="/" className={styles.backButton}>
                <ArrowLeft size={18} />
                Back to Portfolio
            </Link>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <motion.div
                        className={`${styles.heroOrb} ${styles.heroOrb1}`}
                        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className={`${styles.heroOrb} ${styles.heroOrb2}`}
                        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className={styles.heroContent}>
                    <motion.span
                        className={styles.heroTag}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        ✨ Introducing TechFlow 2.0
                    </motion.span>

                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Build the <span className={styles.heroHighlight}>Future</span> of Web Applications
                    </motion.h1>

                    <motion.p
                        className={styles.heroDescription}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The modern platform for developers to build, deploy, and scale
                        applications with unprecedented speed and reliability.
                    </motion.p>

                    <motion.div
                        className={styles.heroCta}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.button
                            className={styles.btnPrimary}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started Free
                            <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            className={styles.btnSecondary}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Play size={18} />
                            Watch Demo
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.sectionTag}>Features</span>
                    <h2 className={styles.sectionTitle}>Everything you need to succeed</h2>
                    <p className={styles.sectionSubtitle}>
                        Powerful features designed to help you build better products faster.
                    </p>
                </motion.div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={styles.featureIcon}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className={styles.statItem}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.ctaTitle}>Ready to get started?</h2>
                    <p className={styles.ctaDescription}>
                        Join thousands of developers building the next generation of web applications.
                    </p>
                    <motion.button
                        className={styles.btnPrimary}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Building Today
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p className={styles.footerText}>
                    Demo project by{' '}
                    <Link to="/" className={styles.footerLink}>
                        Hillary Chukwuma Prince
                    </Link>
                </p>
            </footer>
        </div>
    );
}
