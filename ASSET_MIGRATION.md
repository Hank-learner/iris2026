# Asset Migration Guide

## Quick Copy Commands

Run these commands from the `nextjs` directory to copy all assets:

### Windows (PowerShell/CMD)
```powershell
# Copy fonts
xcopy /E /I /Y "..\www.bits-oasis.org\www.bits-oasis.org\fonts" "public\fonts"

# Copy images
xcopy /E /I /Y "..\www.bits-oasis.org\www.bits-oasis.org\images" "public\images"

# Copy SVGs
xcopy /E /I /Y "..\www.bits-oasis.org\www.bits-oasis.org\svgs" "public\svgs"

# Copy videos
xcopy /E /I /Y "..\www.bits-oasis.org\www.bits-oasis.org\videos" "public\videos"

# Copy logo
copy "..\www.bits-oasis.org\www.bits-oasis.org\logo2.png" "public\logo2.png"
```

### Linux/Mac (Bash)
```bash
# Copy fonts
cp -r ../www.bits-oasis.org/www.bits-oasis.org/fonts/* public/fonts/

# Copy images
cp -r ../www.bits-oasis.org/www.bits-oasis.org/images/* public/images/

# Copy SVGs  
cp -r ../www.bits-oasis.org/www.bits-oasis.org/svgs/* public/svgs/

# Copy videos
cp -r ../www.bits-oasis.org/www.bits-oasis.org/videos/* public/videos/

# Copy logo
cp ../www.bits-oasis.org/www.bits-oasis.org/logo2.png public/logo2.png
```

## Required Assets Checklist

### Fonts (11 files)
- [ ] AbhayaLibre-ExtraBold.ttf
- [ ] AbhayaLibre-Regular.ttf
- [ ] AveriaSerifLibre-Regular.ttf
- [ ] DMSerifText-Regular.ttf
- [ ] IbarraRealNova-Regular.ttf
- [ ] IbarraRealNova-SemiBold.ttf
- [ ] japanRamen.otf
- [ ] japanRamen.ttf
- [ ] NoyagiDemo.ttf
- [ ] ShipporiMincho-Regular.ttf
- [ ] TheLastShuriken.otf

### Images
#### Landing (~8 files)
- [ ] background1.png
- [ ] hamBackground.png
- [ ] hamCloud.png
- [ ] mobileCloud.png
- [ ] mobileMountains.png
- [ ] oasisLogo.png
- [ ] tree1.png
- [ ] treeMob.png

#### Events (~11 files)
- [ ] backg.png
- [ ] dance.png / DanceMobile.png
- [ ] drama.png / DramaMobile.png  
- [ ] music.png / MusicMobile.png
- [ ] photography.png / PhotographyMobile.png
- [ ] misc.png / text.png / TextMobile.png
- [ ] evenback.png

#### About Us (~3 files)
- [ ] abtbck.png
- [ ] backg.png
- [ ] background.jpg

#### Registration (1 file)
- [ ] reg-banner.png

#### Doors (4 files)
- [ ] Door1.png
- [ ] Door2.png
- [ ] Door3.png
- [ ] Door4.png

#### Contact (~14 files)
- [ ] contact-banner.png
- [ ] ContactCard1.png
- [ ] DoorsCombined.png
- [ ] DoorsMobile.png
- [ ] Team photos (Ahan, Arshita, Aryan, Ayushmaan, Dhruv, Ishita, Pranav, Rahul)

#### Root
- [ ] paper-texture.webp
- [ ] logo2.png

### SVGs
#### Landing (~23 files)
- [ ] aboutusIcon.svg, eventsIcon.svg, homeIcon.svg, heartIcon.svg
- [ ] registerBtn.svg, mobileRegisterBtn.svg
- [ ] bottomLeftDragon.svg, topRightDragon.svg
- [ ] moon1.svg, moonHam.svg
- [ ] hamBack.svg, hamX.svg
- [ ] hamClouds/ (directory)
- [ ] mobileBackground.svg
- [ ] phone.svg, wire.svg
- [ ] Social icons (insta, instaLamp, linkden, linkdenLamp, x, xLamp)

#### Events (~9 files)
- [ ] eventsback.svg
- [ ] top.svg, bottom.svg, topright.svg
- [ ] dan.svg
- [ ] cl1.svg, cl2.svg
- [ ] star.svg, star2.svg
- [ ] text.svg, Next1.svg

#### Registration (~6 files)
- [ ] back.svg
- [ ] bg-extended.svg, bg-mobile.svg
- [ ] leftarr.svg, rightarr.svg
- [ ] scroll-bar.svg, scrollThumb.svg

#### About Us (~20 files)
- [ ] abtus.svg, borde.svg, header.svg, reghead.svg
- [ ] fan.png
- [ ] letter1-8.svg (8 files)
- [ ] Social icons (instaicon, linkedin, xicon, yticon)
- [ ] Controls (play, pause, prev, next, nextarr)

### Videos/GIFs
- [ ] ink-spread-5.gif
- [ ] dragon-reveal.gif (and hashed versions)

## Manual Asset Creation

Some assets might not be in the archive. Create placeholders:

### Missing paper-texture.webp
If not found, create a paper texture:
1. Find a free paper texture online
2. Convert to WebP format
3. Place in `public/images/paper-texture.webp`

### Missing logo2.png
Create a temporary logo or extract from the site screenshot.

## Verification

After copying, verify structure:
```bash
ls -R public/
```

Should show:
```
public/
├── fonts/          (11 files)
├── images/
│   ├── landing/    (8 files)
│   ├── events/     (11 files)
│   ├── aboutus/    (3 files)
│   ├── registration/ (1 file)
│   ├── doors/      (4 files)
│   ├── contact/    (14 files)
│   └── paper-texture.webp
├── svgs/
│   ├── landing/    (23 files)
│   ├── events/     (9 files)
│   ├── registration/ (6 files)
│   └── aboutus/    (20 files)
├── videos/         (2+ files)
└── logo2.png
```

## Next Steps After Asset Copy

1. Test the site: `npm run dev`
2. Check console for any missing asset errors
3. Verify fonts are loading correctly
4. Check that Preloader logo appears
5. Verify EntranceOverlay images load

## Troubleshooting

**Fonts not loading?**
- Check file paths in `globals.css`
- Verify font files exist in `public/fonts/`
- Clear browser cache

**Images not showing?**
- Check console for 404 errors
- Verify file names match (case-sensitive)
- Ensure proper file extensions (.png, .svg, .webp)

**Performance issues?**
- Consider optimizing large images
- Use Next.js Image component for automatic optimization
- Compress GIF files if too large
