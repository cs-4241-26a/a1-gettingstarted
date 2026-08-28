const ball = document.getElementById('bouncer');

let position = 0;
let direction = 1;
let isRed = false;
const speed = 3;
const maxDist = 1000;

function animate() {
  position += speed * direction;

  if (position >= maxDist || position <= 0) {
    direction *= -1;
    isRed = !isRed;
    ball.style.backgroundColor = isRed ? 'red' : '#00AEFF';
  }

  ball.style.left = position + 'px';
  requestAnimationFrame(animate);
}

animate();