# Portfolio - Mobile & Desktop Versions

## File Structure

Your portfolio now has **three versions**:

1. **`index.html`** - Auto-detection landing page (redirects to mobile or desktop)
2. **`desktop.html`** - Desktop/PC optimized version
3. **`mobile.html`** - Mobile device optimized version

## How It Works

### Automatic Detection
When users visit your portfolio:
1. They land on `index.html`
2. JavaScript detects their device type
3. Automatically redirects to:
   - `mobile.html` for phones/tablets
   - `desktop.html` for PCs/laptops

### Manual Selection
Users can also manually choose their preferred version from the landing page.

## Key Differences

### Desktop Version (`desktop.html`)
- Original layout with full spacing
- Larger fonts (24px, 26px)
- Negative margins for design effect
- Optimized for mouse interaction
- Wide content areas

### Mobile Version (`mobile.html`)
- Responsive, touch-friendly layout
- Smaller, readable fonts (14-18px)
- Positive margins for better spacing
- Left-aligned lists for readability
- Full-width content
- Optimized for small screens

## CSS Files

- **`main.css`** - Base styles for both versions
- **`mobile-fixes.css`** - Mobile-specific overrides and responsive classes
- **`noscript.css`** - Fallback styles
- **`dropdown-nav.css`** - Navigation styles

## Responsive Classes Added

The following CSS classes replace inline styles for better responsiveness:

- `.about-header-spacing` - About section header
- `.section-header-spacing` - Section headers (Education, Experience, etc.)
- `.article-spacing` - Article/project spacing
- `.resume-header` - Resume section header
- `.body-text` - Body paragraphs
- `.job-title` - Job titles
- `.list-item-text` - List items

## Testing

### Local Testing
```bash
cd /Users/mackbookair/Downloads/portfolio
python3 -m http.server
```

Then visit:
- `http://localhost:8000` - Auto-detection
- `http://localhost:8000/desktop.html` - Desktop version
- `http://localhost:8000/mobile.html` - Mobile version

### Device Testing
1. **Desktop**: Open in Chrome/Firefox/Safari
2. **Mobile Simulation**: Use browser DevTools (Cmd+Shift+M on Mac)
3. **Real Mobile**: Access from your phone using your computer's IP

## Deployment

When deploying to a web server:
1. Upload all files including `index.html`, `desktop.html`, and `mobile.html`
2. The auto-detection will work automatically
3. Users can bookmark their preferred version

## Maintenance

To update content:
1. **Both versions**: Update `desktop.html` AND `mobile.html`
2. **Desktop only**: Update `desktop.html`
3. **Mobile only**: Update `mobile.html`

**Tip**: Use a script to sync common content between versions to avoid duplication.

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (iOS & macOS)
- ✅ Samsung Internet
- ✅ Opera

## Performance

- Desktop version: ~500KB (with images)
- Mobile version: ~500KB (same images, optimized layout)
- Auto-detection: Minimal overhead (<1KB JS)

## Future Improvements

Consider:
- Image optimization (WebP format)
- Lazy loading for images
- Service worker for offline access
- Progressive Web App (PWA) features
