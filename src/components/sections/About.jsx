import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutContent } from '../../data/portfolio';
import styles from './About.module.css';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" className={`section ${styles.about}`} ref={ref}>
            <div className={styles.decorativeOrb} />
            <div className="container">
                {/* Header */}
                <motion.div
                    className={styles.aboutHeader}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Passionate developer crafting digital experiences
                    </p>
                </motion.div>

                <div className={styles.aboutContent}>
                    {/* Stats Grid */}
                    <motion.div
                        className={styles.statsGrid}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {aboutContent.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={styles.statCard}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        className={styles.aboutText}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {aboutContent.paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className={styles.aboutParagraph}
                                variants={itemVariants}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
