"use client";

import { Music } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background-dark border-b-3 border-border"
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-4">
          <div className="panel bg-background-card p-3">
            <Music className="h-6 w-6 text-black" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">
              Rekodo AI
            </h1>
            <span className="text-xs text-white/80 font-accent">
              AI Playlist Generator
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-sm font-bold text-white hover:text-[#febe10] transition-all duration-300 hover:scale-110 hover:rotate-2"
            >
              How it Works
            </a>
          </div>

          <ThemeToggle />
        </nav>
      </div>

      <div
        className="absolute bottom-0 left-0 h-1 transition-all duration-300"
        style={{width: `${scrollProgress}%`, backgroundColor: '#febe10'}}
      />
    </header>
  );
}