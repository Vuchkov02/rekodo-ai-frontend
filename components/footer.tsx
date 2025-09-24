"use client";

export function Footer() {
  return (
    <footer className="w-full bg-background-dark border-t border-divider mt-auto">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/80 text-sm">
            © 2024 Rekodo AI
          </p>
          <p className="text-white/80 text-sm">
            AI-Powered Playlist Generator
          </p>
        </div>
      </div>
    </footer>
  );
}