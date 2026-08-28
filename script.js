const profilePic = document.getElementById("profile-pic");

profilePic.style.cursor = "pointer";
profilePic.title = "Click me!";

let isAnimating = false;

profilePic.addEventListener("click", () => {

  if (isAnimating) return;
  isAnimating = true;

  let angle = 0;
  let scale = 1;
  let growing = true;

  const animation = setInterval(() => {

    angle += 4;

    profilePic.style.transform = `rotate(${angle}deg) scale(${scale})`;

    if (angle >= 360) {

      clearInterval(animation);
      profilePic.style.transform = "rotate(0deg) scale(1)";
      isAnimating = false;
    }
  }, 10);
});