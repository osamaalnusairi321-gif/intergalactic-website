# Intergalactic Design System

This file is the visual source of truth for the Intergalactic marketing site.

## Design read

Workflow automation consultancy for small service-business owners. The system combines precise industrial materiality, editorial scale, and a single high-visibility signal color. It should feel clear and capable, not like generic enterprise software or science-fiction decoration.

## Design dials

- Design variance: 9/10
- Motion intensity: 8/10
- Visual density: 3/10
- Redesign mode: full visual overhaul with content intent and anchors preserved

## Identity

The transfer-gate mark is built from two facing brackets and a central handoff block. It represents an input passing through a controlled process. Do not add rockets, planets, orbit rings, stars, or gradients to the core mark.

The wordmark is set in Geist at weight 740 with tight tracking. The mark and wordmark always appear as one lockup in navigation and footer contexts.

## Color

One accent is used across the entire site.

| Role | Dark mode | Light mode |
| --- | --- | --- |
| Background | `#11120f` | `#eceee7` |
| Surface | `#181a15` | `#f7f8f2` |
| Soft surface | `#20221c` | `#e1e4da` |
| Strong surface | `#272a21` | `#d5d9cc` |
| Primary text | `#f1f3e9` | `#16180f` |
| Muted text | `#aeb2a3` | `#55594d` |
| Accent | `#d9ff43` | `#d9ff43` |
| Accent text | `#12140c` | `#12140c` |
| Light-mode process label | n/a | `#526600` |

Verified contrast ratios:

- Accent on accent text: 16.21:1
- Dark primary text on dark hero: 17.25:1
- Light primary text on light background: 15.32:1
- Light muted text on light background: 6.14:1
- Light process label on light background: 5.51:1
- Dark muted text on dark background: 8.68:1

## Typography

- Family: self-hosted Geist variable
- Display weight: 560-650
- Interface weight: 610-750
- Display tracking: `-0.055em` to `-0.075em`
- Body size: 16-21px
- Body line height: 1.45-1.55
- Hero headline: two desktop lines, never more than three mobile lines
- No serif emphasis and no mixed type families

## Shape and material

- Corner radius: 0 across the entire system
- Buttons, cards, panels, imagery, and menus stay sharp
- Shadows are used only for floating navigation menus
- Structure comes from negative space, restrained borders, photography, and color blocks
- Generated photography uses carbon, mineral white, brushed metal, smoked glass, and acid yellow

## Layout

- Maximum shell: 1380px
- Desktop gutter: 32px per side
- Compact gutter: 18px per side
- Major chapter spacing: 112-196px
- Hero uses `min-height: 100svh`
- Desktop navigation is 76px high and remains one line
- High-variance grids collapse to one column below 768px

## Page structure

The page follows AIDA:

1. Attention: cinematic centered hero with one clear promise and two actions
2. Interest: exact-fit three-cell service bento
3. Desire: scrubbed manifesto, pinned process story, and outcome carousel
4. Action: focused contact section and compact footer

Each chapter uses a distinct layout family. Do not repeat the same split composition in consecutive sections.

## Components

### Buttons

- Primary: acid yellow with near-black text
- Secondary: translucent near-black with mineral-white text and border
- Minimum touch size: 44px
- Labels never wrap at desktop sizes
- Press feedback uses a 1px downward translation

### Service bento

- Desktop grid: 4 columns by 2 rows
- Cell allocation: 4 + 2 + 2 units, exactly filling 8 available units
- One photographic cell, one carbon cell, one accent cell
- `grid-auto-flow: dense` is required

### Process narrative

- Left explanation pins while the right sequence advances
- Pin trigger begins at `top top`
- Mobile removes pinning and renders a normal single-column sequence

### Outcome carousel

- Manual controls only
- No autoplay
- Current slide is announced through `aria-live`
- Text remains under three lines at desktop

### Question accordion

- Horizontal expansion on desktop
- Vertical disclosure layout on mobile
- Buttons carry `aria-expanded` and `aria-controls`
- Only one answer is open at a time

## Motion

GSAP and ScrollTrigger are stored locally.

- Hero entry communicates hierarchy
- Section reveals orient users as chapters enter
- Word scrubbing turns the manifesto into a reading sequence
- Process pinning connects the fixed principle to changing implementation steps
- Carousel and accordion motion communicates state changes
- Animate transform and opacity for visual transitions
- Disable non-essential motion when `prefers-reduced-motion: reduce`
- Never attach a scroll handler to `window`

## Accessibility and performance

- Body text contrast is at least 4.5:1
- Every interactive target is at least 44px in both dimensions on mobile
- Focus rings are always visible
- Decorative images use empty alternative text
- Informative imagery uses plain descriptive alternative text
- Images reserve intrinsic width and height
- Hero image and font are preloaded
- No horizontal overflow at 375px
- No runtime CDN dependencies

## Do not use

- Purple or blue glows
- Rounded cards or pill buttons
- Section-number labels
- Decorative status dots
- Fake dashboards
- Generic client logos or invented results
- Rotated text or scroll prompts
- Serif words inserted into sans headlines
- Multiple marquees
- Em dashes in visible copy
