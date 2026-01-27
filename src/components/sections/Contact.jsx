import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { emailjsConfig } from '../../config/emailjs';
import styles from './Contact.module.css';

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        // Clear status when user starts typing
        if (status.type) setStatus({ type: null, message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        // Check if EmailJS is configured
        if (emailjsConfig.serviceId === 'YOUR_SERVICE_ID' ||
            emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' ||
            emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
            // Fallback: Open mailto link if EmailJS not configured
            const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            window.location.href = mailtoLink;
            setIsSubmitting(false);
            setStatus({
                type: 'info',
                message: 'Opening your email client... (EmailJS not configured yet)'
            });
            return;
        }

        try {
            await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: personalInfo.email,
                },
                emailjsConfig.publicKey
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactItems = [
        { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    ];

    const socialLinks = [
        { icon: Github, href: personalInfo.github, label: 'GitHub' },
        { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
    ].filter(link => link.href && link.href !== '#');

    return (
        <section id="contact" className={`section ${styles.contact}`} ref={ref}>
            <div className={styles.decorativeOrb} />
            <div className="container">
                {/* Header */}
                <motion.div
                    className={styles.contactHeader}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Let's discuss your next project
                    </p>
                </motion.div>

                <div className={styles.contactContent}>
                    {/* Contact Info */}
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div>
                            <h3 className={styles.contactInfoTitle}>Let's create something amazing together</h3>
                            <p className={styles.contactInfoSubtitle}>
                                I'm always open to new opportunities and interesting projects.
                                Feel free to reach out if you'd like to collaborate or just say hello!
                            </p>
                        </div>

                        <div className={styles.contactItems}>
                            {contactItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className={styles.contactItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className={styles.contactItemIcon}>
                                        <item.icon size={22} />
                                    </div>
                                    <div className={styles.contactItemContent}>
                                        <h4>{item.label}</h4>
                                        {item.href ? (
                                            <a href={item.href}>{item.value}</a>
                                        ) : (
                                            <p>{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className={styles.socialLinks}>
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <link.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        className={styles.contactForm}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {/* Status Message */}
                        {status.type && (
                            <motion.div
                                className={`${styles.statusMessage} ${styles[status.type]}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {status.type === 'success' && <CheckCircle size={18} />}
                                {status.type === 'error' && <AlertCircle size={18} />}
                                {status.type === 'info' && <Mail size={18} />}
                                <span>{status.message}</span>
                            </motion.div>
                        )}

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.formInput}
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.formInput}
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className={styles.formInput}
                                placeholder="Project inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.formTextarea}
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className={styles.submitButton}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader size={18} className={styles.spinner} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
