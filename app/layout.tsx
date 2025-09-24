import type { Metadata } from "next";
import { Bungee, Fredoka, Righteous, Bangers } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee"
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-fredoka"
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous"
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers"
});

export const metadata: Metadata = {
  title: "Rekodo AI - AI-Powered Playlist Generator",
  description: "Generate perfect playlists with AI-powered music recommendations",
  keywords: ["playlist", "AI", "music", "generator", "spotify", "recommendations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${bungee.variable} ${righteous.variable} ${bangers.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}