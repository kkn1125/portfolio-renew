# Portfolio redesign · 2026-10-04

## THESIS
Evidence Desk: introduce Kim Kyeungnam through real state, data and operational problems, with an immediately explorable problem → action → result. The user selected this direction and code-first implementation through structured questions.

## OWN-WORLD
Engineering case review, rather than a software landing page. Broad asymmetric working area, exact alignment, distinct type scale, cool neutral surfaces and a consistent green accent. A hiring manager reads on a daytime laptop; light is the primary documented presentation, while the existing system-preference and persisted dark mode remain supported. Sora Latin and SUIT Korean are self-hosted with OFL licenses. No ornamental terminal, grid texture, generic cover images or metric dashboard.

## STORY
Identity → selected evidence → responsibility and career → personal experiments → full project index and working approach. Preserve every professional and side project, dates, contributions, problem-solving details, related links, screenshots, demos and test accounts. Do not change factual source data or copyResume output. Show existing technologies in their actual context; archive incidental detail through explicit disclosure rather than deletion.

## FIRST VIEWPORT
Wide screens: identity and restrained introductory type to the left; a substantial selectable case review to the right. State lifetime, SQL call structure and inventory verification are three different factual examples. The case selector changes the visible problem, implementation and result and offers the original detail route. On mobile, introduction and its primary action precede that evidence, with no duplicated decorative layer. Neither profile photography nor a stack-logo carousel delays the proof.

## FORM
Seed e724568c assigned the sixth grounded direction, Responsibility Map. The user explicitly requested three distinct proposals; we offered that map, recommended Evidence Desk, and Technical Field Guide. The user selected Evidence Desk. Preserve the map's disciplined responsibility-to-project navigation through career rows and filtered project index. Main topology: asymmetric introduction/evidence; rule-separated career rows; filtered archive; readable detail with sticky metadata; working-approach page. No same-size card scaffold.

## FINISH
unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Phase 1 — Audit

- Stack: React 19, Vite 8, TypeScript, MUI 9, Emotion, React Router. Four page templates: home, project index, project detail, about. Project paths remain unchanged.
- Data: ProjectModel, CompanyModel, Work and Issue; storage separated from page presentation. 14 professional and 12 personal/team projects. This is a strong basis for selective storytelling without erasing history.
- Existing strengths: factual problem-solving material, separate company/project structure, persistent light/dark mode, linked media and relations, copyResume and print shortcuts.
- Hierarchy/readability: the largest object is a profile card, followed by moving technology logos. Real evidence starts below it. Several titles use an invalid `sx.variant`, so their intended hierarchy is not applied.
- Density/rhythm: one card per work item and another per issue creates repetitive container noise. Project index weights all 26 projects equally and repeats generic thumbnails. Company and project descriptions have little differentiation.
- Discoverability: no clear archive heading or professional/personal filter, no active navigation, hidden resume action, duplicate project targets and duplicate external links. About previews and repeats the same paragraph.
- Responsive behavior: fixed header/footer and nested page scrolling reduce usable height and make native anchors/scrolling harder. Desktop uses narrow central containers despite dense material. Detail cover consumes the beginning of the page even for projects without a real image.
- Personality/storytelling: logos, gradients, avatars and generic thumbnails say less than the existing examples of state expiry, SQL restructuring and business-rule verification. Career roles are flattened; the non-IT architecture job incorrectly presents a server role inherited from its model.
- Preserve: all source content, routes, project links and relationships, dates, test account reveal, screenshots/video, copyResume and print, persistent theme preference.
- Remove from presentation: generic fallback covers, rotating logo belt, decorative gradients, nested scrolling, duplicated links and duplicated about previews, company initial circles and incidental card outlines.
- Redesign: typography, palette, spacing, shared shell, home hierarchy, career rows, project archive and search/filter navigation, detail reading structure and about page.

## Phase 2 — Alternatives

| Direction | Visual language and typography | Layout and interaction | Fit and risk |
| --- | --- | --- | --- |
| Evidence Desk — selected | Sora/SUIT, cool neutrals, green accent, confident scale and fine dividers | Asymmetric intro and interactive evidence; responsibility rows and aligned archive | Fast hiring review, with authentic engineering proof. Risk: a generic split hero if the case review becomes decorative. |
| Responsibility Map | SUIT, aligned labels, route logic and muted teal/blue | Navigate from responsibility to projects and companies; mobile shows one selected path | Reveals scope expansion, but requires interpreting the map before reading. |
| Technical Field Guide | Clear Korean body and contrasting chapter titles, restrained steel blue | Chapter navigation, long reading column, figures with explanations and disclosures | Strong deep technical reading, weaker quick comparison of several strengths. |

## Phase 3 — System rules

- Light roles: background #F4F6F5, surface #FFFFFF, primary text #172422, secondary #56655F, rule #D5DDD9, accent #1F6656.
- Dark roles: background #131D1A, surface #1B2823, primary text #E8EFEB, secondary #B2C0B8, rule #3B5147, accent #8ACBB5.
- Typography: fluid display 2.4–4.4rem; h1 2.2–3.6rem; h2 1.7–2.35rem; h3 1.15–1.5rem; body 1rem/1.85; caption/metadata .8125–.875rem/1.6. Tracking never tighter than -.035em. Dates/counts use tabular numerals.
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Strong separation between chapters, close grouping inside a contribution. Body reading measure up to 70ch.
- Grid: full working width up to 1600px, 24px mobile gutters, 48–72px desktop gutters. Existing MUI breakpoints 600/900/1200/1536. Detail body plus metadata rail, collapsed to native document flow below desktop.
- Shape/depth: 8px controls, 12px only independent media/objects; structural sections use whitespace and 1px dividers. Shadow only for transient menu/dialog elevation.
- Motion: short 180–220ms state transitions, no entrance gating, no moving background, no automatic media playback; reduced-motion removes authored transition.

## Phase 4 — Information architecture

- `/`: developer identity + selectable evidence → responsibilities/career → selected personal projects → further reading/contact. Full technology inventory moves to About, with names and usage context rather than a moving logo strip.
- `/portfolio`: explicit archive heading → all/professional/personal filters, search → rule-separated project rows → pagination. URL state preserves filters/page through detail and browser back.
- `/portfolio/:company/:project`: title/service/role/date first → contributions → complete problem-solving records → real media and related projects. Metadata and section links form a desktop reading rail; mobile keeps critical role/date above the content.
- `/about`: concise identity/contact → existing three working-approach texts → primary/supporting/other technology inventory. Resume copy remains available and slash command keeps its previous meaning.

## Phase 5–6

Implemented all four page templates and catch-all without changing factual source data. Natural document scrolling, selectable evidence, rule-separated career/archive, URL-preserving search/filter/page state, sticky detail metadata with mobile disclosure, explicit media controls, visible copy action and retained slash command.

Validation: TypeScript build, changed-target ESLint, production Vite build and static-route generation passed. Source render fixtures cover all 26 project routes and eight other states. All 44 factual/model/copy source files match the pre-redesign hash baseline. The 9,032-character resume has SHA256 2a0acee0e06999344cd5c7917368bc91036571eba27283117779ab44036e4971. All 63 pre-existing media files retain their original bytes; origins/hashes are recorded in .impeccable/asset-provenance.json. New self-hosted fonts carry source OFL files and browser-distributed public/licenses notices.

Browser-verified: evidence tab selection by mouse and keyboard, detail navigation, professional pagination and exact query/page return, search/empty/reset/personal filter, public copy and slash command with identical text hash, test account reveal/mask and persisted dark mode. Native CSS viewport frames checked at 390, 834, 844 landscape, 1280, 1440, 1600 and the actual 1707px browser width, without horizontal overflow. Reduced-motion CSS and GIF fixture checked; OS-level reduced-motion and the native print dialog were not exercised. Existing print shortcut preserved. Enlarged-text resilience is supported by flexible header and scrollable archive filters; browser zoom was not separately exercised.

Manual design detector ran once over changed UI targets with no findings ([]). Batched self-review and one correction batch completed; final captures are in .impeccable/review. Captures use native iframe dimensions except direct 1440/1707 browser shots; JPEG output is stored with .jpg extension. Full desktop capture follows image load and returns to the document top. Review and design documentation are the remaining finish handoffs. No comp or generated raster was requested: user explicitly chose code-first.

Known build notices: pre-existing package module-type warning and the single JavaScript chunk above 500kB remain; no new dependencies were added. This brief and review captures are development-only and are not browser-delivered.


## Finish review

Independent fresh reviewer returned **disposition: ship** after reviewing all 14 required, valid viewport/surface captures and sampling the implementation against the code-led contract. Material fixes: none. Persistence, fidelity, ceiling, material_fixes and keep sections were supplied. No QUALITY BAR card/comp image was available because the user selected code-first. Raw concept-roll stdout was not separately saved; FORM's recorded seed is supported by retained context and the user-selected direction governs. Reviewer source sampling omitted Footer, IssueCard, ProjectCard, Router, index.html and verify.mjs; this is not an exhaustive source audit.

Final current-source checks: TypeScript PASS; owned-target ESLint PASS; production build PASS; content/route fixtures PASS. Existing static generator PASS; all 29 generated route HTML shells are byte-identical to the latest built index, and font notices are present in dist/licenses. Documentation handoff writes DESIGN.md and .impeccable/design.json. Preview: http://localhost:5173/ . Deployment was outside this request.


## User correction — hidden resume action

2026-10-04: user requested the original hidden copy workflow. Removed the public header button/icon and exact-command hints from placeholder and unknown-command feedback. Only slash -> exact command -> Enter copies from the UI. This does not provide authentication or prevent discovery from a public client bundle. Earlier screenshots and public-button review describe the preceding version.
