# 🎵 Rekodo AI - AI-Powered Playlist Generator

Transform your musical vibe into the perfect playlist with the power of artificial intelligence. Rekodo AI understands your mood, activity, and preferences to create personalized soundtracks in seconds.

![Rekodo AI Preview](https://via.placeholder.com/800x400/f9f28d/000000?text=Rekodo+AI+Preview)

## ✨ Features

- **🎯 Smart AI Understanding**: Describe your mood in natural language and get perfectly matched music
- **⚡ Lightning Fast**: Generate complete playlists in seconds
- **🎭 Any Mood**: From study focus beats to party bangers, we've got your vibe covered
- **🎨 Minimalistic Comic Design**: Clean, modern interface with angular aesthetics
- **📱 Responsive**: Works beautifully on desktop, tablet, and mobile
- **🎵 10M+ Songs**: Analyze from a massive music database
- **🎯 99% Vibe Match**: Precision-tuned AI for accurate mood matching

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rekodo-ai-frontend.git
   cd rekodo-ai-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library

### Design System
- **Fonts**:
  - Bungee (Headers) - Bold comic-style typography
  - Fredoka Light (Body) - Clean, friendly readability
  - Righteous (Accents) - Modern accent styling
- **Colors**:
  - Primary: `#8B5CF6` (Purple)
  - Secondary: `#FFCC00` (Orange/Yellow)
  - Background: `#f9f28d` (Warm Yellow)
- **Angular Design**: Sharp, comic book-inspired corners and borders

### Key Features
- **Scroll Progress Bar** - Visual feedback for page navigation
- **Hover Effects** - Consistent black drop shadows across all interactive elements
- **Responsive Layout** - Mobile-first design approach
- **Accessibility** - ARIA labels and keyboard navigation support

## 🎨 Design Philosophy

Rekodo AI embraces a **minimalistic comic book aesthetic** with:

- **Sharp Angular Corners**: All components use asymmetrical border-radius (top-left & bottom-right only)
- **Two-Color Palette**: Purple and orange for maximum visual impact
- **Consistent Hover Effects**: Black drop shadows that lift elements off the page
- **Typography Hierarchy**: Three distinct fonts for headers, body, and accent text
- **Clean Layouts**: Generous whitespace and focused content areas

## 📁 Project Structure

```
rekodo-ai-frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and component classes
│   ├── layout.tsx         # Root layout with font configuration
│   └── page.tsx          # Homepage with all sections
├── components/            # Reusable React components
│   ├── header.tsx        # Navigation with scroll progress
│   ├── hero.tsx          # Main hero section
│   ├── prompt-input.tsx  # AI input component
│   ├── playlist-card.tsx # Playlist display cards
│   └── providers/        # Context providers
├── lib/                  # Utility functions
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🎯 Usage

### Creating Playlists

1. **Describe Your Vibe**: Enter a natural description like:
   - "Chill vibes for a rainy Sunday"
   - "Epic workout energy"
   - "Study focus beats"
   - "Road trip sing-alongs"

2. **Get Instant Results**: AI analyzes your prompt and generates a custom playlist

3. **Quick Suggestions**: Use pre-made prompts for common moods

### Example Prompts

- "I need energetic music for my morning run"
- "Relaxing jazz for working late"
- "Upbeat pop songs for cleaning the house"
- "Nostalgic 90s hits for feeling emotional"
- "Electronic beats for coding sessions"

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### Component Development

All components follow these conventions:

- **TypeScript**: Fully typed props and state
- **Tailwind Classes**: Utility-first styling approach
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Responsive**: Mobile-first design patterns

### Adding New Components

1. Create component in `/components`
2. Use existing design system classes (`.btn`, `.card`, `.panel`, `.input`)
3. Apply consistent hover effects (`.hover-lift`, `.hover-lift-sm`)
4. Follow typography patterns (`font-header`, `font-body`, `font-accent`)

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#8B5CF6",    // Purple
  secondary: "#FFCC00",  // Orange/Yellow
  background: "#FFFFFF", // White
  foreground: "#000000", // Black
}
```

### Fonts

Modify font imports in `app/layout.tsx`:

```typescript
const bungee = Bungee({ /* config */ });
const fredoka = Fredoka({ /* config */ });
const righteous = Righteous({ /* config */ });
```

### Component Styles

Base component classes in `app/globals.css`:

- `.btn` - Buttons with angular corners
- `.card` - Container cards with borders
- `.input` - Form inputs with focus states
- `.panel` - Content panels with padding

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt fluidly across screen sizes while maintaining the comic book aesthetic.

## 🚧 Future Enhancements

- [ ] Spotify/Apple Music integration
- [ ] User accounts and saved playlists
- [ ] Social sharing features
- [ ] Advanced AI customization options
- [ ] Dark mode variant
- [ ] Music preview functionality
- [ ] Playlist export options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎵 Made with ❤️ and ⚡

Powered by AI magic and comic book aesthetics ✨

---

**Rekodo AI** - Where your vibe becomes music 🎶