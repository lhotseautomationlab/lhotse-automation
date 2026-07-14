import '@/styles/globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/ui/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plus = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-heading' });

export const metadata = {
  title: 'Lhotse — Automation Lab',
  description: 'Lhotse Automation Lab — services and cost calculator'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plus.variable}`}>
      <body>
        <a href="#hero" className="skip-to-content">Skip to content</a>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
