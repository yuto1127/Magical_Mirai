let particleList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(80);

  for (const particle of particleList) {
    fill(particle.color);
    circle(particle.x, particle.y, particle.size);
    particle.x -= particle.dx;
    particle.y -= particle.dy;
    particle.size -= particle.ds;
    particle.color.setAlpha(particle.color._array[3] - particle.da / 100);
    particle.lifetime -= 1;
  }

  particleList = particleList.filter((particle) => {
    return particle.lifetime > 0;
  });
}

function mouseMoved() {
  createParticle(mouseX, mouseY);
}

function createParticle(x0, y0) {
  const size = Math.random() * 50 + 10;
  const x = x0 + Math.random() * size - size / 2;
  const y = y0 + Math.random() * size - size / 2;
  const color = color(Math.random() * 290 + 90, 50, 50, 100);
  const lifetime = Math.random() * 180 + 60;
  const dx = (Math.random() - 0.5) * 100 / lifetime;
  const dy = (Math.random() - 0.5) * 100 / lifetime;
  const ds = size / lifetime;
  const da = 100 / lifetime;

  const particle = { x, y, size, dx, dy, ds, color, da, lifetime };
  particleList.push(particle);
}

window.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  createParticle(x, y);
  draw();
});

document.body.addEventListener('touchmove', function (e) {
  var x = e.touches[0].clientX;
  var y = e.touches[0].clientY;
  e.preventDefault();
  createParticle(x, y);
  draw();
});

setup();