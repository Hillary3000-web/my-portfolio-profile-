import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
    const socialLinks = [
        { icon: Github, href: personalInfo.github, label: 'GitHub' },
        { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className={styles.footerLogo}
                        onClick={(e) => handleNavClick(e, '#home')}
                        whileHover={{ scale: 1.02 }}
                    >
                        Hillary<span className={styles.footerLogoAccent}>.</span>
                    </motion.a>

                    {/* Navigation */}
                    <nav className={styles.footerNav}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={styles.footerNavLink}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className={styles.footerDivider} />

                    {/* Social Links */}
                    <div className={styles.footerSocial}>
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerSocialLink}
                                aria-label={link.label}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <link.icon size={18} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className={styles.footerCopyright}>
                        © {currentYear} Hillary Chukwuma Prince. Built with{' '}
                        <Heart size={14} className={styles.footerHeart} style={{ display: 'inline' }} />{' '}
                        using React.
                    </p>
                </div>
            </div>
        </footer>
    );
}
