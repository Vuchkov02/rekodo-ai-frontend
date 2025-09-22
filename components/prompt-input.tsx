"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

export function PromptInput({ onSubmit, isLoading = false }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt.trim());
    }
  };

  const suggestions = [
    { text: "Upbeat Workout" },
    { text: "Study Focus" },
    { text: "Chill Vibes" },
    { text: "Party Time" },
    { text: "Road Trip" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="card p-6 mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your perfect musical vibe..."
              className="w-full text-xl py-4 px-6 bg-transparent border-none outline-none font-accent placeholder:text-black/40"
              disabled={isLoading}
              aria-label="Playlist prompt input"
            />
          </div>

          <div className="text-right">
            <span className={`text-xs font-accent ${
              prompt.length > 100 ? 'text-primary' : 'text-black/40'
            }`}>
              {prompt.length}/150
            </span>
          </div>
        </form>
      </div>

      <div className="flex justify-center mb-6">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!prompt.trim() || isLoading}
          className="px-8 py-4 bg-secondary text-black border-3 border-black font-accent font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:bg-primary hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_black] shadow-[2px_2px_0_black]"
          style={{ borderRadius: "12px 0 12px 0" }}
          aria-label="Generate playlist"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="font-accent">Creating...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-accent">Generate</span>
            </div>
          )}
        </button>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <span className="text-sm font-bold text-black/60 self-center font-accent">
          Quick vibes:
        </span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.text}
            type="button"
            onClick={() => setPrompt(suggestion.text)}
            className="btn text-sm px-4 py-2 hover-lift-sm"
            disabled={isLoading}
          >
            <span className="font-accent">{suggestion.text}</span>
          </button>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-black/60 font-accent">
          Be as specific or creative as you want! Every detail helps create your perfect soundtrack
        </p>
      </div>
    </div>
  );
}