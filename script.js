// Used Claude Code For:
// 1. Scheduling a next target location for the roaming orb on screen
// 2. How to use "element.style.tarnsform" to animate elements

const dot = document.querySelector('.glow-dot');

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let targetX = x;
let targetY = y;

const speed = 0.005;

let rotation = 0;
const rotationSpeed = 0.6; // degrees per frame

function pickNewTarget() {
    const margin = 40; // away from edges
    targetX = margin + Math.random() * (window.innerWidth - margin * 2);
    targetY = margin + Math.random() * (window.innerHeight - margin * 2);
}

function scheduleNextTarget() {
    const delay = 3000 + Math.random() * 4000;
    setTimeout(function () {
        pickNewTarget();
        scheduleNextTarget();
    }, delay);
}

function animate() {
    x += (targetX - x) * speed;
    y += (targetY - y) * speed;

    rotation = (rotation + rotationSpeed) % 360;

    dot.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
}

pickNewTarget();
scheduleNextTarget();
animate();

window.addEventListener('resize', function () {
    pickNewTarget();
});