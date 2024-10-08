import './styles/globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: '%s | Riley Hoffman - Web Developer',
    default: 'Riley Hoffman - Web Developer',
  },
  description: 'I\'m a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.',
  metadataBase: new URL('https://rileyhoffman.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/thumbnail.jpg',
    title: {
      template: '%s | Riley Hoffman - Web Developer',
      default: 'Riley Hoffman - Web Developer',
    },
    url: 'https://rileyhoffman.com/'
  },
}

const DynamicImports = dynamic(() => import('./components/DynamicImports'));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <a href="#content" id="content" className="sr-only z-30 button focus:not-sr-only focus:p-4 focus:left-4 focus:absolute">Start of main content</a>
          {children}
        </main>
        <DynamicImports />
        <Footer />
      </body>
    </html>
  );
}
