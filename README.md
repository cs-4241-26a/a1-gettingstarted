# Project A1 - CS 4241

Name: Andry Nasief

This project shows my personal info page for WPI including a styled skills table 
and a floating rotating image that roams the screen

### Live Project On Render: https://a1-andrynasief.onrender.com/

## Technical Achievements

* Styled page with CSS: Added rules for the h1, h2, table, and a selectors to build a consistent purple and gold theme
* Built a semantic skills table: Used table, caption, thead, tbody, and th scope to show skill ratings in a clear, accessible way
* Animated a floating image with JS: Used requestAnimationFrame to smoothly move and rotate an image around the screen
* Added a scrolling footer ticker: Used a CSS keyframe animation to scroll a message across the bottom of the page
* Served files with a custom Node server: Added content-type headers so HTML, CSS, JS, and image files all load correctly

## Design Achievements

* Used the Asimovian font from Google Fonts: I used Asimovian as the font for all text on my site
* Picked a purple and gold color palette: Set as CSS custom properties in stylescss so colors stay consistent across the page
* Used stars to show skill level: Styled a stars column in the table with a gold glow so ratings are easy to read at a glance

## Top 5 CSS Styles Used

1. CSS custom properties (:root variables for color palette)
2. @keyframes animations (glow-pulse, ticker-scroll)
3. position: fixed (floating image and footer ticker)
4. Table styling (border-collapse, alternating row colors)
5. Google Font import and font-family
6. More...

## Top 5 HTML Semantics Used

1. table, caption, thead, tbody
2. th scope="row" and th scope="col"
3. footer
4. img (with alt text)
5. h1 / h2 headings
6. More...

## JS Animation Explained

* The image has a target x/y position that is picked randomly on a timer
* Each frame the image moves a small step closer to that target which makes the motion smooth instead of jumpy
* A rotation value increases every frame so the image also spins as it floats
* requestAnimationFrame repeats this update continuously for a smooth animation

## Notes

- Font of choice: Asimovian
- Color Palette Images provided in repository