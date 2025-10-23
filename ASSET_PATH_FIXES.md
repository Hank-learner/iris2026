# Asset Path Corrections for OASIS 2025

## Issues Found
The code references assets that either don't exist or have different names/locations than expected.

## Actual Asset Structure

### Paper Texture
- ❌ `/images/landing/paperTexture.png`
- ✅ `/images/paper-texture.webp`

### Landing Page
**Images (`/images/landing/`):**
- ✅ background1.png
- ✅ hamBackground.png
- ✅ hamCloud.png
- ✅ mobileCloud.png
- ✅ mobileMountains.png
- ✅ oasisLogo.png
- ✅ tree1.png
- ✅ treeMob.png

**SVGs (`/svgs/landing/`):**
- ✅ insta.svg, instaLamp.svg
- ✅ x.svg, xLamp.svg
- ✅ linkden.svg, linkdenLamp.svg
- ✅ wire.svg
- ✅ mobileBackground.svg
- ✅ registerBtn.svg, mobileRegisterBtn.svg
- ✅ moon1.svg (use this instead of moonHam.svg if needed)

### Events Page
**Images (`/images/events/`):**
- ✅ backg.png (use as background)
- ✅ dance.png, drama.png, music.png, photography.png, text.png, misc.png (category icons)
- ❌ eventsBanner.png (MISSING - need to find or create)
- ❌ eventsBackground.png (use backg.png or evenback.png instead)

**SVGs (`/svgs/events/`):**
- ✅ dan.svg (dance icon)
- ✅ text.svg (text/literary icon)
- ✅ star.svg, star2.svg (decorations)
- ✅ cl1.svg, cl2.svg (clouds)
- ❌ dance.svg, drama.svg, music.svg, photography.svg, misc.svg (use PNG versions instead)

### About Page
**Images (`/images/aboutus/`):**
- ✅ backg.png (background)
- ❌ aboutBanner.png (MISSING)
- ❌ aboutBackground.png (use backg.png instead)

**SVGs (`/svgs/aboutus/`):**
- ✅ letter1.svg through letter8.svg (for OASIS 2025 carousel)
- ❌ O.svg, A.svg, S.svg, I.svg, S2.svg, 2.svg, 0.svg, 5.svg (use letter1-8 instead)
- ✅ fan.png (in SVG folder but is PNG!)
- ❌ fan1.svg, fan2.svg (use fan.png instead)
- ✅ abtus.svg (can use as about banner)
- ✅ header.svg (can use as banner)

### Contact Page
**Images (`/images/contact/`):**
- Need to check if exists

**Images (`/images/doors/`):**
- Exists (has door images)

### Registration Page
**Images (`/images/registration/`):**
- ✅ reg-banner.png

**SVGs (`/svgs/registration/`):**
- ✅ bg-extended.svg
- ✅ bg-mobile.svg
- ❌ registerBanner.svg (use /images/registration/reg-banner.png instead)

## Files That Need Updates

### 1. EventsPage Components
- `EventsPage.tsx` - Update banner and background paths
- `EventItem.tsx` - Use PNG icons instead of SVG
- `EventsBackground.tsx` - Fix star and cloud paths

### 2. AboutPage Components
- `AboutPage.tsx` - Fix banner and background paths
- `VideoPlayer.tsx` - Use fan.png instead of fan1/fan2.svg
- `LetterCarousel.tsx` - Use letter1-8.svg instead of individual letters

### 3. RegistrationPage
- `RegistrationPage.tsx` - Use reg-banner.png instead of SVG

## Action Plan
1. ✅ Fix paperTexture references (already done)
2. Update Events page asset paths
3. Update About page asset paths
4. Update Registration page asset paths
5. Create missing assets or use alternatives
