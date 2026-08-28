Jonah Weber https://a1-jonahweber.onrender.com

This project shows a website served with a custom Node.js HTTP server. I used HTML to organize the content and CSS to create a purple and pink visual theme.

I created a Node.js server that handles requests for the HTML page, CSS stylesheet, and downloaded font file. Each file is sent with the appropriate content type, such as `text/html`, `text/css`, or `font/ttf`. Initially, the font returned a 404 error because the server was not configured to serve files from the `fonts` folder.

I used `@font-face` to load the Alegreya Sans SC Light TrueType font from my project instead of relying on a standard browser font. I then applied it throughout the page using `font-family`.

I defined reusable colors inside `:root` and used them throughout the stylesheet. This made the website’s color scheme easier to maintain because I can change a color once instead of changing every CSS rule individually.

I created a custom color palette using adobe's palette creator

I placed the main content inside a centered container with padding and rounded corners. I also styled the headings with white text, dark-purple backgrounds, spacing, and rounded rectangles. 

I styled the table with rounded corners, custom row colors, borders, and a hover effect. When the user moves the cursor over a row, its background changes color. This required removing conflicting CSS rules so that the individual row colors would display correctly.

AI Citations:
I Used ChatGPT to assist with finding css animations to add to my website
