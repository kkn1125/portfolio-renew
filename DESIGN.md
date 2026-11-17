---
name: "Kim Kyeungnam Portfolio"
description: "Quiet navigation, strong type, and real project screens."
colors:
  accent: "#4A53B8"
  accent-hover: "#363D91"
  on-accent: "#FFFFFF"
  bg: "#FAFAFA"
  surface: "#FFFFFF"
  surface-muted: "#F0F0F3"
  ink: "#202126"
  muted: "#64666E"
  rule: "#DEDFE5"
  dark-accent: "#B1B8FF"
  dark-bg: "#17181C"
  dark-surface: "#222329"
  dark-surface-muted: "#2B2D35"
  dark-ink: "#F2F2F5"
  dark-muted: "#B4B5BE"
  dark-rule: "#41434D"
---

# Design direction

This is a backend engineer's portfolio for technical reviewers and recruiters.
The main path is introduction, project discovery, then implementation evidence.
The visual references are DIVIS (divis.co.kr) and GGGLOG (ggglog.com): clear
navigation, generous space, decisive type and large photographs of actual work.
Use the portfolio's own project screens in place of reference-site photographs.

The home page opens with one large, two-line statement about real-time servers
and service operations. A compact description follows. Nuvia and the 2D RPG
supply the two project images; career history follows them. Detailed problem,
process and result content belongs on the corresponding project page. There is
no tabbed case-study panel on Home.

# Tokens and type

Semantic colors come from src/theme/palette.ts and the CSS variables supplied by
src/theme/index.ts. Indigo marks actions, selection and visible keyboard focus.
Neutral text, spacing and dividers carry the rest. Success, warning, error and
info retain separate feedback meanings. Light and dark themes are persisted.

Reuse the self-hosted Sora display face and SUIT Variable Korean/body face.
Preserve their source and OFL notices under public/licenses/. Home display uses
clamp(3.5rem, 7vw, 6.25rem), weight 750, line-height 1.16 and -0.065em tracking.
Below 600px it uses clamp(2rem, 8.7vw, 3.25rem), line-height 1.2 and -0.055em.
Page headings use clamp(2.2rem, 4.4vw, 4rem), weight 650 and line-height 1.22.
Body copy uses 1rem / 1.85; the home introduction uses 1.0625rem on wide screens.
Keep Korean words together, allow long identifiers to wrap, and use tabular dates.

# Layout and components

- The centered shell has a 1440px maximum and clamp(1.5rem, 4.5vw, 5rem) gutters.
- The spacing scale remains 4, 8, 12, 16, 24, 32, 48, 64, 96 and 128px at a 16px root.
- The sticky header stays in document flow. Preserve its skip link, desktop
  links, mobile MUI menu, active states and explicit theme toggle.
- Home uses a full-width title and a two-column supporting introduction. Below
  900px the introduction stacks. Project images form two columns, then one below
  600px. Images have 4px corners and meaningful accompanying project titles.
- Career and archive entries remain flat records. Archive previews reuse
  ProjectMedia, including image failure feedback and explicit GIF playback under
  reduced motion. Search, category, company and page remain URL-backed.
- Archive category tabs use rounded selected surfaces. Preserve their MUI tab
  semantics and keyboard behavior; they are filters rather than content cards.
- Detail pages keep the project heading, contribution lists, native issue
  disclosure, media captions, related links and a 240px sticky metadata rail.
  Below 900px the rail returns to normal flow. External links wrap as complete
  items instead of compressing their words on small screens.
- About uses the same type and spacing, with a 160 x 200px grayscale portrait;
  it becomes 88 x 112px below 600px. Contact links stay ordinary text links.
- Retain 44px control targets, visible 2px focus outlines, semantic headings,
  labeled inputs and menus, reduced-motion CSS, and print support.
- Hidden resume copy remains slash, exact copyResume, then Enter. Do not expose
  its command in public copy. Preserve Ctrl+Shift+Alt+P print behavior.

# Restraint

Keep real project facts, paths, dates, related links and media. Do not introduce
statistics, decorative diagrams, generic stock images, fake terminals, gradients,
scroll-gated content or autoplay media. Do not use cards for every section.
A border separates records; an image represents a real project.
