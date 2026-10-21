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

Creative Disruptor, used with restraint. Most of the page is black, white, and light gray. Red is the accent. Yellow is limited to the Revenue underline, the corner mark on the portrait, the "20+ years" highlight, the pull-quote mark, text selection, and a few hover states.

| Token | Hex |
| --- | --- |
| Black | `#101010` |
| Vivid Red | `#E63946` |
| Yellow | `#F4C542` |
| Light Gray | `#EAEAEA` |
| White | `#FFFFFF` |

Type is self-hosted (SIL Open Font License): Syne for display, Fraunces italic for the tagline and the "Who is Courtney" note, Outfit for body text. License texts are in `assets/fonts/`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `styles.css` | Layout and palette |
| `script.js` | Footer year and the mobile menu |
| `404.html` | GitHub Pages missing-page screen |
| `favicon.svg` | Tab icon |
| `assets/courtney-mamuscia.webp` | Hero portrait, WebP, 800px wide |
| `assets/courtney-mamuscia.jpg` | JPEG fallback of the same portrait |
| `assets/og.jpg` | Social share image, 1200×630 |
| `assets/apple-touch-icon.png` | Home-screen icon |

## Placeholders

Search `index.html` for `PLACEHOLDER:`. Every slot also has `class="placeholder"` and a `data-placeholder` id. Shared classes:

| Class | Role |
| --- | --- |
| `.placeholder` | Any slot that is not final |
| `.placeholder-link` | A link whose `href` and label should be replaced |
| `.placeholder-label` | The large "coming soon" words |
| `.placeholder-note` | The smaller caption |
| `.case-card` | Case study card |
| `.case-media` / `.work-sample-slot` | Image frame. An `img` inside hides the placeholder text |
| `.logo-slot` | Logo frame. An `img` inside hides the name |
| `.testimonial-slot` | Quote frame |
| `.podcast-link` | Hot Flash Health episode link |

Placeholder links currently point at their own section so they do not 404. Replace the `href` and the visible text together.

### Case studies

| Id | Where | What to replace |
| --- | --- | --- |
| `case-rgb` | RGB Spectrum card | `href` on the link, the summary paragraph, and the image in `#case-media-rgb` |
| `case-verint` | Verint card | Same pattern, image in `#case-media-verint` |
| `case-compass` | Compass card | Same pattern, image in `#case-media-compass` |
| `case-assemble` | Assemble Systems card | Same pattern, image in `#case-media-assemble` |

Example, once a write-up exists:

```html
<article class="case-card" id="case-rgb">
  <div class="case-media" id="case-media-rgb">
    <img src="assets/work/rgb-spectrum.jpg" alt="Describe the image">
  </div>
  <div class="case-body">
    <h3>RGB Spectrum</h3>
    <p class="meta">Head of Marketing · 2022 to present</p>
    <p>Real summary of the challenge, approach, and results.</p>
    <a href="https://example.com/rgb-spectrum-story">Read the case study</a>
  </div>
</article>
```

Remove `placeholder`, `placeholder-link`, and the "Coming soon" kicker when the card is real. Keep claims inside what the resumes already support unless Courtney adds a new, sourced result.

### Work samples

| Id | Caption |
| --- | --- |
| `work-sample-1` | Campaign creative |
| `work-sample-2` | Brand and messaging |
| `work-sample-3` | Event and field |
| `work-sample-4` | Thought leadership |

Easiest swap: put an `img` inside the `figure`. The placeholder words hide automatically. Then delete the kicker, label, and caption if you want the frame to be image-only, and remove the `placeholder` class.

### Podcast

| Id | What to replace |
| --- | --- |
| `podcast-hot-flash` | The `href` and the words "Podcast episode coming soon" on `.podcast-link`. The same link is repeated in the capabilities list and the ventures list (`href="#podcast-hot-flash"`). Point those at the episode too. |

### Logos

| Id | Name shown until a file is added |
| --- | --- |
| `logo-rgb` | RGB Spectrum |
| `logo-verint` | Verint |
| `logo-graphisoft` | Graphisoft |
| `logo-assemble` | Assemble Systems |
| `logo-compass` | Compass |
| `logo-hotflash` | Hot Flash Health |
| `logo-tenderbelly` | Tender Belly |
| `logo-juju` | JuJu Be Gifting |

```html
<li class="logo-slot" id="logo-rgb">
  <img src="assets/logos/rgb-spectrum.svg" alt="RGB Spectrum">
</li>
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
