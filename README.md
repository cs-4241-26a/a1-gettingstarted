Samura Poncet 
https://a1-samuraponcet.onrender.com/2page.html

This project show an initial page with a welcome message taking the user to a new page called "about me" describing my name, my class, my previous class and experiences with HTML, CSS and JavaScript / Typescript. From my   "about me" the user can access my "hobbies page" where they can learn about my hobbies. 
First page "CS4241 Assignment 1": 
In this page I created .container in order to vertically and horizontally center the text. display: grid; activates the CSS grid layout. 
place-items: center;  sits the elements inside the container exactly in the middle. 
height: 100vh; set the height of the container to 100% viewpoint. 
Inside the body I set up a backgroud color to  #555934, a border with size 10px and with a border style double. 
I used <div> to create a section for my welcome message, where use the font "Bondoni MT", changed the font colot to  #F2E6D8 and set the font-size to 50px. 
I created flex box layout for my cat-area button: 
flex-direction: row; place my cat-area horizontally, 
align-items: center; items vertically, 
and gap-add: 30px;  the space between my items.
I used another <div> to create a section to give the user instructions on how to get to the next page, where use the font "Bondoni MT", changed the font colot to  #F2E6D8 and set the font-size to 40px. 
Lastly I created a cat-button, user can click to get to the next page. I changed the background, border, and outline to none so my image can bland with my initial backgroud color. I changed the cursor to a pointer and removed extra space inside the button by settig padding:0; 
Inside my button class, I use href to link to my second page and set the img that should be clicked. 

Second page "About Me": 
I set the format for the body by setting the backgroud-color: background-color: #F2E6D8 font-family: 'Bodoni MT'; color: #555934; border: 10px double #593E2E ;
The .about: adds 15px of space iside the element, between the contents and its edges. and text-align: left; makes the text align to the left. 
The .title: set the font-size to the title to 50px. 
The .info: sent the font size for my general info to 15px. 
I created an animation by using .fade:
opacity: 0; makes elements invisible at first 
animation: fadeIN 1s forwards; elements play animation called fadeIN in 1 second and keeps the elements final state of the animation when. it finishes
text-align: center; center the text horizontally.
Then I sent the time for each animation by using .delay-1:  animation-delay: 1s; using a different name and time for each delay animation. 
Then i used @keyframes fadeIN, to create the animation called fadeIn, and i defined the opacities from start to finishing. 
Inside the body I set up my general information including Name, Major, class, minor. I bolded items like name, major, minor, previous class. while leaving the information unbolded. I used the class 'about info' to make sure the text are align coreclty and the text size are correct. 
To add my information such ass previous class and experience, I use an  2 side unordered table in order to not make the page shorter and not have too much empty space on the right of the page.
I matched the timing of the items in the first page of the table with the timing of the items in the second pade. 
Lastly I recreated my cat button to take the user to my last page

Third page "Hobbies":
I set the format for the body by setting the backgroud-color: background-color:#BF9B7A font-family: 'Bodoni MT'; color: #593E2E; border: 10px double #F2E6D8 ;
The .about: adds 15px of space iside the element, between the contents and its edges. and text-align: left; makes the text align to the left. 
The .title: set the font-size to the title to 50px. 
The .info: sent the font size for my general info to 15px. 
I created an animation by using .fade:
I created an animation by using .fade:
opacity: 0; makes elements invisible at first 
animation: fadeIN 1s forwards; elements play animation called fadeIN in 1 second and keeps the elements final state of the animation when. it finishes
text-align: center; center the text horizontally.
Then I sent the time for each animation by using .delay-1:  animation-delay: 1s; using a different name and time for each delay animation. 
Then i used @keyframes fadeIN, to create the animation called fadeIn, and i defined the opacities from start to finishing. 
Then to add the images to my hobbies i created an unordered list table and had the images aside of each of the different hobies. 
