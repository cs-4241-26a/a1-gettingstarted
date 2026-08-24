Ryan Griffin
https://a1-ryangriffin.onrender.com

This project shows my name, class year, major, previous CS courses taken at WPI, and my experience level with HTML, CSS, and JavaScript/TypeScript. It is served by a plain Node.js HTTP server and deployed to Render.

## Technical Achievements

- **Styled page with CSS**: Added rules for the following selectors:
    - `*` applies `box-sizing: border-box` globally so padding and borders stay inside an element's width
    - `body` sets the Inter font family, light text color, and dark background from CSS variables declared in `:root`
    - `header`, `footer`, and `main` spacing rules that frame the page; `main` is styled as a rounded card with a lighter panel background and a 1px border
    - `li::marker` recolors the course list bullet markers to a palette accent color
    - `table`, `th`, `td` collapses table borders and adds padded, bordered cells to the experience table
    - `footer` italicizes the credit line and makes the link inherit its color instead of the browser's default blue
- **Extended `server.js`:** the server now serves `/style.css` and has a `Content-Type` parameter, sending `text/html` for pages and `text/css` for the stylesheet

## Design Achievements

- **Created a color palette using Adobe Color**: Built a five color palette (`#0a2b33`, `#234e59`, `#53818c`, `#97b7bf`, `#c5e9f2`) and used all five colors on the page. A screenshot of the palette's color wheel is saved as `palette.png`.
- **Used the Inter font from Google Fonts**: Imported [Inter](https://fonts.google.com/specimen/Inter) at the top of `style.css` and applied it on `body`.
