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
              <span className="text-primary">
                Vibe
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

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Smart AI",
              desc: "Understands your exact vibe"
            },
            {
              title: "Lightning Fast",
              desc: "Playlists ready in seconds"
            },
            {
              title: "Any Mood",
              desc: "From study beats to party bangers"
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="card text-center p-6"
            >
              <h3 className="font-bold text-xl text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-black/70 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}