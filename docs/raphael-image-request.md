# Image Assets Request for Raphael (v3 — Revisions)

Hey Raphael,

Thanks for the first round — quality and styling look great. A few revisions needed before we can finalize. See the notes below, then the updated spec.

## Revision Notes

### 1. Tighter crop / zoom in on products
The bottles and vials currently sit at ~50% of the frame. We need them filling **80-85% of the canvas** — matching the existing heroes on the live site (e.g. https://www.unbrandedrx.co/find/treatment/enclomiphene). The originals are 600x800 with the product filling the frame. Your new ones are 2240x2360 but the product only fills ~50% — so despite being way more pixels, the product actually has less on-screen detail.

This applies to all hero images, science images, and product cards.

### 2. Export at the exact dimensions listed below
Every file came in at exactly **2x the spec** (e.g. heroes are 2240x2360 instead of 1120x1180, product cards are 1120x800 instead of 560x400). The dimensions below already account for @2x retina — no need to double them again.

### 3. Updated file naming convention
We changed from `hero-{product}.png` / `science-{product}.png` to **`{product}-hero.png`** / **`{product}-science.png`**. Updated names are in the tables below.

All files should include a **date and version suffix**:

`{product}-hero-v1-YYYY-MM-DD.png`

- Start at `v1` for the first delivery of the day
- If you send a second revision the same day, bump to `v2`, etc.
- Example: `enclomiphene-hero-v1-2026-02-14.png` (first version on Feb 14)
- Example: `enclomiphene-hero-v2-2026-02-14.png` (second revision same day)

This way we can always find the most recent by sorting by date + version.

### 4. Missing / incorrect assets
- The 3 home page "How It Works" step images (640x240 each) were **not included**
- The 3 shared product "How It Works" step images all came at 1120x800 — they each need **unique aspect ratios** per the spec below

## Live Staging Pages (images are live for reference)

1. **Home Page** — https://www.unbrandedrx.co/staging
2. **Injectable Sermorelin** — https://www.unbrandedrx.co/staging/treatment/injectable-sermorelin
3. **Oral Sermorelin** — https://www.unbrandedrx.co/staging/treatment/oral-sermorelin
4. **NAD+ Injection** — https://www.unbrandedrx.co/staging/treatment/nad-plus-injection

---

## Folder 1: Home Page

| File Name | Dimensions | Format | Notes | Status |
|-----------|-----------|--------|-------|--------|
| `hero-background.png` | 1600x1200 | PNG | Main hero background image (renders at 800x600, @2x for retina) | Redo — 2x oversize |
| `product-card-injectable-sermorelin.png` | 560x400 | PNG | Featured product card (@2x of 280x200) | Redo — 2x oversize |
| `product-card-oral-sermorelin.png` | 560x400 | PNG | Featured product card (@2x of 280x200) | Redo — 2x oversize |
| `product-card-nad-plus-injection.png` | 560x400 | PNG | Featured product card (@2x of 280x200) | Redo — 2x oversize |
| `product-card-enclomiphene.png` | 560x400 | PNG | Featured product card (@2x of 280x200) | Redo — 2x oversize |
| `product-card-ed-rapid-dissolve.png` | 560x400 | PNG | Featured product card (@2x of 280x200) | Redo — 2x oversize |
| `product-card-topical-dutasteride.png` | 560x400 | PNG | Featured product card (@2x of 280x200) | Redo — 2x oversize |
| `how-it-works-step-1.png` | 640x240 | PNG | "Choose Your Treatment" step (@2x of 320x120) | **MISSING** |
| `how-it-works-step-2.png` | 640x240 | PNG | "Online Doctor Visit" step (@2x of 320x120) | **MISSING** |
| `how-it-works-step-3.png` | 640x240 | PNG | "Delivered to Your Door" step (@2x of 320x120) | **MISSING** |

**10 files total**

---

## Folder 2: Injectable Sermorelin

| File Name | Dimensions | Format | Notes | Status |
|-----------|-----------|--------|-------|--------|
| `injectable-sermorelin-hero.png` | 1120x1180 | PNG | Main product hero image (@2x of 560x590) | Redo — tighter crop + correct size |
| `injectable-sermorelin-science.png` | 1200x1044 | PNG | Deep dive / science section image (@2x of 600x522) | Redo — tighter crop + correct size |

**2 files**

---

## Folder 3: Oral Sermorelin

| File Name | Dimensions | Format | Notes | Status |
|-----------|-----------|--------|-------|--------|
| `oral-sermorelin-hero.png` | 1120x1180 | PNG | Main product hero image (@2x of 560x590) | Redo — tighter crop + correct size |
| `oral-sermorelin-science.png` | 1200x1044 | PNG | Deep dive / science section image (@2x of 600x522) | Redo — tighter crop + correct size |

**2 files**

---

## Folder 4: NAD+ Injection

| File Name | Dimensions | Format | Notes | Status |
|-----------|-----------|--------|-------|--------|
| `nad-plus-injection-hero.png` | 1120x1180 | PNG | Main product hero image (@2x of 560x590) | Redo — tighter crop + correct size |
| `nad-plus-injection-science.png` | 1200x1044 | PNG | Deep dive / science section image (@2x of 600x522) | Redo — tighter crop + correct size |

**2 files**

---

## Shared Assets (drop these in any folder, or a separate "Shared" folder)

These are used on **all 3 product pages**:

| File Name | Dimensions | Format | Notes | Status |
|-----------|-----------|--------|-------|--------|
| `how-it-works-step-1.png` | 370x404 | PNG | Step 1 image (@2x of 185x202) | Redo — wrong aspect ratio (came as 1120x800) |
| `how-it-works-step-2.png` | 404x506 | PNG | Step 2 image (@2x of 202x253) | Redo — wrong aspect ratio (came as 1120x800) |
| `how-it-works-step-3.png` | 380x240 | PNG | Step 3 image (@2x of 190x120) | Redo — wrong aspect ratio (came as 1120x800) |
| `lab-testing.png` | 1200x1044 | PNG | Lab testing section image (@2x of 600x522) | Redo — tighter crop + correct size |

**4 shared files**

---

**Grand total: 20 unique files**

All dimensions above are @2x for retina — export at **exactly** these sizes. PNGs with transparent backgrounds where applicable. Product should fill **80-85% of the frame** (tight crop, minimal whitespace).

Thanks!
