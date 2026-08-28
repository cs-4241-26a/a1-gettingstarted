Hung Dao
===

[https://a1-hungdao.onrender.com]

This project is my personal introduction page for CS 4241, showing my background at WPI, the CS courses I've taken, and a little about my interests outside of class, including a small interactive Corviknight picture animation.

## Technical Achievements
- **Styled page with CSS**: Added rules for `body`, `p`, `h1`, `h2`, `li`, `img`, `header`, `footer`, `figure`/`figcaption`, `table`/`th`/`td`, and `a`, controlling color, spacing, typography, borders, and layout across the page.
- **JS animation**: Clicking the Corviknight image toggles a `.rotate` class via `classList.toggle()` in `script.js`, triggering a smooth 360° CSS transition on the image.
- **Extra semantic HTML tags**: Used `<header>`, `<footer>`, `<section>`, `<figure>`/`<figcaption>`, `<table>`, and `<a>` to structure the page semantically: 
    - `<header>` groups "Information about Hung Dao" and separates from the page
    - `<footer>` groups "2026 Hung Dao" and separates from the page
    - `<section>` groups "About me" and "Experience"
    - `<figure>`/`<figcaption>` groups the Corviknight image with its caption
    - `<table>` presents my experience.
    - `<a>` links my GitHub page

## Design Achievements
- **Color palette from Adobe Color**: Built a custom palette on color.adobe.com (screenshot included as `AdobeColor-My Color Theme.jpeg`) and used it throughout the page. Background, headings, borders, and accent colors on the image and table all pull from this palette.
- **Google Font**: Used Roboto from Google Fonts as the primary typeface for the page.

## Challenges
Deploying to Render initially broke the CSS file even though everything worked locally. The custom `server.js` wasn't setting a `Content-Type` header on responses, so Render served the CSS file without the correct MIME type and the browser refused to apply/execute it. Fixed by adding MIME-type detection for CSS in `server.js`.
