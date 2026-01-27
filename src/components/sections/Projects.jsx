import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className={`section ${styles.projects}`} ref={ref}>
            <div className={styles.decorativeOrb} />
            <div className="container">
                {/* Header */}
                <motion.div
                    className={styles.projectsHeader}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Showcasing my best work and creative solutions
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className={styles.projectsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            className={styles.projectCard}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Project Image */}
                            <div className={styles.projectImage}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className={styles.projectImagePlaceholder}>
                                        <Folder size={64} />
                                    </div>
                                )}
                                <div className={styles.projectImageOverlay} />
                                <div className={styles.projectImageLinks}>
                                    {project.liveUrl && project.liveUrl !== '#' && (
                                        project.isInternal ? (
                                            <Link
                                                to={project.liveUrl}
                                                className={styles.projectImageLink}
                                            >
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </Link>
                                        ) : (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.projectImageLink}
                                            >
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </a>
                                        )
                                    )}
                                    {project.githubUrl && project.githubUrl !== '#' && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectImageLink}
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className={styles.projectContent}>
                                <div className={styles.projectTitleRow}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    {project.status === 'development' && (
                                        <span className={styles.statusBadge}>🚧 In Development</span>
                                    )}
                                </div>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTech}>
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
