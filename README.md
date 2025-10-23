# OASIS 2025 - Whispers of Edo

The official website for OASIS 2025, Asia's Largest Student-Run College Cultural Festival celebrating its 53rd edition with a Japanese Edo period theme.

## 🎌 About

**OASIS 2025: Whispers of Edo** is an immersive web experience celebrating traditional Japanese Edo-period culture through modern web technologies. This cultural festival website features:

- Immersive Japanese Edo period theme
- Advanced animations and 3D effects
- Parallax scrolling experiences
- Custom Japanese typography
- Responsive mobile-first design
- Dynamic event management system

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.5 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x + CSS Modules
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **React:** 19.1.0

## 📁 Project Structure

```
nextjs/
├── public/                    # Static assets
│   ├── fonts/                 # Custom Japanese fonts
│   │   ├── japanRamen.otf
│   │   ├── IbarraRealNova-SemiBold.ttf
│   │   ├── DMSerifText-Regular.ttf
│   │   ├── AbhayaLibre-ExtraBold.ttf
│   │   ├── AbhayaLibre-Regular.ttf
│   │   ├── ShipporiMincho-Regular.ttf
│   │   ├── TheLastShuriken.otf
│   │   └── NoyagiDemo.ttf
│   ├── images/               # Images organized by page
│   │   ├── landing/
│   │   ├── events/
│   │   ├── aboutus/
│   │   ├── registration/
│   │   ├── doors/
│   │   └── contact/
│   ├── svgs/                 # SVG graphics
│   │   ├── landing/
│   │   ├── events/
│   │   ├── registration/
│   │   └── aboutus/
│   └── videos/               # GIF animations
│       └── ink-spread-5.gif
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles + custom fonts
│   ├── components/           # React components
│   │   ├── Preloader/        # ✅ Loading screen component
│   │   ├── EntranceOverlay/  # ✅ Ink-spread entrance effect
│   │   ├── Navigation/       # 🔄 2-level hamburger menu
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # cn() helper for className merging
│   └── types/                # TypeScript type definitions
└── README.md

✅ = Completed | 🔄 = In Progress | ⏳ = Pending
```

## 🎨 Design System

### Custom Fonts
All 7 custom Japanese-themed fonts are loaded via `@font-face` in `globals.css`:

1. **Japan Ramen** - Primary brand font
2. **Ibarra Real Nova SemiBold** - Subheadings
3. **DM Serif Text** - Body text
4. **Abhaya Libre** (Extrabold & Regular) - Content
5. **Shippori Mincho** - Japanese serif
6. **The Last Shuriken** - Decorative ninja theme
7. **NoyagiDemo** - Special decorative use

### Color Palette
```css
--primary-gold: #f2dd7c
--secondary-gold: #d69b65
--accent-gold: rgb(208, 176, 99)
--brown-wood: #7f5934
--background: #000000
--foreground: #ffffff
```

### Animations
- Spin animation for loaders
- Fade in/out transitions
- Slide up/down effects
- Scale animations
- Ink-spread mask transitions
- 3D transform effects (rotateY, translateZ)

## 🏗️ Components Built

### ✅ Completed Components

#### 1. Preloader Component
- **Location:** `src/components/Preloader/`
- **Features:**
  - Spinning logo animation
  - Progress bar with smooth transitions
  - Percentage display
  - Automatic progression simulation
  - Completion callback
- **Styling:** CSS Modules with keyframe animations

#### 2. EntranceOverlay Component  
- **Location:** `src/components/EntranceOverlay/`
- **Features:**
  - Paper texture background
  - Mobile preloader image
  - Enter button with hover effects
  - Info text box
  - Ink-spread mask transition effect
  - Responsive design for mobile/tablet/desktop
- **Styling:** CSS Modules with backdrop blur and mask-image

## 🔄 Next Steps

### Immediate Tasks

1. **Copy Assets** ⏳
   ```bash
   # Copy all assets from original site to public/ folder
   cp -r ../www.bits-oasis.org/fonts/* public/fonts/
   cp -r ../www.bits-oasis.org/images/* public/images/
   cp -r ../www.bits-oasis.org/svgs/* public/svgs/
   cp -r ../www.bits-oasis.org/videos/* public/videos/
   cp ../www.bits-oasis.org/logo2.png public/
   ```

2. **Install Dependencies** ⏳
   ```bash
   npm install clsx tailwind-merge class-variance-authority lucide-react framer-motion
   ```

3. **Build Navigation Component** ⏳
   - 2-level hamburger menu
   - Cloud background
   - Moon icon
   - Blur effects
   - Smooth open/close animations

4. **Create Landing Page** ⏳
   - Parallax background layers
   - Countdown timer
   - Social media links with lamps
   - Tree foreground element
   - Register button

5. **Build Pages** ⏳
   - Events page with search + categories
   - About page with 3D video player
   - Contact page with team cards
   - Registration page with form

### Development Roadmap

**Phase 1: Core Setup** (Current)
- [x] Next.js project scaffolding
- [x] Configure custom fonts
- [x] Setup globals.css with theme
- [x] Build Preloader component
- [x] Build EntranceOverlay component
- [ ] Copy all assets
- [ ] Install remaining dependencies

**Phase 2: Navigation & Layout**
- [ ] Build Navigation component (hamburger menu)
- [ ] Create page layouts
- [ ] Setup routing structure
- [ ] Add back buttons

**Phase 3: Landing Page**
- [ ] Background container with parallax
- [ ] Logo and countdown timer
- [ ] Social links component
- [ ] Tree/foreground elements
- [ ] Register button with animations

**Phase 4: Sub Pages**
- [ ] Events page with search
- [ ] About page with video carousel
- [ ] Contact page with team cards
- [ ] Registration page with form

**Phase 5: Polish & Optimization**
- [ ] Add all CSS animations
- [ ] Implement 3D effects
- [ ] Mobile responsive testing
- [ ] Performance optimization
- [ ] SEO improvements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (using 20.x recommended)
- npm or yarn or pnpm or bun

### Installation

1. Clone the repository (if needed)
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Development Notes

### CSS Modules Convention
All component styles use CSS Modules for scoped styling:
- File naming: `ComponentName.module.css`
- Import: `import styles from './ComponentName.module.css'`
- Usage: `className={styles.className}`

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 550px)
@media (max-width: 600px)
@media (max-width: 730px)

/* Tablet */
@media (max-width: 900px)
@media (max-width: 1200px)

/* Aspect Ratios */
@media (aspect-ratio < 5/8)
@media (aspect-ratio < 8/12)
```

### Animation Patterns
```css
/* Common transitions */
transition: all 0.3s ease;

/* Keyframe animations */
animation: fadeIn 0.3s ease-in;
animation: spin 1s linear infinite;
```

## 🎯 Key Features to Implement

1. **Loading Experience**
   - ✅ Preloader with progress
   - ✅ Ink-spread mask transition
   - ⏳ Asset preloading optimization

2. **Navigation**
   - ⏳ Hamburger menu system
   - ⏳ Page transitions
   - ⏳ Mobile menu

3. **Animations**
   - ⏳ Parallax scrolling
   - ⏳ 3D transforms
   - ⏳ Hover effects
   - ⏳ Page transitions

4. **Content**
   - ⏳ Event management
   - ⏳ Team member cards
   - ⏳ Video integration
   - ⏳ Social media links

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Original Site Analysis](../WEBSITE_ANALYSIS.md)

## 👥 Credits

**Developed by:** Department of Visual Media, BITS Pilani  
**Theme:** Whispers of Edo - Japanese Edo Period  
**Festival:** OASIS 2025 (53rd Edition, Est. 1971)

## 📄 License

This project is for OASIS 2025, BITS Pilani.

---

**Status:** 🔄 In Active Development  
**Last Updated:** October 16, 2025  
**Progress:** 15% Complete (2/15 components built)

