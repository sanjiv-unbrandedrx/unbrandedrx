# SEO Audit — UnbrandedRx

**Date:** 2026-02-13

---

## TODO

- [ ] Add `metadataBase` + default metadata to root layout (title template, description, OG defaults)
- [ ] Add `metadata` exports to every page (titles, descriptions, OG tags)
- [ ] Create `sitemap.ts`
- [ ] Create `robots.ts`
- [ ] Fix H1 tags on product and category pages
- [ ] Add JSON-LD structured data (Product schema, Organization schema)
- [ ] Fix 3 `alt="test"` images in how-it-works-section.tsx
- [ ] Add `priority` prop to hero images
- [ ] Add favicon set + web manifest

---

## Audit Findings

### CRITICAL

| Issue | Details |
|---|---|
| No page titles or descriptions | Only 1/24 pages has metadata (enclomiphene). Everything else falls back to `title: "unbrandedrx"`, `description: "unbrandedrx"`. |
| No sitemap.xml | Google can't discover pages efficiently. |
| No robots.txt | No crawling instructions for search engines. |
| No Open Graph / Twitter cards | Shared links show nothing on social media. |
| No metadataBase | Required for absolute URLs in OG tags and canonical links. |
| Missing H1 on product pages | Product names use `<p>` tags. Category pages use `<h2>` as primary heading. |
| No canonical URLs | Risk of duplicate content issues. |

### HIGH

| Issue | Details |
|---|---|
| No structured data (JSON-LD) | No Product, Organization, or BreadcrumbList schema. Missing rich snippets. |
| No favicon set | Only `favicon.ico` in app dir, no apple-touch-icon, no manifest. |
| `alt="test"` on 3 images | `src/components/product/how-it-works-section.tsx` — 3 images have placeholder alt text. |
| Missing `priority` on hero images | Only 1 hero image has the `priority` prop. Hurts LCP / Core Web Vitals. |
| Home hero uses CSS background | `bg-[url(/home/hero.webp)]` bypasses Next.js Image optimization. |

### MEDIUM

| Issue | Details |
|---|---|
| No skip navigation link | WCAG accessibility gap. |
| No `sizes` prop on fill images | Minor performance hit on responsive layouts. |
| Zendesk script loading | Could use `lazyOnload` instead of default. |

### GOOD (no action needed)

- URL structure — clean, descriptive, kebab-case
- Semantic HTML — proper `main`, `section`, `nav`, `header`, `footer`
- Image alt tags — all present (except 3 "test" ones)
- Internal linking — proper Next.js `Link` usage
- Font loading — `next/font` optimized
- Static generation — all pages pre-rendered
- Third-party scripts — GTM + Zendesk non-blocking
- `lang="en"` — set on root layout

---

## Updates

### 2026-02-13 — Initial audit completed
- Audited all 24 pages across meta tags, sitemap/robots, headings, images, links, semantic HTML, performance, and accessibility
- Documented all findings above
- Ready to begin fixes
