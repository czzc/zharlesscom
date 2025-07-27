import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});