const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Declare dotsArray before using it
let dotsArray = [];

// Set canvas to cover the entire viewport
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // Reinitialize dots to fit the new size
}

// Initialize dots
function init() {
    dotsArray = [];
    const numDots = 50;

    for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 2 + 1; // Small radius for subtle dots
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const speedX = (Math.random() - 0.5) * 0.5; // Subtle horizontal movement
        const speedY = (Math.random() - 0.5) * 0.5; // Subtle vertical movement
        const color = "rgba(0, 255, 0, 0.5)"; // Subtle green dots

        dotsArray.push(new Dot(x, y, radius, color, speedX, speedY));
    }
}

class Dot {
    constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    // Draw individual dots
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Update dot position and bounce within bounds
    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;

        this.draw();
    }
}

// Animation loop for dots
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dotsArray.forEach(dot => dot.update());
    requestAnimationFrame(animate);
}

// Resize canvas initially and on window resize
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Initialize and animate
init();
animate();
