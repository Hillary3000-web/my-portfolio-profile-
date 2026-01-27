import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Terminal } from 'lucide-react';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

const categoryIcons = {
    'Frontend': Code,
    'Backend & Tools': Terminal,
    'Backend': Database,
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="skills" className={`section ${styles.skills}`} ref={ref}>
            <div className={styles.decorativeOrb} />
            <div className="container">
                {/* Header */}
                <motion.div
                    className={styles.skillsHeader}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Tools and technologies I work with
                    </p>
                </motion.div>

                {/* Skills Container */}
                <div className={styles.skillsContainer}>
                    {skills.map((category, categoryIndex) => {
                        const IconComponent = categoryIcons[category.category] || Code;

                        return (
                            <motion.div
                                key={category.category}
                                className={styles.skillCategory}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                            >
                                <h3 className={styles.categoryTitle}>
                                    <span className={styles.categoryIcon}>
                                        <IconComponent size={20} />
                                    </span>
                                    {category.category}
                                </h3>

                                <motion.div
                                    className={styles.skillsGrid}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    {category.items.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className={styles.skillItem}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className={styles.skillIcon}>
                                                <Code size={24} />
                                            </div>
                                            <h4 className={styles.skillName}>{skill.name}</h4>
                                            <div className={styles.skillLevel}>
                                                <div className={styles.skillBar}>
                                                    <motion.div
                                                        className={styles.skillProgress}
                                                        initial={{ width: 0 }}
                                                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                    />
                                                </div>
                                                <span className={styles.skillPercent}>{skill.level}%</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
