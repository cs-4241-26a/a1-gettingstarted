// Spin Animation
const spin = [
    { transform: 'rotate(0)' },
    { transform: 'rotate(360deg)' },
];

const spinTiming = {
    duration: 750,
    iterations: 1,
};

const cards = document.querySelectorAll('.spinning-card');

for (const c of cards) {
    c.addEventListener('click', () => {
        c.animate(spin, spinTiming);
    });
}

// Color-Picker
const body = document.querySelector('body');
const colorPicker = document.querySelector('.color-picker');

colorPicker.addEventListener('input', (event) => {
    body.style.backgroundColor = event.target.value;
});

