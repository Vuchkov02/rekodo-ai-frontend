import { Playlist, Track } from "@/types/playlist";

const artists = [
  "The Weeknd", "Dua Lipa", "Taylor Swift", "Drake", "Ariana Grande",
  "Ed Sheeran", "Billie Eilish", "Post Malone", "Harry Styles", "Olivia Rodrigo",
  "Bruno Mars", "Doja Cat", "Justin Bieber", "Khalid", "SZA",
  "Travis Scott", "Lana Del Rey", "Mac Miller", "Frank Ocean", "Tyler, The Creator",
  "Glass Animals", "Arctic Monkeys", "Tame Impala", "The 1975", "ODESZA",
  "Flume", "RÜFÜS DU SOL", "Disclosure", "Calvin Harris", "Swedish House Mafia"
];

const songTitles = [
  "Midnight Dreams", "Golden Hour", "Lost in Paradise", "Electric Feel", "Summer Nights",
  "Crystal Clear", "Neon Lights", "Ocean Drive", "Starlight", "Wildfire",
  "Echoes", "Gravity", "Infinite", "Horizon", "Ethereal",
  "Velvet", "Aurora", "Mirage", "Prism", "Cascade",
  "Reverie", "Luminous", "Serenity", "Phoenix", "Nebula",
  "Odyssey", "Zenith", "Eclipse", "Radiance", "Euphoria"
];

const albums = [
  "After Hours", "Future Nostalgia", "Folklore", "Certified Lover Boy", "Positions",
  "Divide", "Happier Than Ever", "Hollywood's Bleeding", "Fine Line", "SOUR",
  "24K Magic", "Planet Her", "Justice", "Free Spirit", "Ctrl",
  "Astroworld", "Norman Fucking Rockwell", "Swimming", "Blonde", "IGOR",
  "Dreamland", "AM", "Currents", "Notes on a Conditional Form", "A Moment Apart"
];

const gradients = [
  "gradient-sunny-purple", "gradient-mint-pink", "gradient-coral-sunny",
  "gradient-purple-mint", "gradient-pink-sunny", "gradient-mint-purple"
];

const playlistNames = [
  "Vibes & Chill", "Energy Boost", "Late Night Sessions",
  "Focus Flow", "Weekend Mood", "Summer Memories",
  "Road Trip Mix", "Morning Motivation", "Sunset Dreams",
  "Party Starter"
];

const playlistDescriptions = [
  "Perfect tunes to unwind and relax",
  "High-energy tracks to power through your day",
  "Smooth sounds for those midnight hours",
  "Concentration-enhancing beats for productivity",
  "Feel-good anthems for the perfect weekend",
  "Nostalgic hits that bring back the warmth",
  "Essential tracks for the open road",
  "Wake up and conquer with these motivating beats",
  "Melodic journeys as the day winds down",
  "Get the party started with these bangers"
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateTrack(id: string): Track {
  return {
    id,
    title: getRandomElement(songTitles),
    artist: getRandomElement(artists),
    album: getRandomElement(albums),
    duration: Math.floor(Math.random() * 180) + 120, // 2-5 minutes
  };
}

export function generateMockPlaylist(prompt: string): Playlist {
  const trackCount = Math.floor(Math.random() * 15) + 10; // 10-25 tracks
  const tracks: Track[] = [];

  for (let i = 0; i < trackCount; i++) {
    tracks.push(generateTrack(`track-${i + 1}`));
  }

  const totalDuration = tracks.reduce((acc, track) => acc + track.duration, 0);

  // Select playlist name and description based on prompt keywords
  let name = getRandomElement(playlistNames);
  let description = getRandomElement(playlistDescriptions);

  if (prompt.toLowerCase().includes("workout") || prompt.toLowerCase().includes("energy")) {
    name = "Energy Boost 💪";
    description = "High-energy tracks to power through your workout";
  } else if (prompt.toLowerCase().includes("study") || prompt.toLowerCase().includes("focus")) {
    name = "Focus Flow 📚";
    description = "Concentration-enhancing beats for deep focus";
  } else if (prompt.toLowerCase().includes("chill") || prompt.toLowerCase().includes("relax")) {
    name = "Vibes & Chill 😌";
    description = "Perfect tunes to unwind and relax";
  } else if (prompt.toLowerCase().includes("party")) {
    name = "Party Starter 🎉";
    description = "Get the party started with these bangers";
  }

  return {
    id: `playlist-${Date.now()}`,
    name,
    description,
    prompt,
    tracks,
    totalDuration,
    createdAt: new Date(),
    gradient: getRandomElement(gradients),
  };
}

export async function simulatePlaylistGeneration(prompt: string): Promise<Playlist> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  return generateMockPlaylist(prompt);
}