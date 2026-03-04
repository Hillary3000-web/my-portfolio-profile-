import { Bebas_Neue, DM_Serif_Display, Inconsolata } from 'next/font/google';
import CustomCursor from './components/CustomCursor';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['300', '400', '600'],
});

export const metadata = {
  title: 'Hillary Chukwuma Prince — Backend-Focused Full Stack Developer',
  description:
    'Full Stack Developer (Backend-focused) based in Port Harcourt, Nigeria. Building scalable APIs, AI-integrated systems, and clean React frontends.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSerif.variable} ${inconsolata.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
