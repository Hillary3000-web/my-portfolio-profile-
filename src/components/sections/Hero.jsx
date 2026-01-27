import { motion } from 'framer-motion';
import { ArrowDown, Code, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
    const handleScrollTo = (href) => {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            {/* Background Orbs */}
            <div className={styles.heroBackground}>
                <motion.div
                    className={`${styles.heroOrb} ${styles.heroOrb1}`}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className={`${styles.heroOrb} ${styles.heroOrb2}`}
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className={`${styles.heroOrb} ${styles.heroOrb3}`}
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className={styles.heroContent}>
                {/* Profile Image */}
                <motion.div
                    className={styles.profileImageWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.profileImage}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/profile.jpg"
                            alt={personalInfo.name}
                            className={styles.profileImg}
                        />
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {personalInfo.role} & {personalInfo.tagline}
                </motion.p>

                {/* Description */}
                <motion.p
                    className={styles.heroDescription}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {personalInfo.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className={styles.heroCta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <motion.button
                        className={styles.btnPrimary}
                        onClick={() => handleScrollTo('#projects')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Code size={20} />
                        View My Work
                    </motion.button>
                    <motion.button
                        className={styles.btnSecondary}
                        onClick={() => handleScrollTo('#contact')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Mail size={20} />
                        Get In Touch
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <div className={styles.scrollMouse}>
                    <motion.div
                        className={styles.scrollWheel}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
                <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Scroll to explore
                </motion.span>
            </motion.div>
        </section>
    );
}
