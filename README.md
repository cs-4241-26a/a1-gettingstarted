Richard Newman - Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Render
===

Richard Newman
https://a1-richardnewman-1.onrender.com/

This project shows some information about myself, including the CS courses I have taken, my experience with HTML/CSS/JavaScript, and an extra photo of my dog. Along with the updated index.html, I modified the server.js to properly serve any file referenced and to include the MIME type using the mime node module, included a styles.css file, the aforementioned image of my dog, and an image of the color palette used.

## Technical Achievements
- **Styled page with CSS**: Added rules for the body, h1, h2, p, ul, img, and footer element selectors; the "MyDog" class selector and some nested classes within it; and created a name for one of the base palettes of the Nabla color font. The css affected font sizes and styles, colors, footer location, sizing, and margins. I referenced chapter 1 from the reading to add a border to the image and to get the size right relative to screen size.
- **Added semantic HTML tags**: Included semantic HTML tags: image, footer, and an additional h2 header tag to make the webpage less bare.

## Design Achievements
- **Used color palette**: Color picked an initial color used for the title in one of the Nabla font's default color palettes, and created a color palette for the rest of the site using [color.adobe.com](https://color.adobe.com/), included in the repo as "color_palette.png".
- **Used Google Fonts**: Imported the Nabla font for the title and the Unbounded font for all other text used in the webpage from Google Fonts; figuring out how to change the color palette of the Nabla font came with some difficulties in figuring out how to apply anything other than the default.

## LLM Use
During this project, I consulted Claude after having difficulties in my attempts to change the colors of the Google font Nabla. I figured out that I needed to add font-palette to the CSS for the text, but needed help figuring out that I needed to specifically define the palette's name by using @font-palette-values and specify the base-palette number included within the font (or define my own override-colors values), then use that newly named palette in the CSS. After learning that, I was able to understand the information in the [site for the Nabla font](https://nabla.typearture.com/whatisCOLRV1.html)'s image about how to make your own palette, as this step was what it refers to.
