"use client";

import { Play, Clock, ChevronDown, Music2, Heart, Share2 } from "lucide-react";
import { Playlist } from "@/types/playlist";
import { useState } from "react";

interface PlaylistCardProps {
  playlist: Playlist;
}

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formatTotalDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} min`;
  };

  return (
    <div className="group relative">
      <div className="card relative bg-white">
        <div className="relative h-32 bg-primary overflow-hidden">

          <button
            className="absolute top-4 right-4 btn p-3"
            aria-label="Play playlist"
          >
            <Play className="h-4 w-4 fill-current" />
          </button>

          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`btn p-2 text-xs ${
                isLiked ? "bg-primary text-white" : "bg-secondary text-black"
              }`}
            >
              <Heart className={`h-3 w-3 ${isLiked ? "fill-current" : ""}`} />
            </button>

            <button className="btn p-2 text-xs">
              <Share2 className="h-3 w-3" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
            <h3 className="text-white font-bold text-lg mb-1">{playlist.name}</h3>
            <p className="text-white/80 text-xs line-clamp-1">{playlist.description}</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4 text-black/60">
              <span className="flex items-center gap-1">
                <Music2 className="h-3 w-3" />
                {playlist.tracks.length} tracks
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatTotalDuration(playlist.totalDuration)}
              </span>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn px-3 py-1 text-xs flex items-center gap-1"
            >
              {isExpanded ? "Less" : "More"}
              <div
                style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <ChevronDown className="h-3 w-3" />
              </div>
            </button>
          </div>

          {isExpanded && (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {playlist.tracks.slice(0, 8).map((track, index) => (
                <div
                  key={track.id}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:drop-shadow-[1px_1px_0_black] transition-all duration-200"
                >
                  <span className="text-xs text-black/40 w-6 text-center font-mono">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black truncate">
                      {track.title}
                    </p>
                    <p className="text-xs text-black/60 truncate">
                      {track.artist}
                    </p>
                  </div>
                  <span className="text-xs text-black/40 font-mono">
                    {formatDuration(track.duration)}
                  </span>
                </div>
              ))}

              {playlist.tracks.length > 8 && (
                <p className="text-xs text-black/40 text-center py-2">
                  +{playlist.tracks.length - 8} more tracks...
                </p>
              )}
            </div>
          )}

          {!isExpanded && (
            <div className="space-y-1">
              {playlist.tracks.slice(0, 3).map((track, index) => (
                <div
                  key={track.id}
                  className="flex items-center gap-2 text-xs text-black/60"
                >
                  <span className="w-4 text-center font-mono">{index + 1}</span>
                  <span className="truncate flex-1">{track.title}</span>
                  <span className="text-black/40">by {track.artist}</span>
                </div>
              ))}
              {playlist.tracks.length > 3 && (
                <p className="text-xs text-black/40 text-center">
                  +{playlist.tracks.length - 3} more...
                </p>
              )}
            </div>
          )}
        </div>

        <div className="absolute -top-2 -left-2">
          <div className="btn text-xs bg-secondary text-black">
            Fresh!
          </div>
        </div>
      </div>
    </div>
  );
}