"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PlaylistCard } from "@/components/playlist-card";
import { PlaylistSkeleton } from "@/components/playlist-skeleton";
import { Playlist } from "@/types/playlist";
import { simulatePlaylistGeneration } from "@/lib/mock-data";

export default function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePlaylist = async (prompt: string) => {
    setIsGenerating(true);
    try {
      const newPlaylist = await simulatePlaylistGeneration(prompt);
      setPlaylists([newPlaylist, ...playlists]);
    } catch (error) {
      console.error("Failed to generate playlist:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero
          onGeneratePlaylist={handleGeneratePlaylist}
          isGenerating={isGenerating}
        />

        {(playlists.length > 0 || isGenerating) && (
          <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="text-black">Your Fresh</span>{" "}
                  <span className="text-primary">Playlists</span>
                </h2>
                <p className="text-black/60">
                  Made with AI magic, crafted with love
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isGenerating && <PlaylistSkeleton />}
                {playlists.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </div>
          </section>
        )}

        {playlists.length === 0 && !isGenerating && (
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary panel mb-6">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to discover your new favorite songs?
                </h3>
                <p className="text-black/60 max-w-md mx-auto">
                  Tell me about your mood, activity, or favorite genre and I'll
                  create the perfect soundtrack
                </p>
              </div>
            </div>
          </section>
        )}

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-black">How It</span>{" "}
                <span className="text-primary">Works</span>
              </h2>
              <p className="text-black/60 text-lg font-accent">
                Creating your perfect playlist in 3 easy steps!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Tell Me Your Vibe",
                  description:
                    "Describe your mood, activity, or music preference",
                },
                {
                  step: "2",
                  title: "AI Magic Happens",
                  description:
                    "I analyze millions of songs to find your perfect matches",
                },
                {
                  step: "3",
                  title: "Enjoy Your Playlist",
                  description:
                    "Get a personalized playlist ready to play instantly",
                },
              ].map((panel) => (
                <div key={panel.step} className="panel relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white flex items-center justify-center font-bold text-xl panel">
                    {panel.step}
                  </div>

                  <div className="text-center pt-4">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {panel.title}
                    </h3>

                    <p className="text-black/70 text-sm leading-relaxed font-accent">
                      {panel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-black mb-6">
                Try these example prompts:
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Chill vibes for a rainy Sunday",
                  "Epic workout energy",
                  "Study focus beats",
                  "Road trip sing-alongs",
                  "Dancing in my room",
                ].map((example) => (
                  <div
                    key={example}
                    className="btn px-4 py-2 text-sm cursor-pointer"
                  >
                    "{example}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer
          className="relative py-8 border-t-3 border-black bg-white"
          style={{ borderRadius: "16px 0 0 0" }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <p className="text-black/60 font-medium font-accent">
                © 2024 Rekodo AI • Made with love and code
              </p>
              <p className="text-black/40 text-sm mt-2 font-accent">
                Powered by AI magic
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
