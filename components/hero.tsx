"use client";

import { PromptInput } from "./prompt-input";

interface HeroProps {
  onGeneratePlaylist: (prompt: string) => void;
  isGenerating: boolean;
}

export function Hero({ onGeneratePlaylist, isGenerating }: HeroProps) {
  return (
    <section className="relative py-16 sm:py-24">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-black mb-2">
                Turn Your
              </span>
              <span
                className="text-7xl sm:text-8xl lg:text-9xl block my-4 relative"
                style={{
                  fontFamily: 'var(--font-bangers)',
                  color: '#febe10',
                  letterSpacing: '0.08em',
                  display: 'inline-block',
                  animation: 'vibe-wave 2.5s ease-in-out infinite',
                  transformOrigin: 'center'
                }}
              >
                VIBE
              </span>
              <span className="block text-black mt-2">
                Into Music!
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto font-accent">
              Describe your mood, activity, or music preference and get the perfect AI-curated playlist in seconds
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { number: "10M+", label: "Songs" },
                { number: "500K+", label: "Playlists" },
                { number: "99%", label: "Vibe Match" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="panel text-center min-w-[120px]"
                >
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-black/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <PromptInput onSubmit={onGeneratePlaylist} isLoading={isGenerating} />
        </div>
      </div>
    </section>
  );
}