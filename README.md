# Courtney Mamuscia — portfolio

Personal site for Courtney Mamuscia, growth architect and fractional CMO. One static page. No build step. It is meant to run on GitHub Pages from the `main` branch, with this repository root as the site root.

The hero and About section follow Courtney's About outline (October 21, 2026). The headline, title line, five capabilities, industries, and engagement models follow her positioning notes from the same day. Roles, dates, and metrics come from her two resumes. The site says **20+ years** of experience. Do not shorten that to "10+" or drop the plus.

Do not add a street address, a phone number, or reference contacts. Public contact is email and LinkedIn only.

- Email: [courtneyjaret@mac.com](mailto:courtneyjaret@mac.com)
- LinkedIn: [linkedin.com/in/courtneymamuscia](https://www.linkedin.com/in/courtneymamuscia/)
- Location line: Denver, CO / Remote

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/`.

## Publish on GitHub Pages

GitHub Pages is **not enabled** on `cmamuscia27/courtney-mamuscia-portfolio` yet (`has_pages` is false; the Pages API returns 404). After this work is on `main`:

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set the branch to **main** and the folder to **/ (root)**. Save.
4. Wait for the Pages deployment to finish. The site URL will be:

   `https://cmamuscia27.github.io/courtney-mamuscia-portfolio/`

There is no build command and no output directory to configure. `.nojekyll` is in the root so GitHub Pages serves every file as-is.

Canonical and Open Graph URLs in `index.html` already point at that Pages address. If a custom domain is added later, update:

- `<link rel="canonical">`
- `og:url`, `og:image`, `twitter:image`
- the `url` and `image` fields in the JSON-LD block

## Palette and type

Creative Disruptor, on a warm paper ground. Most surfaces are cream, white, and black. Red is the accent (marks, the ribbon dots, buttons, the portrait blob). Yellow is reserved for dark surfaces, the crossing-grid square, circular arrow buttons, and a few highlights. Yellow is not used as small text on cream or white.

| Token | Hex |
| --- | --- |
| Black | `#101010` |
| Vivid Red | `#E63946` |
| Yellow | `#F4C542` |
| Light Gray | `#EAEAEA` |
| White | `#FFFFFF` |
| Cream (page ground) | `#F6F1E7` |

Type is self-hosted (SIL Open Font License): Plus Jakarta Sans for headings and the cover, Fraunces italic for the short accent lines, Outfit for body text. License texts are in `assets/fonts/`. Syne files are still in that folder from the first version and are not used on the page.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `styles.css` | Layout and palette |
| `script.js` | Footer year, sticky header, mobile menu, scroll reveal |
| `404.html` | GitHub Pages missing-page screen |
| `favicon.svg` | Tab icon |
| `assets/courtney-mamuscia.webp` | Hero portrait, WebP, 800px wide |
| `assets/courtney-mamuscia.jpg` | JPEG fallback of the same portrait |
| `assets/og.jpg` | Social share image, 1200×630 |
| `assets/apple-touch-icon.png` | Home-screen icon |

## Placeholders

Search `index.html` for `PLACEHOLDER:`. Every slot has `class="placeholder"` and a `data-placeholder` id. Shared classes:

| Class | Role |
| --- | --- |
| `.placeholder` | Any slot that is not final |
| `.placeholder-link` | A link whose `href` and label should be replaced |
| `.placeholder-label` | The large "coming soon" words, inside `.ph-copy` |
| `.placeholder-note` | The smaller caption, inside `.ph-copy` |
| `.frame` | Rounded image card. An `img` inside hides `.ph-copy` |
| `.phone` / `.phone-screen` | Phone mockup. Put the `img` inside `.phone-screen` |
| `.swatch` | One color chip. An `img`, or a background color you set, replaces the number |
| `.logo-slot` | Logo frame. An `img` inside hides the name |
| `.testimonial-slot` | Quote frame |
| `.podcast-link` | Hot Flash Health episode link |

The easiest swap is an image. Drop it inside the figure (or inside `.phone-screen`):

```html
<figure class="frame" id="work-sample-2">
  <img src="assets/work/brand-messaging.jpg" alt="Describe the image">
</figure>
```

`:has(img)` hides the placeholder words and the dashed outline. Then remove the `placeholder` class and the `.ph-copy` block if you want the markup clean. Keep the `id` so older links still land.

Placeholder links point at their own id so they do not 404. Replace the `href` and the visible text together. Do not publish a client logo without permission. Do not fill the RGB Spectrum swatches with invented brand colors. Those five chips are empty on purpose.

### Case studies and their frames

| Id | Where | What to replace |
| --- | --- | --- |
| `case-rgb` | Branding, RGB Spectrum | The "Case study coming soon" link |
| `case-media-rgb` | Branding, first image card | Brand visual |
| `case-verint` | Campaigns, Verint | Link, and the image in `case-media-verint` |
| `case-media-verint` | Campaigns | Verint creative |
| `case-compass` | Campaigns, Compass | Link, and the image in `case-media-compass` |
| `case-media-compass` | Campaigns | Compass creative |
| `case-assemble` | Branding, Assemble Systems | Link, and the image in `case-media-assemble` |
| `case-media-assemble` | Branding | Assemble visual |

### Work samples, photos, mockups, metrics

| Id | What the frame is asking for |
| --- | --- |
| `work-sample-1` | Campaign creative |
| `work-sample-2` | Brand and messaging |
| `work-sample-3` | Event and field |
| `work-sample-4` | Thought leadership |
| `swatch-rgb` | The row. Children `swatch-rgb-1` through `swatch-rgb-5` are the chips |
| `campaign-card-1`, `campaign-card-2` | Social or ad frames in Campaigns |
| `phone-abm` | Phone mockup for an ABM or nurture screen |
| `event-photo-1`, `event-photo-2`, `event-photo-3` | Event photography |
| `content-doc-1` | White paper cover or spread |
| `content-doc-2` | Webinar title or article page |
| `phone-social` | Phone mockup for a social profile or story |
| `social-1` through `social-6` | Square social posts |
| `metric-graphic-1`, `metric-graphic-2` | Dashboard, chart, or scorecard |

### Podcast

| Id | What to replace |
| --- | --- |
| `podcast-hot-flash` | The `href` and the words "Podcast episode coming soon" on `.podcast-link`. The same link is repeated in Health & Wellness, the capabilities list, and the ventures list (`href="#podcast-hot-flash"`). Point those at the episode too. |

### Logos

| Id | Name shown until a file is added |
| --- | --- |
| `logo-rgb` | RGB Spectrum (sits in Branding, beside the project) |
| `logo-verint` | Verint |
| `logo-graphisoft` | Graphisoft |
| `logo-assemble` | Assemble Systems |
| `logo-compass` | Compass |
| `logo-hotflash` | Hot Flash Health |
| `logo-tenderbelly` | Tender Belly |
| `logo-juju` | JuJu Be Gifting |

```html
<div class="logo-slot" id="logo-rgb">
  <img src="assets/logos/rgb-spectrum.svg" alt="RGB Spectrum">
</div>
```

Use logos only when you have permission to show them.

### Testimonials

| Id | What to replace |
| --- | --- |
| `testimonial-1` | Quote, name, title, company |
| `testimonial-2` | Quote, name, title, company |

Do not publish a quotation that was not given for the site. Remove the dashed `placeholder` treatment when the quote is real.

## What not to invent

Clients, metrics, quotations, and testimonials that are not already in the resumes or in Courtney's notes. The resumes are the source for numbers. The notes are the source for how the offer is described.
