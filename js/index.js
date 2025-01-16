const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

let dotsArray = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); 
}

function init() {
    dotsArray = [];
    const numDots = 50;

    for (let i = 0; i < numDots; i++) {
        const radius = Math.random() * 2 + 1; 
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const speedX = (Math.random() - 0.5) * 0.5; 
        const speedY = (Math.random() - 0.5) * 0.5; 
        const color = "rgba(0, 255, 0, 0.5)"; 

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

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

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

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dotsArray.forEach(dot => dot.update());
    requestAnimationFrame(animate);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

init();
animate();
