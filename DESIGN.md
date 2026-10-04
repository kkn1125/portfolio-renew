---
name: "Kim Kyeungnam Portfolio"
description: "A calm, structured visual system for readable engineering evidence."
colors:
  accent: "#1F6656"
  accent-hover: "#164C40"
  on-accent: "#FFFFFF"
  bg: "#F4F6F5"
  surface: "#FFFFFF"
  surface-muted: "#E9EEEB"
  ink: "#172422"
  muted: "#56655F"
  rule: "#D5DDD9"
  error: "#A03838"
  dark-accent: "#8ACBB5"
  dark-accent-hover: "#B2DECE"
  dark-on-accent: "#131D1A"
  dark-bg: "#131D1A"
  dark-surface: "#1B2823"
  dark-surface-muted: "#26372F"
  dark-ink: "#E8EFEB"
  dark-muted: "#B2C0B8"
  dark-rule: "#3B5147"
  dark-error: "#F0A6A6"
typography:
  display:
    fontFamily: '"Sora", "SUIT Variable", sans-serif'
    fontSize: "clamp(2.4rem, 3.5vw, 4.4rem)"
    fontWeight: 650
    lineHeight: 1.28
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Sora", "SUIT Variable", sans-serif'
    fontSize: "clamp(2.2rem, 4vw, 3.6rem)"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  section-title:
    fontFamily: '"Sora", "SUIT Variable", sans-serif'
    fontSize: "clamp(1.7rem, 2.5vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Sora", "SUIT Variable", sans-serif'
    fontSize: "clamp(1.15rem, 1.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"SUIT Variable", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  body-small:
    fontFamily: '"SUIT Variable", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"SUIT Variable", sans-serif'
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: '"SUIT Variable", sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: "8px"
  object: "12px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-6: "1.5rem"
  space-8: "2rem"
  space-12: "3rem"
  space-16: "4rem"
  space-24: "6rem"
  space-32: "8rem"
  page-gutter: "clamp(1.5rem, 4vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  button-primary-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-on-accent}"
  button-primary-dark-hover:
    backgroundColor: "{colors.dark-accent-hover}"
    textColor: "{colors.dark-on-accent}"
  button-outlined:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  button-text:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  tab:
    textColor: "{colors.muted}"
    rounded: "0"
    padding: "12px 16px"
  tab-selected:
    textColor: "{colors.accent}"
  case-object:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.object}"
  company-select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.5rem 2rem 0.5rem 0.75rem"
---

# Design System: Kim Kyeungnam Portfolio

## Overview

**Creative North Star: "The Evidence Desk"**

The Evidence Desk makes technical work legible through confident typography, aligned records, quiet surfaces and fine rules. Its voice is modern, clean, structured, technical, calm and distinctive. Sora gives Latin headings a precise silhouette; SUIT supports long Korean reading without a competing decorative voice.

Depth is functional: independent evidence and media objects have gently curved edges, while the surrounding document is organized by whitespace and dividers. Green identifies action, selected state and useful evidence. Motion responds to a deliberate action; it does not postpone reading. Neon, gradients, glass, decorative terminals, pervasive cards and excessive animation are outside the user-approved world.

**Key Characteristics:**

- Clear type hierarchy and aligned reading columns.
- Cool neutrals with one restrained green accent.
- Rule-separated records; rounded controls and independent objects.
- Native document flow, explicit disclosure and visible keyboard focus.

Extracted from the completed CSS, MUI theme and rendered components. Frontmatter owns primitives; `.impeccable/design.json` adds metadata and framework-free samples. Page strategy, review evidence and verification limits remain in `.impeccable/surfaces/portfolio.md`.

## Colors

Cool, slightly green neutrals support one restrained green accent. Frontmatter retains the source hexadecimal notation.

### Primary

**Desk Green** (`accent`) marks actions, selected tabs, evidence, caret, selection and focus; **Deep Desk Green** (`accent-hover`) is the contained-button hover. **Soft Desk Green** (`dark-accent`) and **Pale Desk Green** (`dark-accent-hover`) carry these roles in dark mode. `on-accent` / `dark-on-accent` provides the filled-action foreground. Success feedback shares the accent family.

### Neutral

**Cool Desk** (`bg` / `dark-bg`) is the page/header ground. **Paper** (`surface` / `dark-surface`) supports independent evidence, fields and the command form. **Media Ground** (`surface-muted` / `dark-surface-muted`) backs media/fallback content. **Ink** (`ink` / `dark-ink`) carries reading, **Quiet Ink** (`muted` / `dark-muted`) carries metadata, and **Rule** (`rule` / `dark-rule`) separates records.

The sidecar's eight-step OKLCH ramps are synthesized preview strips, not additional production tokens.

The same CSS roles are injected by `MuiCssBaseline` for both modes. Initial mode uses saved `theme-mode`, otherwise system preference; the explicit toggle persists its choice. Print uses light paper and ink. **Error Red** (`error` / `dark-error`) is a semantic feedback exception, not a decorative second accent.

**The Meaningful Accent Rule.** Use green for actions, selected state, focused controls and highlighted evidence; let neutral type and rules carry the rest of the document.

## Typography

**Display Font:** self-hosted Sora, then SUIT Variable, then sans-serif.
**Body Font:** self-hosted SUIT Variable, then sans-serif. There is no separate monospace label font.

Sora supplies Latin heading character; Korean falls through to SUIT. Both use `font-display: swap`; SUIT covers weights (100–900), Sora (100–800). Preserve the official source URLs and OFL notices under `public/licenses/` when redistributing the font files from `src/assets/style/fonts/`.

### Hierarchy

- **Display** (`typography.display`): introduction. Below 1200px: `clamp(2.4rem, 4vw, 3.4rem)`; below 900px: `clamp(2.4rem, 5vw, 3.4rem)`; below 600px: `clamp(2.2rem, 7.6vw, 2.9rem)`, line-height (1.3).
- **Headline / Section Title / Title** (`headline` / `section-title` / `title`): page, chapter and record headings. Contribution titles locally use (1.125rem). The scale is fluid and role-specific, not a single-ratio ramp.
- **Body / Body Small**: extended and compact reading. General measure (70ch); introduction (48ch), expanding to (60ch) below 900px.
- **Label / Caption**: sentence-case controls and support text. Tabs inherit the label family, size and weight but use line-height (1.25). Context/metadata ranges from (0.8125rem) to (0.875rem); media captions locally use line-height (1.7).

Headings balance wrapping. Korean keeps words together; long strings may wrap rather than overflow. Dates/metadata use tabular numerals.

**The Reading First Rule.** Use the display stack for headings and the Korean body stack for reading and controls. Preserve the reading measure and natural wrapping instead of forcing fixed-height text.

## Layout

The centered shell is full width up to (1600px), with `spacing.page-gutter`: (24–72px) at a 16px root. Keep the actual rem rhythm: (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px) at that root. A (100svh) flex wrapper lets the main landmark grow and the footer remain in flow. The solid sticky header has a (1px) bottom rule and minimum height (88px), then (72px) below 900px. Anchor offset is (6rem).

Reusable grammar is asymmetric alignment, not a mandatory split hero. Chapter introductions use equal columns with a (4rem) gap. Career rows use `minmax(240px, 0.6fr) 1fr`, gap (4rem), vertical padding (2rem). Archive rows use `220px minmax(0, 1fr) 160px`, gap (3rem). Detail reading uses `minmax(0, 1fr) 280px`, gap `clamp(3rem, 6vw, 7rem)`. The wide metadata rail sticks at (7rem), with maximum height `calc(100svh - 8rem)` and internal scrolling.

Breakpoint boundaries match retained MUI defaults (600, 900, 1200, 1536px):

- **Below 1200px:** archive columns become `180px minmax(0, 1fr) 120px`; detail rail becomes (220px); their gaps reduce to (2rem).
- **Below 900px:** desktop links yield to the menu button; introduction/About stack; search becomes full-width. Archive uses `160px 1fr`, with technologies under reading. Detail rail returns to normal flow above the body; metadata uses native disclosure. Chapter padding decreases from (6rem) to (4rem).
- **Below 600px:** chapter introductions, career/archive records, issue reading, technology rows and project pairs become one column. Archive metadata wraps, with its third role line hidden; the detail byline retains the role. Page padding is (3rem); footer stacks. Resume copy has no public button or icon at any breakpoint.
- **From 1536px:** the introductory gap uses (6rem).

Print removes navigation/actions, uses light paper, avoids breaks inside key records/media, and requests A3 portrait with (16mm) margins.

## Elevation & Depth

Flat documents use surface tone, whitespace and fine rules. Buttons explicitly disable elevation for rest, hover and active state.

### Shadow Vocabulary

- **Navigation menu:** `0 10px 36px #00000026`.
- **Resume command:** `0 8px 32px #00000026`.

These are the two authored shadows; keep existing MUI feedback behavior rather than inventing a content-elevation scale.

**The Flat Document Rule.** Keep structural sections and record rows flat. Reserve the two authored shadows for the transient navigation menu and command surface.

## Shapes

Controls/profile photography use `rounded.control`; evidence, media, fallbacks and transient menu/command surfaces use `rounded.object`. Structural sections/records have square edges and (1px) rules. Personal media frames use (16 / 9); detail images/video retain natural dimensions. Shipped routes use plain technology lists, without a chip system.

## Components

### Buttons and Links

Buttons use the label role, control radius, minimum height (44px), minimum width (64px) and frontmatter padding. Filled hover uses accent-hover. Outlined rest uses the rule border; outlined/text hover inherits MUI's accent wash (4% light, 8% dark), while the project's outlined border override remains rule-colored. Icon buttons reserve (44px) in both dimensions. Text links reserve minimum height (44px), turn green and underline on hover; their (18px) arrow shifts (3px) over (180ms).

Visible keyboard focus is an accent outline (2px), offset (4px), on links, buttons, inputs, selects, summaries and tab-indexed surfaces. Disabled native buttons use the not-allowed cursor; MUI retains its own disabled treatment.

### Inputs / Fields

Search is a labeled small MUI outlined field: paper fill, rule outline, control radius, library input padding (8.5px 14px), adjusted for the search adornment. Hover shifts its outline to ink; focus uses a (2px) accent border and the global visible-focus outline on the input. Native company select uses frontmatter padding and minimum height (44px).

Typing waits (300ms); IME composition suspends submit; explicit non-composing submit is immediate. Query/category/company/page live in the URL. Empty results offer an explicit reset.

### Navigation

The wordmark uses a SUIT name (1.25rem, weight 750, tracking -0.025em) plus a smaller display-stack role line. Desktop hover/active links reveal a (2px) green underline from the left over (180ms). Below 900px the named menu button opens the MUI menu with expanded/menu semantics; items reserve (48px) and close it on route selection. Preserve skip link and main landmark.

### Tabs and Evidence Object

Tabs are plain text with minimum height (48px), green selected text and a (2px) indicator: full-width in evidence, scrollable in the archive. Below 600px evidence labels use (0.8125rem) and horizontal padding (0.5rem), archive labels (0.75rem) padding.

The evidence object uses paper, a rule border, object radius and clipping. Tab panels are linked, focusable definition-list reading with (2rem) label columns, (1rem) gaps and (0.9375rem / 1.75) body text. Wide panel minimum height is (33rem), padding `clamp(1.5rem, 2.4vw, 2.5rem)`; below 900px remove the minimum and use (2rem) padding, then (1.5rem) below 600px. The local title uses `clamp(1.4rem, 2vw, 1.9rem)`.

Selection animates for (220ms) with `cubic-bezier(0.16, 1, 0.3, 1)`, from opacity (0.75) and downward offset (4px) to the final state. It responds to selection rather than gating entrance.

### Records and Disclosure

Career/archive records are rule-separated articles; technologies remain plain lists. Contributions retain nested lists. Native details/summary exposes prior projects, metadata, test accounts and technology inventory. Issues use summary text (1.125rem), vertical padding (1.5rem), and `1.15fr 1fr` reading columns with (2rem) gap; below 600px they stack. The first issue is open by default.

### Media, Feedback and Motion

Real figures have captions; images load lazily. Videos have controls, inline playback and metadata preload, without autoplay. Failure produces readable text. Under reduced motion a GIF waits for explicit display.

Copy feedback uses MUI Snackbar/Alert: success clears after (4000ms), error remains until dismissed. Slash command is available outside editing/composition; Escape restores previous focus. Resume copy is reachable only by submitting its exact command, with no public button, placeholder or error-message hint. This is UI hiding, not authentication. It is a transient form, not a decorative terminal.

Authored link/nav transitions use (180ms) and `cubic-bezier(0.16, 1, 0.3, 1)`; media hover scales to (1.025) over (220ms). MUI durations are shortest (150ms), short (180ms), standard (220ms), with inherited MUI easing. Reduced-motion CSS removes all animation/transitions and resets scrolling to auto.

## Do's and Don'ts

### Do:

- Do use the paired light and dark semantic roles supplied by the theme.
- Do separate long records with whitespace and a fine divider; align metadata with its reading content.
- Do keep Korean reading in SUIT, headings in the Sora/SUIT stack, and dates in tabular numerals.
- Do retain semantic headings, lists, definition lists, labeled navigation, native disclosure and visible focus.
- Do let narrow layouts return to document flow and expose intentional search, selection and media controls.
- Do remove authored animation and transitions under reduced motion, and require an explicit choice to show a GIF in that state.

### Don't:

- Don't add neon, decorative gradients, glass surfaces or ornamental terminal treatments.
- Don't wrap every section, career item or archive record in a card.
- Don't replace actual project media with generic decorative covers.
- Don't gate reading behind entrance animations or autoplay project videos.
- Don't treat a dark mode as a translucent overlay; use its semantic palette.
- Don't turn page-specific composition or case-study copy into global design tokens.
