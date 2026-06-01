# Hillary Chukwuma Prince — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwind-css)
![AWS](https://img.shields.io/badge/AWS-S3_+_CloudFront-FF9900?style=for-the-badge&logo=amazon-aws)

Personal portfolio for Hillary Chukwuma Prince — Backend Engineer based in Port Harcourt, Nigeria.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, static export) |
| UI | React 18 |
| Styling | Tailwind CSS v3 with custom design tokens |
| Fonts | Syne · Inter · Space Mono via `next/font/google` |
| Animations | CSS keyframes + Intersection Observer (`useReveal`) |
| Contact form | Formspree |
| Deployment | AWS S3 + CloudFront + ACM (HTTPS) |

## Features

- Scroll-reveal fade-up animations on every section
- Infinite skills marquee ticker
- Sticky nav that turns solid on scroll with mobile hamburger menu
- Dark "night" sections alternating with light canvas sections
- Full SEO: Open Graph, Twitter Cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`

## Project Structure

```
my-portfolio-profile-/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind base + reveal animation + ticker keyframes
│   │   ├── layout.jsx           # Root layout — next/font, Metadata API, JSON-LD
│   │   ├── page.jsx             # Home page — composes all sections
│   │   ├── sitemap.js           # Dynamic /sitemap.xml
│   │   └── robots.js            # Dynamic /robots.txt
│   ├── components/
│   │   ├── Nav.jsx              # Fixed navbar with mobile hamburger
│   │   ├── Hero.jsx             # Hero with photo, headline, stat cards
│   │   ├── About.jsx            # Bio + contact links
│   │   ├── Ticker.jsx           # Infinite scrolling skills marquee
│   │   ├── Projects.jsx         # Featured projects + "also built" list
│   │   ├── Infrastructure.jsx   # AWS architecture walkthrough
│   │   ├── Contact.jsx          # Formspree contact form + direct links
│   │   └── Footer.jsx           # Footer
│   └── hooks/
│       └── useReveal.js         # Intersection Observer scroll-reveal hook
├── public/
│   ├── hillary.jpg              # Profile photo
│   └── favicon.svg              # SVG favicon
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/Hillary3000-web/my-portfolio-profile-.git
cd my-portfolio-profile-

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root:

```env
# Set this to your real domain once Route 53 is wired up
# Used by metadata, sitemap.xml, and robots.txt
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment (AWS)

The site is deployed as a static build to AWS:

```
Browser → CloudFront (CDN + HTTPS via ACM) → S3 Bucket (static files)
```

```bash
# Build static output
npm run build

# Sync to S3 (replace with your bucket name)
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

Custom domain via Route 53 is the planned next step.

## Contact

- **Email**: princehillary813@gmail.com
- **LinkedIn**: [chukwuma-hillary](https://linkedin.com/in/chukwuma-hillary-318b09337)
- **GitHub**: [Hillary3000-web](https://github.com/Hillary3000-web)
- **Location**: Port Harcourt, Nigeria

---

Built by Hillary Chukwuma Prince
