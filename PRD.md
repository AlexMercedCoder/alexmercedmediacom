# Product Requirements Document (PRD)
## AlexMercedMedia.com

---

## 1. Overview

**Product Name:** AlexMercedMedia.com  
**Purpose:**  
AlexMercedMedia.com is a centralized media hub for discovering and consuming content created by Alex Merced across technology, data, AI, and political thought leadership. The site aggregates blogs, podcasts, videos, and books into a single, modern, professional experience.

The site is read-only and content-driven. It focuses on discoverability, freshness, and credibility.

---

## 2. Goals & Objectives

### Primary Goals
- Provide a single authoritative hub for all Alex Merced media outlets
- Surface the most recent content automatically
- Reduce friction for discovering long-form and multimedia content
- Reinforce a professional personal brand across multiple domains

### Success Metrics
- Time on site
- Click-throughs to external platforms
- RSS refresh success rate
- Mobile engagement parity with desktop
- Return visitors

---

## 3. Target Audience

- Data engineers and data architects
- Software developers
- AI practitioners
- Political and libertarian audiences
- Journalists, podcast hosts, and conference organizers
- Recruiters and collaborators

---

## 4. Information Architecture

### Primary Navigation
- Home
- Blogs
- Podcasts
- Videos
- Books
- About

Mobile navigation uses a bottom navigation bar or collapsible drawer.

---

## 5. Content Sources

### Source Configuration
All media sources are defined in a structured configuration file:

/media.md


This file contains:
- Blog URLs and RSS feeds
- Podcast URLs and RSS feeds
- YouTube channel URLs
- Book metadata and purchase links

The application parses `media.md` at build time or runtime depending on deployment strategy.

---

## 6. Core Features

### 6.1 Blog Aggregation

**Functionality**
- Fetch and parse RSS feeds defined in `media.md`
- Display the latest posts across all blogs
- Sort by publish date (descending)
- Link directly to original articles

**UI**
- Card-based layout
- Title, excerpt, source, publish date
- Optional tag chips (Tech, Data, Politics)

---

### 6.2 Video Aggregation (YouTube)

**Functionality**
- Automatically embed the latest video from each YouTube channel
- Support playlist-based embeds when defined
- Lazy-load embeds for performance

**UI**
- Responsive video cards
- Channel name and publish date
- Tap-to-play inline on mobile

---

### 6.3 Podcast Playback

**Functionality**
- Embed podcast listening widgets using RSS or platform embeds
- Display latest episode per podcast
- Support Apple Podcasts, Spotify, and generic RSS players

**UI**
- Episode title and description
- Play controls embedded directly on the site
- Clear link to “View all episodes”

---

### 6.4 Books Showcase

**Functionality**
- Display all books authored by Alex Merced
- Pull cover images using:
  - Local `/assets` folder when available
  - External URLs (publisher sites) when needed

**UI**
- Prominent book covers
- Title, publisher, year
- Primary CTA: “View Book”

---

## 7. Visual & Design Requirements

### Design System
- Material Design inspired
- Clean, professional, modern aesthetic
- High contrast typography
- Soft elevation and shadows
- Consistent spacing and rhythm

### Typography
- Headings: Inter or Roboto
- Body: System UI font stack
- Clear hierarchy with restrained font weights

### Color Palette
- Neutral base (white / light gray)
- Accent colors drawn from brand assets
- Subtle gradients allowed for section separation

---

## 8. Mobile Responsiveness

### Requirements
- Mobile-first design
- Fully responsive layouts
- Touch-friendly components
- Optimized video embeds
- Fast load times on cellular networks

### Breakpoints
- Mobile (<768px)
- Tablet (768–1024px)
- Desktop (>1024px)

---

## 9. Performance & Accessibility

### Performance
- Lazy loading for images and embeds
- Static generation where possible
- CDN-friendly assets
- Lighthouse score target: 90+

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML
- Keyboard navigation
- Screen reader friendly media labels

---

## 10. Assets & Media

### Asset Management

/assets
/photos
/book-covers
/logos


- Provided photos are prioritized
- External images allowed for book covers and missing assets
- All images optimized for web delivery

---

## 11. Technical Considerations

### Recommended Stack (Flexible)
- Static Site Generator or SSR framework
- RSS parsing library
- YouTube Data API or embed-based fetching
- Client-side hydration for dynamic updates

### Hosting
- CDN-backed static hosting
- HTTPS required
- Custom domain: alexmercedmedia.com

---

## 12. Non-Goals

- User accounts or authentication
- Commenting systems
- Content editing via UI
- Monetization features

---

## 13. Future Enhancements

- Tag-based filtering
- Search across all media
- Email newsletter signup
- Speaking engagements section
- Media kit download

---

## 14. Risks & Mitigations

| Risk | Mitigation |
|-----|-----------|
| RSS feed downtime | Graceful fallback and caching |
| API rate limits | Prefer embed-based approaches |
| Content duplication | Clear source attribution |
| Performance degradation | Lazy loading and static rendering |

---

## 15. Acceptance Criteria

- Latest content updates automatically without manual edits
- All sections functional on mobile and desktop
- Visual consistency across content types
- Clear navigation to all external platforms
- Media sources configurable via `media.md`

---

## 16. Ownership

**Product Owner:** Alex Merced  
**Brand & Content:** Alex Merced  
**Engineering & Design:** To be determined
