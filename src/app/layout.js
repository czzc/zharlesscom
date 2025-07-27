import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { FontProvider } from '../contexts/FontContext';
import { ibmPlexSans, spaceGrotesk } from '../styles/fonts';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  metadataBase: new URL('https://zharless.com'),
  title: "Zac Harless - Full-Stack Developer",
  description: "The personal website of Zac Harless, a full-stack developer who lives somewhere between clean design and chaotic late-night debugging sessions.",
  keywords: "full-stack developer, web developer, React, JavaScript, Node.js, API development",
  author: "Zac Harless",
  robots: "index, follow",
  openGraph: {
    title: "Zac Harless - Full-Stack Developer",
    description: "The personal website of Zac Harless, a full-stack developer who lives somewhere between clean design and chaotic late-night debugging sessions.",
    url: "https://zharless.com",
    siteName: "Zac Harless",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zac Harless - Full-Stack Developer social card"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zac Harless - Full-Stack Developer",
    description: "The personal website of Zac Harless, a full-stack developer who lives somewhere between clean design and chaotic late-night debugging sessions.",
    images: ["/og-image.jpg"]
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <ErrorBoundary>
          <FontProvider>
            {children}
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          </FontProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
