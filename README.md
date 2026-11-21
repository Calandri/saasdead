# saasdead.com

**SaaS is dead. Long live self-hosting.**

A community directory of free, open-source tools that replace expensive SaaS subscriptions —
explained for normal humans, not just developers. Every tool ships with a ready-made instruction
text you paste into [Claude](https://claude.ai) (or Claude Code): it does the entire setup on your
own machine. No coding skills needed, no subscriptions, no lock-in.

Built with [Astro](https://astro.build) as a fully static site — plain CSS, no JS frameworks.
Display font: Space Grotesk (Google Fonts via `<link>`, no npm font deps).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build
```

## Add a tool

Drop a markdown file in `src/content/tools/` — that's it. The filename becomes the URL slug
(`/tools/<filename>`). Frontmatter schema (enforced at build time):

```markdown
---
name: My Tool
tagline: One-liner that sells it, in plain language
category: CRM
replaces:
  - name: Salesforce
    price: from ~$25/user/mo
  - name: HubSpot
    price: from ~$15/seat/mo
pricing: $0
website: https://example.com
github: https://github.com/org/repo
---

## What is it?
Plain-language explanation a non-technical reader understands.

## What does it replace?
The commercial products it can stand in for, with rough prices.

## What does it cost you?
$0, plus where it runs.

## Get it running
Non-techie framing, then the prompt block:

```text
Concrete, step-by-step self-hosting instructions for Claude (docker compose preferred).
```
```

Guidelines:

- Only list real, maintained open-source projects with a public repo.
- Write for non-technical readers first — no jargon without an explanation.
- Write like a human: short sentences, concrete details, no marketing filler, no AI-slop
  ("delve", "game-changer", "unlock", "empower"...). Dry wit is welcome.
- Keep descriptions accurate — no invented features.
- Be fair to the commercial products we compare against: name them only for comparison, hedge
  prices with "from ~" and point readers to the vendor's site. Never imply a company is bad or
  "dead" — we cross out billing practices, not businesses. No vendor logos.
- The Claude prompt must be concrete and runnable: exact commands, config steps, and how to
  verify it works.

## Deploy (Vercel)

Standard Astro static project — no adapter, no server endpoints.

1. Import the repo in Vercel (framework preset **Astro** is auto-detected).
2. Build command `npm run build`, output directory `dist` (defaults).
3. Point the `saasdead.com` domain at the project.

Any static host (Netlify, Cloudflare Pages, GitHub Pages) works the same way.

## Contribute

Know a free tool that covers the same ground as a paid one? Open a PR with your markdown file.
