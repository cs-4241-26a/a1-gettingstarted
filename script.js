const colors = ["#47554E", "#195FA9", "#DA0A0B", "#B7B8FE", "#35570E"];
let colorIndex = 0;

const nameHeading = document.getElementById("name-heading");

setInterval(function () {
  colorIndex = (colorIndex + 1) % colors.length;
  nameHeading.style.color = colors[colorIndex];
}, 800);
