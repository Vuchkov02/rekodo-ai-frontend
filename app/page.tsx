"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-background-secondary text-black flex items-center justify-center font-bold text-xl panel">
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

          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
