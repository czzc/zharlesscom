import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zac Harless - Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zac Harless - Full-Stack Developer",
    description: "The personal website of Zac Harless, a full-stack developer who lives somewhere between clean design and chaotic late-night debugging sessions.",
    images: ["/logo.png"]
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
