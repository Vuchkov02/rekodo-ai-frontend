export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  albumArt?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  prompt: string;
  tracks: Track[];
  totalDuration: number;
  createdAt: Date;
  gradient: string;
}