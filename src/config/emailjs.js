// EmailJS Configuration
// ======================
// 
// To make the contact form work, you need to:
//
// 1. Create a FREE account at https://www.emailjs.com/
//
// 2. Add an Email Service:
//    - Go to "Email Services" → "Add New Service"
//    - Choose your email provider (Gmail, Outlook, etc.)
//    - Follow the connection steps
//    - Copy your SERVICE_ID
//
// 3. Create an Email Template:
//    - Go to "Email Templates" → "Create New Template"
//    - Use these template variables in your template:
//      {{from_name}} - Sender's name
//      {{from_email}} - Sender's email
//      {{subject}} - Email subject
//      {{message}} - The message content
//    - Copy your TEMPLATE_ID
//
// 4. Get your Public Key:
//    - Go to "Account" → "General"
//    - Copy your "Public Key"
//
// 5. Replace the values below with your actual IDs:

export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY',      // Replace with your EmailJS public key
};

// Example email template content (paste this in EmailJS template editor):
// 
// Subject: New Portfolio Contact: {{subject}}
//
// Body:
// You have received a new message from your portfolio website!
//
// From: {{from_name}}
// Email: {{from_email}}
// Subject: {{subject}}
//
// Message:
// {{message}}
//
// ---
// Sent from your portfolio contact form
