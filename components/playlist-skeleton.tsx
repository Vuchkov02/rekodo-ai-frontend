"use client";

export function PlaylistSkeleton() {
  return (
    <div className="group relative">
      <div className="card relative bg-white animate-pulse">
        {/* Header skeleton */}
        <div className="relative h-32 bg-primary/30 overflow-hidden">
          {/* Skeleton buttons */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/50" />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-6 h-6 bg-white/50" />
            <div className="w-6 h-6 bg-white/50" />
          </div>

          {/* Title skeleton */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
            <div className="h-5 bg-white/50 mb-2 w-3/4" />
            <div className="h-3 bg-white/40 w-1/2" />
          </div>
        </div>

        {/* Content skeleton */}
        <div className="p-4 space-y-4">
          {/* Stats skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-3 w-16 bg-black/20" />
              <div className="h-3 w-12 bg-black/20" />
            </div>
            <div className="h-6 w-16 bg-secondary/50" />
          </div>

          {/* Track list skeleton */}
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2"
              >
                <div className="h-3 w-4 bg-black/20" />
                <div className="flex-1 space-y-1">
                  <div className="h-3 w-3/4 bg-black/20" />
                  <div className="h-2 w-1/2 bg-black/15" />
                </div>
                <div className="h-2 w-8 bg-black/15" />
              </div>
            ))}
          </div>
        </div>

        {/* Label skeleton */}
        <div className="absolute -top-2 -left-2">
          <div className="w-16 h-8 bg-secondary/50" />
        </div>

        {/* Loading text */}
        <div className="absolute bottom-2 left-2">
          <div className="text-black/30 text-sm font-bold">
            Creating...
          </div>
        </div>
      </div>
    </div>
  );
}