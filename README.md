
Readme
---
Mohammed Musawwir
(https://a1-mohammedmusawwir.onrender.com)

## Technical Achievements

**CSS styling (5 rules)**
Page has CSS:
- `font-family` on `body`, set to the Google Font Comic Neue
- `color` on `h1`, set to one of the colors from my Adobe Color palette (`#274DEA`)
- `border` and `border-collapse` on the courses `table`, so it displays as a grid instead of unstyled rows
- `background-color` classes (`.some`, `.alot`, `.none`) on the experience list items, using palette colors to visually flag skill level
- `background-color` and `color` on `footer`, using another palette color (`#8C4F45`) with white text for contrast

**JavaScript animation**
The page body fades in on load: I set `opacity: 0` on `body` by default, then on the `window.onload` event I add a CSS `transition` and set `opacity` back to `1`, producing a simple one-second fade-in. This was a good introduction to combining inline JS style changes with CSS transitions to trigger animation.

**Semantic HTML tags**
Beyond the required structure, I used: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<table>`, `<img>`, and `<a>`. 

## Design Achievements

**Color palette**
I created a color palette using color.adobe.com (screenshot included in this repo as `color-palette.png`). The five colors are:
- `#8C4F45`
- `#BFF6DD`
- `#EEA19E`
- `#ACDB6E`
- `#274DEA`

All five are used directly in the CSS: `#274DEA` on the heading, `#8C4F45` on the footer, and `#EEA19E` / `#ACDB6E` / `#BFF6DD` on the experience-level list items.

**Google Font**
I used Comic Neue from Google Fonts, applied to the whole page via the `body` selector.

**LLM CITATION:**
I used LLM to format the readme and make sure I met the requirements. I did my own research for most of the issues I faced but if the implementation and solution I found wasn't working for some reason I would ask the AI why. I did my own research to meet the requirements.
